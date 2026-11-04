<%"---"%>
tags:
  - "#type/quarterly-note" 
cssclasses:
  - image-borders
  - image-small
  - sylvics-fullscreen
  - sylvics-quarterly
  <%* tR += "- " + "quarter-" + moment(tp.file.title, 'YYYY-[Q]Q').format('Q').toLowerCase(); tR += "\n  - quarterly" %>
<%* // --- BANNER CONFIG --- 
{ // --- QUARTERLY BANNER ---
// Configuration for quarterly banners
const quarterlyBannerConfigs = {
    // You can adjust these Y values as needed for each quarterly banner
    "QuarterlyBanner1": 50,
    "QuarterlyBanner2": 50,
    "QuarterlyBanner3": 55,
    "QuarterlyBanner4": 50
};

// Get the current file path to extract quarter number
const filePath = tp.file.path(true);
const quarterMatch = filePath.match(/(\d{4})-Q(\d)/);

if (quarterMatch) {
    const year = quarterMatch[1];
    const quarterNum = parseInt(quarterMatch[2], 10);
    
    // Determine which banner to use based on quarter number
    // Just use the quarter number directly (1-4)
    const bannerBaseName = `QuarterlyBanner${quarterNum}`;
    
    // Try to find the correct file extension
    let bannerExt = 'png'; // Default
    const baseFolder = "99 - Meta/4. Attachments/3. Sylvics Art/Journal/Quarterly Notes";
    const extensions = ['gif', 'jpg', 'jpeg', 'png', 'webp'];

    for (const ext of extensions) {
        const filePath = `${baseFolder}/${bannerBaseName}.${ext}`;
        const file = app.vault.getAbstractFileByPath(filePath);
        if (file) {
            bannerExt = ext;
            break;
        }
    }
    
    // Get the Y value from config (or use a default of 30)
    const bannerYValue = quarterlyBannerConfigs[bannerBaseName] || 30;
    
    // Generate the YAML frontmatter
    tR += `banner: "[[${bannerBaseName}.${bannerExt}]]"
banner-y: ${bannerYValue}
banner-x: 30
content-start: 350
banner-display: cover
banner-repeat: true
banner-height: 400
banner-fade: 0
banner-radius: 25`;
} else {
    // If not a quarterly note, add a comment instead
    tR += `# Not a quarterly note - banner not applied`;
}
} %>
date: <% moment(tp.file.title, 'YYYY-[Q]Q').startOf('quarter').format("YYYY-MM-DD") %>
sylvics-fullscreen: true
sylvics-up: "[[07 - Journal/00. Journal Masterpage]]"
alias:
aiAnswer: ""
quarter_in_review: ""
identity_alignment_audit: ""
life_areas_audit: ""
identity_evolution: ""
next_quarter_focus: ""
next_quarter_goals: ""
shutdownTasks:
  chkLookBack: false
  chkFoundation: false
  chkHorizon: false
created: <% tp.file.creation_date("YYYY-MM-DD") %>
<%"---"%>

```sylvics-quarterly
```
