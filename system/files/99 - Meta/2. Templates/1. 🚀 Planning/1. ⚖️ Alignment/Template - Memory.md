---
type: memory
date: <% tp.date.now("YYYY-MM-DD") %>
syl-icon: 🕰️
sylvics-up: "[[🕰️ 0. Roots Masterpage]]"
cssclasses:
  - dashboard
  - sylvics-fullscreen
  - sylvics-memory
Dashboard_Prefix: MEMORY
Dashboard_Color: "#c2410c"
Dashboard_Header_Color: "#f59e0b"
Dashboard_Style: immersive
Header_Schema:
  - color: "#e5e7eb"
    icon: 📅
    label: Date
    key: date
    type: date
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: ⏳
    label: How long ago
    key: ""
    type: formula
    options: []
    formula: "if (!p || !p.date) return '--'; const m = window.moment(String(p.date), ['YYYY-MM-DD', 'YYYY-MM', 'YYYY'], true); if (!m.isValid()) return '--'; const y = window.moment().diff(m, 'years'); return y < 1 ? 'This year' : y + (y === 1 ? ' year ago' : ' years ago');"
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 👥
    label: With
    key: ""
    type: formula
    options: []
    formula: "if (!p) return '--'; let w = p.with; if (!w || (Array.isArray(w) && !w.length)) return 'Add who was there'; if (!Array.isArray(w)) w = [w]; const n = w.map(x => String(x && x.path ? x.path : x).replace(/^\\[\\[|\\]\\]$/g, '').split('|')[0].split('/').pop().replace(/\\.md$/, '').split(' ')[0]); return n.length > 3 ? n.slice(0, 3).join(', ') + ' +' + (n.length - 3) : n.join(', ');"
    folder: ""
    hideZero: false
  - color: "#f59e0b"
    icon: ⚓
    label: Shaped
    key: ""
    type: formula
    options: []
    formula: "if (!p) return '--'; const c = v => !v ? 0 : (Array.isArray(v) ? v.length : 1); const a = c(p.forged_values), b = c(p.forged_beliefs); return (a || b) ? a + (a === 1 ? ' value' : ' values') + ' · ' + b + (b === 1 ? ' belief' : ' beliefs') : 'Nothing yet';"
    folder: ""
    hideZero: false
Dashboard_Layout:
  - color: "#f59e0b"
    icon: 📜
    label: STORY
    key: story
    type: textarea
    autoHeight: true
    placeholder: "Tell it as it happened: when, where, who was there, what you saw and felt."
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#f59e0b"
    icon: 💡
    label: LESSON
    key: lesson
    type: textarea
    autoHeight: true
    placeholder: "What you took from it, honestly, including what you did not learn at the time."
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#f59e0b"
    icon: 🧬
    label: IMPACT
    key: impact
    type: textarea
    autoHeight: true
    placeholder: "Where it still shows: the values, beliefs, decisions and habits it fed."
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#f59e0b"
    icon: ⚓
    label: PEOPLE, VALUES AND BELIEFS
    key: ""
    type: memory_links
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#f59e0b"
    icon: 🖼️
    label: PHOTOS FROM THAT TIME
    key: photos
    type: gallery
    slimEmpty: true
    emptyText: "Add a photo from that time"
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: true
    allowCreate: true
  - color: "#f59e0b"
    icon: 🔗
    label: LINKED FROM
    key: ""
    type: linked_from
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
Dashboard_Prefix_Color: "#d9941c"
tags:
  - memory
Memory_Status: 🟢 Core
Centered_Title: true
Immersive_Header: Standard
Minimal_Setup: false
created: <% tp.file.creation_date("YYYY-MM-DD") %>
with: []
photos: []
period: ""
---

```sylvics-view
EntityDashboardHero
```
