---
type: belief
sylvics-up: "[[🧠 0. Beliefs Masterpage]]"
origin: ""
related_areas: []
cssclasses:
  - dashboard
  - sylvics-fullscreen
  - sylvics-value
  - sylvics-belief
core_premise: ""
daily_application: ""
would_change_mind: ''
counter_argument: ""
Strip_Emojis: true
Minimal_Setup: false
Centered_Title: true
Immersive_Header: Standard
Inherit_Blueprint: ""
Dashboard_Header_Color: "#f472b6"
Header_Schema:
  - color: "#f472b6"
    icon: 🚦
    label: Status
    key: Belief_Status
    type: select
    options:
      - 🟢 Core
      - 🟡 Developing
      - 🟠 Challenged
      - 📦 Overcome / Discarded
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 📓
    label: Days Observed
    key: ""
    type: formula
    options: []
    formula: "if (!dv || !p || !p.file) return '--'; const n = p.file ? p.file.name : p.name; let c = 0; for (const x of dv.pages('#type/daily-note')) { if (x.paradigms_observed && String(x.paradigms_observed).includes(n)) c++; } return c + (c === 1 ? ' day' : ' days');"
    folder: ""
    hideZero: false
  - color: "#f59e0b"
    icon: ⚡
    label: Challenged
    key: ""
    type: formula
    options: []
    formula: "if (!dv || !p || !p.file) return '--'; const n = p.file ? p.file.name : p.name; let c = 0, o = 0; for (const x of dv.pages('#type/daily-note')) { if (x.paradigms_observed && String(x.paradigms_observed).includes(n)) o++; if (x.paradigms_challenged && String(x.paradigms_challenged).includes(n)) c++; } return c ? c + ' of ' + o + (o === 1 ? ' day' : ' days') : (o ? 'None of ' + o : 'Not yet');"
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 📅
    label: Last Observed
    key: ""
    type: formula
    options: []
    formula: "if (!dv || !p || !p.file) return '--'; const n = p.file ? p.file.name : p.name; let last = ''; for (const x of dv.pages('#type/daily-note')) { if (x.paradigms_observed && String(x.paradigms_observed).includes(n)) { const d = String(x.file.name).slice(0, 10); if (d > last) last = d; } } if (!last) return 'Not yet'; const m = window.moment(last, 'YYYY-MM-DD'); return m.isValid() ? m.format('DD MMMM YYYY') : last;"
    folder: ""
    hideZero: false
Dashboard_Layout:
  - color: "#f472b6"
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
  - color: "#f472b6"
    icon: 💡
    label: CORE PREMISE
    key: core_premise
    type: textarea
    autoHeight: true
    placeholder: "The belief in one plain sentence, then what it lets you see that you would otherwise miss."
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#f472b6"
    icon: 🌱
    label: WHERE IT CAME FROM
    key: origin
    type: textarea
    autoHeight: true
    placeholder: "When you started believing it: a date, a moment, a person."
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#f472b6"
    icon: 🔄
    label: DAILY APPLICATION
    key: daily_application
    type: textarea
    autoHeight: true
    placeholder: "How it changes what you do on an ordinary day."
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#f472b6"
    icon: 🧪
    label: WHAT WOULD CHANGE MY MIND
    key: would_change_mind
    type: textarea
    autoHeight: true
    placeholder: "The observation that would move this from Core to Challenged. Specific enough that you would notice it."
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#f472b6"
    icon: 🗣️
    label: COUNTER-ARGUMENT
    key: counter_argument
    type: textarea
    autoHeight: true
    placeholder: "The strongest case against it, made by someone who disagrees and is not stupid."
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#f472b6"
    icon: 🔎
    label: Evidence
    key: ""
    type: tab_marker
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#f472b6"
    icon: 🕰️
    label: MEMORIES
    key: ""
    type: historical_evidence
    folder: 02 - Planning/1. ⚖️ Alignment/1. 🧬 Identity/4. 🕰️ Roots & Memories
    options: []
    options2: []
    width: 100%
    hideZero: true
    allowCreate: true
  - color: "#f472b6"
    icon: 📓
    label: DAYS OBSERVED
    key: ""
    type: belief_evidence
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#f472b6"
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
  - color: "#f472b6"
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
  - color: "#f472b6"
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
Belief_Status: 🟢 Core
Dashboard_Prefix: BELIEF
Dashboard_Prefix_Color: "#ec4899"
tags:
  - belief
Banner: ""
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero
```
