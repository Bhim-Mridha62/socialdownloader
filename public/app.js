let currentType = "video";

function setType(type) {
    currentType = type;
    const tabs = ["video", "mp3", "social"];
    tabs.forEach(t => {
        const btn = document.getElementById(`tab-${t}`);
        if (!btn) return;
        if (t === type) {
            btn.classList.add('tab-active');
        } else {
            btn.classList.remove('tab-active');
        }
    });
}

async function downloadContent() {
    const urlInput = document.getElementById("videoURL");
    const url = urlInput.value.trim();

    if (!url) {
        alert("Please paste a valid URL");
        return;
    }

    const resultDiv = document.getElementById("result");
    resultDiv.classList.remove("hidden");
    resultDiv.innerHTML = `
        <div class="glass p-8 rounded-3xl flex items-center justify-center gap-4">
            <div class="w-6 h-6 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
            <span class="text-slate-400 font-medium">Analyzing media links...</span>
        </div>
    `;

    try {
        const response = await fetch("/api/download", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url, type: currentType })
        });

        const data = await response.json();

        if (data.success) {
            renderResult(data);
        } else {
            resultDiv.innerHTML = `
                <div class="glass p-8 rounded-3xl border-red-500/20 text-center">
                    <p class="text-red-400 font-semibold mb-2">Analysis Failed</p>
                    <p class="text-slate-400 text-sm">${data.error || "Unknown error occurred"}</p>
                </div>
            `;
        }
    } catch (err) {
        console.error(err);
        resultDiv.innerHTML = `<div class="glass p-8 rounded-3xl text-red-400 text-center">Network error. Please check your connection.</div>`;
    }
}

function renderResult(data) {
    const resultDiv = document.getElementById("result");
    
    // Split sources into Video and Audio if possible
    const videoSources = data.sources.filter(s => !s.quality.toLowerCase().includes('mp3') && !s.quality.toLowerCase().includes('audio'));
    const audioSources = data.sources.filter(s => s.quality.toLowerCase().includes('mp3') || s.quality.toLowerCase().includes('audio'));

    let html = `
        <div class="glass rounded-3xl overflow-hidden animate-fade-in">
            <div class="p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start">
                <!-- Preview -->
                <div class="w-full md:w-48 shrink-0">
                    <div class="relative aspect-video md:aspect-square bg-white/5 rounded-2xl overflow-hidden shadow-2xl">
                        ${data.thumbnail ? `<img src="${data.thumbnail}" class="w-full h-full object-cover" alt="Thumbnail">` : `
                            <div class="w-full h-full flex items-center justify-center text-slate-600">
                                <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                            </div>
                        `}
                        ${data.duration ? `<div class="absolute bottom-2 right-2 bg-black/80 text-xs font-bold px-2 py-1 rounded-md">${data.duration}</div>` : ''}
                    </div>
                </div>

                <!-- Info and Table -->
                <div class="grow w-full">
                    <h3 class="text-xl font-bold mb-6 text-white leading-tight">${data.title}</h3>
                    
                    <!-- Tabs inside results -->
                    <div class="flex gap-4 border-b border-white/5 mb-6">
                        <button onclick="toggleResultTab('mp4')" id="res-tab-mp4" class="pb-3 text-sm font-bold border-b-2 border-red-500 text-white">MP4 Video</button>
                        ${audioSources.length > 0 ? `<button onclick="toggleResultTab('mp3')" id="res-tab-mp3" class="pb-3 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-300 transition-colors">MP3 Audio</button>` : ''}
                    </div>

                    <div id="quality-container">
                        ${renderTable(videoSources, 'mp4')}
                    </div>
                </div>
            </div>
        </div>
    `;

    resultDiv.innerHTML = html;
    // Store data for tab switching
    window.lastResultData = data;
}

function renderTable(sources, type) {
    if (sources.length === 0) return '<p class="text-slate-500 text-sm italic">No options available for this format.</p>';

    return `
        <div class="overflow-x-auto">
            <table class="w-full text-left quality-table">
                <thead>
                    <tr>
                        <th class="text-[11px] uppercase tracking-wider">Quality</th>
                        <th class="text-[11px] uppercase tracking-wider">Type</th>
                        <th class="text-[11px] uppercase tracking-wider text-right">Download</th>
                    </tr>
                </thead>
                <tbody>
                    ${sources.map(s => `
                        <tr>
                            <td class="font-bold text-sm text-slate-200">${s.quality}</td>
                            <td class="text-xs text-slate-500">${type.toUpperCase()}</td>
                            <td class="text-right">
                                <a href="/api/proxy?url=${encodeURIComponent(s.url)}&filename=${encodeURIComponent(window.lastResultData?.title || 'video')}.${type}" 
                                   target="_blank" 
                                   class="inline-block bg-white/5 hover:bg-red-500 text-white px-4 py-1.5 rounded-lg text-xs font-bold transition-all border border-white/5 hover:border-red-500">
                                    Download
                                </a>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

function toggleResultTab(type) {
    const data = window.lastResultData;
    if (!data) return;

    const mp4Btn = document.getElementById('res-tab-mp4');
    const mp3Btn = document.getElementById('res-tab-mp3');
    const container = document.getElementById('quality-container');

    if (type === 'mp4') {
        mp4Btn.className = "pb-3 text-sm font-bold border-b-2 border-red-500 text-white";
        if (mp3Btn) mp3Btn.className = "pb-3 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-300";
        const videoSources = data.sources.filter(s => !s.quality.toLowerCase().includes('mp3') && !s.quality.toLowerCase().includes('audio'));
        container.innerHTML = renderTable(videoSources, 'mp4');
    } else {
        mp3Btn.className = "pb-3 text-sm font-bold border-b-2 border-red-500 text-white";
        mp4Btn.className = "pb-3 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-300";
        const audioSources = data.sources.filter(s => s.quality.toLowerCase().includes('mp3') || s.quality.toLowerCase().includes('audio'));
        container.innerHTML = renderTable(audioSources, 'mp3');
    }
}