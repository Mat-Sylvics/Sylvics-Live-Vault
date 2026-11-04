---
tags:
  - contact
Last Contacted: 
Last Update:
Relationship: 
VIP: false
Location: 
Birthday: 
Industry:
sylvics-up: "[[1. Personal CRM]]"
Dashboard_Header_Color: "#FF6B8A"
Dashboard_Prefix_Color: "#fda4af"
sylvics-fullscreen: true
crm_how_we_met: ""
crm_what_they_do: ""
crm_key_interests: ""
crm_personal_notes: ""
crm_life_details: ""
crm_ideas: ""
crm_skills: ""
crm_introductions: ""
crm_resources: ""
crm_small_details: ""
crm_likes_dislikes: ""
crm_quotes: ""
crm_topics_to_avoid: ""
crm_known_stressors: ""
crm_boundaries: ""
crm_next_action: ""
Header_Schema:
  - color: '#FF6B8A'
    icon: 🏅
    label: Tier
    key: Tier
    type: select
    options:
      - ⚪ None
      - 🔥 A-Tier (Inner Circle)
      - ⭐ B-Tier (Close)
      - 🤝 C-Tier (Regular)
      - 🧊 D-Tier (Dormant)
    formula: ''
    folder: ''
    hideZero: false
    subFormula: "if (p.in_memoriam === true) return ''; const c = { 'A-Tier': 15, 'B-Tier': 45, 'C-Tier': 90, 'D-Tier': 180 }; try { const crm = app.metadataCache.getFirstLinkpathDest('1. Personal CRM', ''); const fm = crm ? (app.metadataCache.getFileCache(crm) || {}).frontmatter : null; if (fm && fm.decayConfig) Object.assign(c, fm.decayConfig); } catch (e) {} const k = Object.keys(c).find((x) => String(p.Tier || '').includes(x)); const own = Number(p.Contact_Every) > 0; const n = own ? Number(p.Contact_Every) : (k ? Number(c[k]) : 0); const fixed = p['Next Follow Up'] ? ' · next set by hand' : ''; return n ? 'In touch every ' + n + ' days' + (own ? '' : ' (circle default)') + fixed : 'Set how often to keep in touch';"
    subTitle: Keep in touch
    subFields:
      - key: Contact_Every
        label: Every how many days (leave empty for the circle's default)
        type: number
      - key: Next Follow Up
        label: Or a set date for the next follow-up (optional)
        type: date
  - color: '#e5e7eb'
    icon: 🤝
    label: Relationship
    key: Relationship
    type: select
    options:
      - ⚪ None
      - Friend
      - Family
      - Professional
      - Acquaintance
    formula: ''
    folder: ''
    hideZero: false
  - color: '#e5e7eb'
    icon: 💼
    label: Industry
    key: Industry
    type: select
    options:
      - Technology
      - Finance
      - Healthcare
      - Real Estate
      - Law
      - Education
      - Media & Entertainment
      - Art & Design
      - Marketing
      - E-Commerce
      - Consulting
      - Non-Profit
      - Government
      - Manufacturing
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
    hideEmpty: true
  - color: '#e5e7eb'
    icon: 📅
    label: Last Contact
    key: Last Contacted
    type: timeline
    options: []
    formula: ''
    folder: ''
    hideZero: false
  - color: '#e5e7eb'
    icon: 🎂
    label: Birthday
    key: Birthday
    type: date
    options: []
    formula: ''
    folder: ''
    hideZero: false
  - color: '#e5e7eb'
    icon: 👑
    label: VIP
    key: ''
    type: formula
    options: []
    formula: 'const v = p.VIP; return (v === true || String(v).toLowerCase() === ''true'') ? { html: ''VIP'', color: ''#fbbf24'' } : ''--'';'
    folder: ''
    hideZero: false
    hideEmpty: true
Dashboard_Layout:
  - color: '#FF6B8A'
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
  - color: '#FF6B8A'
    icon: ⏰
    label: KEEP IN TOUCH
    key: ''
    type: custom_dataview
    folder: "1. Personal CRM"
    options:
      - 'dv.pages; /*guard*/ try { const m = window.moment; const esc = (s) => String(s).replace(/&/g, ''&amp;'').replace(/</g, ''&lt;'').replace(/>/g, ''&gt;''); let now = m(); try { const host = Object.values(app.plugins.plugins).find((x) => x && x.exampleMode); const em = host ? host.exampleMode : null; if (em && em.isOn() && em.anchor()) now = m(em.anchor()); } catch (e) {} const today = now.startOf(''day''); const day = (v) => { if (!v) return null; const d = m(String(v).split(''T'')[0], [''YYYY-MM-DD'', ''DD-MM-YYYY'', ''MM-DD'']); return d.isValid() ? d.startOf(''day'') : null; }; const plural = (n, w) => n + '' '' + w + (n === 1 ? '''' : ''s''); const cadence = { ''A-Tier'': 15, ''B-Tier'': 45, ''C-Tier'': 90, ''D-Tier'': 180 }; try { const crm = app.metadataCache.getFirstLinkpathDest(''1. Personal CRM'', ''''); const fm = crm ? (app.metadataCache.getFileCache(crm) || {}).frontmatter : null; if (fm && fm.decayConfig) Object.assign(cadence, fm.decayConfig); } catch (e) {} if (window.PersonalCRMDecayConfig) Object.assign(cadence, window.PersonalCRMDecayConfig); const tier = String(p[''Tier''] || ''''); const tierKey = Object.keys(cadence).find((k) => tier.includes(k)); const every = Number(p.Contact_Every) > 0 ? Number(p.Contact_Every) : (tierKey ? Number(cadence[tierKey]) : 0); const last = day(p[''Last Contacted''] || p[''Last Update'']); const manual = day(p[''Next Follow Up'']); const next = manual || (last && every ? last.clone().add(every, ''days'') : null); const grey = ''rgba(255,255,255,0.45)''; let big = ''No date yet'', sub = ''Set a tier and a last contact date'', color = grey, share = 0; if (next) { const d = next.diff(today, ''days''); if (d < 0) { big = ''Overdue by '' + plural(-d, ''day''); color = ''#ef4444''; } else if (d === 0) { big = ''Today''; color = ''#ef4444''; } else if (d === 1) { big = ''Tomorrow''; color = ''#f59e0b''; } else { big = ''In '' + d + '' days''; color = d <= 7 ? ''#f59e0b'' : ''#10b981''; } sub = next.format(''D MMMM YYYY'') + (manual ? '' · date set by hand'' : '' · every '' + every + '' days''); if (last && next.isAfter(last)) share = Math.max(0, Math.min(1, today.diff(last, ''days'') / next.diff(last, ''days''))); else if (d <= 0) share = 1; } let bBig = ''Not set'', bSub = ''Add the birthday in the header''; const born = day(p[''Birthday'']); if (born) { const nb = born.clone().year(today.year()); if (nb.isBefore(today)) nb.add(1, ''year''); const d = nb.diff(today, ''days''); const age = born.year() > 1900 && born.year() < today.year() ? nb.year() - born.year() : 0; bBig = born.format(''D MMMM''); bSub = (age ? ''Turns '' + age + '' '' : '''') + (d === 0 ? ''today'' : d === 1 ? ''tomorrow'' : ''in '' + d + '' days''); bSub = bSub.charAt(0).toUpperCase() + bSub.slice(1); } const name = p.file.name; const has = (v) => String(v || '''').includes(name); const count = (src, test) => { try { return dv.pages(src).where(test).length; } catch (e) { return 0; } }; const days = count(''"07 - Journal/01 Daily"'', (x) => has(x.contacts)); const work = count(''"03 - Areas/3. 💼 Business & Career/1. Work"'', (x) => has(x.Linked_Client)); const events = count(''"03 - Areas/2. 🤝 Relationships & Social"'', (x) => has(x.Contacts) || has(x.Confirmed_Guests)); const facts = []; if (p[''Location'']) facts.push(''📍 '' + esc(p[''Location''])); if (days) facts.push(plural(days, ''journal day'')); if (work) facts.push(work === 1 ? ''1 meeting or call'' : work + '' meetings and calls''); if (events) facts.push(plural(events, ''shared event'')); const tile = (label, value, note, c, bar) => ''<div style="flex:1 1 180px;min-width:0;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:14px 16px;">'' + ''<div style="font-size:0.7em;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.5);">'' + label + ''</div>'' + ''<div style="font-size:1.35em;font-weight:900;color:'' + c + '';margin-top:6px;">'' + value + ''</div>'' + ''<div style="font-size:0.8em;color:rgba(255,255,255,0.55);margin-top:4px;">'' + note + ''</div>'' + (bar === null ? '''' : ''<div style="height:5px;background:rgba(255,255,255,0.1);border-radius:3px;overflow:hidden;margin-top:10px;"><div style="height:100%;width:'' + Math.round(bar * 100) + ''%;background:'' + c + '';"></div></div>'') + ''</div>''; container.innerHTML = ''<div style="display:flex;flex-wrap:wrap;gap:12px;">'' + tile(''Next follow-up'', big, sub, color, share) + tile(''Birthday'', bBig, bSub, ''#e5e7eb'', null) + ''</div><div style="margin-top:12px;font-size:0.8em;color:rgba(255,255,255,0.55);line-height:1.6;">'' + facts.join('' &nbsp;·&nbsp; '') + ''</div>''; } catch (e) { console.error(''Sylvics script'', e); container.innerHTML = ''<div style="color: rgba(255,255,255,0.4); font-style: italic; font-size: 0.9em; padding: 10px 0;">Nothing to show yet.</div>''; }'
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: '#FF6B8A'
    icon: ➡️
    label: NEXT STEP
    key: crm_next_action
    type: textarea
    folder: ''
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
    autoHeight: true
    plainFrame: true
    fit: true
  - color: '#FF6B8A'
    icon: 📝
    label: THE STORY SO FAR
    key: crm_scratchpad
    type: textarea
    folder: ''
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    autoHeight: true
    plainFrame: true
  - color: '#FF6B8A'
    icon: 🧠
    label: WHO THEY ARE
    key: ''
    type: contact_quick_context
    folder: ''
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: '#FF6B8A'
    icon: 📌
    label: THINGS TO REMEMBER
    key: ''
    type: contact_memory_hooks
    folder: ''
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: '#FF6B8A'
    icon: 🚧
    label: SENSITIVITIES
    key: ''
    type: contact_sensitivities
    folder: ''
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: '#FF6B8A'
    icon: 🎁
    label: GIFTS AND HELP
    key: ''
    type: contact_values_gifts
    folder: ''
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: '#FF6B8A'
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
  - color: '#FF6B8A'
    icon: 💬
    label: INTERACTIONS
    key: ''
    type: interaction_timeline
    folder: ''
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: '#FF6B8A'
    icon: 🎉
    label: SHARED EVENTS
    key: ''
    type: joint_events
    folder: ''
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    hideEmpty: true
  - color: '#FF6B8A'
    icon: ☕
    label: MEETINGS AND CALLS
    key: ''
    type: custom_dataview
    folder: 2. Meetings & Calls
    options:
      - 'dv.pages; /*syl-table*/ const m = window.moment; const esc = (s) => String(s ?? '''').replace(/&/g, ''&amp;'').replace(/</g, ''&lt;''); const iso = (v) => !v ? '''' : (v.toISODate ? v.toISODate() : String(v).slice(0, 10)); const name = p.file.name; const has = (v) => String(v ?? '''').includes(name); const strip = (s) => String(s ?? '''').replace(/^[^\p{L}\p{N}]+/u, '''').trim(); let rows = []; try { rows = dv.pages(''"03 - Areas/3. 💼 Business & Career/1. Work"'').where((x) => has(x.Linked_Client) && !/Masterpage|Template/.test(x.file.name)).array(); } catch (e) { rows = []; } rows.sort((a, b) => iso(b[''Date'']).localeCompare(iso(a[''Date'']))); rows = rows.slice(0, 20); if (!rows.length) return; const th = ''font-size:0.68em;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.45);font-weight:800;padding:6px 8px;text-align:left;''; const td = ''padding:7px 8px;border-top:1px solid rgba(255,255,255,0.06);font-size:0.9em;color:rgba(255,255,255,0.75);''; container.innerHTML = ''<table style="width:100%;border-collapse:collapse;"><tr><th style="'' + th + ''">Meeting or call</th><th style="'' + th + ''">Kind</th><th style="'' + th + ''text-align:right;">Date</th></tr>'' + rows.map((x) => ''<tr data-p="'' + esc(x.file.path) + ''" style="cursor:pointer;"><td style="'' + td + ''color:#fff;font-weight:700;">'' + esc(x.file.name) + ''</td><td style="'' + td + ''">'' + esc(strip(x.Type || '''')) + ''</td><td style="'' + td + ''text-align:right;white-space:nowrap;">'' + (iso(x[''Date'']) ? m(iso(x[''Date'']), ''YYYY-MM-DD'').locale(''en'').format(''D MMM YYYY'') : ''—'') + ''</td></tr>'').join('''') + ''</table>''; container.querySelectorAll(''tr[data-p]'').forEach((tr) => { tr.addEventListener(''mouseenter'', () => tr.style.background = ''rgba(255,255,255,0.04)''); tr.addEventListener(''mouseleave'', () => tr.style.background = ''''); tr.addEventListener(''click'', (e) => app.workspace.openLinkText(tr.dataset.p, '''', e.ctrlKey || e.metaKey)); });'
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
    hideEmpty: true
  - color: '#FF6B8A'
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
  - color: '#FF6B8A'
    icon: 📇
    label: CONTACT DETAILS
    key: ''
    type: contact_grid
    folder: ''
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: '#FF6B8A'
    icon: 📌
    label: TASKS AND PROJECTS
    key: ''
    type: custom_dataview
    folder: "0. 🚀 Execution Masterpage"
    options:
      - 'dv.pages; /*syl-table*/ const m = window.moment; const esc = (s) => String(s ?? '''').replace(/&/g, ''&amp;'').replace(/</g, ''&lt;''); const iso = (v) => !v ? '''' : (v.toISODate ? v.toISODate() : String(v).slice(0, 10)); const name = p.file.name; const has = (v) => String(v ?? '''').includes(name); const strip = (s) => String(s ?? '''').replace(/^[^\p{L}\p{N}]+/u, '''').trim(); let rows = []; try { rows = dv.pages(''"02 - Planning/3. 🚀 Execution" or "08 - Archive/2. Planning/3. 🚀 Execution"'').where((x) => (x.Task_Status !== undefined || x.Project_Status !== undefined) && (has(x.notes) || has(x.Context) || has(x.Waiting_On) || has(x.outcome))).array(); } catch (e) { rows = []; } rows.sort((a, b) => iso(b[''due-date'']).localeCompare(iso(a[''due-date'']))); rows = rows.slice(0, 20); if (!rows.length) return; const th = ''font-size:0.68em;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.45);font-weight:800;padding:6px 8px;text-align:left;''; const td = ''padding:7px 8px;border-top:1px solid rgba(255,255,255,0.06);font-size:0.9em;color:rgba(255,255,255,0.75);''; container.innerHTML = ''<table style="width:100%;border-collapse:collapse;"><tr><th style="'' + th + ''">Task or project</th><th style="'' + th + ''">Status</th><th style="'' + th + ''text-align:right;">Due</th></tr>'' + rows.map((x) => ''<tr data-p="'' + esc(x.file.path) + ''" style="cursor:pointer;"><td style="'' + td + ''color:#fff;font-weight:700;">'' + esc(x.file.name) + ''</td><td style="'' + td + ''">'' + esc(strip(x.Task_Status || x.Project_Status)) + ''</td><td style="'' + td + ''text-align:right;white-space:nowrap;">'' + (iso(x[''due-date'']) ? m(iso(x[''due-date'']), ''YYYY-MM-DD'').locale(''en'').format(''D MMM YYYY'') : ''—'') + ''</td></tr>'').join('''') + ''</table>''; container.querySelectorAll(''tr[data-p]'').forEach((tr) => { tr.addEventListener(''mouseenter'', () => tr.style.background = ''rgba(255,255,255,0.04)''); tr.addEventListener(''mouseleave'', () => tr.style.background = ''''); tr.addEventListener(''click'', (e) => app.workspace.openLinkText(tr.dataset.p, '''', e.ctrlKey || e.metaKey)); });'
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    hideEmpty: true
  - color: '#FF6B8A'
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
    groupByKind: true
  - color: '#FF6B8A'
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
Next Follow Up: ""
crm_scratchpad: ""
website: ""
linkedin: ""
email: ""
phone: ""
instagram: ""
twitter: ""
Dashboard_Prefix: CONTACT
Centered_Title: true
Immersive_Header: Standard
Minimal_Setup: false
created: <% tp.file.creation_date("YYYY-MM-DD") %>
Contact_Every: 
---

```sylvics-view
EntityDashboardHero
```
