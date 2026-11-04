---
syl-icon: 🩹
sylvics-up: "[[🩹 0. Injuries Masterpage]]"
sylvics-fullscreen: true
cssclasses:
  - dashboard
Type: Injury
Date: <% tp.date.now("YYYY-MM-DD") %>
Name: ""
Status: ""
Resolved_Date: ""
Severity: ""
Rehab: ""
Incident_Log: []
Header_Schema:
  - color: "#ef4444"
    icon: 🚦
    label: Status
    key: Status
    type: select
    options:
      - Active
      - Monitoring
      - Rehab
      - Resolved
    formula: ""
    folder: ""
    hideZero: false
    colors:
      Active: "#f87171"
      Rehab: "#fb923c"
      Monitoring: "#fbbf24"
      Resolved: "#34d399"
  - color: "#e5e7eb"
    icon: 🌡️
    label: Severity
    key: Severity
    type: number
    options: []
    formula: ""
    folder: ""
    hideZero: false
    max: 5
    colors:
      "1": "#86efac"
      "2": "#bef264"
      "3": "#fbbf24"
      "4": "#fb923c"
      "5": "#f87171"
  - color: "#e5e7eb"
    icon: 📅
    label: Date
    key: Date
    type: date
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: ✅
    label: Resolved
    key: Resolved_Date
    type: date
    options: []
    formula: ""
    folder: ""
    hideZero: false
    whenLabel:
      key: Status
      match: Monitoring|Rehab
      label: Quiet since
      icon: 🌙
  - color: "#e5e7eb"
    icon: ⏳
    label: Lasted
    key: Lasted
    type: formula
    options: []
    formula: "const m = window.moment; const d = v => { const s = String(v && v.toISODate ? v.toISODate() : (v || '')).slice(0, 10); return /^\\d{4}-\\d{2}-\\d{2}$/.test(s) ? s : ''; }; const done = /resolved/i.test(String(p.Status || '')); const s = d(p.Date); const e = (done && d(p.Resolved_Date)) || (window.SylvicsToday ? window.SylvicsToday() : (m ? m().format('YYYY-MM-DD') : '')); if (!m || !s || !e || e < s) return '--'; const n = m(e, 'YYYY-MM-DD').diff(m(s, 'YYYY-MM-DD'), 'days'); if (n < 14) return n === 1 ? '1 day' : n + ' days'; if (n < 63) return Math.round(n / 7) + ' weeks'; const mo = Math.round(n / 30.44); return mo === 1 ? '1 month' : mo + ' months';"
    folder: ""
    hideZero: false
    whenLabel:
      key: Status
      match: Active|Rehab|Monitoring
      label: So far
  - color: "#e5e7eb"
    icon: 🦾
    label: Rehab Protocol
    key: Rehab
    type: folder_select
    options: []
    formula: ""
    folder: 03 - Areas/1. 🏋️ Health/3. Medical & Bio/Recovery Protocols
    hideZero: true
Dashboard_Layout:
  - color: "#ef4444"
    icon: 🗒️
    label: INCIDENT LOG
    key: Incident_Log
    type: observation_logs
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    order: asc
    dayFrom: Date
    dayUntil: Resolved_Date
  - color: "#ef4444"
    icon: 📓
    label: IN THE JOURNAL
    key: ""
    type: journal_mentions
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    byName: true
    since: Date
    hideEmpty: true
  - color: "#ef4444"
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
    slimEmpty: true
Strip_Emojis: true
Dashboard_Header_Color: "#ef4444"
Dashboard_Prefix_Color: "#fca5a5"
Dashboard_Prefix: INJURY
Centered_Title: true
Title_Without_Date: true
Immersive_Header: Standard
Minimal_Setup: false
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero
```
