---
syl-icon: ⚡
Type: Volunteer
Impact_Level: High
Date: <% tp.file.creation_date("YYYY-MM-DD") %>
Duration_Hours: 1.0
Core_Value: ""
Volunteer_Action: ""
Volunteer_Reflection: ""
sylvics-up: "[[0. Service & Altruism Masterpage]]"
sylvics-fullscreen: true
cssclasses:
  - dashboard
  - sylvics-dashboard
  - transparent-bg
Header_Schema:
  - color: "#F5C842"
    icon: 🏷️
    label: Type
    key: Type
    type: select
    options:
      - Volunteer
      - Contribution
      - Creation
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: ⚡
    label: Impact
    key: Impact_Level
    type: select
    options:
      - Low
      - Med
      - High
    formula: ""
    folder: ""
    hideZero: false
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
    icon: ⏱️
    label: Hours
    key: Duration_Hours
    unit: h
    type: number
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🧭
    label: Value
    key: Core_Value
    type: folder_select
    options: []
    formula: ""
    folder: 02 - Planning/1. ⚖️ Alignment/1. 🧬 Identity/2. 🧭 Values & Virtues
    hideZero: true
Dashboard_Layout:
  - color: "#F5C842"
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
  - color: "#F5C842"
    icon: 🤲
    label: WHAT I DID
    key: ""
    type: impact_event_log
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#F5C842"
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
  - color: "#F5C842"
    icon: 🧷
    label: MENTIONED HERE
    key: ""
    type: mentioned_here
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    hideEmpty: true
  - color: "#F5C842"
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
    hideEmpty: true
  - color: "#F5C842"
    icon: 🔗
    label: LINKED FROM
    key: ""
    type: linked_from
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
    hideEmpty: true
    fill: true
  - color: "#F5C842"
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
Minimal_Setup: false
Centered_Title: true
Immersive_Header: Standard
Dashboard_Header_Color: "#F5C842"
Dashboard_Prefix_Color: "#fde68a"
Strip_Emojis: true
Inherit_Blueprint: ""
Dashboard_Prefix: IMPACT EVENT
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero | dv.current(
```
