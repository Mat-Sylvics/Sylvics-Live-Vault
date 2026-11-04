<%*
let title = tp.file.title;
if (title.startsWith("Untitled") || title.startsWith("New Tool") || title.startsWith("New Reference")) {
    title = await tp.system.prompt("Enter Title:");
    if (title) await tp.file.rename(title);
}
// what kind of tool: an app I use, or a file I keep (27 Oct 2026). The note's layout follows.
const kind = await tp.system.suggester(["An app or service I use", "A file I keep: script, sheet, template, deck, prompt"], ["App", "File"], false, "What is it?") || "File";
// the domain page this note belongs to (the "00." note above it), for UP and the header (27 Oct 2026)
let hubName = "";
try { let dir = app.vault.getAbstractFileByPath(tp.file.folder(true)); for (let i = 0; i < 3 && dir; i++) { const h = (dir.children || []).find(c => c.extension === "md" && /^00\./.test(c.basename)); if (h) { hubName = h.basename; break; } dir = dir.parent; } } catch (e) {}

setTimeout(async () => {
    try {
        const currentFolder = tp.file.folder(true);
        const folderObj = app.vault.getAbstractFileByPath(currentFolder);
        if (!folderObj || !folderObj.children) return;
        
        let subfolders = folderObj.children.filter(c => c.children && !c.name.startsWith(".")).map(c => c.name);
        // already in a category (made with "Add here" on the page): no question
        if (subfolders.length === 0) return;
        subfolders.unshift("➕ Create New Category");
        subfolders.push("📂 Root Folder");
        
        let chosen = await tp.system.suggester(subfolders, subfolders, false, "Select a Category (Tab) for this entry");
        
        let targetFolder = currentFolder;
        if (chosen === "➕ Create New Category") {
            const newCat = await tp.system.prompt("Enter new category name:");
            if (newCat) {
                targetFolder = currentFolder + "/" + newCat;
                const exists = app.vault.getAbstractFileByPath(targetFolder);
                if (!exists) {
                    await app.vault.createFolder(targetFolder);
                }
            }
        } else if (chosen && chosen !== "📂 Root Folder") {
            targetFolder = currentFolder + "/" + chosen;
        }
        
        if (targetFolder !== currentFolder && targetFolder !== currentFolder + "/") {
            await tp.file.move(targetFolder + "/" + (title || tp.file.title));
        }
    } catch(e) { console.log("Routing error:", e); }
}, 200);
-%>
---
cssclasses:
  - tool-theme
