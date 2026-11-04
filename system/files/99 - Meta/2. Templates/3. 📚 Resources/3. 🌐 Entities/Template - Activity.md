---
type: activity
Status: Want to Go
Type: null
Vibe: null
Neighborhood: null
Price: 2
Rating: null
Session_Logs: []
Companions: []
Resources: null
Related_Files: []
Highlights: []
Resources_Urls: []
Header_Schema:
- color: '#06b6d4'
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
  - Bowling
  - Arcade
  - Escape Room
  - Go-Kart
  - Mini Golf
  - Laser Tag
  - Trampoline Park
  - Theme Park
  - Water Park
  - Games Café
  - Workshop
  - Market
  - On the Water
  - Sauna
  - Open Evening
  - Other
  formula: ''
  folder: ''
  hideZero: false
- color: '#e5e7eb'
  icon: ✨
  label: Vibe
  key: Vibe
  type: select
  options:
  - Retro
  - Modern
  - Family-Friendly
  - Competitive
  - Chill
  - Energetic
  - Adventurous
  - Loud
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
- color: '#06b6d4'
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
- color: '#06b6d4'
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
- color: '#06b6d4'
  icon: 🗓️
  label: NEXT TIME
  key: Upcoming_Events
  type: sylvics_upcoming_events
  folder: ''
  options: []
  options2: []
  width: 50%
  hideZero: false
  allowCreate: true
  itemName: PLAN
  itemNames: plans
  hideProgress: true
  hideDone: true
  noStretch: true
  slimEmpty: true
- color: '#06b6d4'
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
- color: '#06b6d4'
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
- color: '#06b6d4'
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
- color: '#06b6d4'
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
- color: '#06b6d4'
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
- color: '#06b6d4'
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
- color: '#06b6d4'
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
- color: '#06b6d4'
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
- color: '#06b6d4'
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
Dashboard_Header_Color: '#06b6d4'
Dashboard_Prefix_Color: "#69d3e5"
Strip_Emojis: true
Inherit_Blueprint: ''
cssclasses:
- sylvics-dashboard
sylvics-up: '[[0. Establishments Masterpage]]'
sylvics-fullscreen: true
Review: ''
Dashboard_Prefix: ACTIVITY
created: <% tp.file.creation_date("YYYY-MM-DD") %>
Dashboard_Background: 99 - Meta/4. Attachments/3. Sylvics Art/Banners/Establishments - Activities Quay.png
Upcoming_Events: []
---

```sylvics-view
EntityDashboardHero
```
