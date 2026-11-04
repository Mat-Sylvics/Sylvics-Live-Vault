<%"---"%>
tags:
  - "#type/yearly-note" 
cssclasses:
  - image-borders
  - image-small
  - yearly
  - sylvics-yearly
<%* // --- BANNER CONFIG --- 
{ // --- YEARLY BANNER ---
// Configuration for yearly banners
const yearlyBannerConfigs = {
    // You can adjust these Y values as needed for the yearly banner
    "YearlyBanner": 50
};

// Get the current file path to extract year
const filePath = tp.file.path(true);
const yearMatch = filePath.match(/(\d{4})/);

if (yearMatch) {
    const year = yearMatch[1];
    
    // Use a single banner for all years
    const bannerBaseName = "YearlyBanner";
    
    // Try to find the correct file extension
    let bannerExt = 'jpg'; // Default
    const baseFolder = "99 - Meta/4. Attachments/3. Sylvics Art/Journal/Yearly Notes";
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
    const bannerYValue = yearlyBannerConfigs[bannerBaseName] || 30;
    
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
    // If not a yearly note, add a comment instead
    tR += `# Not a yearly note - banner not applied`;
}
} %>
date: <% moment(tp.file.title, 'YYYY').startOf('year').format("YYYY-MM-DD") %>
sylvics-fullscreen: true
sylvics-up: "[[07 - Journal/00. Journal Masterpage]]"
alias:
aiAnswer: ""
YearSummary: ""
yearlyWheelOfLifeCategoryChartType: line
journal: yearly
journal-date: <% moment(tp.file.title, 'YYYY').startOf('year').format("YYYY-MM-DD") %>
Active_Identity_Tab: "Identities"
created: <% tp.file.creation_date("YYYY-MM-DD") %>
<%"---"%>

```sylvics-yearly
```
