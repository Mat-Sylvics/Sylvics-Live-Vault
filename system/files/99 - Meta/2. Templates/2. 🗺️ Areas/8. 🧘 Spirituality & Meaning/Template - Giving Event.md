---
Amount:
Frequency: One-off
Organization: ''
Date: <% tp.file.creation_date("YYYY-MM-DD") %>
Category: Charity
Tax_Deductible: true
Core_Value: ''
Reason: ''
Impact_Metric: ''
sylvics-up: "[[0. Service & Altruism Masterpage]]"
sylvics-fullscreen: true
cssclasses:
- dashboard
- sylvics-dashboard
- transparent-bg
syl-icon: 💸
Type: Donation
Receipt_Secured: []
Header_Schema:
  - color: '#10b981'
    icon: 🏷️
    label: Type
    key: Type
    type: select
    options:
    - Donation
    - Sponsorship
    - Grant
    formula: ''
    folder: ''
    hideZero: false
    subFormula: 'return p.Category ? String(p.Category) : '''';'
    subFields:
    - key: Category
      label: Category
      type: select
      options:
      - Charity
      - Mutual Aid
      - Political
      - GoFundMe
      - Other
    subTitle: Category
  - color: '#10b981'
    icon: 💶
    label: Amount
    key: Amount
    type: currency
    options: []
    formula: ''
    folder: ''
    hideZero: false
    unitFormula: const f=String(p.Frequency||''); return /month/i.test(f)?'a month':/year/i.test(f)?'a year':'';
    subFormula: const fs=app.vault.getFiles().find(x=>x.basename==='7. Finance Settings'); const cur=(fs&&app.metadataCache.getFileCache(fs)?.frontmatter?.Currency)||'$'; const f=String(p.Frequency||''); const a=parseFloat(String(p.Amount??'').replace(/[^0-9.-]/g,''))||0; const out=[]; if(/month|year/i.test(f)&&p.Date){ const s=window.moment(String(p.Date?.toISODate?p.Date.toISODate():p.Date).slice(0,10)); const now=clock.moment(); if(s.isValid()&&!now.isBefore(s,'day')){ const n=/month/i.test(f)?now.diff(s,'months')+1:now.diff(s,'years')+1; out.push(cur+(a*n).toLocaleString('en-GB')+' given so far'); } } else out.push('one-off'); if(p.Tax_Deductible===true||p.Tax_Deductible==='true') out.push('tax deductible'); return out.join(' · ');
    subFields:
    - key: Frequency
      label: How often
      type: select
      options:
      - One-off
      - Monthly
      - Yearly
    - key: Tax_Deductible
      label: Tax deductible
      type: toggle
    subTitle: How often, and tax
  - color: '#e5e7eb'
    icon: 🤝
    label: To
    key: Organization
    type: folder_select
    options: []
    formula: ''
    folder: '*'
    hideZero: false
  - color: '#e5e7eb'
    icon: 📅
    label: Date
    key: Date
    type: date
    options: []
    formula: ''
    folder: ''
    hideZero: false
    whenLabel:
      key: Frequency
      match: month|year
      label: Since
      icon: 📅
  - color: '#e5e7eb'
    icon: 🧭
    label: Value
    key: Core_Value
    type: folder_select
    options: []
    formula: ''
    folder: 02 - Planning/1. ⚖️ Alignment/1. 🧬 Identity/2. 🧭 Values & Virtues
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
    icon: 💝
    label: GIFT
    key: ''
    type: giving_log
    folder: ''
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: '#10b981'
    icon: 🧾
    label: RECEIPT
    key: Receipt_Secured
    type: link_list
    folder: 04 - Resources/2. 🗄️ Reference Library/2. 💰 Money & Papers/2. Receipts
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    slim: true
    emptyText: No receipt yet, needed for tax
    inset: true
    showWhen:
      key: Tax_Deductible
      match: ^true$
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
    icon: 🧷
    label: MENTIONED HERE
    key: ''
    type: mentioned_here
    folder: ''
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    hideEmpty: true
  - color: '#10b981'
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
    byName: true
    hideEmpty: true
  - color: '#10b981'
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
Dashboard_Header_Color: "#10b981"
Dashboard_Prefix_Color: "#6ee7b7"
Strip_Emojis: true
Inherit_Blueprint: ''
Dashboard_Prefix: GIVING
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero | dv.current()
```
