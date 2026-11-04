---
Dashboard_Prefix: CALL
Dashboard_Prefix_Color: "#93c5fd"
Dashboard_Header_Color: "#3b82f6"
tags: [call]
Date: ""
Time: ""
Duration: ""
Type: ""
Status: ""
Linked_Client: ""
Linked_Project: ""
sylvics-up: "[[2. Meetings & Calls]]"
sylvics-fullscreen: true
meeting_agenda: ""
meeting_notes: ""
meeting_action_items: []
Header_Schema:
  - color: '#e5e7eb'
    icon: 📅
    label: When
    key: ''
    type: formula
    options: []
    formula: 'const s = String(p.Date && p.Date.toISODate ? p.Date.toISODate() : (p.Date || '''')).slice(0, 10); const m = window.moment; const ok = /^\d{4}-\d{2}-\d{2}$/.test(s) && m; return ok ? m(s, ''YYYY-MM-DD'').format(''D MMMM YYYY'') : ''--'';'
    subFormula: 'const s = String(p.Date && p.Date.toISODate ? p.Date.toISODate() : (p.Date || '''')).slice(0, 10); const m = window.moment; const ok = /^\d{4}-\d{2}-\d{2}$/.test(s) && m; if (!ok) return ''''; const t = String(p.Time || '''').trim(); return m(s, ''YYYY-MM-DD'').format(''dddd'') + (t ? '' · '' + t : '''');'
  - color: '#e5e7eb'
    icon: ⏱️
    label: Length
    key: ''
    type: formula
    options: []
    formula: 'const d = String(p.Duration || '''').trim(); if (!d) return ''--''; const mm = d.match(/^(\d+):(\d{2})$/); let n = mm ? (+mm[1]) * 60 + (+mm[2]) : parseInt(d); if (!n) return d; const h = Math.floor(n / 60), r = n % 60; return (h ? h + '' h'' : '''') + (h && r ? '' '' : '''') + (r ? r + '' min'' : '''');'
  - color: '#e5e7eb'
    icon: 🏷️
    label: Kind
    key: Type
    type: select
    options:
      - Discovery
      - Sync
      - Interview
      - Update
      - Customer
      - Mentoring
      - Catch-up
    formula: ''
  - color: '#e5e7eb'
    icon: 👤
    label: With
    key: ''
    type: formula
    options: []
    formula: 'const L = [].concat(p.Linked_Client || []).map((x) => String(x && x.path ? x.path : x || '''').replace(/^!?\[\[|\]\]$/g, '''').split(''|'')[0]).filter(Boolean); const F = L.map((n) => app.metadataCache.getFirstLinkpathDest(n, '''')).filter(Boolean); const P = F.filter((f) => /Contacts/.test(f.path)); if (!P.length) return ''--''; return { html: P.map((f) => f.basename.replace(/^[^\p{L}\p{N}]+/u, '''')).join('', ''), link: P[0].path };'
    hideEmpty: true
  - color: '#e5e7eb'
    icon: 🤝
    label: For
    key: ''
    type: formula
    options: []
    formula: 'const L = [].concat(p.Linked_Client || []).map((x) => String(x && x.path ? x.path : x || '''').replace(/^!?\[\[|\]\]$/g, '''').split(''|'')[0]).filter(Boolean); const F = L.map((n) => app.metadataCache.getFirstLinkpathDest(n, '''')).filter(Boolean); const C = F.filter((f) => !/Contacts/.test(f.path)); if (!C.length) return ''--''; return { html: C.map((f) => f.basename.replace(/^[^\p{L}\p{N}]+/u, '''')).join('', ''), link: C[0].path };'
    hideEmpty: true
  - color: '#3b82f6'
    icon: 🚦
    label: Status
    key: ''
    type: formula
    options: []
    formula: 'const s = String(p.Status || '''').trim(); if (!s || /complete/i.test(s)) return ''--''; return { html: s, color: /cancel/i.test(s) ? ''#f87171'' : ''#fbbf24'' };'
    hideEmpty: true
Dashboard_Layout:
  - color: '#3b82f6'
    icon: 🧭
    label: AGENDA
    key: meeting_agenda
    type: textarea
    folder: ''
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
    autoHeight: true
    plainFrame: true
  - color: '#3b82f6'
    icon: ☑️
    label: NEXT STEPS
    key: meeting_action_items
    type: action_items
    folder: ''
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
    foldDone: true
    itemName: STEP
    itemNames: steps
  - color: '#3b82f6'
    icon: 📝
    label: NOTES
    key: meeting_notes
    type: textarea
    folder: ''
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    autoHeight: true
    plainFrame: true
  - color: '#3b82f6'
    icon: 📓
    label: IN THE JOURNAL
    key: ''
    type: journal_mentions
    folder: ''
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    byName: true
    hideEmpty: true
  - color: '#3b82f6'
    icon: 👤
    label: WITH AND FOR
    key: Linked_Client
    type: link_list
    folder: ''
    options: []
    options2: []
    width: 50%
    hideZero: true
    allowCreate: true
  - color: '#3b82f6'
    icon: 📂
    label: PROJECT
    key: Linked_Project
    type: link_list
    folder: 02 - Planning/3. 🚀 Execution/1. 📂 Projects
    options: []
    options2: []
    width: 50%
    hideZero: true
    allowCreate: true
  - color: '#3b82f6'
    icon: 🔗
    label: LINKED FROM
    key: ''
    type: linked_from
    folder: ''
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    slimEmpty: true
Minimal_Setup: false
Centered_Title: true
Immersive_Header: Standard
Inherit_Blueprint: ""
New_Stat:
New_Module:
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---
​	
```sylvics-view
EntityDashboardHero
```
