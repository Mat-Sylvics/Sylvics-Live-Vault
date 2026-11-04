dv.container.classList.add("sylvics-widget-container");
const container = dv.el("div", "", { attr: { style: "display: flex; flex-direction: column; gap: 10px; height: 100%; flex: 1; padding: 0px;" } });

container.innerHTML = `
    <div class="komo-label" style="padding-left: 5px;">sidebar capture</div>
        
        <div class="komo-quick-pad" style="flex: 1; display: flex; flex-direction: column; padding: 15px; gap: 10px; background: rgba(0,0,0,0.4); border-radius: 8px; border: 1px solid rgba(81,225,233,0.2); box-shadow: inset 0 0 20px rgba(0,0,0,0.5); overflow: hidden;">
            <textarea id="braindump-input" class="komo-quick-input" style="flex: 1; min-height: 250px; font-size: 1.1em; line-height: 1.5; background: transparent; border: none; padding: 10px; resize: none;" placeholder="brain dump here..."></textarea>
            
            <div id="braindump-title-block" style="display: none; flex-direction: column; gap: 8px;">
                <input type="text" id="braindump-title" class="komo-quick-input" placeholder="Title (Optional)..." style="padding: 10px; border-bottom: 1px solid #51e1e9; border-radius: 0;">
                <div style="display: flex; gap: 5px;">
                    <button id="braindump-confirm" class="komo-quick-btn" style="flex: 3; background: #51e1e9; color: #0a0a0a; border: none; box-shadow: 0 0 10px rgba(81,225,233,0.4); font-weight: 800;">SAVE IT</button>
                    <button id="braindump-cancel-save" class="komo-quick-btn" style="flex: 1; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);">✕</button>
                </div>
            </div>

            <div id="braindump-initial-buttons" style="display: flex; flex-direction: column; gap: 8px; margin-top: 5px;">
                <button id="braindump-save-intent" class="komo-quick-btn" style="background: #51e1e9; color: #0a0a0a; font-weight: 800; border: none; box-shadow: 0 0 10px rgba(81,225,233,0.3); padding: 12px; letter-spacing: 1px; transition: all 0.2s ease;">SEND TO INBOX →</button>
                <button id="braindump-clear" class="komo-quick-btn" style="background: transparent; color: rgba(255,255,255,0.4); border: 1px solid rgba(255,255,255,0.1); padding: 8px;">clear</button>
            </div>
        </div>
`;

let saveIntentBtn = container.querySelector("#braindump-save-intent");
let clearBtn = container.querySelector("#braindump-clear");
let cancelSaveBtn = container.querySelector("#braindump-cancel-save");
let confirmBtn = container.querySelector("#braindump-confirm");

let titleBlock = container.querySelector("#braindump-title-block");
let initialBtns = container.querySelector("#braindump-initial-buttons");
let inputTitle = container.querySelector("#braindump-title");
let inputText = container.querySelector("#braindump-input");

let clearConfirmState = false;

// Clear logic
clearBtn.addEventListener("click", () => {
    if (!clearConfirmState) {
        clearBtn.innerHTML = "are you sure?";
        clearBtn.style.color = "#51e1e9";
        clearConfirmState = true;
        setTimeout(() => {
            clearBtn.innerHTML = "clear";
            clearBtn.style.color = "rgba(255,255,255,0.4)";
            clearConfirmState = false;
        }, 3000);
    } else {
        inputTitle.value = "";
        inputText.value = "";
        clearBtn.innerHTML = "clear";
        clearBtn.style.color = "rgba(255,255,255,0.4)";
        clearConfirmState = false;
        new Notice("Pad cleared.");
    }
});

// Save intent logic
saveIntentBtn.addEventListener("click", () => {
    if (!inputText.value.trim()) {
        new Notice("Jot is empty!");
        return;
    }
    initialBtns.style.display = "none";
    titleBlock.style.display = "flex";
    inputTitle.focus();
});

// Cancel save logic
cancelSaveBtn.addEventListener("click", () => {
    titleBlock.style.display = "none";
    initialBtns.style.display = "flex";
});

// Confirm save logic
confirmBtn.addEventListener("click", async () => {
    let text = inputText.value;
    if (!text.trim()) return;
    
    let titleStr = inputTitle.value.trim();
    let timestamp = window.moment().format("YYYY-MM-DD HH-mm-ss");
    
    let filename = titleStr ? `✏️ Jot - ${titleStr}` : `✏️ Jot - ${timestamp}`;
    let existingFile = app.vault.getAbstractFileByPath(`01 - Inbox/${filename}.md`);
    if (existingFile) filename = `${filename} (${timestamp})`;
    
    let content = "---\ntags:\n  - jot\n---\n\n" + text;
    await app.vault.create(`01 - Inbox/${filename}.md`, content);
    
    inputTitle.value = "";
    inputText.value = "";
    titleBlock.style.display = "none";
    initialBtns.style.display = "flex";
    
    new Notice("Sent to Inbox!");
});
