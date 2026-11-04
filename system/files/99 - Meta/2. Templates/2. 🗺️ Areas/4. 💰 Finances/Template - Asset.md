---
tags:
  - asset
  - home/inventory
sylvics-up: '[[1. Asset Directory]]'
cssclasses:
  - dashboard
sylvics-fullscreen: true
Purchased: ''
Cost: 0
Model_Number: ''
Manual_Link: ''
Location: ''
Status: Active
Category: ''
Vendor: ''
Next_Service_Date: ''
Notes: ""
Dashboard_Layout:
  - color: "#FF9F43"
    icon: 📦
    label: ASSET RECORD
    key: ""
    type: Asset Tracker
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#FF9F43"
    icon: 🧰
    label: UPKEEP AND SUPPLIES
    key: ""
    type: link_table
    folder: ""
    options:
      - in=03 - Areas/5. 🏡 Home & Environment/2. Inventory/Consumables
      - in=03 - Areas/5. 🏡 Home & Environment/3. Maintenance & Operations/Periodic Chores
      - in=03 - Areas/5. 🏡 Home & Environment/3. Maintenance & Operations/Periodic Repairs
      - in=03 - Areas/5. 🏡 Home & Environment/3. Maintenance & Operations/Improvement Projects
      - direction=both
      - column=Note:file
      - column=In:folder
      - column=Next due:Next_Due
      - column=Status:Status
      - sort=folder
      - limit=20
      - empty=No routine or supply is linked to this item yet.
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#FF9F43"
    icon: 📝
    label: NOTES
    key: Notes
    type: textarea
    autoHeight: true
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#FF9F43"
    icon: 🔗
    label: LINKED FROM
    key: ""
    type: linked_from
    folder: ""
    options: 
      - notin=Vendor,Manual_Link
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
Header_Schema:
  - color: "#FF9F43"
    icon: 🚦
    label: Status
    key: Status
    type: select
    options:
      - Active
      - In Storage
      - Broken
      - Retired
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🏷️
    label: Category
    key: Category
    type: select
    options:
      - Electronics
      - Furniture
      - Appliance
      - Vehicle
      - Tool
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 📍
    label: Location
    key: Location
    type: location
    options: []
    formula: ""
    folder: ""
    hideZero: false
Minimal_Setup: false
Centered_Title: true
Immersive_Header: Standard
Inherit_Blueprint: ''
Dashboard_Header_Color: "#FF9F43"
Dashboard_Prefix_Color: "#fdba74"
Warranty_Days: 360
Active_Repairs: []
Service_History: []
Dashboard_Prefix: ASSET
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero
```
