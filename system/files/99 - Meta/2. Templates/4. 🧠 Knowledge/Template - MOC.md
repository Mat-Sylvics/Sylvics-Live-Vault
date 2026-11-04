---
tags:
  - moc
status: seedling
created: <% tp.file.creation_date("YYYY-MM-DD") %>
updated: <% tp.file.creation_date("YYYY-MM-DD") %>
sylvics-up: "[[00. Maps of Content Masterpage]]"
cssclasses:
  - sylvics-moc
  - dashboard
  - sylvics-dashboard
  - preserve-scroll
sylvics-fullscreen: true
Dashboard_Theme: Map
Dashboard_Layout:
  - icon: 🎯
    label: WHAT THIS MAP HOLDS
    key: Scope
    type: textarea
    width: 100%
    color: '#f5c2e7'
    folder: ''
    options: []
    options2: []
    allowCreate: true
    autoHeight: true
    placeholder: "What belongs on this map and what does not, in one or two sentences: the day it started and the theme that holds it together."
  - icon: 🧭
    label: THE ATLAS
    key: Atlas
    type: canvas_break
    width: 100%
    color: '#a78bfa'
    folder: ''
    options: []
    options2: []
    allowCreate: true
  - icon: 🔗
    label: CONNECTED MAPS & HUBS
    key: Connected
    type: canvas_break
    width: 100%
    color: '#60a5fa'
    folder: ''
    options: []
    options2: []
    allowCreate: true
  - icon: ❓
    label: OPEN QUESTION
    key: Open_Question
    type: textarea
    width: 50%
    color: '#facc15'
    folder: ''
    options: []
    options2: []
    allowCreate: true
    autoHeight: true
    placeholder: "The question this map cannot answer yet."
  - icon: ⚖️
    label: WHERE THE NOTES DISAGREE
    key: Tensions
    type: textarea
    width: 50%
    color: '#fb923c'
    folder: ''
    options: []
    options2: []
    allowCreate: true
    autoHeight: true
    placeholder: "Two notes on this map that pull against each other, and what is still unresolved."
  - icon: 🪴
    label: TENDING
    key: ''
    type: map_tending
    width: 100%
    color: '#34d399'
    folder: ''
    options: []
    options2: []
    allowCreate: true
Scope: ''
Open_Question: ''
Tensions: ''
---

```sylvics-view
MapOfContent
```

```sylvics-view
EntityDashboardHero | {section: 0}
```

> [!syl-hidden]
> ### A first group
> - Link a note here, then a few words on why it belongs.
> - When a group passes five or six notes, give it a heading of its own.

```sylvics-view
EntityDashboardHero | {section: 1}
```

> [!syl-hidden]
> - Link another map here, then what the two have in common.

```sylvics-view
EntityDashboardHero | {section: 2}
```
