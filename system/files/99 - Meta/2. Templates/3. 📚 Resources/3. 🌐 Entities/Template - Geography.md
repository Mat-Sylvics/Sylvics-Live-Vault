---
type: geography
Status: Planning
Type: City
Country: ""
Hemisphere: Northern
Rating: 0
Logistics: []
Highlights: []
Session_Logs: []
Companions: []
Gallery: []
Resources: []
Related_Files: []
Resources_Urls: []
Header_Schema:
- color: '#10b981'
  icon: 🚦
  label: Status
  key: Status
  type: select
  options:
  - Planning
  - Visited
  - Bucket List
  - Native
  formula: ''
  folder: ''
  hideZero: false
- color: '#e5e7eb'
  icon: 🏷️
  label: Type
  key: Type
  type: select
  options:
  - City
  - Capital
  - Metropolis
  - Town
  formula: ''
  folder: ''
  hideZero: false
- color: '#e5e7eb'
  icon: 🌍
  label: Country
  key: Country
  type: folder_select
  options: []
  formula: ''
  folder: 04 - Resources/3. 🌐 Entities/3. 🌍 Geographies & Places/1. 🗺️ Regions & Cities/1. 🌍 Countries & Territories
  hideZero: false
  hideEmpty: true
- color: '#e5e7eb'
  icon: ⭐
  label: Rating
  key: Rating
  type: stars
  options:
  - 1
  - 2
  - 3
  - 4
  - 5
  formula: ''
  folder: ''
  hideZero: false
  whenLabel:
    key: Status
    match: ^(Bucket List|Planning)$
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
  icon: ✨
  label: HIGHLIGHTS
  key: Highlights
  type: sylvics_highlights
  folder: ''
  options: []
  options2: []
  width: 50%
  hideZero: false
  allowCreate: true
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
  icon: 🧳
  label: LOGISTICS
  key: Logistics
  type: sylvics_logistics
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
- color: '#10b981'
  icon: 📷
  label: PHOTOS
  key: Gallery
  type: gallery
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
  hideEmpty: true
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
  label: OVER TIME
  key: Session_Logs
  type: maintenance_log
  folder: ''
  options: []
  options2: []
  width: 50%
  hideZero: false
  allowCreate: true
  addLabel: + ADD A NOTE
  addTitle: A note
  editTitle: Edit the note
  noStretch: true
  countWord: note
  countWords: notes
  totalWord: spent
  emptyText: Nothing written yet.
  textLabel: What happened
  costLabel: Spent
- color: '#10b981'
  icon: 👤
  label: PEOPLE
  key: Companions
  type: link_list
  folder: 04 - Resources/3. 🌐 Entities/1. 👥 People/👤 Contacts
  options: []
  options2: []
  width: 50%
  hideZero: true
  allowCreate: true
  noStretch: true
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
  icon: ✈️
  label: TRIPS
  key: ''
  type: link_table
  folder: ''
  options:
  - in=04 - Resources/3. 🌐 Entities/3. 🌍 Geographies & Places/3. ✈️ Travel & Logistics/1. Travels
  - skip=Masterpage
  - direction=in
  - column=Trip:file
  - column=Status:Status
  - column=Purpose:Purpose
  - column=Departure:Departure
  - sort=Departure
  - order=desc
  - limit=20
  - empty=No trip links this place yet.
  options2: []
  width: 50%
  hideZero: false
  allowCreate: true
  fill: true
  slimEmpty: true
  linkInto: Destinations
  linkFolder: 04 - Resources/3. 🌐 Entities/3. 🌍 Geographies & Places/3. ✈️ Travel & Logistics/1. Travels
- color: '#10b981'
  icon: 📍
  label: PLACES
  key: ''
  type: link_table
  folder: ''
  options:
  - in=04 - Resources/3. 🌐 Entities/3. 🌍 Geographies & Places
  - skip=1. Travels
  - skip=Countries
  - skip=Masterpage
  - direction=in
  - column=Place:file
  - column=Kind:folder
  - column=Type:Type
  - column=Rating:Rating
  - sort=folder
  - limit=40
  - empty=No place note links here yet.
  options2: []
  width: 50%
  hideZero: false
  allowCreate: true
  hideEmpty: true
  fill: true
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
Dashboard_Header_Color: "#10b981"
Dashboard_Prefix_Color: "#6ee7b7"
Strip_Emojis: true
Inherit_Blueprint: ""
cssclasses:
  - sylvics-dashboard
sylvics-up: "[[00. Geographies Masterpage]]"
sylvics-fullscreen: true
Review: ""
Dashboard_Prefix: CITY
Banner: ""
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero
```
