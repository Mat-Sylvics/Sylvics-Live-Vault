/**
 * ⏰ Supplement & Protocol Alarm System
 * Continually monitors the vault for Exact_Time properties in Protocols and Supplements
 * and triggers a system notification when the time is reached.
 */
(() => {
    console.log("Health Protocol Alarm System Initialized.");
    
    if (window.supplementAlarmInterval) {
        clearInterval(window.supplementAlarmInterval);
    }
    
    window.supplementAlarmInterval = setInterval(() => {
        const now = new Date();
        const currentHour = now.getHours().toString().padStart(2, '0');
        const currentMinute = now.getMinutes().toString().padStart(2, '0');
        const currentTimeStr = `${currentHour}:${currentMinute}`;
        
        if (window.lastNotifiedTime === currentTimeStr) return;
        window.lastNotifiedTime = currentTimeStr;

        let triggered = [];

        const files = app.vault.getMarkdownFiles();
        for (let file of files) {
            if (!file.path.includes('Supplements') && !file.path.includes('Protocols')) continue;
            
            let cache = app.metadataCache.getFileCache(file);
            if (!cache || !cache.frontmatter) continue;
            
            let fm = cache.frontmatter;
            if (fm.ContentType !== "Supplement" && fm.ContentType !== "Protocol") continue;
            
            let exact = fm.Exact_Time;
            if (!exact) continue;
            
            let schema = [];
            if (Array.isArray(fm.Header_Schema)) schema = fm.Header_Schema;
            else if (typeof fm.Header_Schema === 'string') {
                try { schema = JSON.parse(fm.Header_Schema); } catch(e) {}
            }
            let notifStat = schema.find(s => s.type === 'notification_toggle');
            if (notifStat && !fm[notifStat.key]) continue;
            
            if (fm.Recurrence) {
                let recs = Array.isArray(fm.Recurrence) ? fm.Recurrence : [fm.Recurrence];
                if (recs.length === 2 && !isNaN(recs[0])) {
                    // Mode B: Interval logic
                    let startStr = fm.Starting_Date;
                    if (!startStr) continue;
                    
                    let startDate = window.moment(startStr);
                    let today = window.moment();
                    if (!startDate.isValid() || today.isBefore(startDate, 'day')) continue;
                    
                    let num = parseInt(recs[0]);
                    let unit = String(recs[1]).toLowerCase(); // days, weeks, months, quarters, years
                    
                    let diff = 0;
                    if (unit === 'days') diff = today.diff(startDate, 'days');
                    else if (unit === 'weeks') diff = today.diff(startDate, 'weeks');
                    else if (unit === 'months') diff = today.diff(startDate, 'months');
                    else if (unit === 'quarters') diff = today.diff(startDate, 'quarters');
                    else if (unit === 'years') diff = today.diff(startDate, 'years');
                    
                    if (diff % num === 0) {
                        let expectedDate = startDate.clone().add(diff, unit);
                        if (!today.isSame(expectedDate, 'day')) {
                            continue;
                        }
                    } else {
                        continue;
                    }
                } else {
                    // Mode A: Days of week logic
                    let todayDay = now.toLocaleDateString('en-US', { weekday: 'long' });
                    if (!recs.includes('Daily') && !recs.includes(todayDay)) {
                        continue;
                    }
                }
            }
            
            let exactArr = Array.isArray(exact) ? exact : [exact];
            for (let tStr of exactArr) {
                let match = String(tStr).trim().match(/^(\d{2}):(\d{2})/);
                if (match && match[0] === currentTimeStr) {
                    triggered.push({ name: file.basename, type: fm.ContentType, file: file, dosage: fm.Dosage, time: match[0] });
                    break;
                }
            }
        }
        
        // Punctual Reminders processing
        const notifCenterFile = app.vault.getAbstractFileByPath("00 - Atlas/4. 🧰 Tools/04. Notifications Center.md");
        if (notifCenterFile) {
            let ncCache = app.metadataCache.getFileCache(notifCenterFile);
            if (ncCache && ncCache.frontmatter && Array.isArray(ncCache.frontmatter.Punctual_Reminders)) {
                let reminders = ncCache.frontmatter.Punctual_Reminders;
                let todayStr = window.moment().format("YYYY-MM-DD");
                let triggeredReminders = [];
                let modified = false;
                
                for (let i = 0; i < reminders.length; i++) {
                    let r = reminders[i];
                    if (r.date === todayStr && r.time === currentTimeStr) {
                        triggeredReminders.push(r);
                        reminders.splice(i, 1);
                        i--;
                        modified = true;
                    }
                }
                
                if (modified) {
                    app.fileManager.processFrontMatter(notifCenterFile, (fm) => {
                        fm.Punctual_Reminders = reminders;
                    });
                }
                
                for (let r of triggeredReminders) {
                    if (window.showLifeVaultNotification) {
                        window.showLifeVaultNotification(
                            `${r.message} | Reminder`,
                            'Reminder',
                            'punctual-' + Date.now() + Math.random(),
                            () => { new Notice("Reminder Acknowledged"); }
                        );
                    }
                }
            }
        }
        
        if (triggered.length > 0) {
            for (let i = 0; i < triggered.length; i++) {
                let t = triggered[i];
                let msg = `⏰ Time to take your ${t.type.toLowerCase()}:\n${t.name}`;
                
                let eventId = 'protocol-alarm-' + Date.now() + '-' + i;
                const logProtocolStatus = (statusStr) => {
                    let todayStr = window.moment().format("YYYY-MM-DD");
                    if ((t.type === "Protocol" || t.type === "Supplement") && t.file && t.time) {
                        app.fileManager.processFrontMatter(t.file, (fm) => {
                            if (!fm.Protocol_Logs) fm.Protocol_Logs = [];
                            let existing = fm.Protocol_Logs.find(l => l.date === todayStr && l.time === t.time);
                            if (existing) {
                                if (statusStr === 'Snoozed') {
                                    existing.snoozes = (existing.snoozes || 0) + 1;
                                } else {
                                    existing.status = statusStr;
                                }
                            } else {
                                fm.Protocol_Logs.push({
                                    date: todayStr,
                                    time: t.time,
                                    status: statusStr,
                                    snoozes: statusStr === 'Snoozed' ? 1 : 0
                                });
                            }
                        });
                    }
                };

            if (window.showLifeVaultNotification) {
                const fireNotification = () => {
                    window.showLifeVaultNotification(
                        msg, 
                        'Protocol', 
                        eventId, 
                        () => { // onExecute
                            new Notice(`Acknowledged: ${t.name}`);
                            logProtocolStatus('Executed');
                            if (t.type === "Supplement" && t.file) {
                                app.fileManager.processFrontMatter(t.file, (fm) => {
                                    if (typeof fm.Inventory_Count === 'number') {
                                        let serving = parseFloat(String(t.dosage).match(/\d+(\.\d+)?/)?.[0]) || 1;
                                        if (fm.Inventory_Count >= serving) {
                                            fm.Inventory_Count = Math.round((fm.Inventory_Count - serving) * 100) / 100;
                                        } else {
                                            fm.Inventory_Count = 0;
                                        }
                                    }
                                });
                            } else if (t.type === "Protocol" && t.file) {
                                // Decrement all ingredients
                                let cache = app.metadataCache.getFileCache(t.file);
                                if (cache && cache.frontmatter && cache.frontmatter.Stack_Ingredients) {
                                    let ings = Array.isArray(cache.frontmatter.Stack_Ingredients) ? cache.frontmatter.Stack_Ingredients : [cache.frontmatter.Stack_Ingredients];
                                    for (let ingLink of ings) {
                                        let match = String(ingLink).match(/\[\[(.*?)\]\]/);
                                        let pName = match ? match[1] : String(ingLink);
                                        let file = app.metadataCache.getFirstLinkpathDest(pName, "");
                                        if (file) {
                                            app.fileManager.processFrontMatter(file, (sfm) => {
                                                if (typeof sfm.Inventory_Count === 'number') {
                                                    let serving = parseFloat(String(sfm.Dosage).match(/\d+(\.\d+)?/)?.[0]) || 1;
                                                    if (sfm.Inventory_Count >= serving) sfm.Inventory_Count = Math.round((sfm.Inventory_Count - serving) * 100) / 100;
                                                    else sfm.Inventory_Count = 0;
                                                }
                                            });
                                        }
                                    }
                                }
                            }
                        },
                        () => { // onSnooze
                            logProtocolStatus('Snoozed');
                            new Notice(`Snoozed: ${t.name}. Reminding you in 5 minutes!`);
                            setTimeout(fireNotification, 5 * 60 * 1000);
                        },
                        () => { // onSkip
                            logProtocolStatus('Skip');
                            new Notice(`Skipped: ${t.name}`);
                        }
                    );
                    
                    setTimeout(() => {
                        let notifBox = document.getElementById(`lv-notif-${eventId}`);
                        if (notifBox) {
                            let btns = notifBox.querySelectorAll("button");
                            let btnText = t.type === 'Protocol' ? "Protocol Executed" : "Supplement Taken";
                            for (let btn of btns) {
                                if (btn.innerText.includes("Open Note") || btn.innerText.includes("Open Protocol Note")) {
                                    btn.innerHTML = btn.innerHTML.replace(/Open (Protocol )?Note/g, btnText);
                                }
                            }
                            
                            let openBtn = document.createElement("button");
                            openBtn.innerHTML = "🔗";
                            openBtn.title = "Open Note";
                            openBtn.style.cssText = "position: absolute; top: 12px; right: 12px; background: transparent; border: none; box-shadow: none; color: rgba(255,255,255,0.4); font-size: 1.2em; cursor: pointer; padding: 0; outline: none; transition: 0.2s;";
                            openBtn.onmouseover = () => openBtn.style.color = 'white';
                            openBtn.onmouseout = () => openBtn.style.color = 'rgba(255,255,255,0.4)';
                            openBtn.onclick = () => {
                                if (t.file) app.workspace.getLeaf(false).openFile(t.file);
                            };
                            notifBox.appendChild(openBtn);
                        }
                    }, 100);
                };
                
                fireNotification();
            } else {
                new Notice(msg);
            }
            }
        }
    }, 60000);
})();
