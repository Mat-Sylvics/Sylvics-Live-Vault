---
tags:
- client
Company: ''
Industry: ''
Client_Status: Lead
Engagement: ""
Client_Value: 0
Last Contacted: ''
Next Follow Up: ''
sylvics-up: '[[1. Client Operations]]'
sylvics-fullscreen: true
crm_what_they_do: ''
crm_pain_points: ''
crm_objectives: ''
crm_contract_details: ''
crm_deliverables: ''
crm_pricing_structure: ''
crm_known_blockers: ''
crm_competitors: ''
crm_next_action: ''
crm_scratchpad: ''
b2b_action_items: []
Dashboard_Header_Color: "#10b981"
Dashboard_Prefix: CLIENT
Dashboard_Prefix_Color: "#10b981"
Header_Schema:
  - color: "#10b981"
    icon: 🚦
    label: Status
    key: Client_Status
    type: select
    options:
      - Lead
      - Proposal Sent
      - Negotiation
      - Active
      - Closed Won
      - Closed Lost
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 💼
    label: Industry
    key: Industry
    type: select
    options:
      - Entertainment
      - Technology
      - Healthcare
      - Finance
      - Logistics
      - Real Estate
      - Retail
      - Education
      - Manufacturing
      - Consulting
      - Media
      - E-Commerce
      - SaaS
      - Legal
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 💰
    label: Value
    key: Client_Value
    type: currency
    emptyText: No fee
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: ⏳
    label: Follow Up
    key: Next Follow Up
    type: timeline
    hideEmpty: true
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 📅
    label: Last Contact
    key: Last Contacted
    type: date
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🏢
    label: Company
    key: Company
    type: folder_select
    options: []
    formula: ""
    folder: 04 - Resources/3. 🌐 Entities/2. 🏢 Companies & Organizations
    hideZero: true
Dashboard_Layout:
- color: '#10b981'
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
- color: '#10b981'
  icon: 🏢
  label: COMPANY CONTEXT
  key: ''
  type: b2b_company_context
  folder: ''
  options: []
  options2: []
  width: 50%
  hideZero: false
  allowCreate: true
- color: '#10b981'
  icon: 🤝
  label: DEAL TERMS
  key: ''
  type: b2b_deal_terms
  folder: ''
  options: []
  options2: []
  width: 50%
  hideZero: false
  allowCreate: true
- color: '#10b981'
  icon: 🚧
  label: FRICTION POINTS
  key: ''
  type: b2b_friction_points
  folder: ''
  options: []
  options2: []
  width: 50%
  hideZero: false
  allowCreate: true
- color: '#10b981'
  icon: ☑️
  label: NEXT STEPS
  key: ''
  type: b2b_next_actions
  folder: ''
  options: []
  options2: []
  width: 50%
  hideZero: false
  allowCreate: true
- color: '#10b981'
  icon: 📝
  label: NOTES
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
- color: '#10b981'
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
- color: '#10b981'
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
  viaPeople: true
- color: '#10b981'
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
  linkFolder: 03 - Areas/3. 💼 Business & Career/1. Work
  linkField: Linked_Client
  linkWord: meeting
  hideEmpty: true
- color: '#10b981'
  icon: 🧾
  label: INVOICES
  key: ''
  type: custom_dataview
  folder: 2. Invoices & Receivables
  options:
  - 'dv.pages; /*syl-table*/ const m = window.moment; const esc = (s) => String(s ?? '''').replace(/&/g, ''&amp;'').replace(/</g, ''&lt;''); const iso = (v) => !v ? '''' : (v.toISODate ? v.toISODate() : String(v).slice(0, 10)); const name = p.file.name; const has = (v) => String(v ?? '''').includes(name); let rows = []; try { rows = dv.pages(''"03 - Areas/4. 💰 Finances/1. Income/1. Invoices"'').where((x) => has(x.Client) && !/Masterpage|Template/.test(x.file.name)).array(); } catch (e) { rows = []; } rows.sort((a, b) => iso(b.DateIssued).localeCompare(iso(a.DateIssued))); if (!rows.length) return; const cur = (n) => ((f) => f ? ((app.metadataCache.getFileCache(f) || {}).frontmatter || {}).Currency || '''' : '''')(app.metadataCache.getFirstLinkpathDest(''7. Finance Settings'', '''')) + Number(n || 0).toLocaleString(''en-GB''); const d = (v) => iso(v) ? m(iso(v), ''YYYY-MM-DD'').locale(''en'').format(''D MMM YYYY'') : ''—''; const th = ''font-size:0.68em;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.45);font-weight:800;padding:6px 8px;text-align:left;''; const td = ''padding:7px 8px;border-top:1px solid rgba(255,255,255,0.06);font-size:0.9em;color:rgba(255,255,255,0.75);''; const total = rows.reduce((a, x) => a + (Number(x.Amount) || 0), 0); container.innerHTML = ''<table style="width:100%;border-collapse:collapse;"><tr><th style="'' + th + ''">Invoice</th><th style="'' + th + ''">Status</th><th style="'' + th + ''text-align:right;">Issued</th><th style="'' + th + ''text-align:right;">Amount</th></tr>'' + rows.map((x) => ''<tr data-p="'' + esc(x.file.path) + ''" style="cursor:pointer;"><td style="'' + td + ''color:#fff;font-weight:700;">'' + esc(String(x.file.name).replace(/^[^\p{L}\p{N}]+/u, '''')) + ''</td><td style="'' + td + ''">'' + esc(x.Status || '''') + ''</td><td style="'' + td + ''text-align:right;white-space:nowrap;">'' + d(x.DateIssued) + ''</td><td style="'' + td + ''text-align:right;">'' + cur(x.Amount) + ''</td></tr>'').join('''') + (rows.length > 1 ? ''<tr><td style="'' + td + ''font-weight:800;" colspan="3">Total</td><td style="'' + td + ''text-align:right;font-weight:800;color:#fff;">'' + cur(total) + ''</td></tr>'' : '''') + ''</table>''; container.querySelectorAll(''tr[data-p]'').forEach((tr) => { tr.addEventListener(''mouseenter'', () => tr.style.background = ''rgba(255,255,255,0.04)''); tr.addEventListener(''mouseleave'', () => tr.style.background = ''''); tr.addEventListener(''click'', (e) => app.workspace.openLinkText(tr.dataset.p, '''', e.ctrlKey || e.metaKey)); });'
  options2: []
  width: 50%
  hideZero: false
  allowCreate: true
  linkFolder: 03 - Areas/4. 💰 Finances/1. Income/1. Invoices
  linkField: Client
  linkWord: invoice
  hideEmpty: true
