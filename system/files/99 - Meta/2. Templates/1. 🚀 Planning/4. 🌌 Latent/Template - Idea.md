---
tags:
  - spark
Idea_Status: 📥 Inbox
date: ""
Idea: '""'
Inspiration: '""'
Brainstorming: '""'
Resources: []
Dashboard_Prefix: IDEA
Header_Schema:
  - color: "#14b8a6"
    icon: 🚦
    label: Status
    key: Idea_Status
    type: select
    options:
      - 📥 Inbox
      - 🔍 Exploring
      - 🧠 Integrated
      - 🛑 Archived
    formula: ""
    subFormula: "const m = window.moment; const d = v => { const s = String(v && v.toISODate ? v.toISODate() : (v || '')).slice(0, 10); return /^\\d{4}-\\d{2}-\\d{2}$/.test(s) ? s : ''; }; const c = d(p.date) || d(p.created), u = d(p.updated); if (!m) return ''; const parts = []; if (c) parts.push('Captured ' + m(c, 'YYYY-MM-DD').format('D MMM YYYY')); if (u && u !== c) parts.push('touched ' + m(u, 'YYYY-MM-DD').format(u.slice(0, 4) === c.slice(0, 4) ? 'D MMM' : 'D MMM YYYY')); return parts.join(' · ');"
    subEdit: date
    folder: ""
    hideZero: false
  - color: "#14b8a6"
    icon: ➡️
    label: Next
    key: ""
    type: formula
    options: []
    formula: "const arr = v => !v ? [] : (typeof v.array === 'function' ? v.array() : (Array.isArray(v) ? v : [v])); const nm = v => String(v && v.path ? v.path : (v || '')).replace(/^\\[\\[|\\]\\]$/g, '').split('|')[0].split('/').pop().replace(/\\.md$/, '').replace(/^\\S+\\s/, ''); const plain = t => String(t || '').replace(/\\[\\[([^\\]|]+\\|)?([^\\]]+)\\]\\]/g, (a, b, c) => c.split('/').pop().replace(/^\\S+\\s/, '')).replace(/[*_`]/g, ''); if (/integrat/i.test(String(p.Idea_Status || ''))) { const b = arr(p.Became).map(nm).filter(Boolean); return b.length ? { html: '<span style=\"font-size:0.8em;line-height:1.3\">' + b[0] + (b.length > 1 ? '<span style=\"color:rgba(255,255,255,0.5)\"> +' + (b.length - 1) + '</span>' : '') + '</span>' } : 'Not linked yet'; } const s = arr(p.Steps).filter(x => x && typeof x === 'object'); const o = s.find(x => x.completed !== true); return o ? { html: '<span style=\"font-size:0.8em;line-height:1.3\">' + plain(o.text) + '</span>' } : (s.length ? 'Every step done' : 'No next step yet');"
    subFormula: "if (/integrat/i.test(String(p.Idea_Status || ''))) { const n = arr(p.Became).length; return n > 1 ? n + ' things it turned into' : 'What it turned into'; } const arr = v => !v ? [] : (Array.isArray(v) ? v : (typeof v.array === 'function' ? v.array() : [v])); const s = arr(p.Steps).filter(x => x && typeof x === 'object'); return s.length ? s.filter(x => x.completed === true).length + ' of ' + s.length + ' steps done' : 'Add one small step below';"
    whenLabel:
      key: Idea_Status
      match: integrat
      label: Became
      icon: 🌳
    folder: ""
    hideZero: false
Dashboard_Layout:
  - color: "#14b8a6"
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
  - color: "#14b8a6"
    icon: 💡
    label: IDEA
    key: Idea
    type: textarea
    autoHeight: true
    placeholder: "The idea in a few lines: what it is, and what it is not."
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#14b8a6"
    icon: 🌱
    label: WHERE IT CAME FROM
    key: Inspiration
    type: textarea
    autoHeight: true
    placeholder: "The moment, the walk, the conversation or the book that started it."
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#14b8a6"
    icon: 📝
    label: NOTES
    key: Brainstorming
    type: textarea
    autoHeight: true
    placeholder: "Anything since: offers, doubts, versions, the line you do not want to lose."
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#14b8a6"
    icon: ➡️
    label: NEXT STEPS
    key: Steps
    type: action_items
    hideProgress: true
    itemName: step
    itemNames: steps
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#14b8a6"
    icon: 🌳
    label: BECAME
    key: Became
    type: link_list
    slim: true
    emptyText: "Not yet. Link what it turns into: a project, a habit, a note"
    folder: "*"
    options: []
    options2: []
    width: 100%
    hideZero: true
    allowCreate: false
  - color: "#14b8a6"
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
  - color: "#14b8a6"
    icon: 📍
    label: PLACES & PEOPLE
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
      - "empty=No place or person is linked yet."
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#14b8a6"
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
      - "skip=3. 🌐 Entities"
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
  - color: "#14b8a6"
    icon: 🚀
    label: PROJECTS, HABITS & GOALS
    key: ""
    type: link_table
    slimEmpty: true
    folder: ""
    options:
      - "in=02 - Planning/2. ♟️ Strategy"
      - "in=02 - Planning/3. 🚀 Execution"
      - "in=08 - Archive/2. Planning"
      - "in=03 - Areas"
      - "skip=Mentorship Hub"
      - "skip=Latent"
      - "skip=Masterpage"
      - "direction=both"
      - "column=Note:file"
      - "column=Kind:folder"
      - "sort=name"
      - "limit=20"
      - "empty=Nothing in your plans is linked yet: what this could feed."
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#14b8a6"
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
  - color: "#14b8a6"
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
Dashboard_Prefix_Color: "#99f6e4"
Dashboard_Header_Color: "#14b8a6"
sylvics-up: "[[🔍 0. Ideas Masterpage]]"
sylvics-fullscreen: true
syl-icon: 💡
cssclasses:
  - dashboard
Steps: []
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero
```
