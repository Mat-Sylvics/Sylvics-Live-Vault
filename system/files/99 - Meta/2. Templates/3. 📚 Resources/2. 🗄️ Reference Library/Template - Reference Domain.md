<%*
let domainName = tp.file.title;
if (domainName.startsWith("Untitled") || domainName.includes("Hub") || domainName.includes("Domain")) {
    domainName = await tp.system.prompt("Domain Name (e.g. 5. 🎸 Music Theory):");
    if (!domainName) domainName = "New Domain";
}
let folderPath = "04 - Resources/2. 🗄️ Reference Library/" + domainName;
// Create folder by moving the file into it
await tp.file.move(folderPath + "/00. " + domainName + " Hub");
_%>
---
Theme_Color: "#f59e0b"
Cover: "Golden Archive Server Room.png"
Linked_Skill: ""
---

```sylvics-view
ReferenceDomain
```

```meta-bind-button
style: primary
class: premium-launch-button-Domain
label: ➕ Add Reference
actions:
  - type: templaterCreateNote
    templateFile: "99 - Meta/2. Templates/3. 📚 Resources/2. 🗄️ Reference Library/Template - Reference.md"
    folderPath: "<% folderPath %>"
    fileName: "Untitled Reference"
    openNote: true
```
