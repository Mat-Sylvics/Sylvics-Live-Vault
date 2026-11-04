---
cover: '""'
tags:
  - bucket-list
BucketList_Status: 📥 Dream
date: <% tp.file.creation_date("YYYY-MM-DD") %>
Location: '""'
Idea: '""'
Inspiration: '""'
Vision: '""'
Execution: '""'
Memory: '""'
sylvics-fullscreen: true
Dashboard_Prefix: BUCKET LIST
Header_Schema:
  - color: "#2474f5"
    icon: 🚦
    label: Status
    key: BucketList_Status
    type: select
    options:
      - 📥 Dream
      - 🗺️ Planning
      - ✈️ In Progress
      - 🏆 Achieved
      - 🛑 Archived
    formula: ""
    subFormula: "const arr = v => !v ? [] : (Array.isArray(v) ? v : (typeof v.array === 'function' ? v.array() : [v])); const st = String(p.BucketList_Status || ''); if (/achiev/i.test(st)) return String(p.Memory || '').trim() ? 'Memory written' : 'Memory still to write'; if (/archiv/i.test(st)) return 'Let go'; const s = arr(p.Steps).filter(x => x && typeof x === 'object'); return s.length ? s.filter(x => x.completed === true).length + ' of ' + s.length + ' steps done' : 'No step yet';"
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 📍
    label: Location
    key: Location
    type: text
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 📅
    label: Dreamed since
    key: ""
    type: formula
    options: []
    formula: "const m = window.moment; const d = v => { const s = String(v && v.toISODate ? v.toISODate() : (v || '')).slice(0, 10); return /^\\d{4}-\\d{2}-\\d{2}$/.test(s) ? s : ''; }; const ach = /achiev/i.test(String(p.BucketList_Status || '')); const v = ach ? d(p['completed-date']) : (d(p.date) || d(p.created)); return v && m ? m(v, 'YYYY-MM-DD').format('D MMM YYYY') : 'Not dated';"
    subFormula: "const m = window.moment; if (!m) return ''; const d = v => { const s = String(v && v.toISODate ? v.toISODate() : (v || '')).slice(0, 10); return /^\\d{4}-\\d{2}-\\d{2}$/.test(s) ? s : ''; }; const ach = /achiev/i.test(String(p.BucketList_Status || '')); const s = d(p.date) || d(p.created); const e = ach ? d(p['completed-date']) : (window.SylvicsToday ? window.SylvicsToday() : m().format('YYYY-MM-DD')); if (ach && !e) return 'Click to date it'; if (!s || !e || s > e) return ach ? 'Achieved' : ''; const a = m(s, 'YYYY-MM-DD'), b = m(e, 'YYYY-MM-DD'); const y = b.diff(a, 'years'), mo = b.diff(a, 'months'), dd = b.diff(a, 'days'); const yr = n => n + (n === 1 ? ' year' : ' years'), mn = n => n + (n === 1 ? ' month' : ' months'), r = mo % 12; const t = y >= 3 ? yr(y) : (y >= 1 ? yr(y) + (r ? ', ' + mn(r) : '') : (mo >= 1 ? mn(mo) : dd + (dd === 1 ? ' day' : ' days'))); return 'On the list for ' + t;"
    subEdit: completed-date|date
    whenLabel:
      key: BucketList_Status
      match: achiev
      label: Done
      icon: 🏆
    folder: ""
    hideZero: false
Dashboard_Layout:
  - color: "#2474f5"
    icon: 📋
    label: Overview
    key: ""
    type: tab_marker
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#2474f5"
    icon: ⭐
    label: DREAM
    key: Idea
    type: textarea
    autoHeight: true
    placeholder: "The dream in a line or two: what, where, with whom."
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#2474f5"
    icon: 💙
    label: WHY I WANT IT
    key: Inspiration
    type: textarea
    autoHeight: true
    placeholder: "The moment it started, and why it has stayed."
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#2474f5"
    icon: 🔭
    label: WHAT IT LOOKS LIKE
    key: Vision
    type: textarea
    autoHeight: true
    placeholder: "The day itself, as if it were happening: what you see, do, hear."
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#2474f5"
    icon: 🗺️
    label: HOW TO GET THERE
    key: Steps
    type: action_items
    noStretch: true
    hideProgress: true
    itemName: step
    itemNames: steps
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#2474f5"
    icon: 🧭
    label: WHERE IT STANDS
    key: Execution
    type: textarea
    noStretch: true
    autoHeight: true
    placeholder: "What is in the way, what already exists, what you are waiting for."
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#2474f5"
    icon: 🖼️
    label: PHOTOS
    key: Photos
    type: gallery
    slimEmpty: true
    emptyText: "Add a photo: the place, or the day itself"
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#2474f5"
    icon: 📸
    label: Memory
    key: ""
    type: tab_marker
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#2474f5"
    icon: 📸
    label: MEMORY
    key: Memory
    type: textarea
    autoHeight: true
    placeholder: "Once it happens: the day, who was there, what it was really like."
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#2474f5"
    icon: 🔗
    label: Links
    key: ""
    type: tab_marker
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#2474f5"
    icon: 🌳
    label: BECAME
    key: Became
    type: link_list
    slim: true
    emptyText: "Not yet. Link what it turns into: a goal, a project, a trip"
    folder: "*"
    options: []
    options2: []
    width: 100%
    hideZero: true
    allowCreate: false
  - color: "#2474f5"
    icon: 📍
    label: PEOPLE & PLACES
    key: ""
    type: link_table
    slimEmpty: true
    folder: ""
    options:
      - "in=04 - Resources/3. 🌐 Entities"
      - "in=03 - Areas/8. 🧘 Spirituality & Meaning/3. 🤲 Service & Altruism/3. Mentorship Hub"
      - "skip=Masterpage"
      - "direction=both"
      - "column=Name:file"
      - "column=Kind:folder"
      - "sort=name"
      - "limit=20"
      - "empty=No person or place is linked yet."
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#2474f5"
    icon: 🔗
    label: LINKED FROM
    key: ""
    type: linked_from
    slimEmpty: true
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#2474f5"
    icon: 📓
    label: IN THE JOURNAL
    key: ""
    type: journal_mentions
    slimEmpty: true
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#2474f5"
    icon: ⏹️
    label: END OF TABS
    key: ""
    type: end_tabs
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
Strip_Emojis: true
Minimal_Setup: false
Centered_Title: true
Immersive_Header: Standard
Inherit_Blueprint: ""
Dashboard_Prefix_Color: "#f59e0b"
Dashboard_Background: ""
Dashboard_Header_Color: "#2474f5"
sylvics-up: "[[⭐ 0. Bucket List Masterpage]]"
Steps: []
Became: []
Photos: []
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero
```