- color: '#10b981'
  icon: 🎫
  label: EVENTS
  key: ''
  type: custom_dataview
  folder: 3. Events & Experiences
  options:
  - 'dv.pages; /*syl-table*/ const m = window.moment; const esc = (s) => String(s ?? '''').replace(/&/g, ''&amp;'').replace(/</g, ''&lt;''); const iso = (v) => !v ? '''' : (v.toISODate ? v.toISODate() : String(v).slice(0, 10)); const rl = app.metadataCache.resolvedLinks || {}; const me = p.file.path; let co = ''''; try { const c = String(p.Company || '''').replace(/^.*?\[\[|\]\].*$/g, '''').split(''|'')[0]; const f = c ? app.metadataCache.getFirstLinkpathDest(c, me) : null; co = f ? f.path : ''''; } catch (e) {} let rows = []; try { rows = dv.pages(''"03 - Areas/2. 🤝 Relationships & Social/Events Attended" or "03 - Areas/2. 🤝 Relationships & Social/Events Planned"'').where((x) => { const o = rl[x.file.path] || {}; return (o[me] || (co && o[co])) && !/Masterpage|Template/.test(x.file.name); }).array(); } catch (e) { rows = []; } rows.sort((a, b) => iso(b.Date).localeCompare(iso(a.Date))); if (!rows.length) return; const th = ''font-size:0.68em;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.45);font-weight:800;padding:6px 8px;text-align:left;''; const td = ''padding:7px 8px;border-top:1px solid rgba(255,255,255,0.06);font-size:0.9em;color:rgba(255,255,255,0.75);''; container.innerHTML = ''<table style="width:100%;border-collapse:collapse;"><tr><th style="'' + th + ''">Event</th><th style="'' + th + ''">Status</th><th style="'' + th + ''text-align:right;">Date</th></tr>'' + rows.map((x) => ''<tr data-p="'' + esc(x.file.path) + ''" style="cursor:pointer;"><td style="'' + td + ''color:#fff;font-weight:700;">'' + esc(String(x.file.name).replace(/^[^\p{L}\p{N}]+/u, '''')) + ''</td><td style="'' + td + ''">'' + esc(String(x.Status || '''').replace(/^[^\p{L}\p{N}]+/u, '''')) + ''</td><td style="'' + td + ''text-align:right;white-space:nowrap;">'' + (iso(x.Date) ? m(iso(x.Date), ''YYYY-MM-DD'').locale(''en'').format(''D MMM YYYY'') : ''—'') + ''</td></tr>'').join('''') + ''</table>''; container.querySelectorAll(''tr[data-p]'').forEach((tr) => { tr.addEventListener(''mouseenter'', () => tr.style.background = ''rgba(255,255,255,0.04)''); tr.addEventListener(''mouseleave'', () => tr.style.background = ''''); tr.addEventListener(''click'', (e) => app.workspace.openLinkText(tr.dataset.p, '''', e.ctrlKey || e.metaKey)); });'
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
  linkFolder: 03 - Areas/2. 🤝 Relationships & Social
  linkField: Related_Files
  linkWord: event
  hideEmpty: true
- color: '#10b981'
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
- color: '#10b981'
  icon: 👥
  label: PEOPLE
  key: Client_People
  type: link_list
  folder: 04 - Resources/3. 🌐 Entities/1. 👥 People/👤 Contacts
  options: []
  options2: []
  width: 50%
  hideZero: false
  allowCreate: true
- color: '#10b981'
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
- color: '#10b981'
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
Inherit_Blueprint: ''
website: ''
linkedin: ''
email: ''
phone: ''
instagram: ''
twitter: ''
created: <% tp.file.creation_date("YYYY-MM-DD") %>
Client_People: []
---
​	
```sylvics-view
EntityDashboardHero
```
