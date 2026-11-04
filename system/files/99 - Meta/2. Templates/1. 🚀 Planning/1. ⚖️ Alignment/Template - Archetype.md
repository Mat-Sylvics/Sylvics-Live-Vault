---
sylvics-up: "[[🎭 0. Archetypes Masterpage]]"
sylvics-fullscreen: true
cssclasses:
  - sylvics-archetype
tags:
  - identity
syl-icon: 🎭
Related_Areas: ""
serves_values: []
notes: ""
I_am_statement: ""
Archetype_Status: 🌱 Aspirational
Limiting_beliefs: ""
Off_limits: ""
beliefs: ""
traits: ""
cover: ""
Strip_Emojis: true
Minimal_Setup: false
Centered_Title: true
Immersive_Header: Standard
Inherit_Blueprint: ""
Dashboard_Prefix_Color: "#fbbf24"
Dashboard_Header_Color: "#10b981"
Dashboard_Prefix: ARCHETYPE
Allow_Picker_Create: true
Dashboard_Layout:
  - color: "#10b981"
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
  - color: "#10b981"
    icon: 🗣️
    label: I AM
    key: I_am_statement
    type: textarea
    autoHeight: true
    placeholder: "Who you are in this part of your life, in one sentence you could say out loud. Start with “I”. For example: I climb for decades, not for Saturdays."
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#10b981"
    icon: 🧭
    label: SERVES
    key: ""
    type: memory_links
    slim: true
    kinds:
      - value
    fields:
      value: serves_values
    emptyText: "No value yet: which values does this self live out?"
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#10b981"
    icon: 🛠️
    label: TRAITS
    key: traits
    type: textarea
    autoHeight: true
    placeholder: "What this self does, one per line, each starting with “I”. For example: I read the problem from the ground."
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#10b981"
    icon: 🧠
    label: CORE BELIEFS
    key: beliefs
    type: textarea
    autoHeight: true
    placeholder: "What this self believes. Link a belief note with [[ ]] or write it plainly."
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#10b981"
    icon: 🚫
    label: OFF LIMITS
    key: Off_limits
    type: textarea
    autoHeight: true
    placeholder: "What this self does not do, even on a bad day."
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#10b981"
    icon: 🚧
    label: LIMITING BELIEFS
    key: Limiting_beliefs
    type: textarea
    autoHeight: true
    placeholder: "The sentences that pull you back, written the way you hear them."
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#10b981"
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
  - color: "#10b981"
    icon: 📜
    label: STORY
    key: notes
    type: textarea
    autoHeight: true
    placeholder: "The story: why this self, what changed, and who helps."
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#10b981"
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
  - color: "#10b981"
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
  - color: "#10b981"
    icon: 💭
    label: AFFIRMATIONS
    key: ""
    type: link_table
    slimEmpty: true
    folder: ""
    options:
      - in=02 - Planning/1. ⚖️ Alignment/3. 💭 Affirmations
      - skip=Masterpage
      - direction=both
      - column=Affirmation:file
      - column=Status:Affirmation_Status
      - column=Conviction:Conviction_Score
      - sort=Conviction_Score
      - order=desc
      - limit=20
      - empty=No affirmation is linked yet.
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#10b981"
    icon: 🎯
    label: GOALS
    key: ""
    type: link_table
    slimEmpty: true
    folder: ""
    options:
      - in=02 - Planning/2. ♟️ Strategy/1. 🎯 Goals
      - skip=Masterpage
      - direction=both
      - column=Goal:file
      - column=Status:Goal_Status
      - column=Quarter:Quarter
      - column=Progress:Progress
      - sort=Progress
      - order=desc
      - limit=20
      - empty=No goal is linked yet.
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#10b981"
    icon: 📂
    label: PROJECTS
    key: ""
    type: link_table
    slimEmpty: true
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
  - color: "#10b981"
    icon: ♦️
    label: SKILLS
    key: ""
    type: link_table
    slimEmpty: true
    folder: ""
    options:
      - in=02 - Planning/2. ♟️ Strategy/3. ♦️ Skills
      - skip=Masterpage
      - direction=both
      - column=Skill:file
      - column=Status:Skill_Status
      - column=Proficiency:Proficiency_Score
      - column=Hours:Practice_Hours
      - sort=Proficiency_Score
      - order=desc
      - limit=20
      - empty=No skill is linked yet.
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#10b981"
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
  - color: "#10b981"
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
  - color: "#10b981"
    icon: 🚦
    label: Status
    key: Archetype_Status
    type: select
    options:
      - 🌱 Aspirational
      - 🏗️ Developing
      - 👑 Embodied
      - 🛑 Archived
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🧭
    label: Area
    key: Related_Areas
    type: formula_folder_dropdown
    options: []
    formula: return dv.pages('"03 - Areas"').where(p => p.file.name.includes("Masterpage") && p.file.name.startsWith("0.") && p.file.folder.split('/').length === 2);
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🌿
    label: Lived
    key: ""
    type: formula
    options: []
    formula: "if (!dv || !p || !p.file) return '--'; const lk = v => String(v && v.path ? v.path : (v || '')); const il = p.file.inlinks; const ins = (il && typeof il.array === 'function' ? il.array() : Array.from(il || [])).map(l => dv.page(l.path)).filter(x => x && x.file && !String(x.file.path).startsWith('08 - Archive/')); const habits = ins.filter(x => x.Habit_Status !== undefined && x.Habit_Status !== null).map(x => x.file.name); const goals = ins.filter(x => x.Goal_Status !== undefined && x.Goal_Status !== null); const met = goals.filter(g => /achiev/i.test(String(g.Goal_Status))).length; const mine = h => h && h.name && habits.some(n => lk(h.name).includes(n)); let rate = null; let endDay = ''; if (habits.length) { const today = window.moment().format('YYYY-MM-DD'); const all = dv.pages('#type/daily-note').where(x => Array.isArray(x.habits) && x.habits.some(mine) && String(x.file.name).slice(0, 10) <= today).sort(x => x.file.name, 'desc').array(); const last = all.find(x => x.habits.some(h => h && h.completed === true)); const days = last ? all.filter(x => x.file.name <= last.file.name) : []; if (days.length) { const end = window.moment(String(days[0].file.name).slice(0, 10), 'YYYY-MM-DD'); endDay = String(days[0].file.name).slice(0, 10); let done = 0, due = 0; for (const d of days) { const m = window.moment(String(d.file.name).slice(0, 10), 'YYYY-MM-DD'); if (end.diff(m, 'days') >= 30) break; for (const h of d.habits) if (mine(h)) { due++; if (h.completed === true) done++; } } if (due) rate = Math.round(done * 100 / due); } } const parts = []; if (rate !== null) parts.push(rate + '% of habit days'); const open = goals.filter(g => !/achiev/i.test(String(g.Goal_Status)) && !/abandon|archiv|dropped/i.test(String(g.Goal_Status))); if (met) parts.push(met + (met === 1 ? ' goal met' : ' goals met')); if (open.length) { const pr = Math.round(open.reduce((a, g) => a + (parseFloat(g.Progress) || 0), 0) / open.length); parts.push(open.length === 1 ? 'goal at ' + pr + '%' : open.length + ' goals at ' + pr + '%'); } if (!parts.length) return 'Link a habit or a goal'; const c = rate === null ? '#e5e7eb' : (rate >= 70 ? '#34d399' : (rate >= 40 ? '#fbbf24' : '#f87171')); const st = String(p.Archetype_Status || ''); const recent = !endDay || window.moment().diff(window.moment(endDay, 'YYYY-MM-DD'), 'days') <= 3; const when = rate === null ? '' : (recent ? 'Last 30 days' : '30 days to ' + window.moment(endDay, 'YYYY-MM-DD').format('D MMM YYYY')); let gap = ''; if (rate !== null && /embodied/i.test(st) && rate < 50) gap = 'Marked Embodied, lived ' + rate + '% this month'; else if (rate !== null && /aspirational/i.test(st) && rate >= 80) gap = 'Lived more than Aspirational suggests'; return { html: '<span style=\"display:flex;flex-direction:column;min-width:0\"><span style=\"color:' + c + '\">' + parts.join(' · ') + '</span>' + ((gap || when) ? '<span style=\"font-size:0.62em;font-weight:600;color:rgba(255,255,255,0.5);margin-top:4px;letter-spacing:0\">' + [when, gap].filter(Boolean).join(' · ') + '</span>' : '') + '</span>' };"
    folder: ""
    hideZero: false
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---


```sylvics-view
EntityDashboardHero
```
