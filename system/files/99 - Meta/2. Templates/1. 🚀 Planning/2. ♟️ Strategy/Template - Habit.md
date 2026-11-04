---
is_shutdown_ritual: false
sylvics-fullscreen: true
sylvics-up: '[[🔹 0. Habits Masterpage]]'
tags:
- habit
Area: null
Icon: 🔹
Related_Goals: null
Related_Identities: null
Related_Skills: null
Related_Affirmations: null
notes: ''
Habit_Status:
- 🧱 Building
Habits_Repetition:
- Mon
- Tue
- Wed
- Thu
- Fri
- Sat
- Sun
Minimum_viable: ''
Order: 1
Routine: null
What_is_it: ''
behavior: ''
trigger: ''
Dashboard_Layout:
  - color: "#0369a1"
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
  - color: "#0369a1"
    icon: 🎯
    label: GOAL
    key: Related_Goals
    type: link_list
    slim: true
    folder: 02 - Planning/2. ♟️ Strategy/1. 🎯 Goals
    options: []
    options2: []
    width: 50%
    hideZero: true
    allowCreate: true
  - color: "#0369a1"
    icon: 🎭
    label: SELF
    key: Related_Identities
    type: link_list
    slim: true
    folder: 02 - Planning/1. ⚖️ Alignment/2. 🎭 Archetypes
    options: []
    options2: []
    width: 50%
    hideZero: true
    allowCreate: true
  - color: "#0369a1"
    icon: 💭
    label: AFFIRMATION
    key: Related_Affirmations
    type: link_list
    slim: true
    folder: 02 - Planning/1. ⚖️ Alignment/3. 💭 Affirmations
    options: []
    options2: []
    width: 50%
    hideZero: true
    allowCreate: true
  - color: "#0369a1"
    icon: ♦️
    label: SKILL
    key: Related_Skills
    type: link_list
    slim: true
    folder: 02 - Planning/2. ♟️ Strategy/3. ♦️ Skills
    options: []
    options2: []
    width: 50%
    hideZero: true
    allowCreate: true
  - color: "#0369a1"
    icon: 🔥
    label: THE YEAR
    key: ""
    type: habit_year
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#0369a1"
    icon: 🎯
    label: Plan
    key: ""
    type: tab_marker
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#0369a1"
    icon: 📖
    label: WHAT IT IS
    key: What_is_it
    type: textarea
    autoHeight: true
    placeholder: "The habit in one or two plain sentences: what, and how often."
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#0369a1"
    icon: ⚡
    label: TRIGGER
    key: trigger
    type: textarea
    autoHeight: true
    placeholder: "When and where it starts: after what, at what time, in which place."
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#0369a1"
    icon: 🎬
    label: BEHAVIOR
    key: behavior
    type: textarea
    autoHeight: true
    placeholder: "What doing it actually looks like, step by step if it helps."
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#0369a1"
    icon: 🛡️
    label: MINIMUM VERSION
    key: Minimum_viable
    type: textarea
    autoHeight: true
    placeholder: "The smallest thing that still counts on a bad day."
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#0369a1"
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
  - color: "#0369a1"
    icon: 📜
    label: STORY
    key: notes
    type: textarea
    autoHeight: true
    placeholder: "How it has gone: the year in one line, what changed, what keeps it alive."
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#0369a1"
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
  - color: "#0369a1"
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
  - color: "#0369a1"
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
Header_Schema:
  - color: "#0369a1"
    icon: 🚦
    label: Status
    key: Habit_Status
    type: select
    options:
      - 🧱 Building
      - 🔄 Consistent
      - ⚙️ Automatic
      - ⏸️ Paused
      - 🛑 Archived
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🧭
    label: Area
    key: Area
    type: formula_folder_dropdown
    options: []
    formula: "return dv.pages('\"03 - Areas\"').where(p => p.file.name.includes(\"Masterpage\") && p.file.name.startsWith(\"0.\") && p.file.folder.split('/').length === 2);"
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🕒
    label: Routine
    key: Routine
    type: select
    options:
      - ⛅ Morning Routine
      - ☀️ Afternoon Routine
      - 🌘 Evening Routine
    formula: ""
    subFormula: "const o = p.Order; const s = p.is_shutdown_ritual === true || p.is_shutdown_ritual === 'true'; const parts = []; if (o !== undefined && o !== null && o !== '') parts.push('#' + o + ' in the list'); if (s) parts.push('🌙 part of the shutdown'); return parts.join(' · ');"
    subTitle: Place in the routine
    subFields:
      - key: Order
        label: Position in the routine list (1 = first)
        type: number
      - key: is_shutdown_ritual
        label: Part of the evening shutdown?
        type: toggle
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🗓️
    label: Days
    key: Habits_Repetition
    type: multi_select
    options:
      - Mon
      - Tue
      - Wed
      - Thu
      - Fri
      - Sat
      - Sun
    formula: ""
    folder: ""
    hideZero: false
  - color: "#0369a1"
    icon: ✅
    label: Done
    key: ""
    type: formula
    options: []
    formula: "if (!dv || !p || !p.file) return '--'; const me = p.file.name; const arr = v => !v ? [] : (typeof v.array === 'function' ? v.array() : (Array.isArray(v) ? v : [])); const lk = v => String(v && v.path ? v.path : (v || '')); const today = window.moment().format('YYYY-MM-DD'); const days = []; for (const pg of dv.pages('#type/daily-note')) { const d = String(pg.file.name).slice(0, 10); if (!/^\\d{4}-\\d{2}-\\d{2}$/.test(d) || d > today) continue; let sch = false, done = false, logged = false; for (const k of ['habits', 'shutdown']) for (const h of arr(pg[k])) { if (!h) continue; if (h.completed === true) logged = true; if (lk(h.name).includes(me)) { sch = true; if (h.completed === true) done = true; } } if (sch) days.push({ d, done, logged }); else if (logged) days.push({ d, none: true, logged }); } const lg = days.filter(x => x.logged).map(x => x.d).sort(); if (!lg.length) return 'Not ticked yet'; const end = lg[lg.length - 1]; const e = window.moment(end, 'YYYY-MM-DD'); let a = 0, b = 0; for (const x of days) { if (x.none || !x.logged || x.d > end) continue; if (e.diff(window.moment(x.d, 'YYYY-MM-DD'), 'days') < 30) { b++; if (x.done) a++; } } if (!b) return 'Not scheduled lately'; const r = Math.round(a * 100 / b); const c = r >= 80 ? '#34d399' : (r >= 50 ? '#fbbf24' : '#f87171'); const recent = window.moment().diff(e, 'days') <= 3; const st = String(p.Habit_Status || ''); let gap = ''; if (/automatic|consistent/i.test(st) && r < 50) gap = 'Marked ' + st.replace(/^\\S+\\s/, '') + ', done ' + r + '%'; else if (/building/i.test(st) && r >= 90) gap = 'Done ' + r + '%: ready for Consistent?'; return { html: '<span style=\"display:flex;flex-direction:column;min-width:0\"><span style=\"color:' + c + '\">' + r + '%</span><span style=\"font-size:0.62em;font-weight:600;color:rgba(255,255,255,0.5);margin-top:4px;letter-spacing:0\">' + [a + ' of ' + b + ' days · ' + (recent ? 'last 30 days' : '30 days to ' + e.format('D MMM YYYY')), gap].filter(Boolean).join(' · ') + '</span></span>' };"
    folder: ""
    hideZero: false
Strip_Emojis: true
Minimal_Setup: false
Centered_Title: true
Immersive_Header: Standard
Inherit_Blueprint: ''
Dashboard_Prefix_Color: "#0ea5e9"
Dashboard_Header_Color: '#0369a1'
syl-icon: 🔹
Dashboard_Prefix: HABIT
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero
```
