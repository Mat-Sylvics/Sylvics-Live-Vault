---
ContentType: Company
Type: Technology Company
Favorite: true
tags:
- company
- technology
sylvics-up: '[[🏢 0. Companies & Brands Masterpage]]'
sylvics-fullscreen: true
Dashboard_Prefix: COMPANY
Dashboard_Prefix_Color: "#3b82f6"
Header_Schema:
- color: '#3b82f6'
  icon: 🏷️
  label: Type
  key: Type
  type: text
  options: []
  formula: ''
  folder: ''
  hideZero: false
- color: '#e5e7eb'
  icon: 💼
  label: Industry
  key: occupation
  type: text
  options: []
  formula: ''
  folder: ''
  hideZero: false
- color: '#e5e7eb'
  icon: 📍
  label: Based in
  key: nationality
  type: text
  options: []
  formula: ''
  folder: ''
  hideZero: false
  hideEmpty: true
- color: '#e5e7eb'
  icon: 📅
  label: Founded
  key: founded
  type: text
  options: []
  formula: ''
  folder: ''
  hideZero: false
  hideEmpty: true
- color: '#e5e7eb'
  icon: 👥
  label: Size
  key: headcount
  type: text
  options: []
  formula: ''
  folder: ''
  hideZero: false
  hideEmpty: true
Dashboard_Layout:
- color: '#3b82f6'
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
- color: '#3b82f6'
  icon: 📜
  label: BACKGROUND
  key: comp_history
  type: textarea
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
  autoHeight: true
- color: '#3b82f6'
  icon: 🧭
  label: HOW THEY WORK
  key: comp_philosophy
  type: textarea
  folder: ''
  options: []
  options2: []
  width: 50%
  hideZero: false
  allowCreate: true
  autoHeight: true
  fill: true
  fit: true
  noStretch: true
- color: '#3b82f6'
  icon: 📦
  label: PRODUCTS AND SERVICES
  key: comp_products
  type: textarea
  folder: ''
  options: []
  options2: []
  width: 50%
  hideZero: false
  allowCreate: true
  autoHeight: true
  fill: true
  fit: true
  noStretch: true
- color: '#3b82f6'
  icon: 👤
  label: PEOPLE
  key: ''
  type: custom_dataview
  folder: 1. Personal CRM
  options:
  - 'dv.pages; /*syl-table*/ const m = window.moment; const esc = (s) => String(s ?? '''').replace(/&/g, ''&amp;'').replace(/</g, ''&lt;''); const iso = (v) => !v ? '''' : (v.toISODate ? v.toISODate() : String(v).slice(0, 10)); const day = (v) => iso(v) ? m(iso(v), ''YYYY-MM-DD'').locale(''en'').format(''D MMM YYYY'') : ''—''; const strip = (s) => String(s ?? '''').replace(/^[^\p{L}\p{N}]+/u, '''').trim(); const rl = app.metadataCache.resolvedLinks || {}; const me = p.file.path; const nm = strip(p.file.name); const real = (x) => !/Masterpage|Template/.test(x.file.name); let clients = []; try { clients = dv.pages(''"04 - Resources/3. 🌐 Entities/1. 👥 People/🤝 Clients"'').where((x) => real(x) && ((rl[x.file.path] || {})[me] || String(x.Company ?? '''').includes(nm))).array(); } catch (e) {} const cps = clients.map((x) => x.file.path); const cnames = clients.map((x) => strip(x.file.name)); const linked = (x, fields) => { const o = rl[x.file.path] || {}; if (o[me] || cps.some((c) => o[c])) return true; return fields.some((f) => { const v = String(x[f] ?? ''''); return v.includes(nm) || cnames.some((n) => v.includes(n)); }); }; const th = ''font-size:0.68em;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.45);font-weight:800;padding:6px 8px;text-align:left;''; const td = ''padding:7px 8px;border-top:1px solid rgba(255,255,255,0.06);font-size:0.9em;color:rgba(255,255,255,0.75);''; const draw = (cols, rows, foot) => { container.innerHTML = ''<table style="width:100%;border-collapse:collapse;"><tr>'' + cols.map((c) => ''<th style="'' + th + (c.r ? ''text-align:right;'' : '''') + ''">'' + c.h + ''</th>'').join('''') + ''</tr>'' + rows.map((x) => ''<tr data-p="'' + esc(x.file.path) + ''" style="cursor:pointer;">'' + cols.map((c, i) => ''<td style="'' + td + (i === 0 ? ''color:#fff;font-weight:700;'' : '''') + (c.r ? ''text-align:right;white-space:nowrap;'' : '''') + ''">'' + c.f(x) + ''</td>'').join('''') + ''</tr>'').join('''') + (foot || '''') + ''</table>''; container.querySelectorAll(''tr[data-p]'').forEach((tr) => { tr.addEventListener(''mouseenter'', () => tr.style.background = ''rgba(255,255,255,0.04)''); tr.addEventListener(''mouseleave'', () => tr.style.background = ''''); tr.addEventListener(''click'', (e) => app.workspace.openLinkText(tr.dataset.p, '''', e.ctrlKey || e.metaKey)); }); }; let rows = []; try { rows = dv.pages(''"04 - Resources/3. 🌐 Entities/1. 👥 People/👤 Contacts"'').where((x) => real(x) && ((rl[x.file.path] || {})[me] || String(x.crm_what_they_do ?? '''').includes(nm) || String(x.crm_scratchpad ?? '''').includes(nm))).array(); } catch (e) {} if (!rows.length) return; rows.sort((a, b) => a.file.name.localeCompare(b.file.name)); draw([{ h: ''Person'', f: (x) => esc(x.file.name) }, { h: ''Relationship'', f: (x) => esc(strip(x.Relationship)) }, { h: ''Tier'', f: (x) => esc(x.Tier || '''') }], rows);'
  options2: []
  width: 50%
  hideZero: false
  allowCreate: true
  hideEmpty: true
  fill: true
