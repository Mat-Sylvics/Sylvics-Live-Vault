---
tags:
  - bill
Provider: "Water Company"
Cost: 0
Billing_Cycle: Monthly
Renewal_Date: "<% tp.date.now("YYYY-MM-DD") %>"
Bill_Status: Active
Bill_Category: "Utilities"
cssclasses:
  - dashboard
  - cards
  - sylvics-fullscreen
sylvics-up: "[[2. Bills & Subscriptions]]"
Notes: ""
Dashboard_Layout:
  - color: "#fbbf24"
    icon: 🧾
    label: PAYMENTS
    key: ""
    type: bill_tracker
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#fbbf24"
    icon: 📝
    label: NOTES
    key: Notes
    type: textarea
    folder: ""
    options: []
    options2: []
    width: 66%
    hideZero: false
    allowCreate: true
    autoHeight: true
  - color: "#fbbf24"
    icon: 🔗
    label: LINKED FROM
    key: ""
    type: linked_from
    folder: ""
    options: []
    options2: []
    width: 33%
    hideZero: false
    allowCreate: true
Header_Schema:
  - color: "#fbbf24"
    icon: 🚦
    label: Status
    key: Bill_Status
    type: select
    options:
      - Active
      - Paused
      - Canceled
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🏷️
    label: Category
    key: Bill_Category
    type: select
    options:
      - Utilities
      - Housing
      - Insurance
      - Taxes
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🏢
    label: Provider
    key: Provider
    type: text
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 💰
    label: Cost
    key: Cost
    type: currency
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🔁
    label: Billing Cycle
    key: Billing_Cycle
    type: select
    options:
      - Daily
      - Weekly
      - Monthly
      - Quarterly
      - Yearly
    formula: ""
    folder: ""
    hideZero: false
Minimal_Setup: false
Centered_Title: true
Immersive_Header: Compact
Inherit_Blueprint: ""
Dashboard_Header_Color: "#fbbf24"
Dashboard_Prefix_Color: "#fde68a"
Strip_Emojis: true
Dashboard_Theme: Standard
Cover_Alignment: Right
Dashboard_Background: ""
Dashboard_Prefix: BILL
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero
```
