const allInboxFiles = app.vault.getFiles().filter(f => f.path.startsWith("01 - Inbox/") && f.name !== "05. Braindump.md");
allInboxFiles.sort((a, b) => a.stat.ctime - b.stat.ctime);
const inboxNotes = allInboxFiles;

const INBOX_CYAN = '#51e1e9';
const appWindow = dv.el("div", "", { attr: { style: "display: flex; flex-direction: column; background: rgba(0,0,0,0.75); border: 1px solid rgba(255,255,255,0.05); border-top: 4px solid " + INBOX_CYAN + "; border-radius: 12px; padding: 40px; margin-top: 20px; box-shadow: 0 20px 50px rgba(0,0,0,0.8); backdrop-filter: blur(12px);" } });

// HEADER SECTION
const hdr = appWindow.createDiv({ cls: 'komo-header', attr: { style: 'margin-bottom: 25px; display: flex; justify-content: space-between; align-items: flex-start;' } });
const leftHdr = hdr.createDiv({ cls: 'komo-header-left' });
leftHdr.createDiv({ cls: 'komo-title', text: 'INBOX PROCESSING' });
const qCount = inboxNotes.length;
const subtitleText = qCount === 0 
    ? '// system optimal. queue clear.' 
    : `// active queue: ${qCount} items awaiting classification.`;
leftHdr.createDiv({ cls: 'komo-subtitle', text: subtitleText });
const rightHdr = hdr.createDiv({ cls: 'komo-header-right' });
// The global ATLAS HOME button is now injected by the Sylvics Core HUD, so we don't need a local one here.

// METRICS CARDS
const metricsWrap = appWindow.createDiv({ cls: 'komo-metrics-wrap', attr: { style: 'margin-bottom: 30px;' } });
metricsWrap.innerHTML = `<div class="komo-label" style="margin-bottom: 8px;">inbox telemetry</div>`;
const mGrid = metricsWrap.createDiv({ attr: { style: 'display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 14px; width: 100%;' } });

let queueSize = inboxNotes.length;

let maxAgeDays = 0;
if (queueSize > 0) {
    let oldestTime = window.moment(inboxNotes[0].stat.ctime);
    maxAgeDays = window.moment().diff(oldestTime, 'days');
}

let healthStatus = 'Healthy';
let healthColor = '#a6e3a1'; // komo-green

if (queueSize === 0) {
    healthStatus = 'Optimal';
    healthColor = '#a6e3a1';
} else if (maxAgeDays >= 10 || queueSize >= 50) {
    healthStatus = 'Critical';
    healthColor = '#f38ba8'; // komo-red
} else if (maxAgeDays >= 7 || queueSize >= 30) {
    healthStatus = 'Warning';
    healthColor = '#fab387'; // komo-peach
}

let oldest = queueSize > 0 ? window.moment(inboxNotes[0].stat.ctime).fromNow(true) : 'N/A';
let newest = queueSize > 0 ? window.moment(inboxNotes[queueSize - 1].stat.ctime).fromNow(true) : 'N/A';

const cardsData = [
    { label: 'HEALTH', val: healthStatus, color: healthColor },
    { label: 'QUEUE', val: queueSize.toString(), color: '#89b4fa' },
    { label: 'NEWEST', val: newest, color: '#cba6f7' },
    { label: 'OLDEST', val: oldest, color: '#f9e2af' }
];

for (let c of cardsData) {
    const card = mGrid.createDiv({ cls: 'komo-card', attr: { style: 'padding: 16px 20px; display: flex; flex-direction: column; gap: 8px; background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px;' } });
    const topRow = card.createDiv({ attr: { style: 'display: flex; align-items: center; gap: 8px;' } });
    topRow.createDiv({ attr: { style: `width: 8px; height: 8px; border-radius: 50%; background-color: ${c.color}; box-shadow: 0 0 8px ${c.color};` } });
    topRow.createDiv({ text: c.label, attr: { style: 'font-size: 0.7em; letter-spacing: 1px; color: var(--komo-sub); font-family: var(--komo-font, monospace); text-transform: uppercase;' } });
    card.createDiv({ text: c.val, attr: { style: 'font-size: 1.5em; font-weight: 800; color: white;' } });
}

appWindow.createDiv({ cls: 'komo-divider' });

