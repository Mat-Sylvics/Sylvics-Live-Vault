---
Area:
Task_Status:
Priority:
Energy:
TimeEstimate:
scheduled-date:
due-date:
completed-date:
Related_Projects:
Related_Goals:
Recurrence:
Context:
Dependencies:
Waiting_On:
notes: ""
Dashboard_Prefix: TASK
Subtasks: []
Header_Schema:
  - color: "#0891b2"
    icon: 🚦
    label: Status
    key: Task_Status
    type: select
    options:
      - 📥 Inbox
      - 🗃️ Latent
      - 📋 Queued
      - 📅 Scheduled
      - ⚡ Active
      - ⏸️ Paused
      - 🤝 Delegated
      - ⏳ Waiting
      - ✅ Completed
      - 🛑 Archived
    formula: ""
    subFormula: "const m = window.moment; const day = v => { const s = String(v && v.toISODate ? v.toISODate() : (v || '')).slice(0, 10); return /^\\d{4}-\\d{2}-\\d{2}$/.test(s) ? s : ''; }; const today = window.SylvicsToday ? window.SylvicsToday() : m().format('YYYY-MM-DD'); const st = String(p.Task_Status || ''); const due = day(p['due-date']), fin = day(p['completed-date']); const f = d => m(d, 'YYYY-MM-DD').format(d.slice(0, 4) === today.slice(0, 4) ? 'D MMM' : 'D MMM YYYY'); const n = k => k + (k === 1 ? ' day' : ' days'); if (/complet|done|graded|taken/i.test(st)) { if (!fin) return 'Done'; let s = 'Done ' + f(fin); if (due) { const g = m(fin).diff(m(due), 'days'); s += g > 0 ? ' · ' + n(g) + ' late' : (g < 0 ? ' · ' + n(-g) + ' early' : ' · on the day'); } return s; } if (/cancel|archiv/i.test(st)) return ''; if (!due) return 'No due date'; const left = m(due).diff(m(today), 'days'); return left < 0 ? n(-left) + ' late' : (left === 0 ? 'Due today' : 'Due in ' + n(left));"
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🔺
    label: Priority
    key: Priority
    type: select
    options:
      - 🔴 P1
      - 🟠 P2
      - 🟢 P3
    formula: ""
    subFormula: "const parts = []; if (p.Energy) parts.push(String(p.Energy)); const e = String(p.TimeEstimate || ''); const mm = e.match(/^(\\d+):(\\d{2})$/); if (mm) { const h = +mm[1], mi = +mm[2]; parts.push(h && mi ? h + 'h ' + mi + 'm' : (h ? h + 'h' : mi + 'm')); } else if (e) parts.push(e); if (p.Recurrence) parts.push(String(p.Recurrence)); return parts.join(' · ') || 'Energy, estimate, repeat';"
    subTitle: Energy, estimate and repeat
    subFields:
      - key: Energy
        label: What it takes out of you
        type: select
        options:
          - "🔋 Charging"
          - "⚖️ Neutral"
          - "🪫 Draining"
      - key: TimeEstimate
        label: How long it should take
        type: duration
      - key: Recurrence
        label: Does it repeat?
        type: select
        options:
          - "📅 Daily"
          - "📆 Weekly"
          - "🗓️ Monthly"
          - "🗓️ Yearly"
    folder: ""
    hideZero: false
  - color: "#0891b2"
    icon: ⏳
    label: Due
    key: ""
    type: formula
    options: []
    formula: "const m = window.moment; const s = String(p['due-date'] && p['due-date'].toISODate ? p['due-date'].toISODate() : (p['due-date'] || '')).slice(0, 10); return /^\\d{4}-\\d{2}-\\d{2}$/.test(s) && m ? m(s, 'YYYY-MM-DD').format('D MMM YYYY') : 'No due date';"
    subFormula: "const m = window.moment; const s = String(p['scheduled-date'] && p['scheduled-date'].toISODate ? p['scheduled-date'].toISODate() : (p['scheduled-date'] || '')).slice(0, 10); return /^\\d{4}-\\d{2}-\\d{2}$/.test(s) && m ? 'Scheduled ' + m(s, 'YYYY-MM-DD').format('D MMM') : 'Not scheduled';"
    subTitle: Dates
    subFields:
      - key: due-date
        label: Due
        type: date
      - key: scheduled-date
        label: Scheduled for
        type: date
      - key: completed-date
        label: Done on (set when the task is completed)
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
  - color: "#0891b2"
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
  - color: "#0891b2"
    icon: 📝
    label: NOTES
    key: notes
    type: textarea
    autoHeight: true
    placeholder: "What this task is about, and once it is done, what happened."
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#0891b2"
    icon: ☑️
    label: STEPS
    key: Subtasks
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
  - color: "#0891b2"
    icon: 📍
    label: CONTEXT
    key: Context
    type: textarea
    autoHeight: true
    placeholder: "Where and with what: the place, the tool, the moment it fits."
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#0891b2"
    icon: ⌛
    label: WAITING ON
    key: Waiting_On
    type: textarea
    autoHeight: true
    placeholder: "Who or what this is waiting on, and since when."
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#0891b2"
    icon: 📂
    label: PROJECT
    key: Related_Projects
    type: link_list
    slim: true
    folder: 02 - Planning/3. 🚀 Execution/1. 📂 Projects
    options: []
    options2: []
    width: 50%
    hideZero: true
    allowCreate: true
  - color: "#0891b2"
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
  - color: "#0891b2"
    icon: ⛔
    label: BLOCKED BY
    key: Dependencies
    type: link_list
    slim: true
    folder: 02 - Planning/3. 🚀 Execution/2. 📌 Tasks
    options: []
    options2: []
    width: 100%
    hideZero: true
    allowCreate: true
  - color: "#0891b2"
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
  - color: "#0891b2"
    icon: ⏭️
    label: TASKS WAITING ON THIS
    key: ""
    type: link_table
    slimEmpty: true
    folder: ""
    options:
      - "in=02 - Planning/3. 🚀 Execution/2. 📌 Tasks"
      - "skip=Masterpage"
      - "via=Dependencies"
      - "column=Task:file"
      - "column=Status:Task_Status"
      - "column=Due:due-date"
      - "sort=due-date"
      - "done=Task_Status"
      - "limit=20"
      - "empty=No task is waiting on this one."
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#0891b2"
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
  - color: "#0891b2"
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
  - color: "#0891b2"
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
Dashboard_Prefix_Color: "#06b6d4"
Dashboard_Background: ""
Dashboard_Header_Color: "#0891b2"
cssclasses:
  - dashboard
sylvics-fullscreen: true
syl-icon: 📌
sylvics-up: "[[📌 0. Tasks Masterpage]]"
Cover_Alignment: Right
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---


```sylvics-view
EntityDashboardHero
```