- color: '#3b82f6'
  icon: 🤝
  label: CLIENT RECORDS
  key: ''
  type: custom_dataview
  folder: 1. Client Operations
  options:
  - 'dv.pages; /*syl-table*/ const m = window.moment; const esc = (s) => String(s ?? '''').replace(/&/g, ''&amp;'').replace(/</g, ''&lt;''); const iso = (v) => !v ? '''' : (v.toISODate ? v.toISODate() : String(v).slice(0, 10)); const day = (v) => iso(v) ? m(iso(v), ''YYYY-MM-DD'').locale(''en'').format(''D MMM YYYY'') : ''—''; const strip = (s) => String(s ?? '''').replace(/^[^\p{L}\p{N}]+/u, '''').trim(); const rl = app.metadataCache.resolvedLinks || {}; const me = p.file.path; const nm = strip(p.file.name); const real = (x) => !/Masterpage|Template/.test(x.file.name); let clients = []; try { clients = dv.pages(''"04 - Resources/3. 🌐 Entities/1. 👥 People/🤝 Clients"'').where((x) => real(x) && ((rl[x.file.path] || {})[me] || String(x.Company ?? '''').includes(nm))).array(); } catch (e) {} const cps = clients.map((x) => x.file.path); const cnames = clients.map((x) => strip(x.file.name)); const linked = (x, fields) => { const o = rl[x.file.path] || {}; if (o[me] || cps.some((c) => o[c])) return true; return fields.some((f) => { const v = String(x[f] ?? ''''); return v.includes(nm) || cnames.some((n) => v.includes(n)); }); }; const th = ''font-size:0.68em;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.45);font-weight:800;padding:6px 8px;text-align:left;''; const td = ''padding:7px 8px;border-top:1px solid rgba(255,255,255,0.06);font-size:0.9em;color:rgba(255,255,255,0.75);''; const draw = (cols, rows, foot) => { container.innerHTML = ''<table style="width:100%;border-collapse:collapse;"><tr>'' + cols.map((c) => ''<th style="'' + th + (c.r ? ''text-align:right;'' : '''') + ''">'' + c.h + ''</th>'').join('''') + ''</tr>'' + rows.map((x) => ''<tr data-p="'' + esc(x.file.path) + ''" style="cursor:pointer;">'' + cols.map((c, i) => ''<td style="'' + td + (i === 0 ? ''color:#fff;font-weight:700;'' : '''') + (c.r ? ''text-align:right;white-space:nowrap;'' : '''') + ''">'' + c.f(x) + ''</td>'').join('''') + ''</tr>'').join('''') + (foot || '''') + ''</table>''; container.querySelectorAll(''tr[data-p]'').forEach((tr) => { tr.addEventListener(''mouseenter'', () => tr.style.background = ''rgba(255,255,255,0.04)''); tr.addEventListener(''mouseleave'', () => tr.style.background = ''''); tr.addEventListener(''click'', (e) => app.workspace.openLinkText(tr.dataset.p, '''', e.ctrlKey || e.metaKey)); }); }; const rows = clients.slice(); if (!rows.length) return; rows.sort((a, b) => String(a.Client_Status).localeCompare(String(b.Client_Status))); const val = (n) => Number(n) ? ((f) => f ? ((app.metadataCache.getFileCache(f) || {}).frontmatter || {}).Currency || '''' : '''')(app.metadataCache.getFirstLinkpathDest(''7. Finance Settings'', '''')) + Number(n).toLocaleString(''en-GB'') : ''No fee''; draw([{ h: ''Client record'', f: (x) => esc(strip(x.file.name)) }, { h: ''Status'', f: (x) => esc(strip(x.Client_Status)) }, { h: ''Value'', r: 1, f: (x) => val(x.Client_Value) }, { h: ''Follow up'', r: 1, f: (x) => day(x[''Next Follow Up'']) }], rows);'
  options2: []
  width: 50%
  hideZero: false
  allowCreate: true
  hideEmpty: true
  fill: true
