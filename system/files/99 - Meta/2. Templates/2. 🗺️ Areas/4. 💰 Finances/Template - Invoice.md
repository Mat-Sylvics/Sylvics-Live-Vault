---
tags:
  - invoice
Client: ""
Amount: 0
DueDate: ""
Status: "Pending"
SenderName: ""
SenderAddress: ""
SenderEmail: ""
LineItems: []
sylvics-up: "[[2. Invoices & Receivables]]"
sylvics-fullscreen: true
Notes: ""
Dashboard_Layout:
  - color: "#FFD700"
    icon: 🧾
    label: INVOICE
    key: ""
    type: invoice_document
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#FFD700"
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
  - color: "#FFD700"
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
Header_Schema: []
Minimal_Setup: false
Centered_Title: true
Immersive_Header: Compact
Inherit_Blueprint: ""
Dashboard_Header_Color: "#FFD700"
Dashboard_Prefix_Color: "#fde68a"
DateIssued: ""
Dashboard_Prefix: INVOICE
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero
```
