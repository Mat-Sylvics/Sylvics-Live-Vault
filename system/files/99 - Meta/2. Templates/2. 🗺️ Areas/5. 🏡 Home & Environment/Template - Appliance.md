---
Type: appliance
Brand: 
Model: 
Serial_Number: 
Purchase_Date: 
Purchase_Price: 
Warranty_Expiry: 
Status: 
Room: 
tags:
  - appliance
  - inventory
cssclasses:
  - cards
---
# 📦 <% tp.file.title %>

> [!multi-column]
>
>> [!blank-container|wide-2]
>> ### 🏷️ Item Info
>> **Brand**
>> ```meta-bind
>> INPUT[text:Brand]
>> ```
>> **Model**
>> ```meta-bind
>> INPUT[text:Model]
>> ```
>> **Status**
>> ```meta-bind
>> INPUT[multiSelect(option(🟢 Working), option(🟡 Needs Repair), option(🔴 Broken), option(🛑 Sold/Discarded)):Status]
>> ```
>
>> [!blank-container|wide-2]
>> ### 💰 Purchase Details
>> **Purchase Date**
>> ```meta-bind
>> INPUT[date:Purchase_Date]
>> ```
>> **Price**
>> ```meta-bind
>> INPUT[number:Purchase_Price]
>> ```
>> **Warranty Expiry**
>> ```meta-bind
>> INPUT[date:Warranty_Expiry]
>> ```

---

## 📎 Manual & Receipt
*(Drag and drop the PDF manual and receipt here)*



---

## 🛠️ Maintenance Log
- [ ] Regular maintenance task 1
- [ ] Regular maintenance task 2

**History:**
- YYYY-MM-DD: Purchased
