---
tags:
- project
Area: null
Project_Status: ⚪ Not Started
syl-icon: 📂
Progress: 0
scheduled-date: null
due-date: null
completed-date: null
Related_Goals: null
Related_Skills: null
notes: ''
Confidence: 0
Ease: 0
Financial_Profile: null
Impact: 0
constraints: ''
outcome: ''
progress_feedback: ''
success_criteria: ''
risks: ''
Tracking_Start: null
Total_Time: 0
Time_Logs: null
sylvics-fullscreen: true
sylvics-up: '[[📂 0. Projects Masterpage]]'
cssclasses:
- dashboard
- cards
Practice_Hours: 0
Header_Schema:
  - color: "#9333ea"
    icon: 🚦
    label: Status
    key: Project_Status
    type: select
    options:
      - 💡 Idea / Brainstorming
      - ⚪ Not Started
      - 📝 Planning
      - 🏃 In Progress
      - ⏳ Waiting / Blocked
      - ⏸️ Paused
      - ❌ Cancelled
      - 🏆 Achieved
      - 🛑 Archived
    formula: ""
    subFormula: "const parts = []; if (p.Finances) parts.push(String(p.Finances)); const ice = parseFloat(p.ICE_Score); if (!isNaN(ice) && ice > 0) parts.push('ICE ' + ice); return parts.join(' · ') || 'Finances';"
    subTitle: Finances
    subFields:
      - key: Finances
        label: What this project does to your money
        type: select
        options:
          - "📈 Generating"
          - "🛡️ Protecting"
          - "💸 Consuming"
          - "⚖️ Neutral"
    folder: ""
    hideZero: false
  - color: "#9333ea"
    icon: 📈
    label: Progress
    key: ""
    type: formula
    options: []
    formula: "const r = window.SylvicsProject ? window.SylvicsProject(p, dv) : null; if (!r) return '--'; return { html: '<span style=\"display:flex;flex-direction:column;width:100%;gap:6px\"><span>' + r.pct + '%</span><span style=\"display:block;height:6px;border-radius:3px;background:rgba(255,255,255,0.1);overflow:hidden\"><span style=\"display:block;height:100%;width:' + r.pct + '%;background:#a855f7\"></span></span></span>' };"
    subFormula: "const r = window.SylvicsProject ? window.SylvicsProject(p, dv) : null; return r ? r.line : '';"
    folder: ""
    hideZero: false
  - color: "#9333ea"
    icon: ⏳
    label: Deadline
    key: ""
    type: formula
    options: []
    formula: "const r = window.SylvicsProject ? window.SylvicsProject(p, dv) : null; const m = window.moment; const d = r ? (r.stage === 'achieved' && r.finished ? r.finished : r.due) : ''; return d && m ? m(d, 'YYYY-MM-DD').format('D MMM YYYY') : 'No deadline';"
    subFormula: "const r = window.SylvicsProject ? window.SylvicsProject(p, dv) : null; if (!r) return ''; const m = window.moment; if (r.stage === 'achieved' && r.finished && r.due && m) return 'Done' + (r.late > 0 ? ' ' + r.late + (r.late === 1 ? ' day' : ' days') + ' late' : (r.late < 0 ? ' ' + (-r.late) + (r.late === -1 ? ' day' : ' days') + ' early' : ' on the day')) + ' · deadline ' + m(r.due, 'YYYY-MM-DD').format('D MMM'); return r.dueLine;"
    subTitle: Dates
    subFields:
      - key: due-date
        label: Deadline
        type: date
      - key: scheduled-date
        label: Started
        type: date
      - key: completed-date
        label: Finished (set when the project is achieved)
        type: date
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
Dashboard_Layout:
  - color: "#9333ea"
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
  - color: "#9333ea"
    icon: 📍
    label: WHERE IT STANDS
    key: notes
    type: textarea
    autoHeight: true
    placeholder: "Where the project is today, in a few lines: what is done, what is next, who is on it."
    whenDone:
      key: Project_Status
      match: achiev|archiv|cancel
      label: HOW IT WENT
      icon: 🪞
      placeholder: "How it went, looking back: what worked, what slipped, what you would do again."
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#9333ea"
    icon: 🏁
    label: OUTCOME
    key: outcome
    type: textarea
    autoHeight: true
    placeholder: "What done looks like: the one result this project exists to produce."
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#9333ea"
    icon: 📌
    label: TASKS
    key: ""
    type: link_table
    slimEmpty: true
    folder: ""
    options:
      - "in=02 - Planning/3. 🚀 Execution/2. 📌 Tasks"
      - "skip=Masterpage"
      - "direction=in"
      - "column=Task:file"
      - "column=Status:Task_Status"
      - "column=Priority:Priority"
      - "column=Due:due-date"
      - "sort=due-date"
      - "done=Task_Status"
      - "limit=30"
      - "empty=No task names this project yet."
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#9333ea"
    icon: 🎯
    label: GOALS
    key: Related_Goals
    type: link_list
    slim: true
    folder: 02 - Planning/2. ♟️ Strategy/1. 🎯 Goals
    options: []
    options2: []
    width: 50%
    hideZero: true
    allowCreate: true
  - color: "#9333ea"
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
  - color: "#9333ea"
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
  - color: "#9333ea"
    icon: ✅
    label: SUCCESS CRITERIA
    key: success_criteria
    type: textarea
    autoHeight: true
    placeholder: "How you will know it worked: a short checklist, ticked as each one holds."
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#9333ea"
    icon: ⚠️
    label: RISKS
    key: risks
    type: textarea
    autoHeight: true
    placeholder: "What could make it fail, and the one you are most worried about."
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#9333ea"
    icon: 🏆
    label: ICE SCORE
    key: ""
    type: ice_score
    compact: true
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#9333ea"
    icon: 🗓️
    label: Log
    key: ""
    type: tab_marker
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#9333ea"
    icon: ⏱️
    label: TIME LOG
    key: Time_Logs
    type: skill_logger
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#9333ea"
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
  - color: "#9333ea"
    icon: ☕
    label: MEETINGS AND CALLS
    key: ""
    type: link_table
    slimEmpty: true
    folder: ""
    options:
      - "in=03 - Areas/3. 💼 Business & Career/1. Work"
      - "skip=Masterpage"
      - "direction=both"
      - "column=Meeting or call:file"
      - "column=Date:Date"
      - "column=Type:Type"
      - "sort=Date"
      - "order=desc"
      - "limit=20"
      - "empty=No meeting or call is linked yet."
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#9333ea"
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
  - color: "#9333ea"
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
  - color: "#9333ea"
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
      - "empty=No one is linked yet: a client, a partner, the people doing the work."
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#9333ea"
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
  - color: "#9333ea"
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
Inherit_Blueprint: ''
Dashboard_Header_Color: "#9333ea"
Finances: 📈 Generating
Dashboard_Prefix: PROJECT
Dashboard_Prefix_Color: "#c084fc"
Banner: ""
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero
```
