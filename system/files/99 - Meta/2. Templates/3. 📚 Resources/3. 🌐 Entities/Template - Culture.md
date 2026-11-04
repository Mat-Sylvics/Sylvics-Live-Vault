---
type: culture
Status: Want to Go
Type: null
Focus: null
Neighborhood: null
Price: 2
Rating: null
Exhibitions: []
Session_Logs: []
Companions: []
Resources: null
Related_Files: []
Resources_Urls: []
Header_Schema:
- color: '#eab308'
  icon: 🚦
  label: How often
  key: Status
  type: select
  options:
  - Regular
  - Want to Go
  - Visited
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
  - Museum
  - Monument
  - Art Gallery
  - Historic Site
  - Library
  - Theatre
  - Architecture
  - Church
  - Other
  formula: ''
  folder: ''
  hideZero: false
- color: '#e5e7eb'
  icon: 📚
  label: Focus
  key: Focus
  type: select
  options:
  - Art
  - History
  - Science
  - Nature
  - Technology
  - Music
  - Mixed
  formula: ''
  folder: ''
  hideZero: false
- color: '#e5e7eb'
  icon: 📍
  label: Location
  key: Neighborhood
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
- color: '#eab308'
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
- color: '#eab308'
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
- color: '#eab308'
  icon: 🎨
  label: MUST-SEES
  key: Exhibitions
  type: sylvics_exhibitions
  folder: ''
  options: []
  options2: []
  width: 50%
  hideZero: false
  allowCreate: true
- color: '#eab308'
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
- color: '#eab308'
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
- color: '#eab308'
  icon: 🗒️
  label: VISITS
  key: Session_Logs
  type: maintenance_log
  folder: ''
  options: []
  options2: []
  width: 50%
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
- color: '#eab308'
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
- color: '#eab308'
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
- color: '#eab308'
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
- color: '#eab308'
  icon: 🎟️
  label: EVENTS
  key: ''
  type: link_table
  folder: ''
  options:
  - in=03 - Areas/2. 🤝 Relationships & Social
  - skip=Masterpage
  - direction=in
  - column=Event:file
  - column=Date:Date
  - column=Status:Status
  - sort=Date
  - order=desc
  - limit=20
  - empty=No event note links this place yet.
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
  hideEmpty: true
- color: '#eab308'
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
- color: '#eab308'
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
- color: '#eab308'
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
Dashboard_Header_Color: '#eab308'
Dashboard_Prefix_Color: "#f2d16a"
Strip_Emojis: true
Inherit_Blueprint: ''
cssclasses:
- sylvics-dashboard
sylvics-up: '[[0. Establishments Masterpage]]'
sylvics-fullscreen: true
Review: ''
Dashboard_Prefix: CULTURE
created: <% tp.file.creation_date("YYYY-MM-DD") %>
Dashboard_Background: 99 - Meta/4. Attachments/3. Sylvics Art/Banners/Establishments - Culture.png
Upcoming_Events: []
---

```sylvics-view
EntityDashboardHero
```
