<%*
let eventName = await tp.system.prompt("What is the name of the event?", "");
if (!eventName) {
    eventName = "New Event";
}

let eventType = await tp.system.prompt("What type of event? (e.g. Dinner, Party, Gathering, Networking)", "Gathering");
let eventDate = await tp.system.prompt("Date of the event? (YYYY-MM-DD)", tp.date.now("YYYY-MM-DD"));

let fileName = `🗓️ ${eventName}`;
await tp.file.rename(fileName);
_%>---
Event_Summary: ""
Moodboard: []
Action_Items:
  - text: "Finalize guest list and send invites"
    completed: false
  - text: "Confirm location and make reservations"
    completed: false
  - text: "Plan menu and catering / order food"
    completed: false
  - text: "Send 48-hour reminder to confirmed guests"
    completed: false
Run_Of_Show: []
Target_Budget: ""
Budget: []
tags:
  - event
Type: <% eventType %>
Date: <% eventDate %>
Status: 📅 Planned
Category: "Recreational"
Energy_Delta: 0
Pending_Guests:
  - ""
Confirmed_Guests:
  - ""
Declined_Guests:
  - ""
cssclasses:
  - entity-theme
  - dashboard
  - sylvics-dashboard
  - transparent-bg
sylvics-fullscreen: true
sylvics-up: "[[2. Event Planner]]"
Place: ""
Location: ""
Dashboard_Layout:
  - color: '#FF6B8A'
    icon: 🎯
    label: SUMMARY
    key: Event_Summary
    type: textarea
    folder: ''
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    autoHeight: true
    plainFrame: true
  - color: "#FF6B8A"
    icon: 📓
    label: IN THE JOURNAL
    key: ""
    type: journal_mentions
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    byName: true
    hideEmpty: true
  - color: '#FF6B8A'
    icon: ☑️
    label: NEXT STEPS
    key: Action_Items
    type: action_items
    folder: ''
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
    foldDone: true
    itemName: STEP
    itemNames: steps
  - color: '#FF6B8A'
    icon: 🕒
    label: SCHEDULE
    key: Run_Of_Show
    type: agenda
    folder: ''
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: '#FF6B8A'
    icon: 👥
    label: GUEST LIST
    key: ''
    type: rsvp_table
    folder: ''
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: '#FF6B8A'
    icon: 💰
    label: BUDGET
    key: Budget
    type: financial_ledger
    folder: ''
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: '#FF6B8A'
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
    slimEmpty: true
  - color: '#FF6B8A'
    icon: 🖼️
    label: MOODBOARD
    key: Moodboard
    type: gallery
    folder: ''
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
Dashboard_Prefix: PLANNED EVENT
Dashboard_Header_Color: "#FF6B8A"
Header_Schema:
  - color: '#FF6B8A'
    icon: 🚦
    label: Status
    key: Status
    type: select
    options:
      - 💡 Idea
      - 📅 Planned
      - 📨 Invites Sent
      - 🎟️ Booked
      - ✅ Completed
      - ❌ Cancelled
    formula: ''
    colors:
      💡 Idea: '#c4b5fd'
      📅 Planned: '#fbbf24'
      📨 Invites Sent: '#fbbf24'
      🎟️ Booked: '#60a5fa'
      ✅ Completed: '#34d399'
      ❌ Cancelled: '#f87171'
  - color: "#e5e7eb"
    icon: 📅
    label: When
    key: ""
    type: formula
    formula: "const s = String(p.Date && p.Date.toISODate ? p.Date.toISODate() : (p.Date || '')).slice(0, 10); const m = window.moment; const ok = /^\\d{4}-\\d{2}-\\d{2}$/.test(s) && m; return ok ? m(s, 'YYYY-MM-DD').format('D MMMM YYYY') : '--';"
    subFormula: "const s = String(p.Date && p.Date.toISODate ? p.Date.toISODate() : (p.Date || '')).slice(0, 10); const m = window.moment; const ok = /^\\d{4}-\\d{2}-\\d{2}$/.test(s) && m; if (!ok) return ''; const t = clock && clock.moment ? clock.moment().format('YYYY-MM-DD') : m().format('YYYY-MM-DD'); const n = m(s, 'YYYY-MM-DD').diff(m(t, 'YYYY-MM-DD'), 'days'); if (n > 1) return 'in ' + n + ' days'; if (n === 1) return 'tomorrow'; if (n === 0) return 'today'; if (n === -1) return 'yesterday'; return m(s, 'YYYY-MM-DD').format('dddd');"
  - color: '#e5e7eb'
    icon: 📍
    label: Where
    key: ''
    type: formula
    formula: 'const raw = String(p.Place && p.Place.path ? p.Place.path : (p.Place || '''')).replace(/^!?\[\[|\]\]$/g, '''').split(''|'')[0]; const f = raw ? app.metadataCache.getFirstLinkpathDest(raw, '''') : null; const name = f ? f.basename.replace(/^[^\p{L}\p{N}]+/u, '''').trim() : ''''; const loc = String(p.Location || '''').trim(); if (f) return { html: name, link: f.path }; return loc ? loc.split('','')[0] : ''--'';'
    subFormula: 'const raw = String(p.Place && p.Place.path ? p.Place.path : (p.Place || '''')).replace(/^!?\[\[|\]\]$/g, '''').split(''|'')[0]; const f = raw ? app.metadataCache.getFirstLinkpathDest(raw, '''') : null; const name = f ? f.basename.replace(/^[^\p{L}\p{N}]+/u, '''').trim() : ''''; const loc = String(p.Location || '''').trim(); if (!loc) return ''''; if (!f) return loc.split('','').slice(1).join('','').trim(); const esc = name.replace(/[.*+?^${}()|[\]\\]/g, ''\\$&''); const rest = loc.replace(new RegExp(''^'' + esc + '',?\\s*'', ''i''), ''''); return rest.toLowerCase() === name.toLowerCase() ? '''' : rest;'
  - color: '#e5e7eb'
    icon: 🏷️
    label: Kind
    key: ''
    type: formula
    formula: const a = [].concat(p.Category || []).filter(Boolean).map(String); const b = [].concat(p.Type || []).filter(Boolean).map(String); const s = [a.join(', '), b.join(', ')].filter(Boolean).join(' · '); return s || '--';
  - color: '#e5e7eb'
    icon: 👥
    label: Guests
    key: RSVP
    type: rsvp
    formula: ''
  - color: '#e5e7eb'
    icon: 🔋
    label: Energy
    key: ''
    type: formula
    formula: 'if (!/complete/i.test(String(p.Status || ''''))) return ''--''; const v = parseFloat(p.Energy_Delta); if (isNaN(v)) return ''--''; const col = v < 0 ? ''#f87171'' : v > 0 ? ''#34d399'' : ''#e5e7eb''; return { html: (v > 0 ? ''+'' : v < 0 ? ''−'' : '''') + Math.abs(v), color: col };'
    subFormula: 'const v = parseFloat(p.Energy_Delta); if (isNaN(v)) return ''''; return v <= -25 ? ''drained'' : v < 0 ? ''tiring'' : v === 0 ? ''no change'' : v < 25 ? ''good'' : ''lifted'';'
    hideEmpty: true
Strip_Emojis: true
Minimal_Setup: false
Centered_Title: true
Immersive_Header: Standard
Inherit_Blueprint: ""
Dashboard_Prefix_Color: "#fda4af"
RSVP: ""
Dashboard_Theme: Standard
Cover_Alignment: Right
Dashboard_Background: ""
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

<div class="syl-aurora"></div>

```sylvics-view
EntityDashboardHero
```
