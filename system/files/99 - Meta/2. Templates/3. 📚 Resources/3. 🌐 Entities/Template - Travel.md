---
type: travel
Status: Planning
Purpose: Vacation
Duration: ''
Budget: null
Review: ''
Itinerary: []
Logistics: []
Companions: []
Destinations: []
Maintenance_Log: []
Highlights: []
Gallery: []
Resources: null
Related_Files: []
Departure:
Return:
Resources_Urls: []
Header_Schema:
- color: '#3b82f6'
  icon: 🚦
  label: Status
  key: Status
  type: select
  options:
  - Planning
  - Booked
  - In Progress
  - Completed
  - Cancelled
  formula: ''
  folder: ''
  hideZero: false
- color: '#e5e7eb'
  icon: 🏷️
  label: Purpose
  key: Purpose
  type: select
  options:
  - Vacation
  - Business
  - Conference
  - Relocation
  - Family
  - Adventure
  formula: ''
  folder: ''
  hideZero: false
- color: '#e5e7eb'
  icon: ⏳
  label: Departure
  key: Departure
  type: timeline
  options: []
  formula: ''
  folder: ''
  hideZero: false
- color: '#e5e7eb'
  icon: 📅
  label: Return
  key: Return
  type: date
  options: []
  formula: ''
  folder: ''
  hideZero: false
  subFormula: 'const d = String(p.Duration ?? '''').trim(); if (d) return d; const a = window.moment(String(p.Departure ?? '''').slice(0, 10), ''YYYY-MM-DD'', true), b = window.moment(String(p.Return ?? '''').slice(0, 10), ''YYYY-MM-DD'', true); if (!a.isValid() || !b.isValid() || b.isBefore(a)) return ''How long?''; const n = b.diff(a, ''days''); return n ? (n + 1) + '' days, '' + n + (n === 1 ? '' night'' : '' nights'') : ''One day'';'
  subFields:
  - key: Duration
    label: How long
    type: text
  subTitle: How long
- color: '#e5e7eb'
  icon: 💰
  label: Budget
  key: Budget
  type: currency
  options: []
  formula: ''
  folder: ''
  hideZero: false
  subFormula: 'const L = Array.isArray(p.Maintenance_Log) ? p.Maintenance_Log : []; const s = L.reduce((a, l) => a + (parseFloat(l && l.cost) || 0), 0); const f = (n) => cur + n.toLocaleString(''en-GB'', { maximumFractionDigits: 2 }); if (!s) return /planning|booked/i.test(String(p.Status ?? '''')) ? ''nothing spent yet'' : ''nothing spent''; const b = parseFloat(p.Budget) || 0; return f(s) + '' spent'' + (b && s > b ? '' · '' + f(s - b) + '' over'' : '''');'
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
  icon: 📍
  label: DESTINATIONS
  key: Destinations
  type: link_list
  folder: 04 - Resources/3. 🌐 Entities/3. 🌍 Geographies & Places
  options: []
  options2: []
  width: 100%
  hideZero: true
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
- color: '#3b82f6'
  icon: 🗺️
  label: ITINERARY
  key: Itinerary
  type: sylvics_itinerary
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
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
- color: '#3b82f6'
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
- color: '#3b82f6'
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
- color: '#3b82f6'
  icon: 💰
  label: EXPENSES
  key: Maintenance_Log
  type: maintenance_log
  folder: ''
  options: []
  options2: []
  width: 50%
  hideZero: false
  allowCreate: true
  countWord: expense
  countWords: expenses
  addLabel: + ADD AN EXPENSE
  addTitle: Add an expense
  editTitle: Edit expense
  textLabel: What it was for
  emptyText: Nothing spent yet.
- color: '#3b82f6'
  icon: 👤
  label: WITH
  key: Companions
  type: link_list
  folder: 04 - Resources/3. 🌐 Entities/1. 👥 People/👤 Contacts
  options: []
  options2: []
  width: 50%
  hideZero: true
  allowCreate: true
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
  slimEmpty: true
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
  icon: 📍
  label: PLACES ON THIS TRIP
  key: ''
  type: link_table
  folder: ''
  options:
  - in=04 - Resources/3. 🌐 Entities/3. 🌍 Geographies & Places
  - skip=1. Travels
  - skip=Masterpage
  - direction=both
  - column=Place:file
  - column=Kind:folder
  - column=Type:Type
  - column=Rating:Rating
  - sort=folder
  - limit=40
  - empty=No place is linked to this trip yet.
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
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
sylvics-up: '[[0. Travel Masterpage]]'
sylvics-fullscreen: true
Dashboard_Prefix: TRIP
Banner: ""
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero
```
