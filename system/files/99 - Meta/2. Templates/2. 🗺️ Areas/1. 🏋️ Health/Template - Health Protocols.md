---
ContentType: Protocol
tags:
  - protocol
Active_Protocol: false
Exact_Time: []
Starting_Date: ""
Recurrence:
  - Daily
Timing:
  - Morning
Favorite: false
Stack_Ingredients: []
cover: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop"
cssclasses:
  - dashboard
sylvics-fullscreen: true
Mechanism: "Briefly explain the biological rationale behind this protocol. What does it optimize?"
Execution_Rules: "- Step 1: ...\n- Step 2: ..."
sylvics-up: "[[3. Health Protocols Tracker]]"
syl-icon: ⚕️
Dashboard_Header_Color: "#06b6d4"
Dashboard_Prefix_Color: "#67e8f9"
Header_Schema:
  - color: "#06b6d4"
    icon: 🧭
    label: Use
    key: ""
    type: formula
    options: []
    formula: "const u = String(p.Protocol_Use || '').trim(); return u || 'Not set';"
    subFormula: "const fd = (x) => { if (!x) return ''; try { const m = window.moment(String(x && x.toISODate ? x.toISODate() : x).slice(0, 10), 'YYYY-MM-DD'); return m.isValid() ? m.format('D MMM YYYY') : ''; } catch (e) { return ''; } }; const u = String(p.Protocol_Use || ''); const s = fd(p.Starting_Date), e = fd(p.Ended_Date); const f = p.Favorite === true || p.Favorite === 'true'; let t; if (u === 'Finished') t = s && e ? s + ' – ' + e : (e ? 'Ended ' + e : (s ? 'From ' + s : 'Add the dates')); else if (u === 'When needed') t = s ? 'First used ' + s : 'Add when it was first used'; else t = s ? 'Since ' + s : 'Add when it started'; return t + (f ? ' <span style=\"color:#f43f5e\">♥</span>' : '');"
    subTitle: Use
    subFields:
      - key: Protocol_Use
        label: How is it used?
        type: select
        options:
          - "Ongoing"
          - "When needed"
          - "Finished"
      - key: Starting_Date
        label: Started, or first used
        type: date
      - key: Ended_Date
        label: Ended (when finished)
        type: date
      - key: Favorite
        label: A favourite
        type: toggle
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🔁
    label: Schedule
    key: Recurrence
    type: recurrence
    options: []
    formula: ""
    hideSince: true
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🕒
    label: Time
    key: Exact_Time
    type: notification_time
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🔔
    label: Reminder
    key: Active_Protocol
    type: notification_toggle
    options:
      - Protocol Alarm
    formula: ""
    subFormula: "return (p.Active_Protocol === true || p.Active_Protocol === 'true') ? 'On · logged from the alert' : 'Off · logged by hand';"
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: ✅
    label: Logged
    key: ""
    type: formula
    options: []
    formula: "const me = p.file && p.file.path; const nm = p.file && p.file.name; const days = new Set(); (Array.isArray(p.Protocol_Logs) ? p.Protocol_Logs : []).forEach((l) => { if (l && l.status === 'Executed') days.add(String(l.date && l.date.toISODate ? l.date.toISODate() : l.date).slice(0, 10)); }); try { const rl = app.metadataCache.resolvedLinks || {}; for (const src in rl) { if (!rl[src][me]) continue; const f = app.vault.getAbstractFileByPath(src); const y = f && app.metadataCache.getFileCache(f)?.frontmatter; if (!y || !y.Protocols_Completed) continue; if (![].concat(y.Protocols_Completed).map(String).some((x) => x.includes(nm))) continue; const m = String(f.basename).match(/^(\\d{4}-\\d{2}-\\d{2})/); if (m) days.add(m[1]); } } catch (e) {} const n = days.size; if (!n) return 'Not yet'; return { html: '<span style=\"display:inline-flex;align-items:baseline;gap:7px\">' + n + '<span style=\"font-size:0.6em;color:rgba(255,255,255,0.55);font-weight:600\">' + (n === 1 ? 'day' : 'days') + '</span></span>' };"
    subFormula: "const fd = (x) => { if (!x) return ''; try { const m = window.moment(String(x && x.toISODate ? x.toISODate() : x).slice(0, 10), 'YYYY-MM-DD'); return m.isValid() ? m.format('D MMM YYYY') : ''; } catch (e) { return ''; } }; const me = p.file && p.file.path; const nm = p.file && p.file.name; const days = new Set(); (Array.isArray(p.Protocol_Logs) ? p.Protocol_Logs : []).forEach((l) => { if (l && l.status === 'Executed') days.add(String(l.date && l.date.toISODate ? l.date.toISODate() : l.date).slice(0, 10)); }); try { const rl = app.metadataCache.resolvedLinks || {}; for (const src in rl) { if (!rl[src][me]) continue; const f = app.vault.getAbstractFileByPath(src); const y = f && app.metadataCache.getFileCache(f)?.frontmatter; if (!y || !y.Protocols_Completed) continue; if (![].concat(y.Protocols_Completed).map(String).some((x) => x.includes(nm))) continue; const m = String(f.basename).match(/^(\\d{4}-\\d{2}-\\d{2})/); if (m) days.add(m[1]); } } catch (e) {} const last = [...days].sort().pop(); return last ? 'In the journal · last on ' + fd(last) : 'Nothing logged yet';"
    folder: ""
    hideZero: false
