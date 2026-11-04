---
Protocol_Logs: []
Notifications_Enabled: false
Recurrence: ""
ContentType: Supplement
tags:
  - supplement
Dosage: "1 unit"
Timing:
Inventory_Count: 30
Price: 1
Favorite: false
cover: "https://images.unsplash.com/photo-1584308666744-24d5e47854be?q=80&w=2070&auto=format&fit=crop"
cssclasses:
  - dashboard
sylvics-fullscreen: true
syl-icon: "💊"
Synergies: ""
Contraindications: ""
Is_Post_Workout: false
sylvics-up: "[[3. Health Protocols Tracker]]"
Dashboard_Header_Color: "#06b6d4"
Dashboard_Prefix_Color: "#67e8f9"
Exact_Time: []
Header_Schema:
- color: '#06b6d4'
  icon: 💊
  label: Dosage
  key: ''
  type: formula
  options: []
  formula: const s = String(p.Dosage || '').trim(); let a = s, r = ''; const m = s.match(/^(\d+(?:[.,]\d+)?\s*[^\s,(]+)\s*(.*)$/); if (m) { a = m[1]; r = m[2]; } else { const i = s.search(/[(,]/); if (i > 0) { a = s.slice(0, i).trim(); r = s.slice(i); } } r = r.replace(/[()]/g, '').replace(/^[\s,;:-]+/, '').replace(/\s+,/g, ',').trim(); return a || 'Not set';
  subFormula: 'const s = String(p.Dosage || '''').trim(); let a = s, r = ''''; const m = s.match(/^(\d+(?:[.,]\d+)?\s*[^\s,(]+)\s*(.*)$/); if (m) { a = m[1]; r = m[2]; } else { const i = s.search(/[(,]/); if (i > 0) { a = s.slice(0, i).trim(); r = s.slice(i); } } r = r.replace(/[()]/g, '''').replace(/^[\s,;:-]+/, '''').replace(/\s+,/g, '','').trim(); const f = p.Favorite === true || p.Favorite === ''true''; return (r ? r.charAt(0).toUpperCase() + r.slice(1) : ''No details'') + (f ? '' <span style="color:#f43f5e">♥</span>'' : '''');'
  subTitle: Dosage
  subFields:
  - key: Dosage
    label: What one dose is
    type: text
  - key: Favorite
    label: A favourite
    type: toggle
  folder: ''
  hideZero: false
- color: '#e5e7eb'
  icon: 🔁
  label: Schedule
  key: Recurrence
  type: recurrence
  options: []
  formula: ''
  subFormula: 'const u = String(p.Supplement_Use || ''In use''); const tr = p.Is_Post_Workout === true || p.Is_Post_Workout === ''true''; return u + '' · '' + (tr ? ''after training'' : ''not tied to training'');'
  subTitle: Use and timing
  subFields:
  - key: Supplement_Use
    label: How is it used?
    type: select
    options:
    - In use
    - When needed
    - Stopped
  - key: Is_Post_Workout
    label: Taken after training
    type: toggle
  folder: ''
  hideZero: false
- color: '#e5e7eb'
  icon: 🕒
  label: Time
  key: Exact_Time
  type: notification_time
  options: []
  formula: ''
  folder: ''
  hideZero: false
- color: '#e5e7eb'
  icon: 🔔
  label: Reminder
  key: Notifications_Enabled
  type: notification_toggle
  options:
  - Supplement Alarm
  formula: ''
  subFormula: 'return (p.Notifications_Enabled === true || p.Notifications_Enabled === ''true'') ? ''On · logged from the alert'' : ''Off · logged by hand'';'
  folder: ''
  hideZero: false
- color: '#e5e7eb'
  icon: 📦
  label: Stock
  key: ''
  type: formula
  options: []
  formula: 'const dm = String(p.Dosage || '''').trim().match(/^(\d+(?:\.\d+)?)\s*([^\s,()]+)?/); const pd = dm ? (parseFloat(dm[1]) || 1) : 1; const uw = dm && dm[2] ? dm[2] : ''dose''; const plural = (w, x) => /^(g|mg|µg|mcg|kg|ml|l|oz|iu)$/i.test(w) ? w : (x === 1 ? w.replace(/s$/, '''') : (/s$/.test(w) ? w : w + ''s'')); const su = String(p.Stock_Unit || '''').trim(); const n = parseFloat(p.Inventory_Count); if (isNaN(n)) return ''Not counted''; const k = Math.round(n * 10) / 10; return { html: ''<span style="display:inline-flex;align-items:baseline;gap:7px">'' + k + ''<span style="font-size:0.6em;color:rgba(255,255,255,0.55);font-weight:600">'' + plural(su || uw, k) + '' left</span></span>'' };'
  subFormula: 'const dm = String(p.Dosage || '''').trim().match(/^(\d+(?:\.\d+)?)\s*([^\s,()]+)?/); const pd = dm ? (parseFloat(dm[1]) || 1) : 1; const uw = dm && dm[2] ? dm[2] : ''dose''; const plural = (w, x) => /^(g|mg|µg|mcg|kg|ml|l|oz|iu)$/i.test(w) ? w : (x === 1 ? w.replace(/s$/, '''') : (/s$/.test(w) ? w : w + ''s'')); const su = String(p.Stock_Unit || '''').trim(); const use = String(p.Supplement_Use || ''In use''); const n = parseFloat(p.Inventory_Count) || 0; if (use === ''Stopped'') return ''Not taken any more''; if (su) return n <= 1 ? (n <= 0 ? ''None left'' : ''The last one: time to buy'') : ''Counted in '' + plural(su, 2); if (n <= 0) return ''None left''; const DAYS = [''Monday'',''Tuesday'',''Wednesday'',''Thursday'',''Friday'',''Saturday'',''Sunday'']; const t = Array.isArray(p.Exact_Time) ? Math.max(1, p.Exact_Time.length) : 1; const rec = Array.isArray(p.Recurrence) ? p.Recurrence.map(String) : [String(p.Recurrence || ''Daily'')]; let w = 7; if (rec.length && /^\d/.test(rec[0])) { const k = parseFloat(rec[0]) || 1; const u = String(rec[1] || ''Days''); w = u === ''Weeks'' ? 1 / k : u === ''Months'' ? 7 / (30.4 * k) : u === ''Quarters'' ? 7 / (91 * k) : u === ''Years'' ? 7 / (365 * k) : 7 / k; } else { const n2 = rec.filter((d) => DAYS.includes(d)).length; if (n2) w = n2; } const per = t * w / 7; const d = (n / pd) / per; let span; if (d < 1) span = ''less than a day''; else if (d < 14) { const k = Math.round(d); span = ''about '' + k + (k === 1 ? '' day'' : '' days''); } else if (d < 70) span = ''about '' + Math.round(d / 7) + '' weeks''; else { const k = Math.round(d / 30.4); span = ''about '' + k + (k === 1 ? '' month'' : '' months''); } if (use === ''When needed'') return ''Enough for '' + span + '' of use''; let end = ''''; try { if (d >= 1) end = '' · runs out around '' + clock.moment().add(Math.floor(d), ''days'').format(d < 70 ? ''D MMM'' : ''MMM YYYY''); } catch (e) {} return span.charAt(0).toUpperCase() + span.slice(1) + end;'
  subTitle: Stock
  subFields:
  - key: Inventory_Count
    label: How much is left
    type: number
  - key: Stock_Unit
    label: Counted in (leave empty for the unit of a dose; bag, tub…)
    type: text
  folder: ''
  hideZero: false
- color: '#e5e7eb'
  icon: 💰
  label: Cost
  key: ''
  type: formula
  options: []
  formula: 'const v = parseFloat(p.Price); let c = ''''; try { const fs = dv && dv.page(''03 - Areas/4. 💰 Finances/3. Wealth Management/7. Finance Settings.md''); if (fs && fs.Currency) c = String(fs.Currency); } catch (e) {} if (isNaN(v)) return ''Not priced''; return { html: ''<span style="display:inline-flex;align-items:baseline;gap:7px">'' + c + v.toFixed(2) + ''<span style="font-size:0.6em;color:rgba(255,255,255,0.55);font-weight:600">'' + ''a pack</span></span>'' };'
  subFormula: 'const dm = String(p.Dosage || '''').trim().match(/^(\d+(?:\.\d+)?)\s*([^\s,()]+)?/); const pd = dm ? (parseFloat(dm[1]) || 1) : 1; const uw = dm && dm[2] ? dm[2] : ''dose''; const uo = (x) => /^(g|mg|µg|mcg|kg|ml|l|oz|iu)$/i.test(uw) ? uw : (x === 1 ? uw.replace(/s$/, '''') : (/s$/.test(uw) ? uw : uw + ''s'')); const v = parseFloat(p.Price), k = parseFloat(p.Pack_Size); let c = ''''; try { const fs = dv && dv.page(''03 - Areas/4. 💰 Finances/3. Wealth Management/7. Finance Settings.md''); if (fs && fs.Currency) c = String(fs.Currency); } catch (e) {} if (isNaN(v)) return ''Add the price of a pack''; return k > 0 ? c + (v * pd / k).toFixed(2) + '' a dose · '' + k + '' '' + uo(k) + '' a pack'' : ''Add how much a pack holds'';'
  subTitle: Cost
  subFields:
  - key: Price
    label: Price of one pack
    type: number
  - key: Pack_Size
    label: How much a pack holds (in the unit of a dose)
    type: number
  folder: ''
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
    icon: 📦
    label: STOCK
    key: ""
    type: Supplement Inventory
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#06b6d4"
    icon: 📝
    label: NOTES
    key: Synergies
    type: textarea
    noStretch: true
    autoHeight: true
    folder: ""
    options: []
    options2: []
    width: 66%
    hideZero: false
    allowCreate: true
  - color: "#06b6d4"
    icon: ⚠️
    label: CAUTIONS
    key: Contraindications
    type: textarea
    noStretch: true
    autoHeight: true
    folder: ""
    options: []
    options2: []
    width: 33%
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
    label: INTAKE
    key: ""
    type: heatmap
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#06b6d4"
    icon: ✅
    label: DAYS TAKEN
    key: ""
    type: custom_dataview
    folder: "00. The Daily Loop Masterpage"
    options:
      - "TABLE WITHOUT ID link(file.path, substring(\"MonTueWedThuFriSatSun\", (number(dateformat(file.day, \"c\")) - 1) * 3, number(dateformat(file.day, \"c\")) * 3) + \" \" + dateformat(file.day, \"d\") + \" \" + substring(\"JanFebMarAprMayJunJulAugSepOctNovDec\", (number(dateformat(file.day, \"M\")) - 1) * 3, number(dateformat(file.day, \"M\")) * 3) + \" \" + dateformat(file.day, \"yyyy\")) AS \"Day\", Sleep_Quality AS \"Sleep quality\", Energy AS \"Energy\" FROM \"07 - Journal/01 Daily\" WHERE contains(string(Protocols_Completed), this.file.name) SORT file.name DESC LIMIT 20"
    options2: []
    width: 100%
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
    icon: 🧪
    label: PROTOCOLS
    key: ""
    type: Supplement Protocols
    folder: ""
    options: []
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
    options:
      - "skip=07 - Journal"
      - "skip=99 - Meta"
      - "notvia=Stack_Ingredients"
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
Dashboard_Prefix: SUPPLEMENT
Centered_Title: true
Immersive_Header: Standard
Minimal_Setup: false
created: <% tp.file.creation_date("YYYY-MM-DD") %>
Supplement_Use: "In use"
Stock_Unit: ""
---

```sylvics-view
EntityDashboardHero | { file: dv.current() }
```
