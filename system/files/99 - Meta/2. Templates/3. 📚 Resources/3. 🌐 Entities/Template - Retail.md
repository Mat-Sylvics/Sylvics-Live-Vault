---
type: retail
Status: Seldom
Type: Supermarket
Location: ''
Price: 2
Rating: 0
Departments: []
Finds: []
Session_Logs: []
Resources: null
Related_Files: []
Resources_Urls: []
Header_Schema:
- color: '#10b981'
  icon: 🚦
  label: How often
  key: Status
  type: select
  options:
  - Regular
  - Now and then
  - Seldom
  - Avoid
  formula: ''
  folder: ''
  hideZero: false
  subFormula: 'const f = p.Favorite === true || p.Favorite === ''true''; return f ? ''<span style="color:#f472b6;">♥ Favourite</span>'' : ''<span style="opacity:.35;" title="Not a favourite: click to change">♡</span>'';'
  subFields:
  - key: Favorite
    label: Favourite
    type: toggle
  subTitle: Favourite
- color: '#e5e7eb'
  icon: 🏷️
  label: Type
  key: Type
  type: select
  options:
  - Supermarket
  - Tech Store
  - Clothing Boutique
  - Hardware Store
  - Shopping Mall
  - Pharmacy
  - Bookstore
  - Bakery
  - Outdoor Gear
  - Photo Lab
  - Stationery
  - Record Shop
  - Second-hand
  - Pet Shop
  - Market
  - Other
  formula: ''
  folder: ''
  hideZero: false
- color: '#e5e7eb'
  icon: 📍
  label: Location
  key: Location
  type: text
  options: []
  formula: ''
  folder: ''
  hideZero: false
- color: '#e5e7eb'
  icon: 💰
  label: Price
  key: Price
  type: price_tier
  options: []
  formula: ''
  folder: ''
  hideZero: false
- color: '#e5e7eb'
  icon: ⭐
  label: Rating
  key: Rating
  type: stars
  options: []
  formula: ''
  folder: ''
  hideZero: false
  whenLabel:
    key: Status
    match: ^(Want to Go|Want to Visit|Wishlist|Planning|Bucket List)$
    label: Want it
    icon: 💭
Dashboard_Layout:
- color: '#10b981'
  icon: 📋
  label: Overview
  key: ''
  type: tab_marker
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
- color: '#10b981'
  icon: 📝
  label: MY TAKE
  key: Review
  type: textarea
  folder: ''
  options: []
  options2: []
  width: 50%
  hideZero: false
  allowCreate: true
  autoHeight: true
- color: '#10b981'
  icon: 🛒
  label: SPECIALTY FINDS
  key: Finds
  type: sylvics_finds
  folder: ''
  options: []
  options2: []
  width: 50%
  hideZero: false
  allowCreate: true
- color: '#10b981'
  icon: 🗓️
  label: NEXT TIME
  key: Upcoming_Events
  type: sylvics_upcoming_events
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
  itemName: PLAN
  itemNames: plans
  hideProgress: true
  hideDone: true
  noStretch: true
  slimEmpty: true
- color: '#10b981'
  icon: 🧾
  label: Details
  key: ''
  type: tab_marker
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
- color: '#10b981'
  icon: 🏬
  label: DEPARTMENTS
  key: Departments
  type: sylvics_departments
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
- color: '#10b981'
  icon: 🗓️
  label: Log
  key: ''
  type: tab_marker
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
- color: '#10b981'
  icon: 🗒️
  label: VISITS
  key: Session_Logs
  type: maintenance_log
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
  countWord: visit written down
  countWords: visits written down
  totalWord: spent
  addLabel: + ADD A VISIT
  emptyText: No visit written down yet.
  addTitle: A visit
  editTitle: Edit the visit
  textLabel: What happened
  costLabel: Spent
  noStretch: true
- color: '#10b981'
  icon: 👤
  label: PEOPLE
  key: Companions
  type: link_list
  folder: 04 - Resources/3. 🌐 Entities/1. 👥 People/👤 Contacts
  options: []
  options2: []
  width: 100%
  hideZero: true
  allowCreate: true
  noStretch: true
  hideEmpty: true
- color: '#10b981'
  icon: 📓
  label: IN THE JOURNAL
  key: ''
  type: journal_mentions
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
  hideEmpty: true
- color: '#10b981'
  icon: 🔗
  label: Links
  key: ''
  type: tab_marker
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
- color: '#10b981'
  icon: 🧺
  label: BOUGHT HERE
  key: ''
  type: link_table
  folder: ''
  options:
  - in=04 - Resources/2. 🗄️ Reference Library/4. 🌿 Health & Body/Ingredients
  - in=03 - Areas/5. 🏡 Home & Environment/2. Inventory/Consumables
  - in=03 - Areas/7. 🎨 Recreation/1. 🪁 Hobbies/Gear
  - skip=Masterpage
  - direction=in
  - column=Item:file
  - column=Kind:folder
  - sort=folder
  - limit=30
  - empty=Nothing names this store yet.
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
  hideEmpty: true
- color: '#10b981'
  icon: 📚
  label: RESOURCES
  key: Resources
  type: resource_grid
  folder: ''
  options: []
  options2: []
  width: 50%
  hideZero: false
  allowCreate: true
  fill: true
  noStretch: true
- color: '#10b981'
  icon: 🔗
  label: LINKED FROM
  key: ''
  type: linked_from
  folder: ''
  options: []
  options2: []
  width: 50%
  hideZero: false
  allowCreate: true
  hideEmpty: true
  fill: true
  groupByKind: true
- color: '#10b981'
  icon: ⏹️
  label: END OF TABS
  key: ''
  type: end_tabs
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
Minimal_Setup: false
Centered_Title: true
Immersive_Header: Standard
Dashboard_Header_Color: '#10b981'
Dashboard_Prefix_Color: "#6fd5b3"
Strip_Emojis: true
Inherit_Blueprint: ''
cssclasses:
- sylvics-dashboard
sylvics-up: '[[0. Establishments Masterpage]]'
sylvics-fullscreen: true
Review: ''
Dashboard_Prefix: STORE
created: <% tp.file.creation_date("YYYY-MM-DD") %>
Dashboard_Background: 99 - Meta/4. Attachments/3. Sylvics Art/Banners/Establishments - Shops.png
Upcoming_Events: []
Companions: []
---

```sylvics-view
EntityDashboardHero
```