- color: '#3b82f6'
  icon: ☕
  label: MEETINGS AND CALLS
  key: ''
  type: custom_dataview
  folder: 2. Meetings & Calls
  options:
  - 'dv.pages; /*syl-table*/ const m = window.moment; const esc = (s) => String(s ?? '''').replace(/&/g, ''&amp;'').replace(/</g, ''&lt;''); const iso = (v) => !v ? '''' : (v.toISODate ? v.toISODate() : String(v).slice(0, 10)); const day = (v) => iso(v) ? m(iso(v), ''YYYY-MM-DD'').locale(''en'').format(''D MMM YYYY'') : ''—''; const strip = (s) => String(s ?? '''').replace(/^[^\p{L}\p{N}]+/u, '''').trim(); const rl = app.metadataCache.resolvedLinks || {}; const me = p.file.path; const nm = strip(p.file.name); const real = (x) => !/Masterpage|Template/.test(x.file.name); let clients = []; try { clients = dv.pages(''"04 - Resources/3. 🌐 Entities/1. 👥 People/🤝 Clients"'').where((x) => real(x) && ((rl[x.file.path] || {})[me] || String(x.Company ?? '''').includes(nm))).array(); } catch (e) {} const cps = clients.map((x) => x.file.path); const cnames = clients.map((x) => strip(x.file.name)); const linked = (x, fields) => { const o = rl[x.file.path] || {}; if (o[me] || cps.some((c) => o[c])) return true; return fields.some((f) => { const v = String(x[f] ?? ''''); return v.includes(nm) || cnames.some((n) => v.includes(n)); }); }; const th = ''font-size:0.68em;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.45);font-weight:800;padding:6px 8px;text-align:left;''; const td = ''padding:7px 8px;border-top:1px solid rgba(255,255,255,0.06);font-size:0.9em;color:rgba(255,255,255,0.75);''; const draw = (cols, rows, foot) => { container.innerHTML = ''<table style="width:100%;border-collapse:collapse;"><tr>'' + cols.map((c) => ''<th style="'' + th + (c.r ? ''text-align:right;'' : '''') + ''">'' + c.h + ''</th>'').join('''') + ''</tr>'' + rows.map((x) => ''<tr data-p="'' + esc(x.file.path) + ''" style="cursor:pointer;">'' + cols.map((c, i) => ''<td style="'' + td + (i === 0 ? ''color:#fff;font-weight:700;'' : '''') + (c.r ? ''text-align:right;white-space:nowrap;'' : '''') + ''">'' + c.f(x) + ''</td>'').join('''') + ''</tr>'').join('''') + (foot || '''') + ''</table>''; container.querySelectorAll(''tr[data-p]'').forEach((tr) => { tr.addEventListener(''mouseenter'', () => tr.style.background = ''rgba(255,255,255,0.04)''); tr.addEventListener(''mouseleave'', () => tr.style.background = ''''); tr.addEventListener(''click'', (e) => app.workspace.openLinkText(tr.dataset.p, '''', e.ctrlKey || e.metaKey)); }); }; let rows = []; try { rows = dv.pages(''"03 - Areas/3. 💼 Business & Career/1. Work"'').where((x) => real(x) && x.Linked_Client !== undefined && linked(x, [''Linked_Client''])).array(); } catch (e) {} if (!rows.length) return; rows.sort((a, b) => iso(b.Date).localeCompare(iso(a.Date))); rows = rows.slice(0, 20); draw([{ h: ''Meeting or call'', f: (x) => esc(strip(x.file.name)) }, { h: ''Kind'', f: (x) => esc(strip(x.Type)) }, { h: ''Date'', r: 1, f: (x) => day(x.Date) }], rows);'
  options2: []
  width: 50%
  hideZero: false
  allowCreate: true
  hideEmpty: true
  fill: true
- color: '#3b82f6'
  icon: 🧾
  label: INVOICES
  key: ''
  type: custom_dataview
  folder: 2. Invoices & Receivables
  options:
  - 'dv.pages; /*syl-table*/ const m = window.moment; const esc = (s) => String(s ?? '''').replace(/&/g, ''&amp;'').replace(/</g, ''&lt;''); const iso = (v) => !v ? '''' : (v.toISODate ? v.toISODate() : String(v).slice(0, 10)); const day = (v) => iso(v) ? m(iso(v), ''YYYY-MM-DD'').locale(''en'').format(''D MMM YYYY'') : ''—''; const strip = (s) => String(s ?? '''').replace(/^[^\p{L}\p{N}]+/u, '''').trim(); const rl = app.metadataCache.resolvedLinks || {}; const me = p.file.path; const nm = strip(p.file.name); const real = (x) => !/Masterpage|Template/.test(x.file.name); let clients = []; try { clients = dv.pages(''"04 - Resources/3. 🌐 Entities/1. 👥 People/🤝 Clients"'').where((x) => real(x) && ((rl[x.file.path] || {})[me] || String(x.Company ?? '''').includes(nm))).array(); } catch (e) {} const cps = clients.map((x) => x.file.path); const cnames = clients.map((x) => strip(x.file.name)); const linked = (x, fields) => { const o = rl[x.file.path] || {}; if (o[me] || cps.some((c) => o[c])) return true; return fields.some((f) => { const v = String(x[f] ?? ''''); return v.includes(nm) || cnames.some((n) => v.includes(n)); }); }; const th = ''font-size:0.68em;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.45);font-weight:800;padding:6px 8px;text-align:left;''; const td = ''padding:7px 8px;border-top:1px solid rgba(255,255,255,0.06);font-size:0.9em;color:rgba(255,255,255,0.75);''; const draw = (cols, rows, foot) => { container.innerHTML = ''<table style="width:100%;border-collapse:collapse;"><tr>'' + cols.map((c) => ''<th style="'' + th + (c.r ? ''text-align:right;'' : '''') + ''">'' + c.h + ''</th>'').join('''') + ''</tr>'' + rows.map((x) => ''<tr data-p="'' + esc(x.file.path) + ''" style="cursor:pointer;">'' + cols.map((c, i) => ''<td style="'' + td + (i === 0 ? ''color:#fff;font-weight:700;'' : '''') + (c.r ? ''text-align:right;white-space:nowrap;'' : '''') + ''">'' + c.f(x) + ''</td>'').join('''') + ''</tr>'').join('''') + (foot || '''') + ''</table>''; container.querySelectorAll(''tr[data-p]'').forEach((tr) => { tr.addEventListener(''mouseenter'', () => tr.style.background = ''rgba(255,255,255,0.04)''); tr.addEventListener(''mouseleave'', () => tr.style.background = ''''); tr.addEventListener(''click'', (e) => app.workspace.openLinkText(tr.dataset.p, '''', e.ctrlKey || e.metaKey)); }); }; let rows = []; try { rows = dv.pages(''"03 - Areas/4. 💰 Finances/1. Income/1. Invoices"'').where((x) => real(x) && linked(x, [''Client''])).array(); } catch (e) {} if (!rows.length) return; rows.sort((a, b) => iso(b.DateIssued).localeCompare(iso(a.DateIssued))); const cur = (n) => ((f) => f ? ((app.metadataCache.getFileCache(f) || {}).frontmatter || {}).Currency || '''' : '''')(app.metadataCache.getFirstLinkpathDest(''7. Finance Settings'', '''')) + Number(n || 0).toLocaleString(''en-GB''); const total = rows.reduce((a, x) => a + (Number(x.Amount) || 0), 0); draw([{ h: ''Invoice'', f: (x) => esc(strip(x.file.name)) }, { h: ''Status'', f: (x) => esc(x.Status || '''') }, { h: ''Issued'', r: 1, f: (x) => day(x.DateIssued) }, { h: ''Amount'', r: 1, f: (x) => cur(x.Amount) }], rows, rows.length > 1 ? ''<tr><td style="'' + td + ''font-weight:800;" colspan="3">Total</td><td style="'' + td + ''text-align:right;font-weight:800;color:#fff;">'' + cur(total) + ''</td></tr>'' : '''');'
  options2: []
  width: 50%
  hideZero: false
  allowCreate: true
  hideEmpty: true
  fill: true
- color: '#3b82f6'
  icon: 🎫
  label: EVENTS
  key: ''
  type: custom_dataview
  folder: 3. Events & Experiences
  options:
  - 'dv.pages; /*syl-table*/ const m = window.moment; const esc = (s) => String(s ?? '''').replace(/&/g, ''&amp;'').replace(/</g, ''&lt;''); const iso = (v) => !v ? '''' : (v.toISODate ? v.toISODate() : String(v).slice(0, 10)); const day = (v) => iso(v) ? m(iso(v), ''YYYY-MM-DD'').locale(''en'').format(''D MMM YYYY'') : ''—''; const strip = (s) => String(s ?? '''').replace(/^[^\p{L}\p{N}]+/u, '''').trim(); const rl = app.metadataCache.resolvedLinks || {}; const me = p.file.path; const nm = strip(p.file.name); const real = (x) => !/Masterpage|Template/.test(x.file.name); let clients = []; try { clients = dv.pages(''"04 - Resources/3. 🌐 Entities/1. 👥 People/🤝 Clients"'').where((x) => real(x) && ((rl[x.file.path] || {})[me] || String(x.Company ?? '''').includes(nm))).array(); } catch (e) {} const cps = clients.map((x) => x.file.path); const cnames = clients.map((x) => strip(x.file.name)); const linked = (x, fields) => { const o = rl[x.file.path] || {}; if (o[me] || cps.some((c) => o[c])) return true; return fields.some((f) => { const v = String(x[f] ?? ''''); return v.includes(nm) || cnames.some((n) => v.includes(n)); }); }; const th = ''font-size:0.68em;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.45);font-weight:800;padding:6px 8px;text-align:left;''; const td = ''padding:7px 8px;border-top:1px solid rgba(255,255,255,0.06);font-size:0.9em;color:rgba(255,255,255,0.75);''; const draw = (cols, rows, foot) => { container.innerHTML = ''<table style="width:100%;border-collapse:collapse;"><tr>'' + cols.map((c) => ''<th style="'' + th + (c.r ? ''text-align:right;'' : '''') + ''">'' + c.h + ''</th>'').join('''') + ''</tr>'' + rows.map((x) => ''<tr data-p="'' + esc(x.file.path) + ''" style="cursor:pointer;">'' + cols.map((c, i) => ''<td style="'' + td + (i === 0 ? ''color:#fff;font-weight:700;'' : '''') + (c.r ? ''text-align:right;white-space:nowrap;'' : '''') + ''">'' + c.f(x) + ''</td>'').join('''') + ''</tr>'').join('''') + (foot || '''') + ''</table>''; container.querySelectorAll(''tr[data-p]'').forEach((tr) => { tr.addEventListener(''mouseenter'', () => tr.style.background = ''rgba(255,255,255,0.04)''); tr.addEventListener(''mouseleave'', () => tr.style.background = ''''); tr.addEventListener(''click'', (e) => app.workspace.openLinkText(tr.dataset.p, '''', e.ctrlKey || e.metaKey)); }); }; let rows = []; try { rows = dv.pages(''"03 - Areas/2. 🤝 Relationships & Social/Events Attended" or "03 - Areas/2. 🤝 Relationships & Social/Events Planned"'').where((x) => real(x) && linked(x, [''Related_Files''])).array(); } catch (e) {} if (!rows.length) return; rows.sort((a, b) => iso(b.Date).localeCompare(iso(a.Date))); draw([{ h: ''Event'', f: (x) => esc(strip(x.file.name)) }, { h: ''Status'', f: (x) => esc(strip(x.Status)) }, { h: ''Date'', r: 1, f: (x) => day(x.Date) }], rows);'
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
  hideEmpty: true
- color: '#3b82f6'
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
- color: '#3b82f6'
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
  fill: true
- color: '#3b82f6'
  icon: 🗂️
  label: RELATED NOTES
  key: comp_related
  type: vault_links
  folder: ''
  options: []
  options2: []
  width: 50%
  hideZero: false
  allowCreate: true
  fill: true
- color: '#3b82f6'
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
- color: '#3b82f6'
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
nationality: ""
occupation: ''
founded: ""
headcount: ''
comp_history: ''
comp_philosophy: ''
comp_products: ''
comp_related: []
Minimal_Setup: false
Centered_Title: true
Immersive_Header: Standard
Inherit_Blueprint: ''
Dashboard_Background: 99 - Meta/4. Attachments/3. Sylvics Art/Banners/Companies - Business District.png
  Skyscrapers.png
Dashboard_Header_Color: "#3b82f6"
website: ''
linkedin: ''
email: ''
phone: ''
instagram: ''
twitter: ''
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero
```