Dashboard_Layout:
  - color: "#06b6d4"
    icon: 📋
    label: Overview
    key: ""
    type: tab_marker
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#06b6d4"
    icon: 💊
    label: SUPPLEMENT STACK
    key: Stack_Ingredients
    type: link_list
    folder: 04 - Resources/2. 🗄️ Reference Library/4. 🌿 Health & Body/Supplements
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#06b6d4"
    icon: 🧬
    label: WHY IT WORKS
    key: Mechanism
    type: textarea
    noStretch: true
    autoHeight: true
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#06b6d4"
    icon: 📜
    label: RULES
    key: Execution_Rules
    type: textarea
    noStretch: true
    autoHeight: true
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#06b6d4"
    icon: 🗓️
    label: Log
    key: ""
    type: tab_marker
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#06b6d4"
    icon: 🟩
    label: ADHERENCE
    key: ""
    type: heatmap
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#06b6d4"
    icon: 📈
    label: RESULTS
    key: Protocol_ROI
    type: textarea
    noStretch: true
    autoHeight: true
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#06b6d4"
    icon: ✅
    label: DAYS DONE
    key: ""
    type: custom_dataview
    folder: "00. The Daily Loop Masterpage"
    options:
      - "TABLE WITHOUT ID link(file.path, substring(\"MonTueWedThuFriSatSun\", (number(dateformat(file.day, \"c\")) - 1) * 3, number(dateformat(file.day, \"c\")) * 3) + \" \" + dateformat(file.day, \"d\") + \" \" + substring(\"JanFebMarAprMayJunJulAugSepOctNovDec\", (number(dateformat(file.day, \"M\")) - 1) * 3, number(dateformat(file.day, \"M\")) * 3) + \" \" + dateformat(file.day, \"yyyy\")) AS \"Day\", Sleep_Quality AS \"Sleep quality\", Energy AS \"Energy\" FROM \"07 - Journal/01 Daily\" WHERE contains(string(Protocols_Completed), this.file.name) SORT file.name DESC LIMIT 20"
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#06b6d4"
    icon: 🔗
    label: Links
    key: ""
    type: tab_marker
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#06b6d4"
    icon: 📓
    label: IN THE JOURNAL
    key: ""
    type: journal_mentions
    folder: ""
    options:
      - "notvia=Protocols_Completed"
      - "empty=No other journal entry writes about it."
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#06b6d4"
    icon: 🔗
    label: LINKED FROM
    key: ""
    type: linked_from
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#06b6d4"
    icon: ⏹️
    label: END OF TABS
    key: ""
    type: end_tabs
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
Minimal_Setup: false
Inherit_Blueprint: ""
Icon: ⚕️
Immersive_Header: Standard
Centered_Title: true
Dashboard_Prefix: HEALTH PROTOCOL
created: <% tp.file.creation_date("YYYY-MM-DD") %>
Protocol_Use: ""
Ended_Date: ""
---

```sylvics-view
EntityDashboardHero
```
