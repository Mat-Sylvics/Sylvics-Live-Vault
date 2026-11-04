---
syl-icon: ⚖️
cover: '""'
Brainstorming: '""'
tags:
  - pending-decision
  - latent
DecisionToMake_Status: 🧊 On Ice
due-date: <% tp.file.creation_date("YYYY-MM-DD") %>
revisit_date: ""
Question: '""'
Resources: []


Dashboard_Prefix: QUESTION
Header_Schema:
  - color: "#f1f5f9"
    icon: 🚦
    label: Status
    key: DecisionToMake_Status
    type: select
    options:
      - 🧊 On Ice
      - 🔥 Active Pondering
      - 🧠 Moved to Log
      - 🛑 Archived
    formula: ""
    subFormula: "const m = window.moment; const d = v => { const s = String(v && v.toISODate ? v.toISODate() : (v || '')).slice(0, 10); return /^\\d{4}-\\d{2}-\\d{2}$/.test(s) ? s : ''; }; const today = window.SylvicsToday ? window.SylvicsToday() : m().format('YYYY-MM-DD'); const f = s => m(s, 'YYYY-MM-DD').format(s.slice(0, 4) === today.slice(0, 4) ? 'D MMM' : 'D MMM YYYY'); const n = k => k + (k === 1 ? ' day' : ' days'); const c = d(p.created), u = d(p.updated); const parts = []; if (c) parts.push('Open since ' + f(c)); if (u && u !== c) parts.push('touched ' + f(u)); return parts.join(' · ');"
    folder: ""
    hideZero: false
  - color: "#cbd5e1"
    icon: 🔁
    label: Revisit
    key: ""
    type: formula
    options: []
    formula: "const m = window.moment; const d = v => { const s = String(v && v.toISODate ? v.toISODate() : (v || '')).slice(0, 10); return /^\\d{4}-\\d{2}-\\d{2}$/.test(s) ? s : ''; }; const today = window.SylvicsToday ? window.SylvicsToday() : m().format('YYYY-MM-DD'); const f = s => m(s, 'YYYY-MM-DD').format(s.slice(0, 4) === today.slice(0, 4) ? 'D MMM' : 'D MMM YYYY'); const n = k => k + (k === 1 ? ' day' : ' days'); const arr = v => !v ? [] : (typeof v.array === 'function' ? v.array() : (Array.isArray(v) ? v : [v])); if (/log/i.test(String(p.DecisionToMake_Status || ''))) { const l = arr(p.Logged_As).map(x => String(x && x.path ? x.path : x).replace(/^\\[\\[|\\]\\]$/g, '').split('|')[0].split('/').pop().replace(/\\.md$/, '').replace(/^\\S+\\s/, '')); return l.length ? { html: '<span style=\"font-size:0.8em;line-height:1.3\">' + l[0] + '</span>' } : 'Not linked yet'; } const r = d(p.revisit_date); if (!r) return 'No date'; return m(r, 'YYYY-MM-DD').format('D MMM YYYY');"
    subFormula: "const m = window.moment; const d = v => { const s = String(v && v.toISODate ? v.toISODate() : (v || '')).slice(0, 10); return /^\\d{4}-\\d{2}-\\d{2}$/.test(s) ? s : ''; }; const today = window.SylvicsToday ? window.SylvicsToday() : m().format('YYYY-MM-DD'); const f = s => m(s, 'YYYY-MM-DD').format(s.slice(0, 4) === today.slice(0, 4) ? 'D MMM' : 'D MMM YYYY'); const n = k => k + (k === 1 ? ' day' : ' days'); if (/log/i.test(String(p.DecisionToMake_Status || ''))) return 'The decision it became'; const r = d(p.revisit_date); if (!r) return 'When to look at it again'; const g = m(r).diff(m(today), 'days'); return g < 0 ? '<span style=\"color:#fcd34d\">' + n(-g) + ' ago: time to look again</span>' : (g === 0 ? 'Today' : 'In ' + n(g));"
    subEdit: revisit_date
    whenLabel:
      key: DecisionToMake_Status
      match: log
      label: Logged as
      icon: 📜
    folder: ""
    hideZero: false
  - color: "#cbd5e1"
    icon: ⏳
    label: Deadline
    key: ""
    type: formula
    options: []
    formula: "const m = window.moment; const d = v => { const s = String(v && v.toISODate ? v.toISODate() : (v || '')).slice(0, 10); return /^\\d{4}-\\d{2}-\\d{2}$/.test(s) ? s : ''; }; const today = window.SylvicsToday ? window.SylvicsToday() : m().format('YYYY-MM-DD'); const f = s => m(s, 'YYYY-MM-DD').format(s.slice(0, 4) === today.slice(0, 4) ? 'D MMM' : 'D MMM YYYY'); const n = k => k + (k === 1 ? ' day' : ' days'); const r = d(p['due-date']); return r ? m(r, 'YYYY-MM-DD').format('D MMM YYYY') : 'No deadline';"
    subFormula: "const m = window.moment; const d = v => { const s = String(v && v.toISODate ? v.toISODate() : (v || '')).slice(0, 10); return /^\\d{4}-\\d{2}-\\d{2}$/.test(s) ? s : ''; }; const today = window.SylvicsToday ? window.SylvicsToday() : m().format('YYYY-MM-DD'); const f = s => m(s, 'YYYY-MM-DD').format(s.slice(0, 4) === today.slice(0, 4) ? 'D MMM' : 'D MMM YYYY'); const n = k => k + (k === 1 ? ' day' : ' days'); if (/log/i.test(String(p.DecisionToMake_Status || ''))) { const arr = v => !v ? [] : (typeof v.array === 'function' ? v.array() : (Array.isArray(v) ? v : [v])); const l = arr(p.Logged_As)[0]; const pg = l && dv ? dv.page(String(l && l.path ? l.path : l).replace(/^\\[\\[|\\]\\]$/g, '').split('|')[0]) : null; const s = pg ? (d(pg.date) || d(pg.created)) : ''; const r = d(p['due-date']); if (!s) return 'Settled'; let t = 'Settled ' + f(s); if (r) { const g = m(r).diff(m(s), 'days'); t += g > 0 ? ' · ' + n(g) + ' early' : (g < 0 ? ' · ' + n(-g) + ' late' : ' · on the day'); } return t; } if (/archiv/i.test(String(p.DecisionToMake_Status || ''))) return 'Set aside'; const r = d(p['due-date']); if (!r) return 'Decide by when?'; const g = m(r).diff(m(today), 'days'); return g < 0 ? '<span style=\"color:#f87171\">Passed ' + n(-g) + ' ago</span>' : (g === 0 ? 'Today' : 'In ' + n(g));"
    subEdit: due-date
    folder: ""
    hideZero: false
