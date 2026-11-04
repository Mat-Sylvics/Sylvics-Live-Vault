---
syl-icon: 🕯️
cssclasses:
  - entity-theme
  - dashboard
  - sylvics-dashboard
  - transparent-bg
sylvics-fullscreen: true
sylvics-up: "[[1. The Existential Framework]]"
Domain: ""
Source: ""
Status: Active
Charge: Medium
Catalyst: ""
Wrestling: ""
Open_Line_Key: Wrestling
Header_Schema:
  - color: "#F5C842"
    icon: 🚦
    label: Status
    key: Status
    type: select
    options:
      - Active
      - Paused
      - Resolved
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: ⚡
    label: Charge
    key: Charge
    type: select
    options:
      - High
      - Medium
      - Low
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
    icon: 🌌
    label: Domain
    key: Domain
    type: folder_select
    options: []
    formula: ""
    folder: 03 - Areas/8. 🧘 Spirituality & Meaning/2. 📜 Philosophy & Faith/3. Contemplation Domains
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
    icon: ⚡
    label: CATALYST
    key: Catalyst
    type: textarea
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
    autoHeight: true
    noStretch: true
  - color: "#F5C842"
    icon: 🧱
    label: BUILT FROM
    key: ""
    type: forged_from
    folder: 04 - Resources, 05 - Literature, 06 - Permanent
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
    noStretch: true
  - color: "#F5C842"
    icon: 🕯️
    label: REFLECTION
    key: Wrestling
    type: textarea
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    autoHeight: true
    noStretch: true
  - color: "#F5C842"
    icon: ➡️
    label: TURN INTO
    key: ""
    type: evolution_forge
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
    icon: 🌱
    label: WHAT IT BECAME
    key: ""
    type: forged_reflection
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
    notHeader: true
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
Dashboard_Theme: Standard
Cover_Alignment: Right
Inherit_Blueprint: ""
Dashboard_Background: ""
Dashboard_Prefix: PERSONAL REFLECTION
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---


```sylvics-view
EntityDashboardHero
```
