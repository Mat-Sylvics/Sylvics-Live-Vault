---
Type: maintenance
Status: 
Frequency: 
Last_Completed: 
Next_Due: 
Estimated_Cost: 
Related_Appliance: 
tags:
  - maintenance
  - home
cssclasses:
  - cards
---
# 🛠️ <% tp.file.title %>

> [!multi-column]
>
>> [!blank-container|wide-2]
>> ### 🏷️ Task Info
>> **Status**
>> ```meta-bind
>> INPUT[multiSelect(option(⏳ Pending), option(🟢 Completed), option(⏭️ Skipped)):Status]
>> ```
>> **Frequency**
>> ```meta-bind
>> INPUT[multiSelect(option(📅 Monthly), option(🍂 Quarterly), option(❄️ Bi-Annual), option(🌍 Annual), option(🔁 As Needed)):Frequency]
>> ```
>
>> [!blank-container|wide-2]
>> ### 📅 Timeline
>> **Last Completed**
>> ```meta-bind
>> INPUT[date:Last_Completed]
>> ```
>> **Next Due Date**
>> ```meta-bind
>> INPUT[date:Next_Due]
>> ```
>> **Est. Cost**
>> ```meta-bind
>> INPUT[number:Estimated_Cost]
>> ```

---

## 🔗 Link & Alignment

**Related Appliance / Asset**
```meta-bind
INPUT[listSuggester(optionQuery('"03 - Areas/5. 🏡 Home & Environment/2. Inventory/Assets"'), useLinks(partial)):Related_Appliance]
```

---

## 📝 Procedure / Instructions
1. 
2. 
3. 

## 📓 History Log
- YYYY-MM-DD: Cost $0. Notes:
