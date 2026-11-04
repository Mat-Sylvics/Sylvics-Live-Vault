---
sylvics-up: "[[💭 0. Affirmations Masterpage]]"
sylvics-fullscreen: true
cssclasses:
  - sylvics-affirmation
  - sylvics-fullscreen
tags:
  - affirmation
syl-icon: 💭
Related_Identities: ""
notes: ""
answers: ""
Affirmation_Status: 🌱 Sown
Conviction_Score: 0
Evidence: ""
Statement: ""
Why_it_matters: ""
Strip_Emojis: true
Minimal_Setup: false
Centered_Title: true
Immersive_Header: Standard
Inherit_Blueprint: ""
Dashboard_Prefix_Color: "#c084fc"
Dashboard_Header_Color: "#8b5cf6"
Dashboard_Prefix: AFFIRMATION
Allow_Picker_Create: true
Header_Schema:
  - color: "#8b5cf6"
    icon: 🚦
    label: Status
    key: Affirmation_Status
    type: select
    options:
      - 🌱 Sown
      - 🌿 Sprouting
      - 🌳 Rooted
      - 🛑 Archived
    formula: ""
    folder: ""
    hideZero: false
  - color: "#8b5cf6"
    icon: 📈
    label: Conviction
    key: Conviction_Score
    type: progress
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#c084fc"
    icon: 🗣️
    label: Said
    key: ""
    type: formula
    options: []
    formula: "if (!dv || !p || !p.file) return '--'; const n = p.file.name; const days = []; for (const x of dv.pages('#type/daily-note')) { const s = x.affirmations_said; if (s && String(s).length > 2) days.push({ d: String(x.file.name).slice(0, 10), hit: String(s).includes(n) }); } if (!days.length) return 'Tick it in a daily note'; days.sort((a, b) => (a.d < b.d ? 1 : -1)); const end = window.moment(days[0].d, 'YYYY-MM-DD'); let n30 = 0, last = ''; for (const x of days) { if (x.hit && !last) last = x.d; if (end.diff(window.moment(x.d, 'YYYY-MM-DD'), 'days') < 30 && x.hit) n30++; } if (!last) return 'Not said yet'; const st = String(p.Affirmation_Status || ''); let gap = ''; if (/rooted/i.test(st) && n30 < 4) gap = 'Rooted, said ' + (n30 === 1 ? 'once' : n30 + ' times') + ' this month'; else if (/sown/i.test(st) && n30 >= 15) gap = 'Said most days: ready for Sprouting?'; const recent = window.moment().diff(end, 'days') <= 3; const when = 'last ' + window.moment(last, 'YYYY-MM-DD').format('D MMM') + (recent ? '' : ' · 30 days to ' + end.format('D MMM YYYY')); const c = n30 >= 12 ? '#c084fc' : (n30 >= 5 ? '#a78bfa' : '#94a3b8'); return { html: '<span style=\"display:flex;flex-direction:column;min-width:0\"><span style=\"color:' + c + '\">' + n30 + (n30 === 1 ? ' day' : ' days') + ' in 30</span><span style=\"font-size:0.62em;font-weight:600;color:rgba(255,255,255,0.5);margin-top:4px;letter-spacing:0\">' + [when, gap].filter(Boolean).join(' · ') + '</span></span>' };"
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🎭
    label: Archetype
    key: Related_Identities
    type: formula_folder_dropdown
    options: []
    formula: return dv.pages('"02 - Planning/1. ⚖️ Alignment/2. 🎭 Archetypes"').where(p => !p.file.path.includes("Template") && !p.file.path.includes("Masterpage"));
    folder: ""
    hideZero: false
Dashboard_Layout:
  - color: "#8b5cf6"
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
  - color: "#8b5cf6"
    icon: ⚔️
    label: THE OLD SENTENCE
    key: answers
    type: textarea
    autoHeight: true
    placeholder: "The limiting belief this one answers, in the words you hear it. Your archetype page lists them."
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#8b5cf6"
    icon: 🗣️
    label: THE NEW ONE, IN FULL
    key: Statement
    type: textarea
    autoHeight: true
    placeholder: "The rest of the sentence, if it has one: the line that makes it yours."
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#8b5cf6"
    icon: 💡
    label: WHY IT IS TRUE
    key: Evidence
    type: textarea
    autoHeight: true
    placeholder: "Why it is true: dates, numbers, things that happened. One per line."
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#8b5cf6"
    icon: ⏰
    label: WHEN TO SAY IT
    key: Why_it_matters
    type: textarea
    autoHeight: true
    placeholder: "When to say it: the moments the old belief comes back."
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#8b5cf6"
    icon: 📜
    label: Story
    key: ""
    type: tab_marker
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#8b5cf6"
    icon: 📜
    label: STORY
    key: notes
    type: textarea
    autoHeight: true
    placeholder: "The story: when you wrote it, and how your conviction has moved."
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#8b5cf6"
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
  - color: "#8b5cf6"
    icon: 🔹
    label: HABITS
    key: ""
    type: link_table
    slimEmpty: true
    folder: ""
    options:
      - in=02 - Planning/2. ♟️ Strategy/2. 🔹 Habits
      - skip=Masterpage
      - direction=both
      - column=Habit:file
      - column=Status:Habit_Status
      - column=Days:Habits_Repetition
      - sort=name
      - limit=20
      - empty=No habit is linked yet.
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#8b5cf6"
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
  - color: "#8b5cf6"
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
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero
```
