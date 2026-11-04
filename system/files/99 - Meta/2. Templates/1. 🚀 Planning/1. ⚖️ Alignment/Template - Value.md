---
type: value
syl-icon: 🧭
sylvics-up: "[[🧭 0. Values Masterpage]]"
cssclasses:
- dashboard
- sylvics-fullscreen
- sylvics-value
definition: ''
standard: ''
violations: ''
triumphs: ''
Header_Schema:
  - color: "#059669"
    icon: 🚦
    label: Status
    key: Value_Status
    type: select
    options:
      - 🌟 Radiant
      - 🟢 Active
      - 🟡 Flickering
      - 🔴 Dormant
      - ⚠️ Compromised
      - 📦 Archived
    formula: ""
    folder: ""
    hideZero: false
  - color: "#a78bfa"
    icon: 🫀
    label: Conviction
    key: Conviction
    type: select
    options:
      - 🔥 High
      - 🌗 Medium
      - 🌱 Low
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 📓
    label: Days Lived
    key: ""
    type: formula
    options: []
    formula: "if (!dv || !p || !p.file) return '--'; const n = p.file ? p.file.name : p.name; let c = 0; for (const x of dv.pages('#type/daily-note')) { if (x.values_engaged && String(x.values_engaged).includes(n)) c++; } return c + (c === 1 ? ' day' : ' days');"
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 📅
    label: Last Lived
    key: ""
    type: formula
    options: []
    formula: "if (!dv || !p || !p.file) return '--'; const n = p.file ? p.file.name : p.name; let last = ''; for (const x of dv.pages('#type/daily-note')) { if (x.values_engaged && String(x.values_engaged).includes(n)) { const d = String(x.file.name).slice(0, 10); if (d > last) last = d; } } if (!last) return 'Not yet'; const m = window.moment(last, 'YYYY-MM-DD'); return m.isValid() ? m.format('DD MMMM YYYY') : last;"
    folder: ""
    hideZero: false
Dashboard_Layout:
  - color: "#059669"
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
  - color: "#059669"
    icon: 🧭
    label: WHAT IT MEANS
    key: definition
    type: textarea
    autoHeight: true
    placeholder: "In one sentence, what it means when you live it. Then what it costs you, and what it buys."
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#059669"
    icon: 📏
    label: STANDARD
    key: standard
    type: textarea
    autoHeight: true
    placeholder: "Three to five rules you can check. When this happens, I do that."
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#059669"
    icon: 🚨
    label: VIOLATIONS
    key: violations
    type: textarea
    autoHeight: true
    placeholder: "Dated moments you broke it: what happened, and what it cost."
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#059669"
    icon: 🏆
    label: TRIUMPHS
    key: triumphs
    type: textarea
    autoHeight: true
    placeholder: "Dated moments you lived it when it was hard."
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#059669"
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
  - color: "#059669"
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
  - color: "#059669"
    icon: 📓
    label: DAYS LIVED
    key: ""
    type: value_telemetry
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#059669"
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
  - color: "#059669"
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
  - color: "#059669"
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
Value_Status: 🟢 Active
Conviction: ""
Dashboard_Header_Color: '#059669'
Dashboard_Prefix: VALUE
Dashboard_Prefix_Color: "#10b981"
tags:
  - value
Centered_Title: true
Immersive_Header: Standard
Minimal_Setup: false
Banner: "[[99 - Meta/4. Attachments/3. Sylvics Art/Banners/Value - Default Banner.png]]"
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero
```
