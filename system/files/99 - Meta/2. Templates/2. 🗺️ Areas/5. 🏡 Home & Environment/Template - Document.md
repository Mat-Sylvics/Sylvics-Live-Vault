---
Type: document
Document_Type: 
Status: 
Provider: 
Issue_Date: 
Expiry_Date: 
Related_Entity: 
Renewal_Required: false
tags:
  - document
cssclasses:
  - cards
---
# 📄 <% tp.file.title %>

> [!multi-column]
>
>> [!blank-container|wide-2]
>> ### 🏷️ Document Info
>> **Type**
>> ```meta-bind
>> INPUT[multiSelect(option(🛂 Identity), option(📄 Contract), option(🏥 Medical), option(💼 Legal), option(💰 Financial), option(🛡️ Insurance), option(📜 Certificate)):Document_Type]
>> ```
>> **Status**
>> ```meta-bind
>> INPUT[multiSelect(option(🟢 Active), option(🟡 Pending), option(🔴 Expired), option(🛑 Archived)):Status]
>> ```
>> **Provider / Issuer**
>> ```meta-bind
>> INPUT[text:Provider]
>> ```
>
>> [!blank-container|wide-2]
>> ### 📅 Timeline
>> **Issue Date**
>> ```meta-bind
>> INPUT[date:Issue_Date]
>> ```
>> **Expiry Date**
>> ```meta-bind
>> INPUT[date:Expiry_Date]
>> ```
>> **Renewal Required?**
>> ```meta-bind
>> INPUT[toggle:Renewal_Required]
>> ```

---

## 🔗 Link & Alignment

**Related Entity (Person, Company, Asset)**
```meta-bind
INPUT[listSuggester(optionQuery('-"99 - Meta/2. Templates"'), useLinks(partial)):Related_Entity]
```

---

## 📎 Document File
*(Drag and drop the PDF or scanned image of the document here)*



---

## 📝 Key Details / Summary
- 
- 