Dashboard_Layout:
  - color: "#cbd5e1"
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
  - color: "#cbd5e1"
    icon: ❓
    label: QUESTION
    key: Question
    type: textarea
    autoHeight: true
    placeholder: "The choice, in one or two lines: what is being asked, and by whom."
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#cbd5e1"
    icon: 📝
    label: NOTES
    key: Brainstorming
    type: textarea
    autoHeight: true
    placeholder: "What speaks for and against, what you are waiting to know, what would settle it."
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#cbd5e1"
    icon: 📜
    label: LOGGED AS
    key: Logged_As
    type: link_list
    slim: true
    emptyText: "Not decided yet. Once it is, link the decision you logged"
    folder: 02 - Planning/3. 🚀 Execution/3. 📜 Decision Log
    options: []
    options2: []
    width: 100%
    hideZero: true
    allowCreate: false
  - color: "#cbd5e1"
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
  - color: "#cbd5e1"
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
  - color: "#cbd5e1"
    icon: 📚
    label: SOURCES & NOTES
    key: ""
    type: link_table
    slimEmpty: true
    linkKey: Resources
    linkFolder: 04 - Resources
    folder: ""
    options:
      - "in=04 - Resources"
      - "in=05 - Literature"
      - "in=06 - Permanent"
      - "in=03 - Areas"
      - "skip=3. 🌐 Entities"
      - "skip=Mentorship Hub"
      - "skip=Masterpage"
      - "direction=both"
      - "column=Note:file"
      - "column=Kind:folder"
      - "sort=name"
      - "limit=20"
      - "empty=No source or note is linked yet."
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#cbd5e1"
    icon: 🔗
    label: LINKED FROM
    key: ""
    type: linked_from
    slimEmpty: true
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#cbd5e1"
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
Dashboard_Prefix_Color: "#cbd5e1"
Dashboard_Background: ""
Dashboard_Header_Color: "#f1f5f9"
sylvics-up: "[[❓ 0. Pending Decisions Masterpage]]"
sylvics-fullscreen: true
cssclasses:
  - dashboard
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero
```
