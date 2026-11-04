---
sylvics-fullscreen: true
sylvics-up: '[[🎯 0. Goals Masterpage]]'
tags:
- goal
Area: null
Progress: ""
Related_Identities: null
notes: ""
Target_Date: ""
Achieved_Date: ""
Goal_Status: 🗺️ Planning
Key_obstacles: ""
Success_criteria: ""
Why_this_goal: ""
outcome: ""
Dashboard_Prefix: GOAL
Dashboard_Style: immersive
Strip_Emojis: true
Minimal_Setup: false
Centered_Title: true
Immersive_Header: Standard
Inherit_Blueprint: ''
Dashboard_Prefix_Color: "#f97316"
Dashboard_Header_Color: '#c2410c'
Dashboard_Layout:
  - color: "#c2410c"
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
  - color: "#c2410c"
    icon: 🎭
    label: ARCHETYPE
    key: Related_Identities
    type: link_list
    slim: true
    folder: 02 - Planning/1. ⚖️ Alignment/2. 🎭 Archetypes
    options: []
    options2: []
    width: 50%
    hideZero: true
    allowCreate: true
  - color: "#c2410c"
    icon: ♦️
    label: SKILLS
    key: Related_Skills
    type: link_list
    slim: true
    folder: 02 - Planning/2. ♟️ Strategy/3. ♦️ Skills
    options: []
    options2: []
    width: 50%
    hideZero: true
    allowCreate: true
  - color: "#c2410c"
    icon: 🏁
    label: OUTCOME
    key: outcome
    type: textarea
    autoHeight: true
    placeholder: "What done looks like, in one or two sentences anyone could check."
    badge: ★ essential
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#c2410c"
    icon: ✅
    label: SUCCESS CRITERIA
    key: Success_criteria
    type: textarea
    autoHeight: true
    placeholder: "One per line. Mark each ✅ when it is met (or ❌): Progress counts them."
    badge: ★ essential
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#c2410c"
    icon: 📂
    label: PROJECTS
    key: ""
    type: link_table
    slimEmpty: true
    linkKey: Related_Projects
    linkFolder: 02 - Planning/3. 🚀 Execution/1. 📂 Projects
    folder: ""
    options:
      - in=02 - Planning/3. 🚀 Execution/1. 📂 Projects
      - skip=Masterpage
      - direction=both
      - column=Project:file
      - column=Status:Project_Status
      - column=Progress:Progress
      - column=Deadline:due-date
      - sort=due-date
      - limit=20
      - empty=No project is linked yet.
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#c2410c"
    icon: 🔹
    label: HABITS
    key: ""
    type: link_table
    slimEmpty: true
    linkKey: Related_Habits
    linkFolder: 02 - Planning/2. ♟️ Strategy/2. 🔹 Habits
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
  - color: "#c2410c"
    icon: 📌
    label: TASKS
    key: ""
    type: link_table
    slimEmpty: true
    linkKey: Related_Tasks
    linkFolder: 02 - Planning/3. 🚀 Execution/2. 📌 Tasks
    folder: ""
    options:
      - in=02 - Planning/3. 🚀 Execution/2. 📌 Tasks
      - skip=Masterpage
      - direction=both
      - column=Task:file
      - column=Status:Task_Status
      - column=Priority:Priority
      - column=Due:due-date
      - sort=due-date
      - done=Task_Status
      - limit=6
      - empty=No task is linked yet.
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#c2410c"
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
  - color: "#c2410c"
    icon: 🔥
    label: WHY IT MATTERS
    key: Why_this_goal
    type: textarea
    autoHeight: true
    placeholder: "Why this, why now: who in you wants it."
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#c2410c"
    icon: 🚧
    label: OBSTACLES
    key: Key_obstacles
    type: textarea
    autoHeight: true
    placeholder: "What could stop it. One per line."
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#c2410c"
    icon: 📜
    label: STORY
    key: notes
    type: textarea
    autoHeight: true
    placeholder: "How it is going, and later how it went: dates, turns, what it took."
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#c2410c"
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
  - color: "#c2410c"
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
  - color: "#c2410c"
    icon: 📓
    label: IN THE JOURNAL
    key: ""
    type: journal_mentions
    slimEmpty: true
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#c2410c"
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
  - color: "#c2410c"
    icon: 🚦
    label: Status
    key: Goal_Status
    type: select
    options:
      - 🗺️ Planning
      - 🏃‍♂️ In Progress
      - 🏆 Achieved
      - 🌗 Closed short
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
    icon: 🗓️
    label: Target
    key: Target_Date
    type: date
    options: []
    formula: ""
    subFormula: "const m = window.moment; const d = v => v ? m(String(v).slice(0, 10), 'YYYY-MM-DD') : null; const a = d(p.Achieved_Date), t = d(p.Target_Date), c = d(p.created); if (a && a.isValid()) { let s = 'Achieved ' + a.format('D MMM YYYY'); if (t && t.isValid()) { const g = Math.round(a.diff(t, 'days', true)); s += g > 0 ? ' · ' + g + (g === 1 ? ' day late' : ' days late') : (g < 0 ? ' · ' + (-g) + (g === -1 ? ' day early' : ' days early') : ' · on the day'); } if (c && c.isValid()) { const mo = Math.max(1, Math.round(a.diff(c, 'months', true))); s += ' · ' + mo + (mo === 1 ? ' month' : ' months'); } return s; } const cl = d(p.Closed_Date); if (/closed/i.test(String(p.Goal_Status || ''))) { if (!cl || !cl.isValid()) return 'Closed · add the date'; const pr = p.Progress === 0 || p.Progress ? Math.round(parseFloat(p.Progress)) : null; return 'Closed ' + cl.format('D MMM YYYY') + (pr !== null && !isNaN(pr) ? ' · ended at ' + pr + '%' : ''); } if (/achiev/i.test(String(p.Goal_Status || ''))) return 'Achieved · add the date'; if (!t || !t.isValid()) return 'No target date yet'; const left = t.clone().startOf('day').diff(m().startOf('day'), 'days'); return left < 0 ? 'Passed ' + (-left) + ' days ago' : (left === 0 ? 'Due today' : left + (left === 1 ? ' day left' : ' days left'));"
    subEdit: Achieved_Date|Closed_Date
    folder: ""
    hideZero: false
  - color: "#c2410c"
    icon: 📈
    label: Progress
    key: ""
    type: formula
    options: []
    formula: "if (!p) return '--'; const lines = String(p.Success_criteria || '').split('\\n').map(l => l.trim()).filter(l => /^[-*]\\s+/.test(l)); const anyMark = lines.some(l => /✅|❌/.test(l)); const marked = anyMark ? lines : []; const met = marked.filter(l => { const a = l.lastIndexOf('✅'), b = l.lastIndexOf('❌'); return a > b; }).length; const typed = p.Progress === 0 || p.Progress ? parseFloat(p.Progress) : NaN; const pct = Math.max(0, Math.min(100, Math.round(!isNaN(typed) ? typed : (marked.length ? met * 100 / marked.length : 0)))); const crit = marked.length ? met + ' of ' + marked.length + ' criteria met' : ''; const sub = crit; const col = /achiev/i.test(String(p.Goal_Status || '')) ? '#fbbf24' : (/closed/i.test(String(p.Goal_Status || '')) ? '#94a3b8' : '#f97316'); return { html: '<span style=\"display:flex;flex-direction:column;min-width:0;width:100%\"><span style=\"color:#fff\">' + pct + '%</span><span style=\"display:block;height:6px;border-radius:3px;background:rgba(255,255,255,0.1);margin-top:6px;overflow:hidden\"><span style=\"display:block;height:100%;width:' + pct + '%;background:' + col + ';border-radius:3px\"></span></span>' + (sub ? '<span style=\"font-size:0.6em;font-weight:600;color:rgba(255,255,255,0.55);margin-top:6px;letter-spacing:0;white-space:normal\">' + sub + '</span>' : '') + '</span>' };"
    folder: ""
    hideZero: false
syl-icon: 🎯
Related_Habits: []
Related_Projects: []
Banner: ""
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---


```sylvics-view
EntityDashboardHero | { file: dv.current() }
```
