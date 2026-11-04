---
cssclasses:
  - reference-theme
ContentType: Reference
URL: ""
Favorite: false
tags:
  - reference
What_It_Is: Reference
Type: 
sylvics-fullscreen: true
Immersive_Header: Compact
Header_Schema:
  - color: "#e5e7eb"
    icon: 🧩
    label: What it is
    key: Kind_Label
    type: formula
    formula: "if(p.What_It_Is) return String(p.What_It_Is); const me=p.file&&p.file.path; const base=me?me.split('/').pop().replace(/\\.md$/,''):''; const bare=(v)=>String(Array.isArray(v)?v[0]:(v||'')).replace(/^.*?\\[\\[|\\]\\].*$/g,'').split('|')[0].trim(); if(/^app$/i.test(String(p.Kind||''))){ let k=0; for(const x of app.vault.getMarkdownFiles()){ if(x.path===me) continue; const c0=app.metadataCache.getFileCache(x); const a=c0&&c0.frontmatter&&c0.frontmatter.App; if(a&&bare(a)===base) k++; } return k?'App · '+k+(k===1?' file':' files')+' made in it':'App or service'; } const n=bare(p.File); if(!n) return 'A note'; const e=(n.split('.').pop()||'').toLowerCase(); const M={svg:'SVG drawing',png:'PNG image',jpg:'JPG photo',jpeg:'JPG photo',gif:'GIF image',webp:'WebP image',html:'HTML page',css:'CSS file',js:'JavaScript',ts:'TypeScript',py:'Python script',sql:'SQL query',sh:'Shell script',csv:'CSV table',xlsx:'Spreadsheet',json:'JSON data',md:'Markdown',txt:'Text file',pdf:'PDF',pptx:'Slide deck',docx:'Word document',yaml:'YAML',yml:'YAML',ipynb:'Notebook',r:'R script'}; return M[e]||(e.toUpperCase()+' file');"
    hideZero: false
  - color: "#e5e7eb"
    icon: 🗓️
    label: Last checked
    key: updated
    type: date
    subFormula: "const v=p.updated; if(!v||/^(Receipt|Keepsake)$/i.test(String(p.What_It_Is||''))) return ''; const d=new Date(typeof v==='string'?v.slice(0,10)+'T12:00:00':v); if(isNaN(d.getTime())) return ''; const now=clock&&clock.now?clock.now():new Date(); const m=Math.floor((now.getTime()-d.getTime())/(30.44*864e5)); const t=m<1?'This month':m===1?'A month ago':m<12?m+' months ago':(m<24?'Over a year ago':Math.floor(m/12)+' years ago'); const goes=!p.What_It_Is||/^(Rules|Summary|Agreement|Settings|Dates|List|Checklist|Data guide|Record|Reference)$/i.test(String(p.What_It_Is)); return m>=6&&goes?'<span style=\"color:#f59e0b\">'+t+' · worth a re-check</span>':t;"
    hideZero: false
  - color: "#e5e7eb"
    icon: 🧭
    label: Life area
    key: Life_Area_Card
    type: formula
    formula: "const me=(p.file&&p.file.path)||''; const segs=me.split('/'); const i=segs.findIndex((x)=>/Reference Library$/.test(x)); if(i<0) return ''; const fo=app.vault.getAbstractFileByPath(segs.slice(0,i+2).join('/')); const mp=fo&&fo.children&&fo.children.find((c)=>c.extension==='md'&&/^00\\./.test(c.basename)); const c0=mp&&app.metadataCache.getFileCache(mp); const fm=c0&&c0.frontmatter; const l=String((fm&&fm.Life_Area)||'').replace(/^.*?\\[\\[|\\]\\].*$/g,'').split('|')[0]; const f=l?app.metadataCache.getFirstLinkpathDest(l,mp.path):null; if(!f) return ''; const n=String((f.parent&&f.parent.name)||f.basename).replace(/^\\d+\\.\\s*/,''); return { html: n+' ↗', link: f.path };"
    hideZero: false
    hideEmpty: true
  - color: "#e5e7eb"
    icon: 🔗
    label: Used in
    key: Used_In
    type: formula
    formula: "const me=p.file&&p.file.path; const base=me?me.split('/').pop().replace(/\\.md$/,''):''; const bare=(v)=>String(Array.isArray(v)?v[0]:(v||'')).replace(/^.*?\\[\\[|\\]\\].*$/g,'').split('|')[0].trim(); const n=bare(p.File); const f=n?app.metadataCache.getFirstLinkpathDest(n,me||''):null; const rl=app.metadataCache.resolvedLinks||{}; const fmOf=(s)=>{ const f0=app.vault.getAbstractFileByPath(s); const c0=f0&&app.metadataCache.getFileCache(f0); return c0&&c0.frontmatter; }; const madeHere=(fm)=>!!(fm&&fm.App&&bare(fm.App)===base); const skip=(s)=>s===me||/^(07 - Journal|99 - Meta)\\//.test(s)||/(^|\\/)_(claude_backups|to_delete|art-backup)/.test(s)||/(^|\\/)00\\.[^\\/]*$/.test(s); const keys=[base,f?f.name:''].filter(Boolean); const seen=new Set(); for(const s in rl){ if(skip(s)) continue; const o=rl[s]; if(((me&&o[me])||(f&&o[f.path]))&&!madeHere(fmOf(s))) seen.add(s); } for(const x of app.vault.getMarkdownFiles()){ if(seen.has(x.path)||skip(x.path)) continue; const c0=app.metadataCache.getFileCache(x); const fm=c0&&c0.frontmatter; if(!fm||madeHere(fm)) continue; const t=JSON.stringify(fm); if(keys.some((k)=>t.includes('[['+k+']]')||t.includes('[['+k+'|')||t.includes('[['+k+'#'))) seen.add(x.path); } const c=seen.size; return c===0?'':c+(c===1?' note':' notes');"
    emptyText: Not linked yet
    hideZero: false
created: <% tp.date.now("YYYY-MM-DD") %>
updated: <% tp.date.now("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero
```

## 📌 In short
One or two sentences: what this is and when you open it.

## 🛠️ The reference
- 

## ⚠️ Watch out
- 

## 🔗 Related
- 
