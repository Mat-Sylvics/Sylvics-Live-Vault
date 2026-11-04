// === Obsidian JS Engine Startup Script ===
(() => {
    console.log("🚀 JS Engine Startup script running");

    // ───── PREMIUM STARTUP ANIMATION (GLOBAL) ─────
    const startupStyle = document.createElement('style');
    startupStyle.innerHTML = `
        .premium-startup-overlay {
            position: fixed;
            top: 0; left: 0;
            width: 100vw; height: 100vh;
            background: #000;
            z-index: 10000;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 1;
            pointer-events: all;
            transition: opacity 2s ease-in-out;
            backdrop-filter: blur(15px);
        }
        
        .premium-startup-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: -5vh;
            /* Gentle continuous float so it never looks frozen */
            animation: startup-float-continuous 6s ease-in-out infinite;
        }

        .startup-emblem-container {
            position: relative;
            width: 180px;
            height: 180px;
            margin-bottom: 30px;
            filter: drop-shadow(0 0 20px rgba(16, 185, 129, 0.15));
        }

        /* SVG Inner Elements */
        .startup-emblem-container .lv-vault-lock {
            stroke-dasharray: 301;
            stroke-dashoffset: 301;
            transform-origin: center;
            /* Draws in, while continuously spinning */
            animation: 
                startup-draw-stroke 3.5s cubic-bezier(0.25, 1, 0.5, 1) forwards,
                startup-spin-slow 25s linear infinite;
        }

        /* Wrapper for fade + scale to prevent CSS transform conflicts */
        .startup-emblem-container .lv-ring-outer-fade {
            animation: startup-fade-in-scale 2.5s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards;
            opacity: 0;
            transform-origin: center;
        }
        .startup-emblem-container .lv-ring-outer-spin {
            transform-origin: center;
            animation: startup-spin-slow-reverse 35s linear infinite;
        }

        .startup-emblem-container .lv-ring-fade {
            animation: startup-fade-in-scale 2.5s cubic-bezier(0.16, 1, 0.3, 1) 0.8s forwards;
            opacity: 0;
            transform-origin: center;
        }
        .startup-emblem-container .lv-ring-spin {
            transform-origin: center;
            animation: startup-spin-slow 40s linear infinite;
        }

        .startup-emblem-container .lv-hex-breathe {
            transform-origin: center;
            animation: startup-breathe 6s ease-in-out infinite;
        }
        .startup-emblem-container .lv-hex-outer, .startup-emblem-container .lv-hex-inner {
            stroke-dasharray: 200;
            stroke-dashoffset: 200;
            animation: startup-draw-stroke 3s cubic-bezier(0.25, 1, 0.5, 1) 1s forwards;
        }

        .startup-emblem-container .lv-leaf {
            opacity: 0;
            animation: startup-fade-in 2.5s cubic-bezier(0.25, 1, 0.5, 1) 2s forwards;
            filter: drop-shadow(0 0 5px rgba(52, 211, 153, 0.4));
        }
        .startup-emblem-container .lv-core {
            opacity: 0;
            transform: scale(0);
            transform-origin: center;
            /* Elastic spring pop-in */
            animation: startup-pop-in 2s cubic-bezier(0.34, 1.56, 0.64, 1) 2.5s forwards;
            filter: drop-shadow(0 0 10px rgba(52, 211, 153, 0.8));
        }

        /* Text styling */
        .startup-vault-text {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            font-size: 24px;
            font-weight: 300;
            letter-spacing: 12px;
            color: #f8fafc;
            text-transform: uppercase;
            text-shadow: 0 0 15px rgba(52, 211, 153, 0.4);
            margin-left: 12px;
            opacity: 0;
            transform: translateY(20px);
            filter: blur(4px);
            animation: startup-text-float-up 2.5s cubic-bezier(0.16, 1, 0.3, 1) 2s forwards;
        }

        .startup-vault-subtext {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 11px;
            font-weight: 500;
            letter-spacing: 8px;
            color: #34d399;
            margin-top: 15px;
            opacity: 0;
            transform: translateY(15px);
            filter: blur(2px);
            animation: startup-text-float-up 2s cubic-bezier(0.16, 1, 0.3, 1) 2.6s forwards;
        }

        /* Essential Reveal Keyframes */
        @keyframes startup-draw-stroke {
            to { stroke-dashoffset: 0; }
        }
        @keyframes startup-fade-in-scale {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
        }
        @keyframes startup-fade-in {
            to { opacity: 1; }
        }
        @keyframes startup-pop-in {
            to { opacity: 1; transform: scale(1); }
        }
        @keyframes startup-text-float-up {
            to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }

        /* Continuous Dynamic Keyframes */
        @keyframes startup-float-continuous {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
        }
        @keyframes startup-spin-slow {
            to { transform: rotate(360deg); }
        }
        @keyframes startup-spin-slow-reverse {
            to { transform: rotate(-360deg); }
        }
        @keyframes startup-breathe {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.03); }
        }
    `;
    document.head.appendChild(startupStyle);

    let overlay = document.createElement("div");
    overlay.className = 'premium-startup-overlay';
    // Applying deep emerald/forest radial gradient for the "Living Vault" aesthetic
    overlay.style.cssText = "position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: radial-gradient(circle at center, #021a10 0%, #000000 70%); z-index: 10000; display: flex; justify-content: center; align-items: center; transition: opacity 2s ease-in-out; pointer-events: all;";
    
    overlay.innerHTML = `
        <div class="premium-startup-content">
            <div class="startup-emblem-container">
                <svg class="life-vault-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style="width:100%; height:100%;">
                    
                    <circle class="lv-vault-lock" cx="50" cy="50" r="48" fill="none" stroke="url(#lv-platinum)" stroke-dasharray="4 8" />
                    
                    <g class="lv-ring-outer-fade">
                        <circle class="lv-ring-outer-spin" cx="50" cy="50" r="49" fill="none" stroke="rgba(52, 211, 153, 0.3)" stroke-width="0.5" stroke-dasharray="1 3" />
                    </g>
                    
                    <g class="lv-ring-fade">
                        <circle class="lv-ring-spin" cx="50" cy="50" r="46" fill="none" stroke="rgba(52, 211, 153, 0.5)" stroke-width="0.5" />
                    </g>

                    <g class="lv-hex-breathe">
                        <polygon class="lv-hex-outer" points="50,5 89,27.5 89,72.5 50,95 11,72.5 11,27.5" fill="none" stroke="rgba(16, 185, 129, 0.6)" stroke-width="0.5" />
                        <polygon class="lv-hex-inner" points="50,15 80,32.5 80,67.5 50,85 20,67.5 20,32.5" fill="none" stroke="url(#lv-platinum)" stroke-width="1.2" />
                    </g>
                    
                    <path class="lv-leaf" d="M50,85 C30,70 25,45 50,20 C50,45 40,65 50,85 Z" fill="url(#lv-grad)" />
                    <path class="lv-leaf" d="M50,85 C70,70 75,45 50,20 C50,45 60,65 50,85 Z" fill="url(#lv-grad)" />
                    
                    <circle class="lv-core" cx="50" cy="55" r="4" fill="url(#lv-core-glow)" />
                    
                    <defs>
                        <!-- Nature-infused platinum for mechanical parts -->
                        <linearGradient id="lv-platinum" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="#f8fafc" />
                            <stop offset="40%" stop-color="#a7f3d0" />
                            <stop offset="70%" stop-color="#059669" />
                            <stop offset="100%" stop-color="#022c22" />
                        </linearGradient>
                        
                        <!-- Vibrant life emerald for energetic parts -->
                        <linearGradient id="lv-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#a3e635" />
                            <stop offset="50%" stop-color="#10b981" />
                            <stop offset="100%" stop-color="#047857" />
                        </linearGradient>

                        <!-- A living, breathing aura for the core -->
                        <radialGradient id="lv-core-glow" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stop-color="#a3e635" />
                            <stop offset="100%" stop-color="#059669" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
            <div class="startup-vault-text">WELCOME TO SYLVICS</div>
            <div class="startup-vault-subtext">1 LIFE, 1 VAULT</div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    // Remove the early boot shield now that the real animation is running
    const bootShield = document.getElementById('sylvics-boot-shield');
    if (bootShield) bootShield.remove();
    setTimeout(() => {
        overlay.style.opacity = "0";
        overlay.style.backdropFilter = "blur(0px)";
        setTimeout(() => {
            if(overlay.parentNode) overlay.remove();
            if(startupStyle.parentNode) startupStyle.remove();
        }, 2000);
    }, 5500);

    // ───── Remove RunJS notice ─────
    function removeRunJSNotice() {
        document.querySelectorAll('.notice, .mod-notice').forEach(notice => {
            const text = (notice.textContent || '').toLowerCase();
            if (text.includes('runjs') || text.includes('run js') || text.includes('loaded')) {
                const closeBtn = notice.querySelector('.clickable-icon, button, [aria-label*="Dismiss"], [aria-label*="Close"]');
                if (closeBtn) {
                    closeBtn.click();
                } else {
                    notice.remove();
                }
            }
        });
    }

    // Run cleanup immediately and watch for late notices
    removeRunJSNotice();
    const observer = new MutationObserver(removeRunJSNotice);
    observer.observe(document.body, { childList: true, subtree: true });

    setTimeout(removeRunJSNotice, 800);
    setTimeout(removeRunJSNotice, 1800);

    // ───── Fetch Settings from Sylvics Core ─────
    let morning = [
        "Let's do great work today!",
        "It's a new day!",
        "Rise and shine! ✨"
    ];
    let afternoon = [
        "Let's finish the day well!",
        "Let's keep up our focus!",
        "Need another cup of coffee? ☕"
    ];
    let evening = [
        "Time to go home!",
        "Great work today — time to rest!",
        "Log off and recharge! 🔋"
    ];
    let enableGreetings = true;

    try {
        // @ts-ignore
        const sylvicsSettings = window.app?.plugins?.plugins['sylvics-core']?.settings;
        if (sylvicsSettings) {
            enableGreetings = sylvicsSettings.enableSystemGreetings ?? true;
            if (sylvicsSettings.greetingsMorning) morning = sylvicsSettings.greetingsMorning.split('\n').filter(s => s.trim().length > 0);
            if (sylvicsSettings.greetingsAfternoon) afternoon = sylvicsSettings.greetingsAfternoon.split('\n').filter(s => s.trim().length > 0);
            if (sylvicsSettings.greetingsEvening) evening = sylvicsSettings.greetingsEvening.split('\n').filter(s => s.trim().length > 0);
        }
    } catch (e) {
        console.warn("Could not fetch Sylvics Core greeting settings", e);
    }

    const hour = new Date().getHours();
    let greeting;

    if (hour >= 20 || hour < 4) {
        greeting = "🌙 Good Evening! " + evening[Math.floor(Math.random() * evening.length)];
    } else if (hour >= 4 && hour < 12) {
        greeting = "🌞 Good Morning! " + morning[Math.floor(Math.random() * morning.length)];
    } else {
        greeting = "🌞 Good Afternoon! " + afternoon[Math.floor(Math.random() * afternoon.length)];
    }

    // Show greeting after the 6-second startup animation finishes
    setTimeout(() => {
        removeRunJSNotice();
        if (!enableGreetings) return; // Abort if disabled

        if (window.showLifeVaultNotification) {
            window.showLifeVaultNotification(greeting, 'System', 'greeting-startup');
        } else {
            new Notice(greeting, 7000);
        }
    }, 6500);

    console.log("✅ JS Engine startup finished");
})();
