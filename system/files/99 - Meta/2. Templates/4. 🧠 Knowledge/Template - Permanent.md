---
Cluster: []
Topics: []
Status: 🌱 Developing
Gravity: 0
sylvics-up: "[[💎 0. Permanent Masterpage]]"
sylvics-fullscreen: true
cssclasses:
  - dashboard
  - cards
  - sylvics-dashboard
  - preserve-scroll
Dashboard_Theme: Permanent
Dashboard_Prefix: PERMANENT NOTE
Page_Icon: "💎"
Header_Schema:
- color: '#06b6d4'
  icon: 🚦
  label: Status
  key: Status
  type: select
  options:
  - 🌰 Seed
  - 🌱 Developing
  - 🌳 Mature
  formula: ''
  folder: ''
  hideZero: false
- color: '#e5e7eb'
  icon: 🪐
  label: Cluster
  key: Cluster
  type: multi_select
  options:
  - Law
  - Politics
  - Economics
  - Business
  - Technology
  - Science
  - Philosophy
  - Religion
  - Psychology
  - Sociology
  - History
  - Education
  - Personal Development
  - Health
  - Relationships
  - Communication
  - Strategy
  - Systems
  - Culture
  - Knowledge
  formula: ''
  folder: ''
  hideZero: false
- color: '#a78bfa'
  icon: 🧭
  label: Life areas
  key: AreaType
  type: multi_select
  options:
  - Health
  - Relationships & Social
  - Business & Career
  - Finances
  - Home & Environment
  - Personal Growth
  - Recreation
  - Spirituality & Meaning
  formula: ''
  folder: ''
  hideZero: false
- color: '#e5e7eb'
  icon: 🏷️
  label: Topics
  key: Topics
  type: multi_select
  options:
  - Productivity
  - Art
  - Literature
  - Society
  - Logic
  - Design
  formula: ''
  folder: ''
  hideZero: false
- color: '#e5e7eb'
  icon: 🔗
  label: Connections
  key: Gravity
  type: formula
  options: []
  formula: "let inlinks = p.file?.inlinks?.length || 0;\nlet outlinks = p.file?.outlinks?.length || 0;\nlet score = inlinks + outlinks;\nlet color = \"#e5e7eb\";\nlet label = \"linked\";\nif (score < 2) { color = \"#ef4444\"; label = \"orphan\"; }\nelse if (score < 5) { color = \"#f59e0b\"; label = \"few links\"; }\nelse if (score >= 15) { label = \"hub\"; }\nelse if (score >= 10) { label = \"well linked\"; }\nlet html = `<div style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; text-align: center; line-height: 1.1; margin-top: 4px;\">\n  <span style=\"font-size: 2.8em; font-weight: 900; color: ${color};\">${score}</span>\n  <span style=\"font-size: 0.55em; color: ${color}; opacity: 0.8; text-transform: uppercase; letter-spacing: 1px;\">${label}</span>\n</div>`;\nreturn { html, color };\n"
  folder: ''
  hideZero: false
- color: '#e5e7eb'
  icon: 📅
  label: Reviewed
  key: Last Opened
  type: date
  options: []
  formula: ''
  folder: ''
  hideZero: false
Dashboard_Layout:
  - color: "#06b6d4"
    icon: 💎
    label: CORE ARGUMENT
    key: Synthesis
    type: canvas_break
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#06b6d4"
    icon: 🧱
    label: BUILT FROM
    key: Source
    type: vault_links
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#06b6d4"
    icon: 🌍
    label: WHY IT MATTERS
    key: Implications
    type: textarea
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#06b6d4"
    icon: ☑️
    label: NEXT STEPS
    key: Action_Items
    type: action_items
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#06b6d4"
    icon: 🧭
    label: COMPASS
    key: ""
    type: compass
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#06b6d4"
    icon: 🕸️
    label: CONNECTIONS
    key: ""
    type: neural_network
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
Connections_Content: []
North_Upstream_Files: []
West_Similar_Files: []
Center_Mechanism: ""
East_Opposite_Files: []
South_Downstream_Files: []
Last Opened: ""
Implications: ""
Source: []
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero | {section: 0}
```

> [!syl-hidden]
> 


```sylvics-view
EntityDashboardHero | {section: 1}
```
