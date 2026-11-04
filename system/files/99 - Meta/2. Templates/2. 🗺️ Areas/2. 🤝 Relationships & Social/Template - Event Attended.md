<%*
let eventType = await window.SylvicsUI.customPrompt("What type of event? (e.g. Dinner, Party, Gathering, Networking)", "Gathering", "type");
let eventDate = await window.SylvicsUI.customPrompt("Date of the event? (YYYY-MM-DD)", tp.date.now("YYYY-MM-DD"), "date");
_%>---
Event_Summary: ""
Action_Items: []
tags:
  - event
Type: <% eventType %>
Date: <% eventDate %>
Status: Attended
Category: "Recreational"
Energy_Delta: 0
cssclasses:
  - entity-theme
  - dashboard
  - sylvics-dashboard
  - transparent-bg
sylvics-fullscreen: true
sylvics-up: "[[3. Events & Experiences]]"
Place: ""
Location: ""
Contacts: []
Notes: ""
Related_Files: []
Dashboard_Layout:
  - color: '#f43f5e'
    icon: 🎯
    label: SUMMARY
    key: Event_Summary
    type: textarea
    folder: ''
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
    autoHeight: true
    plainFrame: true
  - color: '#f43f5e'
    icon: 👤
    label: WITH
    key: Contacts
    type: link_list
    folder: 04 - Resources/3. 🌐 Entities/1. 👥 People/👤 Contacts
    options: []
    options2: []
    width: 50%
    hideZero: true
    allowCreate: true
  - color: '#f43f5e'
    icon: 📝
    label: NOTES
    key: Notes
    type: textarea
    folder: ''
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    autoHeight: true
    plainFrame: true
  - color: '#f43f5e'
    icon: ☑️
    label: NEXT STEPS
    key: Action_Items
    type: action_items
    folder: ''
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    foldDone: true
    itemName: STEP
    itemNames: steps
  - color: '#f43f5e'
    icon: 📓
    label: THE DAY
    key: Related_Files
    type: vault_links
    folder: ''
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: '#f43f5e'
    icon: 🔗
    label: LINKED FROM
    key: ''
    type: linked_from
    folder: ''
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
    slimEmpty: true
Dashboard_Prefix: EVENT ATTENDED
Dashboard_Header_Color: "#f43f5e"
Header_Schema:
  - color: '#e5e7eb'
    icon: 📅
    label: When
    key: ''
    type: formula
    options: []
    formula: 'const s = String(p.Date && p.Date.toISODate ? p.Date.toISODate() : (p.Date || '''')).slice(0, 10); const m = window.moment; return /^\d{4}-\d{2}-\d{2}$/.test(s) && m ? m(s, ''YYYY-MM-DD'').format(''D MMMM YYYY'') : ''--'';'
    subFormula: 'const s = String(p.Date && p.Date.toISODate ? p.Date.toISODate() : (p.Date || '''')).slice(0, 10); const m = window.moment; return /^\d{4}-\d{2}-\d{2}$/.test(s) && m ? m(s, ''YYYY-MM-DD'').format(''dddd'') : '''';'
  - color: '#e5e7eb'
    icon: 📍
    label: Where
    key: ''
    type: formula
    options: []
    formula: 'const raw = String(p.Place && p.Place.path ? p.Place.path : (p.Place || '''')).replace(/^!?\[\[|\]\]$/g, '''').split(''|'')[0]; const f = raw ? app.metadataCache.getFirstLinkpathDest(raw, '''') : null; const name = f ? f.basename.replace(/^[^\p{L}\p{N}]+/u, '''').trim() : ''''; const loc = String(p.Location || '''').trim(); if (f) return { html: name, link: f.path }; return loc ? loc.split('','')[0] : ''--'';'
    subFormula: 'const raw = String(p.Place && p.Place.path ? p.Place.path : (p.Place || '''')).replace(/^!?\[\[|\]\]$/g, '''').split(''|'')[0]; const f = raw ? app.metadataCache.getFirstLinkpathDest(raw, '''') : null; const name = f ? f.basename.replace(/^[^\p{L}\p{N}]+/u, '''').trim() : ''''; const loc = String(p.Location || '''').trim(); if (!loc) return ''''; if (!f) return loc.split('','').slice(1).join('','').trim(); const esc = name.replace(/[.*+?^${}()|[\]\\]/g, ''\\$&''); const rest = loc.replace(new RegExp(''^'' + esc + '',?\\s*'', ''i''), ''''); return rest.toLowerCase() === name.toLowerCase() ? '''' : rest;'
  - color: '#e5e7eb'
    icon: 🏷️
    label: Kind
    key: ''
    type: formula
    options: []
    formula: const a = [].concat(p.Category || []).filter(Boolean).map(String); const b = [].concat(p.Type || []).filter(Boolean).map(String); const s = [a.join(', '), b.join(', ')].filter(Boolean).join(' · '); return s || '--';
  - color: '#e5e7eb'
    icon: 🔋
    label: Energy
    key: ''
    type: formula
    options: []
    formula: 'const v = parseFloat(p.Energy_Delta); if (isNaN(v)) return ''--''; const col = v < 0 ? ''#f87171'' : v > 0 ? ''#34d399'' : ''#e5e7eb''; return { html: (v > 0 ? ''+'' : v < 0 ? ''−'' : '''') + Math.abs(v), color: col };'
    subFormula: 'const v = parseFloat(p.Energy_Delta); if (isNaN(v)) return ''''; return v <= -25 ? ''drained'' : v < 0 ? ''tiring'' : v === 0 ? ''no change'' : v < 25 ? ''good'' : ''lifted'';'
    hideEmpty: true
  - color: '#e5e7eb'
    icon: 🚦
    label: Status
    key: ''
    type: formula
    options: []
    formula: 'const s = String(p.Status || '''').trim(); if (!s || /attended/i.test(s)) return ''--''; return { html: s, color: /cancel/i.test(s) ? ''#f87171'' : ''#fbbf24'' };'
    hideEmpty: true
Strip_Emojis: true
Minimal_Setup: false
Dashboard_Theme: Standard
Centered_Title: true
Immersive_Header: Standard
Cover_Alignment: Right
Inherit_Blueprint: ""
Dashboard_Prefix_Color: "#fda4af"
Dashboard_Background: ""
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero
```