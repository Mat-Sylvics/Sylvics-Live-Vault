---
cover: '""'
Brainstorming: '""'
tags:
  - topic
Topic_Status: ["📥 Inbox"]
date: 
Inspiration: '""'
Next_steps: '""'
Linked_Skill: ""
---

# Yearly

```dataviewjs
let cover = dv.current().cover;
if (cover && cover !== '""' && cover !== "") {
    let src = typeof cover === "string" ? cover : (cover.path ? app.vault.getResourcePath(app.metadataCache.getFirstLinkpathDest(cover.path, "")) : "");
    if (src) {
        dv.el("div", `<img src="${src}" style="width: 100%; height: 250px; object-fit: cover; border-radius: 12px; margin-bottom: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);" />`);
    }
}
```

> [!multi-column]
>
>> [!blank-container|wide-2]
>> ### 🚥 Status
>> ```meta-bind
>> INPUT[multiSelect(option(📥 Inbox), option(🔍 Exploring), option(🧠 Integrated)):Topic_Status]
>> ```
>
>> [!blank-container|wide-2]
>> ### 📅 Date Captured
>> ```meta-bind
>> INPUT[date:date]
>> ```
>
>> [!blank-container|wide-2]
>> ### ⚡ Actions
>> ```meta-bind-button
>> style: primary
>> label: ➕ Capture Literature
>> actions:
>>   - type: templaterCreateNote
>>     templateFile: "99 - Meta/2. Templates/4. 🧠 Knowledge/Template - Literature.md"
>>     folderPath: "05 - Literature"
>>     fileName: "📖 New Literature"
>>     openNote: true
>> ```
>> &nbsp;
>> ```meta-bind-button
>> style: primary
>> label: ➕ Capture Short-Form
>> actions:
>>   - type: templaterCreateNote
>>     templateFile: "99 - Meta/2. Templates/3. 📚 Resources/5. 📚 Sources/Template - Short-Form.md"
>>     folderPath: "04 - Resources/1. Media Library/Short-Form (By Topic)"
>>     fileName: "🔍 New Short-Form Concept"
>>     openNote: true
>> ```

---

## 📚 Exploration

> [!quote] 🔍 Why am I interested?
> ```meta-bind
> INPUT[textArea(class(planning-editor)):Inspiration]
> ```
> 
> **❓ Initial Questions:**
> ```meta-bind
> INPUT[textArea(class(planning-editor)):Next_steps]
> ```

---

## ✍️ Brainstorming & Synthesis
```meta-bind
INPUT[textArea(class(planning-editor)):Brainstorming]
```

### 📚 Linked Resources
- 

> [!example]- 📥 Unprocessed Links & Notes
> 
