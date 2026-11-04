---
tags:
  - consumable
  - home/inventory
sylvics-up: "[[2. Consumables Hub]]"
cssclasses:
  - dashboard
sylvics-fullscreen: true
Inventory_Count: 1
Target_Quantity: 2
Price: 1
Unit: units
Status: In Stock
Reorder_Link: ""
Consumable_Data: ""
Notes: ""
Dashboard_Layout:
  - color: "#fdba74"
    icon: 📦
    label: STOCK
    key: ""
    type: Consumable Tracker
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#fdba74"
    icon: 🛒
    label: WHAT TO BUY
    key: Consumable_Data
    type: textarea
    autoHeight: true
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#fdba74"
    icon: 🔄
    label: USED FOR
    key: ""
    type: link_table
    folder: ""
    options:
      - skip=07 - Journal
      - skip=99 - Meta
      - skip=Masterpage
      - skip=Consumables Hub
      - skip=Consumables Restock List
      - skip=Shopping
      - direction=both
      - column=Note:file
      - column=In:folder
      - column=Next due:Next_Due
      - sort=folder
      - limit=15
      - empty=No note names this supply yet: link it from a chore, a protocol or an item.
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#fdba74"
    icon: 📝
    label: NOTES
    key: Notes
    type: textarea
    autoHeight: true
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
Header_Schema: []
Minimal_Setup: false
Centered_Title: true
Immersive_Header: Standard
Inherit_Blueprint: ""
Dashboard_Header_Color: "#fdba74"
Dashboard_Prefix_Color: "#fed7aa"
Dashboard_Prefix: CONSUMABLE
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero
```

