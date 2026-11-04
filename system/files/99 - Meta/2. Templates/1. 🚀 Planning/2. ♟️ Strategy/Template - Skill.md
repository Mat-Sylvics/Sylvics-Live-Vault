---
sylvics-fullscreen: true
sylvics-up: '[[♦️ 0. Skills Masterpage]]'
tags:
- skill
Related_Identities: null
Action_Items: []
Skill_Status:
- null
Proficiency_Score: 0
Practice_Hours: 0
cover: ''
acquisition_strategy: ''
practical_application: ''
notes: ''
Dashboard_Layout:
  - color: "#be123c"
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
  - color: "#be123c"
    icon: 📍
    label: WHERE I AM
    key: notes
    type: textarea
    autoHeight: true
    placeholder: "Where the skill stands today, in a few honest lines: what is sound, what still breaks, what is next."
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#be123c"
    icon: ⏱️
    label: SESSIONS
    key: Log
    type: skill_logger
    folder: ""
    options: []
    options2: []
    width: 66%
    hideZero: false
    allowCreate: true
  - color: "#be123c"
    icon: ☑️
    label: NEXT STEPS
    key: Action_Items
    type: action_items
    hideProgress: true
    flush: true
    folder: ""
    options: []
    options2: []
    width: 33%
    hideZero: false
    allowCreate: true
  - color: "#be123c"
    icon: 🧭
    label: Plan
    key: ""
    type: tab_marker
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#be123c"
    icon: 🔹
    label: COUNTS AS PRACTICE
    key: Practice_Habits
    type: link_list
    slim: true
    emptyText: No habit counts as practice yet
    folder: 02 - Planning/2. ♟️ Strategy/2. 🔹 Habits
    options: []
    options2: []
    width: 100%
    hideZero: true
    allowCreate: true
  - color: "#be123c"
    icon: 🧭
    label: LEARNING PLAN
    key: acquisition_strategy
    type: textarea
    autoHeight: true
    placeholder: "How you learn it: from whom, how often, what you check, the one rule you keep."
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#be123c"
    icon: ⚡
    label: WHERE I USE IT
    key: practical_application
    type: textarea
    autoHeight: true
    placeholder: "Where the skill shows up in your life and work, with links to the places, projects and notes."
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#be123c"
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
  - color: "#be123c"
    icon: 📚
    label: SOURCES & NOTES
    key: ""
    type: link_table
    slimEmpty: true
    linkKey: Related_Sources
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
  - color: "#be123c"
    icon: 👥
    label: PEOPLE & CLIENTS
    key: ""
    type: link_table
    slimEmpty: true
    folder: ""
    options:
      - "in=04 - Resources/3. 🌐 Entities/1. 👥 People"
      - "in=03 - Areas/8. 🧘 Spirituality & Meaning/3. 🤲 Service & Altruism/3. Mentorship Hub"
      - "skip=Masterpage"
      - "direction=both"
      - "column=Person:file"
      - "column=Kind:folder"
      - "sort=name"
      - "limit=20"
      - "empty=No one is linked yet: a teacher, a partner, someone you learn from."
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#be123c"
    icon: 📂
    label: PROJECTS
    key: ""
    type: link_table
    slimEmpty: true
    folder: ""
    options:
      - "in=02 - Planning/3. 🚀 Execution/1. 📂 Projects"
      - "skip=Masterpage"
      - "direction=both"
      - "column=Project:file"
      - "column=Status:Project_Status"
      - "column=Progress:Progress"
      - "column=Deadline:due-date"
      - "sort=due-date"
      - "done=Project_Status"
      - "limit=20"
      - "empty=No project is linked yet."
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#be123c"
    icon: 🎯
    label: GOALS
    key: ""
    type: link_table
    slimEmpty: true
    folder: ""
    options:
      - "in=02 - Planning/2. ♟️ Strategy/1. 🎯 Goals"
      - "skip=Masterpage"
      - "direction=both"
      - "column=Goal:file"
      - "column=Status:Goal_Status"
      - "column=Target:Achieved_Date|Closed_Date|Target_Date"
      - "column=Progress:Progress"
      - "sort=Target_Date"
      - "done=Goal_Status"
      - "limit=20"
      - "empty=No goal is linked yet."
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#be123c"
    icon: 🔹
    label: HABITS
    key: ""
    type: link_table
    slimEmpty: true
    folder: ""
    options:
      - "in=02 - Planning/2. ♟️ Strategy/2. 🔹 Habits"
      - "skip=Masterpage"
      - "direction=both"
      - "column=Habit:file"
      - "column=Status:Habit_Status"
      - "column=Days:Habits_Repetition"
      - "sort=name"
      - "limit=20"
      - "empty=No habit is linked yet."
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#be123c"
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
  - color: "#be123c"
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
  - color: "#be123c"
    icon: 🚦
    label: Status
    key: Skill_Status
    type: select
    options:
      - ⚪ Not Started
      - 🟡 Learning
      - 🟢 Maintaining
      - 👑 Mastered
      - 🛑 Archived
    formula: ""
    folder: ""
    hideZero: false
  - color: "#be123c"
    icon: 📈
    label: Proficiency
    key: Proficiency_Score
    type: progress
    options: []
    formula: ""
    subFormula: "const m = window.moment; const d = p.Proficiency_Rated ? String(p.Proficiency_Rated).slice(0, 10) : ''; return d && m ? 'rated ' + m(d, 'YYYY-MM-DD').format('D MMM YYYY') : 'Your own rating, 0 to 100';"
    subEdit: Proficiency_Rated
    folder: ""
    hideZero: false
  - color: "#be123c"
    icon: ⏱️
    label: Practice
    key: ""
    type: formula
    options: []
    formula: "const r = window.SylvicsSkillPractice ? window.SylvicsSkillPractice(p, dv) : null; if (!r) return '--'; return { html: '<span style=\"display:flex;flex-direction:column;width:100%;gap:6px\"><span>' + r.totalText + '</span><span title=\"Level ' + r.level + ': ' + r.into + '% of the way to ' + r.next + 'h\" style=\"display:block;height:5px;border-radius:3px;background:rgba(255,255,255,0.1);overflow:hidden\"><span style=\"display:block;height:100%;width:' + r.into + '%;background:#fb7185\"></span></span></span>' };"
    subFormula: "const r = window.SylvicsSkillPractice ? window.SylvicsSkillPractice(p, dv) : null; return r ? r.line : '';"
    subTitle: How practice is counted
    subFields:
      - key: Session_Length
        label: Hours per session of a practice habit (0.5 = 30 minutes)
        type: number
      - key: Practice_Before
        label: Hours of practice before you started logging here
        type: number
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
Dashboard_Prefix: SKILL
Dashboard_Prefix_Color: "#fb7185"
Dashboard_Header_Color: '#be123c'
Strip_Emojis: true
Minimal_Setup: false
Centered_Title: true
Immersive_Header: Standard
Inherit_Blueprint: ''
syl-icon: ♦️
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero
```

<div style="display:none;">

## Practice Log
- *Log past practice sessions here...*
</div>
