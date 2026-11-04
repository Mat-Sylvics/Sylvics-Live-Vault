---
sylvics-fullscreen: true
<%*
// --- Auto-Sleep Calculator ---

let sleepEst = ""; // stays empty unless a shutdown-state file exists (nothing in the plugin writes one)
try {
    let stateRaw = await app.vault.adapter.read(".obsidian/vault_shutdown_state.json");
    let state = JSON.parse(stateRaw);
    if (state && state.timestamp) {
        let diffMs = Date.now() - state.timestamp;
        
        let configFm = app.metadataCache.getFirstLinkpathDest("01. Body", "");
        let preDelay = 0;
        let postDelay = 0;
        if (configFm) {
            let cache = app.metadataCache.getFileCache(configFm);
            if (cache && cache.frontmatter) {
                preDelay = cache.frontmatter.Pre_Sleep_Delay || 0;
                postDelay = cache.frontmatter.Post_Wake_Delay || 0;
            }
        }
        
        let totalDelayMs = (preDelay + postDelay) * 60000;
        let sleepMs = diffMs - totalDelayMs;
        
        if (sleepMs > 0 && sleepMs < 86400000) { 
            sleepEst = (sleepMs / 3600000).toFixed(1); 
        }
    }
} catch(e) {
}

{ // --- DAILY BANNER ---
// just hardcoded y values for the banners to look best. Adjust as you need.
const bannerConfigs = {
    Monday: 49,
    Tuesday: 50,
    Wednesday: 50,
    Thursday: 30,
    Friday: 30,
    Saturday: 0,
    Sunday: 2
};

// Get day of daily note
const today = moment(tp.file.title, 'YYYY-MM-DD').format("dddd");

// Try to find the correct file extension
let bannerExt = 'gif'; // Default
let baseFolder = "99 - Meta/4. Attachments/3. Sylvics Art/Journal/Daily Notes";
console.log("BASEFOLDER", baseFolder);
const extensions = ['gif', 'jpg', 'jpeg', 'png', 'webp'];

for (let ext of extensions) {
    let filePath = `${baseFolder}/${today}Banner.${ext}`;
    let file = tp.app.vault.getAbstractFileByPath(filePath);
    if (file) {
        bannerExt = ext;
        break;
    }
}

// Add banner yaml properties, including the fitting y-value
tR += `banner: "${baseFolder}/${today}Banner.${bannerExt}"
banner-y: ${bannerConfigs[today]}
banner-x: 30
content-start: 350
banner-display: cover
banner-repeat: true
banner-height: 400
banner-fade: 0
banner-radius: 25`;
} 
tR += "\n";
%>
cssclasses:
  - image-borders
  - image-small
  - sylvics-daily
  - <% moment(tp.file.title, 'YYYY-MM-DD-dddd').format('dddd').toLowerCase() %>
  - daily
  - sylvics-fullscreen
sylvics-up: "[[07 - Journal/00. Journal Masterpage]]"
date: <% moment(tp.file.title, 'YYYY-MM-DD-dddd').format("YYYY-MM-DD") %>
alias: 
dayRating:
flashback: ""
tags: "#type/daily-note"
journal: daily
journal-date: <% moment(tp.file.title, 'YYYY-MM-DD-dddd').format('YYYY-MM-DD') %>
journal-start-date: <% moment(tp.file.title, 'YYYY-MM-DD-dddd').format('YYYY-MM-DD') %>
journal-end-date: <% moment(tp.file.title, 'YYYY-MM-DD-dddd').format('YYYY-MM-DD') %>
daily_summary: ""
values_engaged: []
values_log: ""
paradigms_observed: []
paradigms_challenged: []
affirmations_said: []
paradigms_log: ""
contacts: []
Active_Quick_Capture: ""
lite_mode: false
show_body: true
show_mindfulness: true
show_ledger: true
show_nutrition: true
show_workout: true
Calories:  
Carbs:  
Fats:  
Protein:
Sleep: <% sleepEst %>
Sleep_Quality: 
Energy: 
Restoration_Score: 
Weight: 
Protocols_Completed: []
gratitude: |
  1.
  2.
  3.
highest_leverage_tasks: |
  1.
  2.
  3.
gallery_images: []
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-daily
```
