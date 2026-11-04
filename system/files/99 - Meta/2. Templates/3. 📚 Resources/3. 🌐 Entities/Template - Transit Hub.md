---
type: transit_hub
Status: Not yet
Type: Airport
Review: ''
Logistics: []
Amenities: []
Resources: null
Related_Files: []
Location: ""
Resources_Urls: []
Header_Schema:
- color: '#3b82f6'
  icon: 🚦
  label: How often
  key: Status
  type: select
  options:
  - Every week
  - Now and then
  - Once
  - Not yet
  - Closed
  formula: ''
  folder: ''
  hideZero: false
- color: '#e5e7eb'
  icon: 🏷️
  label: Type
  key: Type
  type: select
  options:
  - Airport
  - Train Station
  - Tram Stop
  - Bus Terminal
  - Ferry Port
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
Dashboard_Layout:
- color: '#3b82f6'
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
- color: '#3b82f6'
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
- color: '#3b82f6'
  icon: 🧳
  label: LOGISTICS
  key: Logistics
  type: sylvics_logistics
  folder: ''
  options: []
  options2: []
  width: 50%
  hideZero: false
  allowCreate: true
- color: '#3b82f6'
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
- color: '#3b82f6'
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
- color: '#3b82f6'
  icon: 🛎️
  label: AMENITIES
  key: Amenities
  type: sylvics_amenities
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
- color: '#3b82f6'
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
- color: '#3b82f6'
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
  width: 100%
  hideZero: false
  allowCreate: true
  hideEmpty: true
- color: '#3b82f6'
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
- color: '#3b82f6'
  icon: 📚
  label: RESOURCES
  key: Resources
  type: resource_grid
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
  noStretch: true
  fill: true
- color: '#3b82f6'
  icon: 🔗
  label: LINKED FROM
  key: ''
  type: linked_from
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
  hideEmpty: true
  fill: true
  notInText: true
- color: '#3b82f6'
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
Dashboard_Header_Color: '#3b82f6'
Dashboard_Prefix_Color: "#93c5fd"
Strip_Emojis: true
Inherit_Blueprint: ''
cssclasses:
- sylvics-dashboard
sylvics-fullscreen: true
sylvics-up: "[[0. Travel Masterpage]]"
Dashboard_Prefix: TRANSIT HUB
created: <% tp.file.creation_date("YYYY-MM-DD") %>
Upcoming_Events: []
---

```sylvics-view
EntityDashboardHero
```