if (inboxNotes.length === 0) {
    const empty = appWindow.createDiv({ attr: { style: 'display: flex; flex-direction: column; align-items: center; justify-content: center; height: 400px; opacity: 0.5;' } });
    empty.createEl('div', { text: '✨', attr: { style: 'font-size: 4em; margin-bottom: 20px;' } });
    empty.createEl('div', { text: 'inbox is zero.', attr: { style: 'font-family: var(--komo-font); letter-spacing: 6px; text-transform: uppercase; font-weight: 800; font-size: 1.2em;' } });
} else {
    // SINGLE COLUMN STACKED LAYOUT
    const layout = appWindow.createDiv({ attr: { style: "display: flex; flex-direction: column; gap: 40px;" } });
    
    // PROCESS NEXT (FULL WIDTH)
    const processSection = layout.createDiv({ attr: { style: "display: flex; flex-direction: column; gap: 15px;" } });
    processSection.createDiv({ cls: "komo-label", text: "process next" });
    
    const oldestItem = inboxNotes[0];
    const focusCard = processSection.createDiv({ attr: { style: "padding: 30px; background: rgba(0,0,0,0.6); border: 1px solid rgba(81,225,233,0.3); border-radius: 12px; display: flex; flex-direction: column; gap: 20px; box-shadow: 0 10px 30px rgba(81,225,233,0.1);" } });
    
    const fTop = focusCard.createDiv({ attr: { style: "display: flex; flex-direction: column; gap: 5px;" } });
    fTop.createDiv({ text: oldestItem.name, attr: { style: "font-size: 1.6em; font-weight: 800; color: white; word-break: break-word;" } });
    fTop.createDiv({ text: "Captured " + window.moment(oldestItem.stat.ctime).fromNow(), attr: { style: "font-size: 0.8em; color: " + INBOX_CYAN + "; text-transform: uppercase; letter-spacing: 2px; font-weight: 800;" } });
    
    const previewWrap = focusCard.createDiv({ attr: { style: "padding: 20px; background: rgba(0,0,0,0.5); background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 20px 20px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05); box-shadow: inset 0 0 30px rgba(0,0,0,0.8); color: rgba(255,255,255,0.7); font-size: 0.95em; line-height: 1.5; min-height: 120px; max-height: 300px; overflow-y: auto; display: flex; align-items: center; justify-content: center;" } });
    
    if (oldestItem.extension === 'md') {
        previewWrap.style.display = 'block';
        app.vault.cachedRead(oldestItem).then(content => {
            const stripped = content.replace(/^---[\s\S]*?---\n/, '').trim() || "No content.";
            previewWrap.innerText = stripped.length > 500 ? stripped.substring(0, 500) + '...' : stripped;
        });
    } else if (['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp'].includes(oldestItem.extension.toLowerCase())) {
        previewWrap.createEl('img', { attr: { src: app.vault.getResourcePath(oldestItem), style: 'max-width: 100%; max-height: 250px; object-fit: contain; border-radius: 4px;' } });
    } else {
        previewWrap.createDiv({ text: `[${oldestItem.extension.toUpperCase()} FILE]`, attr: { style: 'font-family: var(--komo-font, monospace); font-size: 1.5em; opacity: 0.5; letter-spacing: 2px;' } });
    }

    const fBtn = focusCard.createEl("button", { text: "OPEN & PROCESS →", attr: { style: "margin-top: 10px; padding: 15px; background: rgba(81,225,233,0.1); color: " + INBOX_CYAN + "; font-weight: 800; border: 1px solid " + INBOX_CYAN + "; border-radius: 8px; cursor: pointer; text-transform: uppercase; letter-spacing: 2px; transition: all 0.2s ease; box-shadow: inset 0 0 15px rgba(81,225,233,0.15), 0 5px 15px rgba(81,225,233,0.2);" } });
    fBtn.addEventListener('mouseenter', () => { fBtn.style.transform = 'translateY(-2px)'; fBtn.style.background = 'rgba(81,225,233,0.2)'; fBtn.style.boxShadow = 'inset 0 0 25px rgba(81,225,233,0.3), 0 8px 25px rgba(81,225,233,0.3)'; });
    fBtn.addEventListener('mouseleave', () => { fBtn.style.transform = 'none'; fBtn.style.background = 'rgba(81,225,233,0.1)'; fBtn.style.boxShadow = 'inset 0 0 15px rgba(81,225,233,0.15), 0 5px 15px rgba(81,225,233,0.2)'; });
    fBtn.addEventListener('click', () => app.workspace.getLeaf(false).openFile(oldestItem));

    // REMAINING QUEUE (GRID)
    const queueSection = layout.createDiv({ attr: { style: "display: flex; flex-direction: column; gap: 15px;" } });
    queueSection.createDiv({ cls: "komo-label", text: "remaining queue" });
    
    const qGrid = queueSection.createDiv({ attr: { style: "display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; align-content: start;" } });
    
    for (let i = 1; i < inboxNotes.length; i++) {
        const p = inboxNotes[i];
        const card = qGrid.createDiv({ cls: "komo-related-card", attr: { style: "padding: 25px; display: flex; flex-direction: column; gap: 15px; cursor: pointer; transition: all 0.2s ease; background: rgba(0, 0, 0, 0.4); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px;" } });
        
        card.addEventListener('mouseenter', () => { card.style.background = 'rgba(255,255,255,0.05)'; card.style.borderColor = 'rgba(255,255,255,0.2)'; });
        card.addEventListener('mouseleave', () => { card.style.background = 'rgba(0, 0, 0, 0.4)'; card.style.borderColor = 'rgba(255,255,255,0.05)'; });
        card.addEventListener('click', () => app.workspace.getLeaf(false).openFile(p));
        
        const titleWrap = card.createDiv({ attr: { style: "display: flex; gap: 12px; align-items: center;" } });
        
        const svgImg = `<svg viewBox="0 0 24 24" width="22" height="22" stroke="rgba(255,255,255,0.4)" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>`;
        const svgPdf = `<svg viewBox="0 0 24 24" width="22" height="22" stroke="rgba(255,255,255,0.4)" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`;
        const svgMd = `<svg viewBox="0 0 24 24" width="22" height="22" stroke="${INBOX_CYAN}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`;
        const svgUnknown = `<svg viewBox="0 0 24 24" width="22" height="22" stroke="rgba(255,255,255,0.4)" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`;
        
        const ext = p.extension.toLowerCase();
        let iconStr = svgUnknown;
        if (['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp'].includes(ext)) iconStr = svgImg;
        else if (ext === 'pdf') iconStr = svgPdf;
        else if (ext === 'md') iconStr = svgMd;
        
        titleWrap.createDiv({ attr: { style: 'display: flex; align-items: center; justify-content: center;' } }).innerHTML = iconStr;
        titleWrap.createDiv({ text: p.name, attr: { style: "font-weight: 800; font-size: 1.1em; color: white; word-break: break-word; line-height: 1.3;" } });
        
        card.createDiv({ text: window.moment(p.stat.ctime).fromNow(), attr: { style: "font-size: 0.7em; color: rgba(255,255,255,0.3); text-transform: uppercase; letter-spacing: 1px; font-weight: 700; margin-top: auto;" } });
    }
}