ContentType: Tool
Kind: <% kind %>
Resource_Status: 🆕 New
tags: 
URL: 
File: 
App: 
Pricing: 
Type: 
sylvics-up: "<% hubName ? "[[" + hubName + "]]" : "" %>"
created: <% tp.file.creation_date("YYYY-MM-DD") %>
sylvics-fullscreen: true
Immersive_Header: Compact
<%* tR += kind === "App" ? "Header_Schema:\n  - color: \"#e5e7eb\"\n    icon: 🧩\n    label: What it is\n    key: Kind_Label\n    type: formula\n    formula: \"if(p.What_It_Is) return String(p.What_It_Is); const me=p.file&&p.file.path; const base=me?me.split('/').pop().replace(/\\\\.md$/,''):''; const bare=(v)=>String(Array.isArray(v)?v[0]:(v||'')).replace(/^.*?\\\\[\\\\[|\\\\]\\\\].*$/g,'').split('|')[0].trim(); if(/^app$/i.test(String(p.Kind||''))){ let k=0; for(const x of app.vault.getMarkdownFiles()){ if(x.path===me) continue; const c0=app.metadataCache.getFileCache(x); const a=c0&&c0.frontmatter&&c0.frontmatter.App; if(a&&bare(a)===base) k++; } return k?'App · '+k+(k===1?' file':' files')+' made in it':'App or service'; } const n=bare(p.File); if(!n) return 'A note'; const e=(n.split('.').pop()||'').toLowerCase(); const M={svg:'SVG drawing',png:'PNG image',jpg:'JPG photo',jpeg:'JPG photo',gif:'GIF image',webp:'WebP image',html:'HTML page',css:'CSS file',js:'JavaScript',ts:'TypeScript',py:'Python script',sql:'SQL query',sh:'Shell script',csv:'CSV table',xlsx:'Spreadsheet',json:'JSON data',md:'Markdown',txt:'Text file',pdf:'PDF',pptx:'Slide deck',docx:'Word document',yaml:'YAML',yml:'YAML',ipynb:'Notebook',r:'R script'}; return M[e]||(e.toUpperCase()+' file');\"\n    hideZero: false\n  - color: \"#e5e7eb\"\n    icon: 💳\n    label: Price\n    key: Pricing\n    type: text\n    hideZero: false\n    hideEmpty: true\n  - color: \"#e5e7eb\"\n    icon: 🔗\n    label: Used in\n    key: Used_In\n    type: formula\n    formula: \"const me=p.file&&p.file.path; const base=me?me.split('/').pop().replace(/\\\\.md$/,''):''; const bare=(v)=>String(Array.isArray(v)?v[0]:(v||'')).replace(/^.*?\\\\[\\\\[|\\\\]\\\\].*$/g,'').split('|')[0].trim(); const n=bare(p.File); const f=n?app.metadataCache.getFirstLinkpathDest(n,me||''):null; const rl=app.metadataCache.resolvedLinks||{}; const fmOf=(s)=>{ const f0=app.vault.getAbstractFileByPath(s); const c0=f0&&app.metadataCache.getFileCache(f0); return c0&&c0.frontmatter; }; const madeHere=(fm)=>!!(fm&&fm.App&&bare(fm.App)===base); const skip=(s)=>s===me||/^(07 - Journal|99 - Meta)\\\\//.test(s)||/(^|\\\\/)_(claude_backups|to_delete|art-backup)/.test(s)||/(^|\\\\/)00\\\\.[^\\\\/]*$/.test(s); const keys=[base,f?f.name:''].filter(Boolean); const seen=new Set(); for(const s in rl){ if(skip(s)) continue; const o=rl[s]; if(((me&&o[me])||(f&&o[f.path]))&&!madeHere(fmOf(s))) seen.add(s); } for(const x of app.vault.getMarkdownFiles()){ if(seen.has(x.path)||skip(x.path)) continue; const c0=app.metadataCache.getFileCache(x); const fm=c0&&c0.frontmatter; if(!fm||madeHere(fm)) continue; const t=JSON.stringify(fm); if(keys.some((k)=>t.includes('[['+k+']]')||t.includes('[['+k+'|')||t.includes('[['+k+'#'))) seen.add(x.path); } const c=seen.size; return c===0?'':c+(c===1?' note':' notes');\"\n    emptyText: Not linked yet\n    hideZero: false\n  - color: \"#e5e7eb\"\n    icon: 🏷️\n    label: Status\n    key: Resource_Status\n    type: select\n    options:\n      - 🆕 New\n      - 🔧 In use\n      - 🗂️ Kept\n    hideZero: false\n" : "Header_Schema:\n  - color: \"#e5e7eb\"\n    icon: 🧩\n    label: What it is\n    key: Kind_Label\n    type: formula\n    formula: \"if(p.What_It_Is) return String(p.What_It_Is); const me=p.file&&p.file.path; const base=me?me.split('/').pop().replace(/\\\\.md$/,''):''; const bare=(v)=>String(Array.isArray(v)?v[0]:(v||'')).replace(/^.*?\\\\[\\\\[|\\\\]\\\\].*$/g,'').split('|')[0].trim(); if(/^app$/i.test(String(p.Kind||''))){ let k=0; for(const x of app.vault.getMarkdownFiles()){ if(x.path===me) continue; const c0=app.metadataCache.getFileCache(x); const a=c0&&c0.frontmatter&&c0.frontmatter.App; if(a&&bare(a)===base) k++; } return k?'App · '+k+(k===1?' file':' files')+' made in it':'App or service'; } const n=bare(p.File); if(!n) return 'A note'; const e=(n.split('.').pop()||'').toLowerCase(); const M={svg:'SVG drawing',png:'PNG image',jpg:'JPG photo',jpeg:'JPG photo',gif:'GIF image',webp:'WebP image',html:'HTML page',css:'CSS file',js:'JavaScript',ts:'TypeScript',py:'Python script',sql:'SQL query',sh:'Shell script',csv:'CSV table',xlsx:'Spreadsheet',json:'JSON data',md:'Markdown',txt:'Text file',pdf:'PDF',pptx:'Slide deck',docx:'Word document',yaml:'YAML',yml:'YAML',ipynb:'Notebook',r:'R script'}; return M[e]||(e.toUpperCase()+' file');\"\n    hideZero: false\n  - color: \"#e5e7eb\"\n    icon: ⚙️\n    label: Made in\n    key: App\n    type: folder_select\n    folder: 04 - Resources/1. 🛠️ Tools & Assets/1. ⚙️ Software & Apps\n    hideZero: false\n    hideEmpty: true\n  - color: \"#e5e7eb\"\n    icon: 🔗\n    label: Used in\n    key: Used_In\n    type: formula\n    formula: \"const me=p.file&&p.file.path; const base=me?me.split('/').pop().replace(/\\\\.md$/,''):''; const bare=(v)=>String(Array.isArray(v)?v[0]:(v||'')).replace(/^.*?\\\\[\\\\[|\\\\]\\\\].*$/g,'').split('|')[0].trim(); const n=bare(p.File); const f=n?app.metadataCache.getFirstLinkpathDest(n,me||''):null; const rl=app.metadataCache.resolvedLinks||{}; const fmOf=(s)=>{ const f0=app.vault.getAbstractFileByPath(s); const c0=f0&&app.metadataCache.getFileCache(f0); return c0&&c0.frontmatter; }; const madeHere=(fm)=>!!(fm&&fm.App&&bare(fm.App)===base); const skip=(s)=>s===me||/^(07 - Journal|99 - Meta)\\\\//.test(s)||/(^|\\\\/)_(claude_backups|to_delete|art-backup)/.test(s)||/(^|\\\\/)00\\\\.[^\\\\/]*$/.test(s); const keys=[base,f?f.name:''].filter(Boolean); const seen=new Set(); for(const s in rl){ if(skip(s)) continue; const o=rl[s]; if(((me&&o[me])||(f&&o[f.path]))&&!madeHere(fmOf(s))) seen.add(s); } for(const x of app.vault.getMarkdownFiles()){ if(seen.has(x.path)||skip(x.path)) continue; const c0=app.metadataCache.getFileCache(x); const fm=c0&&c0.frontmatter; if(!fm||madeHere(fm)) continue; const t=JSON.stringify(fm); if(keys.some((k)=>t.includes('[['+k+']]')||t.includes('[['+k+'|')||t.includes('[['+k+'#'))) seen.add(x.path); } const c=seen.size; return c===0?'':c+(c===1?' note':' notes');\"\n    emptyText: Not linked yet\n    hideZero: false\n  - color: \"#e5e7eb\"\n    icon: 🏷️\n    label: Status\n    key: Resource_Status\n    type: select\n    options:\n      - 🆕 New\n      - 🔧 In use\n      - 🗂️ Kept\n    hideZero: false\n"; %>Dashboard_Layout:
  - icon: 🛠️
    label: File
    key: ""
    type: tool_card
    width: 100%
    hideEmpty: true
---

```sylvics-view
EntityDashboardHero
```

<%* if (kind === "App") { -%>
## ⚡ At a glance
| | |
| --- | --- |
| **What** |  |
| **Plan** |  |
| **Where my files are** |  |

## 🧰 How do I…
- 

## ⚠️ Watch out
- 
<%* } else { -%>
## ▶️ How to use
- 

## 📍 Where it came from
- 

## ⚠️ Watch out
- 
<%* } -%>
