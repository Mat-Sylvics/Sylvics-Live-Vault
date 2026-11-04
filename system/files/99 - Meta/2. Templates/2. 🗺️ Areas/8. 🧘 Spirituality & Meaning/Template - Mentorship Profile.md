---
Name: ''
Status: Active
Subtitle_Key: Focus_Area
Role: ''
Focus_Area: ''
Last_Session: null
Next_Milestone: ''
Outcome: ''
Core_Value: ''
Background: ''
sylvics-up: "[[0. Service & Altruism Masterpage]]"
sylvics-fullscreen: true
cssclasses:
- dashboard
- sylvics-dashboard
- transparent-bg
syl-icon: 🎓
Person: ""
Resources_Shared_Urls: []
Header_Schema:
  - color: '#c084fc'
    icon: 🤝
    label: Role
    key: Role
    type: select
    options:
    - Mentors me
    - I mentor
    - Two-way
    formula: ''
    folder: ''
    hideZero: false
    subFormula: 'const st = String(p.Status || ''''); const v = p.Person; const t = String((v && v.path) || (Array.isArray(v) ? v[0] : v) || '''').replace(/^.*?\[\[|\]\].*$/g, '''').split(''|'')[0].trim(); const out = []; if (st) out.push(st); if (t) out.push(''<a data-href="'' + t.replace(/"/g, ''&quot;'') + ''" style="color: inherit; text-decoration: underline dotted; cursor: pointer;">contact note ↗</a>''); return out.join('' · '');'
    subFields:
    - key: Status
      label: Status
      type: select
      options:
      - Active
      - Paused
      - Past
    - key: Person
      label: 'Contact note, as a link: [[Name]]'
      type: text
    subTitle: Status and contact
  - color: '#e5e7eb'
    icon: 📅
    label: Last session
    key: Last_Session
    type: formula
    options: []
    formula: 'const L = Array.isArray(p.Session_Logs) ? p.Session_Logs : []; const iso = (x) => String(x && x.toISODate ? x.toISODate() : (x || '''')).slice(0, 10); const ds = L.map((l) => iso(l && l.date)).filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d)).sort(); const d = ds.length ? ds[ds.length - 1] : iso(p.Last_Session); return d ? window.moment(d).format(''D MMMM YYYY'') : ''--'';'
    folder: ''
    hideZero: false
    subFormula: 'const L = Array.isArray(p.Session_Logs) ? p.Session_Logs : []; const n = L.length; return n ? n + (n === 1 ? '' session logged'' : '' sessions logged'') : ''nothing logged yet'';'
  - color: '#e5e7eb'
    icon: 🧭
    label: Core Value
    key: Core_Value
    type: folder_select
    options: []
    formula: ''
    folder: 02 - Planning/1. ⚖️ Alignment/1. 🧬 Identity/2. 🧭 Values & Virtues
    hideZero: true
Dashboard_Layout:
  - color: '#c084fc'
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
  - color: '#c084fc'
    icon: 🚩
    label: NEXT
    key: Next_Milestone
    type: textarea
    folder: ''
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
    autoHeight: true
    plainFrame: true
  - color: '#c084fc'
    icon: 🏁
    label: WHAT CAME OF IT
    key: Outcome
    type: textarea
    folder: ''
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
    autoHeight: true
    plainFrame: true
  - color: '#c084fc'
    icon: 📜
    label: BACKGROUND
    key: Background
    type: textarea
    folder: ''
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    autoHeight: true
    plainFrame: true
  - color: '#c084fc'
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
  - color: '#c084fc'
    icon: 🗒️
    label: SESSIONS
    key: Session_Logs
    type: curiosity_log
    folder: ''
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    placeholder: What happened in this session? (Press Enter to save)
  - color: '#c084fc'
    folder: ''
    options: &id001 []
    options2: &id002 []
    hideZero: false
    allowCreate: true
    icon: 📓
    label: IN THE JOURNAL
    key: ''
    type: journal_mentions
    width: 100%
    byName: true
    viaKey: Person
    hideEmpty: true
  - color: '#c084fc'
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
  - color: '#c084fc'
    folder: ''
    options: *id001
    options2: *id002
    hideZero: false
    allowCreate: true
    icon: 🧷
    label: MENTIONED HERE
    key: ''
    type: mentioned_here
    width: 100%
    hideEmpty: true
  - color: '#c084fc'
    icon: 📚
    label: RESOURCES SHARED
    key: Resources_Shared
    type: resource_grid
    folder: ''
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: '#c084fc'
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
  - color: '#c084fc'
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
Dashboard_Header_Color: '#c084fc'
Dashboard_Prefix_Color: "#e9d5ff"
Strip_Emojis: true
Inherit_Blueprint: ''
Session_Logs: ''
Resources_Shared: ''
Dashboard_Prefix: MENTORSHIP
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero | dv.current(
```
