---
type: accommodation
Status: Planning
Type: Hotel
Rating: 0
Review: ''
Logistics: []
Amenities: []
Resources: null
Related_Files: []
Gallery: []
Location: ""
Resources_Urls: []
Header_Schema:
- color: '#f43f5e'
  icon: 🚦
  label: Status
  key: Status
  type: select
  options:
  - Planning
  - Booked
  - Staying
  - Stayed
  - Cancelled
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
  - Hotel
  - Guest House
  - Rented flat
  - Hostel
  - Cabin
  - Friend's place
  - Resort
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
  icon: ⭐
  label: Rating
  key: Rating
  type: stars
  options: []
  formula: ''
  folder: ''
  hideZero: false
Dashboard_Layout:
- color: '#f43f5e'
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
- color: '#f43f5e'
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
- color: '#f43f5e'
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
- color: '#f43f5e'
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
- color: '#f43f5e'
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
- color: '#f43f5e'
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
- color: '#f43f5e'
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
- color: '#f43f5e'
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
- color: '#f43f5e'
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
- color: '#f43f5e'
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
- color: '#f43f5e'
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
- color: '#f43f5e'
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
  notInText: true
  hideEmpty: true
  fill: true
- color: '#f43f5e'
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
Dashboard_Header_Color: '#f43f5e'
Dashboard_Prefix_Color: "#fda4af"
Strip_Emojis: true
Inherit_Blueprint: ''
cssclasses:
- sylvics-dashboard
sylvics-fullscreen: true
sylvics-up: "[[0. Travel Masterpage]]"
Dashboard_Prefix: ACCOMMODATION
created: <% tp.file.creation_date("YYYY-MM-DD") %>
Upcoming_Events: []
---

```sylvics-view
EntityDashboardHero
```
