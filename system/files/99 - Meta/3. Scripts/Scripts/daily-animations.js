
function fadeGlobalAudio() {
    let audio = document.getElementById('global-ambient-audio-player');
    if (!audio || audio.paused) return;
    
    let vol = audio.volume;
    let fadeOutInterval = setInterval(() => {
        if (vol > 0.02) {
            vol -= 0.02;
            audio.volume = vol;
        } else {
            audio.volume = 0;
            audio.pause();
            clearInterval(fadeOutInterval);
        }
    }, 100); // Fades out smoothly over ~5 seconds (50 steps of 100ms)
}

const imgFile = app.metadataCache.getFirstLinkpathDest("Boy Mountain Stargazing.gif", "");
const imgSrc = imgFile ? app.vault.getResourcePath(imgFile) : "";
// We prepare an empty container for the dynamic spawner to inject into
const easterEggsHtml = `<div class="easter-egg-container" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 15; border-radius: 12px;"></div>`;

const _qRoot = (typeof containerEl !== 'undefined' && containerEl) ? containerEl : ((typeof dv !== 'undefined' && dv.container) ? dv.container : document);
const _activeDoc = _qRoot.ownerDocument || document;

const styleId = "daily-animations-css-v4";
if (!_activeDoc.getElementById(styleId)) {
    const styleEl = _activeDoc.createElement("style");
    styleEl.id = styleId;
    styleEl.innerHTML = `
/* Soothing Breathing Animation for the Bottom Section */
@keyframes soothing-breathe {
    0% { transform: scale(1); filter: brightness(0.9) drop-shadow(0 0 5px rgba(100, 150, 255, 0.1)); }
    50% { transform: scale(1.02); filter: brightness(1.1) drop-shadow(0 0 30px rgba(100, 150, 255, 0.3)); }
    100% { transform: scale(1); filter: brightness(0.9) drop-shadow(0 0 5px rgba(100, 150, 255, 0.1)); }
}

@keyframes float-zzz {
    0% { transform: translateY(0) scale(0.8) rotate(-10deg); opacity: 0; filter: brightness(1); }
    20% { opacity: 1; filter: brightness(1.5); }
    80% { opacity: 1; filter: brightness(1.5); }
    100% { transform: translateY(-120px) scale(1.5) rotate(10deg); opacity: 0; filter: brightness(1); }
}

@keyframes float-stars-sleep {
    0% { transform: translateY(0) scale(0.6) rotate(0deg); opacity: 0; filter: brightness(0.8); }
    25% { transform: translateY(-100px) scale(1.1) rotate(15deg); opacity: 0.85; filter: brightness(1.2); }
    50% { transform: translateY(-200px) scale(0.8) rotate(30deg); opacity: 0.6; filter: brightness(1); }
    75% { transform: translateY(-300px) scale(1.2) rotate(45deg); opacity: 0.1; filter: brightness(1); }
    100% { transform: translateY(-400px) scale(0.6) rotate(60deg); opacity: 0; filter: brightness(0.8); }
}

.breathing-element {
    /* animation: soothing-breathe 8s ease-in-out infinite; */
}

.sleep-particles-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 10;
}

.zzz-particle {
    position: absolute;
    color: rgba(60, 120, 255, 0.9);
    font-weight: 800;
    font-family: 'Georgia', serif;
    animation: float-zzz 7s ease-in-out infinite;
    pointer-events: none;
    text-shadow: 0 0 20px rgba(0, 100, 255, 1), 0 0 10px rgba(0, 50, 255, 0.8), 0 0 30px rgba(100, 150, 255, 0.6);
    opacity: 0;
}

.star-particle-sleep {
    position: absolute;
    animation: float-stars-sleep 18s linear infinite;
    pointer-events: none;
    filter: drop-shadow(0 0 12px rgba(255, 255, 255, 0.6));
    opacity: 0;
}

@keyframes float-moons-sleep {
    0% { transform: translateY(0) scale(0.6); opacity: 0; filter: brightness(0.8); }
    25% { transform: translateY(-100px) scale(1.1); opacity: 0.85; filter: brightness(1.2); }
    50% { transform: translateY(-200px) scale(0.8); opacity: 0.6; filter: brightness(1); }
    75% { transform: translateY(-300px) scale(1.2); opacity: 0.1; filter: brightness(1); }
    100% { transform: translateY(-400px) scale(0.6); opacity: 0; filter: brightness(0.8); }
}

.moon-particle-sleep {
    position: absolute;
    animation: float-moons-sleep 20s linear infinite;
    pointer-events: none;
    filter: drop-shadow(0 0 12px rgba(255, 255, 255, 0.6));
    opacity: 0;
}

@keyframes shooting-star {
    0% { transform: translate(0, 0) rotate(260deg); opacity: 0; }
    2% { opacity: 1; transform: translate(-130px, 65px) rotate(260deg); filter: brightness(2) drop-shadow(0 0 10px rgba(255,255,255,0.8)); }
    15% { transform: translate(-1000px, 500px) rotate(260deg) scale(0.5); opacity: 0; }
    100% { transform: translate(-1000px, 500px) rotate(260deg) scale(0.5); opacity: 0; }
}

.comet-particle {
    position: absolute;
    right: -10%;
    top: -10%;
    font-size: 2em;
    animation: shooting-star 35s linear infinite;
    pointer-events: none;
    z-index: 15;
    animation-delay: 2s;
    opacity: 0;
}

@keyframes ufo-fly {
    0% { transform: translate(100px, 0) rotate(5deg); opacity: 0; }
    10% { transform: translate(-100px, -20px) rotate(-5deg); opacity: 1; filter: drop-shadow(0 10px 20px rgba(0,255,0,0.5)); }
    40% { transform: translate(-400px, 10px) rotate(5deg); opacity: 1; filter: drop-shadow(0 10px 20px rgba(0,255,0,0.8)); }
    50% { transform: translate(-500px, -30px) rotate(-15deg) scale(1.2); opacity: 1; filter: drop-shadow(0 20px 30px rgba(0,255,0,1)); }
    60% { transform: translate(-500px, -30px) rotate(15deg) scale(1.2); opacity: 1; filter: drop-shadow(0 20px 30px rgba(0,255,0,1)); }
    70% { transform: translate(-600px, 0) rotate(-5deg); opacity: 1; filter: drop-shadow(0 10px 20px rgba(0,255,0,0.5)); }
    90% { transform: translate(-1500px, -50px) rotate(10deg); opacity: 0; }
    100% { transform: translate(-1500px, -50px) rotate(10deg); opacity: 0; }
}

.ufo-particle {
    position: absolute;
    right: -10%;
    top: 30%;
    font-size: 2em;
    animation: ufo-fly 25s ease-in-out infinite;
    pointer-events: none;
    z-index: 15;
    animation-delay: 2s;
    opacity: 0;
}

/* Alien Hit Easter Egg (Left to Right) */
@keyframes ufo-victim-fly {
    0% { transform: translate(-100px, 0) rotate(-5deg); opacity: 0; }
    10% { transform: translate(50px, -20px) rotate(10deg); opacity: 1; filter: drop-shadow(0 10px 20px rgba(0,255,0,0.5)); }
    20% { transform: translate(150px, 10px) rotate(-5deg); opacity: 1; filter: drop-shadow(0 10px 20px rgba(0,255,0,0.6)); }
    30% { transform: translate(300px, -40px) rotate(15deg); opacity: 1; filter: drop-shadow(0 15px 25px rgba(0,255,0,0.7)); }
    35% { transform: translate(400px, -30px) rotate(-5deg) scale(1.2); opacity: 1; filter: drop-shadow(0 20px 30px rgba(0,255,0,0.8)); } /* Pauses to look */
    39% { transform: translate(400px, -30px) rotate(5deg) scale(1.2); opacity: 1; filter: drop-shadow(0 20px 30px rgba(0,255,0,0.8)); }
    /* Hit! Tumbles continuously sideways into the sky */
    40% { transform: translate(400px, -30px) rotate(20deg) scale(1.2); opacity: 1; animation-timing-function: linear; } 
    60% { transform: translate(150vw, -100px) rotate(1080deg) scale(1.2); opacity: 1; }
    100% { transform: translate(150vw, -100px) rotate(1080deg) scale(1.2); opacity: 1; }
}
.ufo-victim-particle {
    position: absolute; left: -10%; top: 35%; font-size: 2em;
    animation: ufo-victim-fly 25s ease-in-out infinite;
    animation-delay: 2s; opacity: 0; pointer-events: none; z-index: 15;
}

@keyframes meteor-strike {
    0%, 35% { transform: translate(200px, -500px) rotate(205deg) scale(1.2); opacity: 0; }
    36% { transform: translate(300px, -300px) rotate(205deg) scale(1.2); opacity: 1; }
    40% { transform: translate(380px, -30px) rotate(205deg) scale(1.2); opacity: 1; filter: drop-shadow(0 0 20px #ff5500); }
    40.1%, 100% { opacity: 0; transform: translate(380px, -30px) rotate(205deg) scale(1.2); }
}
.meteor-strike-particle {
    position: absolute; left: -10%; top: 35%; font-size: 2em;
    animation: meteor-strike 25s linear infinite;
    animation-delay: 2s; opacity: 0; pointer-events: none; z-index: 16;
}

@keyframes alien-explosion {
    0%, 40% { opacity: 0; transform: translate(385px, -20px) scale(0); }
    40.1% { opacity: 0.85; transform: translate(385px, -20px) scale(1); filter: drop-shadow(0 0 30px rgba(255, 200, 0, 0.8)); box-shadow: 0 0 50px 20px rgba(255,100,0,0.7), 0 0 100px 40px rgba(255,50,0,0.4); }
    41% { opacity: 0.75; transform: translate(385px, -20px) scale(1.3); filter: drop-shadow(0 0 50px rgba(255, 255, 255, 0.8)); box-shadow: 0 0 80px 40px rgba(255,200,0,0.8), 0 0 150px 70px rgba(255,100,0,0.5); }
    42% { opacity: 0; transform: translate(385px, -20px) scale(0); }
    100% { opacity: 0; transform: translate(385px, -20px) scale(0); }
}
.explosion-particle {
    position: absolute; left: -10%; top: 35%;
    width: 20px; height: 20px; border-radius: 50%; background: #fff;
    animation: alien-explosion 25s ease-out infinite;
    animation-delay: 2s; opacity: 0; pointer-events: none; z-index: 17;
}

/* Legendary Easter Eggs */
@keyframes mothership-descend {
    0% { transform: translateX(-50%) translateY(-300px); opacity: 0; filter: drop-shadow(0 20px 20px rgba(6, 182, 212, 0.2)); }
    100% { transform: translateX(-50%) translateY(0px); opacity: 1; filter: drop-shadow(0 20px 100px rgba(6, 182, 212, 1)); }
}
@keyframes mothership-hover {
    0%, 100% { transform: translateY(0px); filter: drop-shadow(0 20px 100px rgba(6, 182, 212, 1)); }
    50% { transform: translateY(-15px); filter: drop-shadow(0 20px 120px rgba(6, 182, 212, 1)); }
}
.legendary-mothership {
    position: fixed; top: 10vh; left: var(--ufo-center, 50vw); transform: translateX(-50%) translateY(-300px);
    z-index: 9999; text-align: center;
    animation: mothership-descend 3s ease-out forwards;
    will-change: transform, opacity;
}
.legendary-mothership-sprite {
    font-size: 15em;
    animation: mothership-hover 6s ease-in-out infinite;
    will-change: transform;
}

@keyframes abduction-beam-fire {
    0%, 20% { opacity: 0; transform: scaleY(0) scaleX(1); }
    22% { opacity: 0.6; transform: scaleY(1) scaleX(1); }
    25%, 90% { opacity: 1; transform: scaleY(1) scaleX(1.5); }
    95% { opacity: 0; transform: scaleY(0) scaleX(1); }
    100% { opacity: 0; transform: scaleY(0) scaleX(1); }
}
.legendary-abduction-beam {
    position: fixed; top: 25vh; left: calc(var(--ufo-center, 50vw) - 125px); width: 250px; height: 100vh;
    background: linear-gradient(to right, transparent 0%, rgba(6, 182, 212, 0.4) 30%, rgba(165, 243, 252, 0.7) 50%, rgba(6, 182, 212, 0.4) 70%, transparent 100%);
    transform-origin: top center;
    transform: scaleY(0);
    z-index: 9998;
    clip-path: polygon(42% 0%, 58% 0%, 100% 100%, 0% 100%);
    animation: abduction-beam-fire 15s forwards;
    filter: drop-shadow(0 0 20px rgba(6, 182, 212, 0.8));
}

@keyframes abduct-cow {
    0% { transform: translateX(-50%) translateY(0px) rotate(0deg) scale(1); opacity: 0; }
    5% { transform: translateX(-50%) translateY(-10px) rotate(15deg) scale(1); opacity: 1; filter: drop-shadow(0 0 10px #a5f3fc); }
    85% { transform: translateX(-50%) translateY(-55vh) rotate(540deg) scale(0.6); opacity: 1; filter: drop-shadow(0 0 20px #a5f3fc); }
    100% { transform: translateX(-50%) translateY(-55vh) rotate(720deg) scale(0); opacity: 0; }
}
.legendary-cow {
    position: fixed; bottom: 15vh; left: var(--ufo-center, 50vw);
    font-size: 4em; z-index: 9998;
    transform: translateX(-50%);
    opacity: 0;
    animation: abduct-cow 12s ease-in 3s both;
}

@keyframes beam-sparkle-float {
    0% { transform: translateY(0) scale(0); opacity: 0; }
    50% { transform: translateY(-300px) scale(1); opacity: 0.8; }
    100% { transform: translateY(-600px) scale(0); opacity: 0; }
}
.legendary-beam-sparkle {
    position: fixed;
    width: 6px; height: 6px;
    background: #cffafe; border-radius: 50%;
    box-shadow: 0 0 10px #06b6d4, 0 0 20px #06b6d4;
    z-index: 9999;
    opacity: 0;
    animation: beam-sparkle-float 3s ease-in forwards;
}
.legendary-beam-sparkle.s1 { top: 90vh; left: calc(var(--ufo-center, 50vw) - 15px); animation-delay: 2.2s; }
.legendary-beam-sparkle.s2 { top: 85vh; left: calc(var(--ufo-center, 50vw) + 15px); animation-delay: 2.7s; }
.legendary-beam-sparkle.s3 { top: 95vh; left: calc(var(--ufo-center, 50vw) - 5px); animation-delay: 3.1s; }
.legendary-beam-sparkle.s4 { top: 88vh; left: calc(var(--ufo-center, 50vw) - 30px); animation-delay: 3.6s; }
.legendary-beam-sparkle.s5 { top: 92vh; left: calc(var(--ufo-center, 50vw) + 25px); animation-delay: 4.0s; }

@keyframes rift-expand {
    0% { transform: translate(-50%, -50%) scale(0) rotate(0deg); opacity: 0; }
    5% { transform: translate(-50%, -50%) scale(1) rotate(180deg); opacity: 1; box-shadow: 0 0 50px 20px #3FD9C0, inset 0 0 20px #000; }
    /* Slow, menacing growth over ~12 seconds */
    80% { transform: translate(-50%, -50%) scale(3.5) rotate(2160deg); opacity: 1; box-shadow: 0 0 120px 40px #3FD9C0, inset 0 0 40px #000; }
    /* Accelerating violent expansion without massive box shadows that cause GPU lag */
    92% { transform: translate(-50%, -50%) scale(15) rotate(3600deg); opacity: 1; box-shadow: 0 0 50px 20px #3FD9C0, inset 0 0 20px #000; }
    100% { transform: translate(-50%, -50%) scale(60) rotate(5400deg); opacity: 1; background: #000; box-shadow: none; }
}
.legendary-rift {
    position: fixed; top: 50vh; left: 50vw; width: 100px; height: 100px;
    background: #000; border-radius: 50%;
    z-index: 9999;
    border: 5px solid #3FD9C0;
    animation: rift-expand 16s cubic-bezier(0.5, 0, 0.8, 1) 6s both;
}

/* Distorting Aura */
.legendary-rift-aura {
    position: fixed; top: 50vh; left: 50vw; width: 300px; height: 300px;
    border-radius: 50%;
    backdrop-filter: url(#twirl-distort) blur(4px) contrast(150%) brightness(1.2);
    -webkit-mask-image: radial-gradient(circle, black 30%, transparent 70%);
    mask-image: radial-gradient(circle, black 30%, transparent 70%);
    z-index: 9998; /* Under the rift */
    animation: rift-distortion 16s ease-in 6s both;
    pointer-events: none;
}
@keyframes rift-distortion {
    0%, 3% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
    6% { transform: translate(-50%, -50%) scale(0.6); opacity: 1; }
    80% { transform: translate(-50%, -50%) scale(3.5); opacity: 1; }
    95%, 100% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
}

@keyframes guardian-glitch {
    0% { opacity: 0; filter: drop-shadow(0 0 0px #22c55e); transform: translate(-50%, -50%) scale(0.2); top: var(--guardian-start-y, 60px); left: var(--guardian-start-x, 50vw); }
    3% { opacity: 0.9; filter: drop-shadow(0 0 10px #22c55e); transform: translate(-50%, -50%) scale(0.5); top: var(--guardian-start-y, 60px); left: var(--guardian-start-x, 50vw); }
    5% { opacity: 0.6; filter: drop-shadow(0 0 5px #22c55e); transform: translate(-50%, -50%) scale(0.45); top: var(--guardian-start-y, 60px); left: var(--guardian-start-x, 50vw); }
    8% { opacity: 1; filter: drop-shadow(0 0 15px #22c55e); transform: translate(-50%, -50%) scale(0.55); top: var(--guardian-start-y, 60px); left: var(--guardian-start-x, 50vw); }
    10% { opacity: 0.8; filter: drop-shadow(0 0 8px #22c55e); transform: translate(-50%, -50%) scale(0.48); top: var(--guardian-start-y, 60px); left: var(--guardian-start-x, 50vw); }
    13% { opacity: 1; filter: drop-shadow(0 0 50px #22c55e) brightness(150%); transform: translate(-50%, -50%) scale(0.6); top: var(--guardian-start-y, 60px); left: var(--guardian-start-x, 50vw); }
    14% { opacity: 1; filter: drop-shadow(0 0 150px #22c55e) brightness(250%); transform: translate(-50%, -50%) scale(0.6); top: var(--guardian-start-y, 60px); left: var(--guardian-start-x, 50vw); }
    15%, 100% { opacity: 0; filter: drop-shadow(0 0 200px #22c55e) brightness(300%); transform: translate(-50%, -50%) scale(0.6); top: var(--guardian-start-y, 60px); left: var(--guardian-start-x, 50vw); }
}
.legendary-guardian {
    position: fixed; top: var(--guardian-start-y, 60px); left: var(--guardian-start-x, 50vw); font-size: 4em;
    z-index: 9999;
    animation: guardian-glitch 38s ease-in forwards;
}

@keyframes matrix-text-fall {
    0%, 18% { opacity: 0; filter: blur(10px); transform: scale(1.1); }
    19% { opacity: 0.8; filter: blur(0px); transform: scale(1); }
    22% { opacity: 0.8; filter: blur(0px); }
    24% { opacity: 0.3; filter: blur(2px); }
    26% { opacity: 0.9; filter: blur(0px); }
    29% { opacity: 0.1; filter: blur(5px); }
    33% { opacity: 0.8; filter: blur(0px); }
    35% { opacity: 0.2; filter: blur(3px); }
    38% { opacity: 0.9; filter: blur(0px); }
    39% { opacity: 0; filter: blur(10px); }
    40%, 100% { opacity: 0; filter: blur(0px); transform: scale(0.9); }
}
.legendary-terminal-log {
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    color: #22c55e; font-family: monospace; font-size: 2em; font-weight: normal;
    display: flex; align-items: center; justify-content: center;
    z-index: 9999; text-align: center; line-height: 1.5;
    animation: matrix-text-fall 38s forwards;
    pointer-events: none;
    text-shadow: 0 0 5px #22c55e;
}
.legendary-matrix-text {
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    color: #22c55e; font-family: monospace; font-size: 4em; font-weight: bold;
    display: flex; align-items: center; justify-content: center;
    z-index: 9999; text-align: center; line-height: 1.5;
    animation: matrix-text-fall 38s forwards;
    pointer-events: none;
    text-shadow: 0 0 5px #22c55e, 0 0 10px #22c55e;
}

@keyframes screen-wash-fade {
    0%, 35% { background: rgba(74, 222, 128, 0); backdrop-filter: blur(0px); opacity: 0; }
    50% { background: rgba(74, 222, 128, 0.6); backdrop-filter: blur(15px); opacity: 1; }
    65% { background: rgba(2, 44, 34, 1); backdrop-filter: blur(25px); opacity: 1; box-shadow: inset 0 0 200px rgba(6, 78, 59, 1); }
    95%, 100% { background: rgba(0, 0, 0, 1); backdrop-filter: blur(25px); opacity: 1; box-shadow: inset 0 0 0px rgba(0,0,0,0); }
}
.legendary-screen-wash {
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    z-index: 9998; pointer-events: none;
    animation: screen-wash-fade 7s forwards;
}

@keyframes rift-wash-fade {
    0%, 85% { background: rgba(0, 0, 0, 0); backdrop-filter: blur(0px); opacity: 1; }
    92% { background: rgba(15, 0, 30, 0.5); backdrop-filter: blur(5px); opacity: 1; }
    96%, 100% { background: rgba(0, 0, 0, 1); backdrop-filter: blur(25px); opacity: 1; }
}
.legendary-rift-wash {
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    z-index: 9998; pointer-events: none;
    animation: rift-wash-fade 15s 6s both;
}

@keyframes energy-shockwave {
    0% { transform: translate(-50%, -50%) scale(0); opacity: 1; border-width: 50px; }
    30% { opacity: 0.8; }
    100% { transform: translate(-50%, -50%) scale(40); opacity: 0; border-width: 2px; }
}
.legendary-energy-wave {
    position: fixed;
    top: var(--guardian-start-y, 50vh);
    left: var(--guardian-start-x, 50vw);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 30px solid rgba(34, 197, 94, 0.2);
    box-shadow: 0 0 80px rgba(34, 197, 94, 0.5), inset 0 0 40px rgba(34, 197, 94, 0.5);
    backdrop-filter: blur(10px);
    z-index: 9998;
    pointer-events: none;
    animation: energy-shockwave 2.5s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
}

@keyframes gold-shockwave {
    0% { transform: translate(-50%, -50%) scale(0); opacity: 1; border-width: 50px; }
    30% { opacity: 0.8; }
    100% { transform: translate(-50%, -50%) scale(40); opacity: 0; border-width: 2px; }
}
.legendary-gold-wave {
    position: fixed;
    top: 50vh;
    left: 50vw;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 30px solid rgba(251, 191, 36, 0.4);
    box-shadow: 0 0 80px rgba(251, 191, 36, 0.8), inset 0 0 40px rgba(251, 191, 36, 0.8);
    backdrop-filter: blur(10px);
    z-index: 9998;
    pointer-events: none;
    animation: gold-shockwave 1.5s cubic-bezier(0.2, 0.8, 0.4, 1) forwards;
}

@keyframes glitch-wash-fade {
    0%, 33% { background: rgba(0, 0, 0, 0); opacity: 0; }
    48% { background: rgba(0, 20, 0, 0.9); opacity: 1; }
    80% { background: rgba(0, 10, 0, 1); opacity: 1; }
    95%, 100% { background: rgba(0, 0, 0, 1); opacity: 1; }
}
.legendary-glitch-wash {
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    z-index: 9990; pointer-events: none;
    animation: glitch-wash-fade 16s forwards;
}

@keyframes banner-glitch {
    0%, 100% { transform: translate(0) skew(0); filter: hue-rotate(0deg) drop-shadow(0 0 0px #22c55e); }
    10% { transform: translate(-5px, 5px) skew(5deg); filter: hue-rotate(90deg) contrast(200%) drop-shadow(0 0 20px #22c55e); }
    20% { transform: translate(5px, -5px) skew(-5deg); filter: hue-rotate(-90deg) drop-shadow(0 0 20px #22c55e); }
    30% { transform: translate(0) skew(0); filter: hue-rotate(0deg); }
}

@keyframes float-mini-ufo {
    0% { transform: translate(0, 0) rotate(0deg) scale(0); opacity: 0; }
    20% { transform: translate(calc(var(--dir-x) * 0.2), calc(var(--dir-y) * 0.2)) rotate(15deg) scale(1); opacity: 0.6; filter: drop-shadow(0 0 10px rgba(74, 222, 128, 0.8)); }
    80% { transform: translate(calc(var(--dir-x) * 0.8), calc(var(--dir-y) * 0.8)) rotate(-10deg) scale(1.2); opacity: 0.6; filter: drop-shadow(0 0 10px rgba(74, 222, 128, 0.8)); }
    100% { transform: translate(var(--dir-x), var(--dir-y)) rotate(-25deg) scale(0); opacity: 0; }
}
.legendary-mini-ufo { position: fixed; font-size: 3em; opacity: 0; pointer-events: none; z-index: 9999; }
.legendary-mini-ufo.ufo1 { top: 15vh; left: 10vw; --dir-x: 180px; --dir-y: 180px; animation: float-mini-ufo 8s ease-in-out forwards; animation-delay: 0.5s; }
.legendary-mini-ufo.ufo2 { bottom: 15vh; right: 10vw; --dir-x: -180px; --dir-y: -180px; animation: float-mini-ufo 9s ease-in-out forwards; animation-delay: 1.5s; }
.legendary-mini-ufo.ufo3 { top: 20vh; right: 15vw; --dir-x: -180px; --dir-y: 180px; animation: float-mini-ufo 7s ease-in-out forwards; animation-delay: 1.0s; }
.legendary-mini-ufo.ufo4 { bottom: 20vh; left: 15vw; --dir-x: 180px; --dir-y: -180px; animation: float-mini-ufo 8.5s ease-in-out forwards; animation-delay: 0.2s; }
.legendary-mini-ufo.ufo5 { top: 45vh; left: 5vw; --dir-x: 220px; --dir-y: 0px; animation: float-mini-ufo 9.5s ease-in-out forwards; animation-delay: 0.8s; }
.legendary-mini-ufo.ufo6 { top: 45vh; right: 5vw; --dir-x: -220px; --dir-y: 0px; animation: float-mini-ufo 7.5s ease-in-out forwards; animation-delay: 1.2s; }

.ufo-fade-container {
    position: fixed;
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    pointer-events: none;
    transform: scale(1);
    transform-origin: center;
}
@keyframes cinematic-ufo-fade {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(1.5); opacity: 0; }
}
.premium-shutdown-overlay.shutdown-executing .ufo-fade-container {
    animation: cinematic-ufo-fade 4s ease-out 2.5s forwards !important;
}

@keyframes accretion-disk-spin {
    0% { transform: translate(-50%, -50%) rotate(0deg) scale(0); opacity: 0; }
    20% { opacity: 0.8; }
    100% { transform: translate(-50%, -50%) rotate(720deg) scale(2.5); opacity: 0.8; filter: drop-shadow(0 0 50px #3FD9C0); }
}
.legendary-accretion-disk {
    position: fixed;
    top: var(--centerY, 50vh);
    left: var(--centerX, 50vw);
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: conic-gradient(from 0deg, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0.8) 25%, rgba(0,0,0,1) 50%, rgba(139, 92, 246, 0.8) 75%, rgba(139, 92, 246, 0.1) 100%);
    box-shadow: 0 0 100px #3FD9C0, inset 0 0 50px #000;
    z-index: 9998;
    pointer-events: none;
    mix-blend-mode: screen;
    opacity: 0;
    animation: accretion-disk-spin 16s cubic-bezier(0.2, 0, 0.8, 1) 6s forwards;
}

@keyframes violent-screen-shake {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    10%, 30%, 50%, 70%, 90% { transform: translate(-5px, 5px) rotate(-1deg); }
    20%, 40%, 60%, 80% { transform: translate(5px, -5px) rotate(1deg); }
}
html:has(.violent-shake-active) {
    background: #000 !important;
    overflow: hidden !important;
}
.violent-shake-active {
    animation: violent-screen-shake 0.2s infinite;
    background: #000 !important;
}

.premium-shutdown-overlay.rift-success-theme .vault-text {
    -webkit-text-fill-color: #3FD9C0 !important;
    color: #3FD9C0 !important;
    text-shadow: 0 0 20px rgba(139, 92, 246, 0.8), 2px 2px 0px #ef4444, -2px -2px 0px #06b6d4 !important;
    animation: text-glitch 0.2s infinite;
}
.premium-shutdown-overlay.rift-success-theme .vault-subtext {
    -webkit-text-fill-color: #c4b5fd !important;
    color: #c4b5fd !important;
    letter-spacing: 20px;
}
@keyframes text-glitch {
    0% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(-2px, -2px); }
    60% { transform: translate(2px, 2px); }
    80% { transform: translate(2px, -2px); }
    100% { transform: translate(0); }
}

@keyframes anomaly-warning {
    0% { opacity: 0; filter: blur(20px); transform: translate(-50%, -50%) scale(1.05); }
    15% { opacity: 1; filter: blur(0px); transform: translate(-50%, -50%) scale(1); text-shadow: 0 0 20px #3FD9C0, 0 0 40px #3FD9C0; }
    50% { opacity: 0.7; transform: translate(-50%, -50%) scale(0.98); text-shadow: 0 0 10px #3FD9C0, 0 0 20px #3FD9C0; }
    85% { opacity: 1; filter: blur(0px); transform: translate(-50%, -50%) scale(1.02); text-shadow: 0 0 30px #3FD9C0, 0 0 60px #3FD9C0; }
    100% { opacity: 0; filter: blur(20px); transform: translate(-50%, -50%) scale(1.05); }
}

@keyframes rift-particles {
    0% { transform: scale(1) rotate(0deg); opacity: 0; }
    50% { opacity: 0.8; filter: drop-shadow(0 0 10px #3FD9C0); }
    100% { transform: scale(0.1) rotate(360deg) translate(-200px, -200px); opacity: 0; }
}
.legendary-rift-particle { position: fixed; font-size: 2em; opacity: 0; pointer-events: none; z-index: 9999; }
.legendary-rift-particle.p1 { top: 15vh; right: 25vw; animation: rift-particles 7s ease-in-out forwards; animation-delay: 0s; }
.legendary-rift-particle.p2 { bottom: 25vh; left: 15vw; animation: rift-particles 6s ease-in-out forwards; animation-delay: 1s; }

/* Owl */
@keyframes owl-peek {
    0%, 30% { opacity: 0; transform: scale(0.9) rotate(0deg); filter: brightness(0.5); }
    35% { opacity: 1; transform: scale(1) rotate(0deg); filter: brightness(1.2) drop-shadow(0 0 20px rgba(255,255,255,0.8)); }
    40% { opacity: 1; transform: scale(1) rotate(-10deg); filter: brightness(1.2) drop-shadow(0 0 20px rgba(255,255,255,0.8)); }
    45% { opacity: 1; transform: scale(1) rotate(10deg); filter: brightness(1.2) drop-shadow(0 0 20px rgba(255,255,255,0.8)); }
    50% { opacity: 1; transform: scale(1) rotate(0deg); filter: brightness(1.2) drop-shadow(0 0 20px rgba(255,255,255,0.8)); }
    80% { opacity: 1; transform: scale(1) rotate(0deg); filter: brightness(1.2) drop-shadow(0 0 20px rgba(255,255,255,0.8)); }
    95%, 100% { opacity: 0; transform: scale(0.9) rotate(0deg); filter: brightness(0.5); }
}

.owl-particle {
    position: absolute;
    left: 14%;
    bottom: 19%; /* Sit perfectly on the tree branch */
    font-size: 2.2em;
    animation: owl-peek 40s ease-in-out infinite;
    z-index: 15;
    animation-delay: 1s;
    opacity: 0;
    pointer-events: none;
}

/* Satellite */
@keyframes satellite-fly {
    0% { transform: translate(-50px, 150px) rotate(35deg); opacity: 0; }
    10% { transform: translate(150px, 80px) rotate(45deg); opacity: 1; }
    50% { transform: translate(800px, -20px) rotate(65deg); opacity: 1; }
    90% { transform: translate(1450px, 80px) rotate(85deg); opacity: 1; }
    100% { transform: translate(1600px, 150px) rotate(95deg); opacity: 0; }
}

.satellite-particle {
    position: absolute;
    left: -5%;
    top: 20%;
    font-size: 1.5em;
    animation: satellite-fly 45s linear infinite;
    z-index: 10;
    opacity: 0;
    animation-delay: 0s;
    pointer-events: none;
    filter: drop-shadow(0 0 5px rgba(255,255,255,0.5));
}

/* Removed duplicate Forest Hunt (Rabbit & Fox) CSS */
@keyframes carrot-show {
    0%, 8% { opacity: 0; transform: rotate(-60deg); }
    9% { opacity: 1; transform: rotate(-60deg); }
    /* Eating jiggle */
    10% { opacity: 1; transform: rotate(-80deg); }
    12% { opacity: 1; transform: rotate(-50deg); }
    14% { opacity: 1; transform: rotate(-80deg); }
    16% { opacity: 1; transform: rotate(-50deg); }
    18% { opacity: 1; transform: rotate(-80deg); }
    20% { opacity: 1; transform: rotate(-50deg); }
    22% { opacity: 1; transform: rotate(-80deg); }
    24% { opacity: 1; transform: rotate(-50deg); }
    26% { opacity: 1; transform: rotate(-80deg); }
    28% { opacity: 1; transform: rotate(-50deg); }
    29% { opacity: 1; transform: rotate(-60deg); }
    30%, 100% { opacity: 0; transform: rotate(-60deg); }
}

.carrot-item {
    position: absolute;
    left: -5px; /* Tweak position so the tip touches the mouth */
    top: 10px;
    font-size: 16px; /* Fixed size */
    transform: rotate(-60deg); /* Tip points left into the mouth, leaves to the right */
    animation: carrot-show 60s ease-in-out infinite;
    pointer-events: none;
    z-index: 16;
}

.rabbit-particle {
    position: absolute;
    right: 35%; /* Base clearing right next to the right trees */
    bottom: 5%;
    font-size: 32px; /* Use fixed pixel size for reliable child positioning */
    animation: rabbit-hop 60s ease-in-out infinite;
    z-index: 15;
    opacity: 0;
    pointer-events: none;
}

@keyframes rabbit-hop {
    /* 0 - 1.2s: Nothing, wait just off to the right */
    0%, 2% { opacity: 0; transform: translate(100px, 0) scaleX(1); filter: brightness(0.5); }
    /* Hops in slowly (1.2s to 5.4s) */
    3% { opacity: 1; transform: translate(80px, -15px) scaleX(1); filter: brightness(1) drop-shadow(0 0 10px rgba(255,255,255,0.2)); }
    5% { opacity: 1; transform: translate(50px, 0) scaleX(1); }
    7% { opacity: 1; transform: translate(25px, -15px) scaleX(1); }
    9% { opacity: 1; transform: translate(0, 0) scaleX(1); }
    /* Sits still and eats for 12.6 seconds! (5.4s to 18s) */
    9%, 30% { transform: translate(0, 0) scaleX(1); }
    /* Notices fox! */
    31%, 32% { transform: translate(0, 0) scaleX(-1); } /* Turn right towards Fox */
    33% { transform: translate(-10px, -10px) scaleX(-1); } /* Startled hop backwards */
    34% { transform: translate(-20px, 0) scaleX(-1); }
    /* Runs away to the left */
    35% { transform: translate(-20px, 0) scaleX(1); opacity: 1; } /* Turn left to run */
    38% { transform: translate(-15vw, -15px) scaleX(1); opacity: 1; }
    41% { transform: translate(-30vw, 0) scaleX(1); opacity: 0; } /* Reaches first tree */
    100% { opacity: 0; transform: translate(-30vw, 0) scaleX(1); }
}

@keyframes fox-hunt {
    /* Invisible while rabbit hops in and eats */
    0%, 25% { opacity: 0; transform: translate(20px, 20px) scale(0.8) rotate(10deg); filter: brightness(0.2); }
    /* Peeks out */
    27% { opacity: 1; transform: translate(0, 0) scale(1) rotate(0deg); filter: brightness(0.8) drop-shadow(0 0 5px rgba(255,255,255,0.1)); }
    /* Watches */
    29% { transform: translate(0, 0) scale(1) rotate(-5deg); } /* Tilt head towards rabbit */
    31% { transform: translate(0, 0) scale(1) rotate(0deg); }
    /* Fox stays watching the empty space after rabbit runs away */
    36% { opacity: 1; transform: translate(0, 0) scale(1) rotate(0deg); filter: brightness(0.8); }
    40% { opacity: 1; transform: translate(0, 0) scale(1) rotate(0deg); filter: brightness(0.8); }
    /* Fox sinks back disappointed */
    42%, 100% { opacity: 0; transform: translate(20px, 20px) scale(0.8); filter: brightness(0.2); }
}

.fox-particle {
    position: absolute;
    right: 13.5%; /* Moved right slightly */
    bottom: 3%; /* Lowered fox slightly more */
    font-size: 2.2em;
    animation: fox-hunt 60s ease-in-out infinite;
    z-index: 14; /* Behind rabbit */
    opacity: 0;
    pointer-events: none;
}

/* --- Premium Shutdown Animation --- */
.premium-shutdown-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: radial-gradient(circle at center, transparent 20%, rgba(0,0,0,0.95) 100%);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    z-index: 10000;
    /* Softly reverse the blur/darkening if interrupted */
    transition: opacity 1.5s ease-out, visibility 1.5s ease-out;
}

.premium-shutdown-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0;
    pointer-events: none;
}

.premium-shutdown-overlay.shutdown-darkening {
    opacity: 1;
    visibility: visible;
    backdrop-filter: blur(5px);
    /* Smoothly creep in over 10 seconds */
    transition: opacity 10s linear, visibility 0s linear;
}

.premium-shutdown-overlay.shutdown-executing {
    opacity: 1;
    visibility: visible;
    pointer-events: all;
    /* 4. Cinematic CRT Collapse starts later, wait for it */
    animation: vault-fade-black 8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

.premium-shutdown-overlay::after {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    box-sizing: border-box;
    pointer-events: none;
    opacity: 0;
    z-index: 100;
}
.premium-shutdown-overlay.shutdown-executing::after {
    animation: screen-border-glow 3s ease-in-out 3.7s forwards;
}

.premium-shutdown-crt-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0; left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.premium-shutdown-overlay.shutdown-executing .premium-shutdown-crt-container {
    animation: vault-implosion 8s cubic-bezier(0.8, 0, 0.2, 1) forwards;
}

.premium-shutdown-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0;
    pointer-events: none;
    margin-top: -5vh; /* Optical centering */
}

.premium-shutdown-overlay.shutdown-executing .premium-shutdown-content {
    animation: vault-content-sequence 10s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

/* The Emblem Container */
.vault-emblem-container {
    position: relative;
    width: 180px;
    height: 180px;
    margin-bottom: 30px;
}
.premium-shutdown-overlay.shutdown-executing .vault-emblem-container::before {
    content: '';
    position: absolute;
    top: 50%; left: 50%;
    width: 100%; height: 100%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid rgba(167, 243, 208, 0.8);
    border-radius: 50%;
    opacity: 0;
    animation: shockwave-snap 1.5s ease-out 3.2s forwards;
    z-index: -1;
}


.life-vault-logo {
    width: 100%;
    height: 100%;
    overflow: visible;
}

/* SVG Elements */
.lv-hex-outer, .lv-hex-inner, .lv-ring, .lv-ring-outer, .lv-leaf, .lv-core, .lv-vault-lock {
    transform-origin: 50px 50px;
    transform-box: view-box;
}

.lv-hex-outer {
    stroke-dasharray: 300;
    stroke-dashoffset: 300;
}
.lv-hex-inner {
    stroke-dasharray: 200;
    stroke-dashoffset: 200;
}
.lv-ring {
    stroke-dasharray: 300;
    stroke-dashoffset: 300;
}

/* 2. "Vault Lock" Ring Animation */
.lv-vault-lock {
    stroke-dasharray: 350;
    stroke-dashoffset: 350;
    stroke: url(#lv-platinum);
    stroke-width: 1.5;
    filter: drop-shadow(0 0 10px rgba(148, 163, 184, 0.5));
}

.premium-shutdown-overlay.shutdown-executing .lv-vault-lock {
    animation: ps-circle-load 4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.premium-shutdown-overlay.shutdown-executing .lv-hex-outer {
    animation: draw-path 3s ease-in-out forwards, rotate-slow 20s linear infinite;
}
.premium-shutdown-overlay.shutdown-executing .lv-hex-inner {
    animation: draw-path 2.5s ease-in-out 0.5s forwards, lock-snap 4s cubic-bezier(0.68, -0.55, 0.265, 1.55) 1s forwards;
}
.premium-shutdown-overlay.shutdown-executing .lv-ring {
    animation: draw-path 3s ease-in-out 0.2s forwards, rotate-reverse 15s linear infinite;
}
.premium-shutdown-overlay.shutdown-executing .lv-ring-outer {
    animation: draw-path 4s ease-in-out forwards, rotate-slow 25s linear infinite;
}
.premium-shutdown-overlay.shutdown-executing .lv-leaf {
    opacity: 0;
    transform: scale(0.8);
    filter: drop-shadow(0 0 15px rgba(52, 211, 153, 0.5));
    will-change: transform, opacity;
    animation: leaf-bloom 3s cubic-bezier(0.2, 0.8, 0.2, 1) 2s forwards;
}
.premium-shutdown-overlay.shutdown-executing .lv-core {
    opacity: 0;
    animation: core-pulse 2s ease-in-out 2s infinite alternate;
}

/* 3. Sweeping Metallic Text */
.vault-text {
    font-size: 1.8em;
    font-family: var(--font-text, 'Inter', sans-serif);
    letter-spacing: 14px;
    text-transform: uppercase;
    font-weight: 800;
    opacity: 0;
    text-indent: 14px;
    white-space: nowrap;
    text-align: center;
    
    background: linear-gradient(to right, rgba(255,255,255,0.4) 0%, #a7f3d0 25%, #34d399 50%, #10b981 75%, rgba(255,255,255,0.4) 100%);
    background-size: 200% auto;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
}
.vault-subtext {
    margin-top: 15px;
    font-size: 0.85em;
    color: #10b981;
    opacity: 0;
    letter-spacing: 12px;
    text-transform: uppercase;
    font-family: var(--font-monospace, 'Courier New', monospace);
    font-weight: 300;
    text-indent: 12px;
}

.premium-shutdown-overlay.shutdown-executing .vault-text {
    animation: text-expand-fade 4s ease-out 2.5s forwards, text-sweep 5s linear 2.5s infinite;
}
.premium-shutdown-overlay.shutdown-executing .vault-subtext {
    animation: secure-snap 0.5s cubic-bezier(0.1, 1, 0.2, 1) 3.2s forwards, secure-pulse 2s ease-in-out 3.7s infinite alternate;
}
/* Guardian Theme Overrides */
.premium-shutdown-overlay.guardian-theme.shutdown-executing {
    background: #000 !important;
    animation: none !important;
}
.premium-shutdown-overlay.guardian-theme.shutdown-executing .premium-shutdown-content {
    animation: vault-content-sequence 4s ease-out 0s forwards !important;
}
.premium-shutdown-overlay.guardian-theme.shutdown-executing .vault-emblem-container {
    opacity: 1 !important;
    transform: scale(1) !important;
}
.premium-shutdown-overlay.guardian-theme.shutdown-executing .lv-hex-outer,
.premium-shutdown-overlay.guardian-theme.shutdown-executing .lv-hex-inner,
.premium-shutdown-overlay.guardian-theme.shutdown-executing .lv-ring,
.premium-shutdown-overlay.guardian-theme.shutdown-executing .lv-ring-outer,
.premium-shutdown-overlay.guardian-theme.shutdown-executing .lv-leaf,
.premium-shutdown-overlay.guardian-theme.shutdown-executing .lv-core,
.premium-shutdown-overlay.guardian-theme.shutdown-executing .lv-vault-lock {
    animation-delay: 0s !important;
    opacity: 1 !important;
}
.premium-shutdown-overlay.guardian-theme.shutdown-executing .vault-text {
    animation: text-expand-fade 4s ease-out 0s forwards, text-sweep 5s linear 0s infinite !important;
}
.premium-shutdown-overlay.guardian-theme.shutdown-executing .vault-subtext {
    animation: secure-snap 0.5s cubic-bezier(0.1, 1, 0.2, 1) 0s forwards, secure-pulse 2s ease-in-out 0.5s infinite alternate !important;
}
.premium-shutdown-overlay.guardian-theme .vault-text {
    background: none !important;
    -webkit-background-clip: border-box !important;
    background-clip: border-box !important;
    -webkit-text-fill-color: #fbbf24 !important;
    color: #fbbf24 !important;
    text-shadow: 0 0 15px rgba(251, 191, 36, 0.4) !important;
}
.premium-shutdown-overlay.guardian-theme .vault-subtext {
    -webkit-text-fill-color: #fcd34d !important;
    color: #fcd34d !important;
}
.premium-shutdown-overlay.guardian-theme .lv-vault-lock {
    stroke: #fbbf24 !important;
    filter: drop-shadow(0 0 10px rgba(251, 191, 36, 0.5));
}
.premium-shutdown-overlay.guardian-theme .lv-hex-inner {
    stroke: #fcd34d !important;
}

/* Alien Theme Overrides */
.premium-shutdown-overlay.alien-theme .vault-text {
    background: linear-gradient(to right, rgba(255,255,255,0.4) 0%, #86efac 25%, #22c55e 50%, #16a34a 75%, rgba(255,255,255,0.4) 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    text-shadow: 0 0 15px rgba(34, 197, 94, 0.4);
}
.premium-shutdown-overlay.alien-theme .vault-subtext {
    color: #4ade80;
}
.premium-shutdown-overlay.alien-theme .lv-vault-lock {
    stroke: #4ade80;
    filter: drop-shadow(0 0 10px rgba(74, 222, 128, 0.5));
}
.premium-shutdown-overlay.alien-theme .lv-hex-inner {
    stroke: #22c55e;
}

/* Rift Theme Overrides */
.premium-shutdown-overlay.rift-theme .vault-text {
    background: none !important;
    -webkit-background-clip: border-box !important;
    background-clip: border-box !important;
    -webkit-text-fill-color: #d8b4fe !important;
    color: #d8b4fe !important;
    text-shadow: 0 0 20px rgba(168, 85, 247, 0.8), 0 0 40px rgba(126, 34, 206, 0.6) !important;
    letter-spacing: 14px !important;
    font-weight: 800 !important;
}

.premium-shutdown-overlay.rift-theme.shutdown-executing .vault-text {
    animation: text-expand-fade 4s ease-out 2.5s forwards, rift-text-pulse 6s ease-in-out 2.5s infinite alternate !important;
}

@keyframes rift-text-pulse {
    0% { 
        text-shadow: 0 0 20px rgba(168, 85, 247, 0.8), 0 0 40px rgba(126, 34, 206, 0.6); 
        -webkit-text-fill-color: #d8b4fe; 
        color: #d8b4fe;
    }
    100% { 
        text-shadow: 0 0 30px rgba(216, 180, 254, 1), 0 0 60px rgba(168, 85, 247, 0.8), 0 0 20px rgba(255, 255, 255, 0.8); 
        -webkit-text-fill-color: #ffffff; 
        color: #ffffff;
    }
}



.premium-shutdown-overlay.rift-theme .lv-vault-lock {
    stroke: #e9d5ff;
    filter: drop-shadow(0 0 12px rgba(168, 85, 247, 0.7));
}
.premium-shutdown-overlay.rift-theme .lv-hex-inner {
    stroke: #3FD9C0 !important;
    filter: drop-shadow(0 0 8px rgba(168, 85, 247, 0.4));
}
.premium-shutdown-overlay.rift-theme .lv-hex-outer {
    stroke: rgba(216, 180, 254, 0.6) !important;
}
.premium-shutdown-overlay.rift-theme .lv-ring {
    stroke: rgba(216, 180, 254, 0.5) !important;
}
.premium-shutdown-overlay.rift-theme .lv-ring-outer {
    stroke: rgba(216, 180, 254, 0.3) !important;
}

/* ═══════════════════════════════════════════════════════════ */
/* LEGENDARY RIFT CLOSING — SPECTACULAR OVERRIDE              */
/* ═══════════════════════════════════════════════════════════ */

.premium-shutdown-overlay.rift-theme.shutdown-executing {
    animation: rift-void-consume 14s ease-in-out forwards !important;
}

.premium-shutdown-overlay.rift-theme.shutdown-executing::after {
    animation: rift-border-pulse 8s ease-in-out 3s forwards !important;
}

.premium-shutdown-overlay.rift-theme.shutdown-executing .premium-shutdown-crt-container {
    animation: rift-grand-implosion 14s cubic-bezier(0.8, 0, 0.2, 1) forwards !important;
}

.premium-shutdown-overlay.rift-theme.shutdown-executing .premium-shutdown-content {
    animation: rift-content-reveal 21s cubic-bezier(0.2, 0.8, 0.2, 1) forwards !important;
}

.premium-shutdown-overlay.rift-theme.shutdown-executing .vault-emblem-container::before {
    border-color: rgba(168, 85, 247, 0.8) !important;
    animation: rift-shockwave 2.5s ease-out 3.5s forwards !important;
}

@keyframes rift-void-consume {
    0% { background: radial-gradient(circle at center, transparent 20%, rgba(10, 0, 30, 0.95) 100%); backdrop-filter: blur(5px); }
    15% { background: radial-gradient(circle at center, rgba(88, 28, 135, 0.4) 0%, rgba(0, 0, 0, 1) 50%); backdrop-filter: blur(30px); }
    40% { background: radial-gradient(circle at center, rgba(126, 34, 206, 0.15) 0%, rgba(0, 0, 0, 1) 40%); backdrop-filter: blur(30px); }
    70% { background: radial-gradient(circle at center, rgba(88, 28, 135, 0.08) 0%, rgba(0, 0, 0, 1) 30%); backdrop-filter: blur(30px); }
    90% { background: radial-gradient(circle at center, rgba(30, 10, 60, 0.03) 0%, #000 20%); backdrop-filter: blur(30px); }
    100% { background: #000; backdrop-filter: blur(30px); }
}

@keyframes rift-border-pulse {
    0% { opacity: 0; }
    15% { opacity: 1; box-shadow: inset 0 0 40px rgba(168, 85, 247, 0.5), inset 0 0 100px rgba(126, 34, 206, 0.25); border: 1px solid rgba(168, 85, 247, 0.4); }
    40% { opacity: 0.6; box-shadow: inset 0 0 20px rgba(168, 85, 247, 0.3), inset 0 0 50px rgba(126, 34, 206, 0.15); border: 1px solid rgba(168, 85, 247, 0.2); }
    70% { opacity: 0.3; box-shadow: inset 0 0 10px rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.1); }
    100% { opacity: 0; box-shadow: inset 0 0 0px transparent; border: 1px solid transparent; }
}

@keyframes rift-grand-implosion {
    0%, 90% { transform: scale(1); filter: brightness(1); opacity: 1; }
    95% { transform: scale(1.04); filter: brightness(1.5) drop-shadow(0 0 50px #3FD9C0); opacity: 1; }
    100% { transform: scale(0.85); filter: brightness(0); opacity: 0; }
}

@keyframes rift-content-reveal {
    0%, 2% { opacity: 0; filter: blur(40px); transform: translate(-50%, -50%) scale(0.8); }
    18% { opacity: 1; filter: blur(0px); transform: translate(-50%, -50%) scale(1); }
    45% { opacity: 1; filter: blur(0px); transform: translate(-50%, -50%) scale(1.02); }
    100% { opacity: 0; filter: blur(10px); transform: translate(-50%, -50%) scale(1.1); }
}

@keyframes rift-shockwave {
    0% { transform: translate(-50%, -50%) scale(0.5); opacity: 1; box-shadow: 0 0 30px #3FD9C0 inset, 0 0 30px #3FD9C0; border-width: 2px; }
    70% { transform: translate(-50%, -50%) scale(15); opacity: 0.4; box-shadow: 0 0 50px #3FD9C0 inset, 0 0 50px #3FD9C0; border-width: 1px; }
    100% { transform: translate(-50%, -50%) scale(25); opacity: 0; border-width: 0px; }
}

/* Decorative Mini Black Holes — flanking the logo */
.rift-mini-blackhole {
    position: fixed;
    border-radius: 50%;
    background: radial-gradient(circle, #000 40%, rgba(88, 28, 135, 0.4) 70%, transparent 100%);
    pointer-events: none;
    z-index: 10001;
    opacity: 0;
}

.rift-mini-blackhole::before {
    content: '';
    position: absolute;
    top: 50%; left: 50%;
    width: 160%; height: 160%;
    transform: translate(-50%, -50%) rotateX(75deg);
    border-radius: 50%;
    border: 1.5px solid rgba(168, 85, 247, 0.5);
    box-shadow: 0 0 12px rgba(168, 85, 247, 0.25), 0 0 25px rgba(126, 34, 206, 0.1);
    animation: mini-disk-spin 4s linear infinite;
}

.rift-mini-blackhole::after {
    content: '';
    position: absolute;
    top: 50%; left: 50%;
    width: 250%; height: 250%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%);
    animation: mini-glow-pulse 3s ease-in-out infinite alternate;
}

@keyframes mini-disk-spin {
    from { transform: translate(-50%, -50%) rotateX(75deg) rotate(0deg); }
    to { transform: translate(-50%, -50%) rotateX(75deg) rotate(360deg); }
}

@keyframes mini-glow-pulse {
    0% { opacity: 0.4; transform: translate(-50%, -50%) scale(1); }
    100% { opacity: 0.7; transform: translate(-50%, -50%) scale(1.1); }
}

@keyframes mini-blackhole-fade-in {
    0% { opacity: 0; transform: scale(0); }
    20% { opacity: 0.8; transform: scale(1.05); }
    30% { opacity: 0.7; transform: scale(1); }
    80% { opacity: 0.6; transform: scale(1); }
    100% { opacity: 0; transform: scale(0.8); }
}

/* Gentle Drifting Stars — slow, ambient, pulled softly toward center */
.rift-ambient-star {
    position: fixed;
    border-radius: 50%;
    background: #fff;
    pointer-events: none;
    z-index: 10001;
    opacity: 0;
}

/* Shining Spots — bright diamond stars that twinkle to create a sick starry space */
.rift-shining-star {
    position: fixed;
    background: #fff;
    pointer-events: none;
    z-index: 10001;
    opacity: 0;
    clip-path: polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%);
    box-shadow: 0 0 10px #fff;
}

@keyframes shining-star-twinkle {
    0% { opacity: 0; transform: scale(0) rotate(0deg); }
    15% { opacity: var(--star-brightness, 0.9); transform: scale(1) rotate(45deg); }
    30% { opacity: 0.3; transform: scale(0.6) rotate(90deg); }
    50% { opacity: var(--star-brightness, 0.9); transform: scale(1.2) rotate(135deg); }
    80% { opacity: 0.2; transform: scale(0.5) rotate(180deg); transform: translate(var(--drift-x), var(--drift-y)); }
    100% { opacity: 0; transform: scale(0) rotate(225deg) translate(calc(var(--drift-x) * 1.5), calc(var(--drift-y) * 1.5)); }
}

/* ═══ SOPHISTICATED BLACK HOLE CORE EFFECTS ═══ */

/* Orbiting Event Horizon Sparks */
.rift-spark {
    position: fixed;
    top: 50%; left: 50%;
    width: 60px; height: 1px;
    background: linear-gradient(90deg, transparent, #d8b4fe, #fff, #d8b4fe, transparent);
    box-shadow: 0 0 10px #3FD9C0;
    pointer-events: none;
    z-index: 10001;
    opacity: 0;
    transform-origin: 0 0;
}

@keyframes spark-orbit {
    0% { transform: translate(-50%, -50%) rotate(var(--start-angle)) translateX(var(--orbit-radius)); opacity: 0; }
    20% { opacity: var(--spark-opacity, 0.8); }
    80% { opacity: var(--spark-opacity, 0.8); }
    100% { transform: translate(-50%, -50%) rotate(calc(var(--start-angle) + var(--spin-dir, 1) * 360deg)) translateX(calc(var(--orbit-radius) * 0.2)); opacity: 0; }
}

/* Deep Gravitational Pulse */
.rift-grav-pulse {
    position: fixed;
    top: 50%; left: 50%;
    border-radius: 50%;
    border: 2px solid rgba(192, 132, 252, 0.15);
    box-shadow: inset 0 0 40px rgba(168, 85, 247, 0.1), 0 0 40px rgba(126, 34, 206, 0.1);
    pointer-events: none;
    z-index: 9998;
    opacity: 0;
}

@keyframes grav-pulse-expand {
    0% { width: 100px; height: 100px; transform: translate(-50%, -50%) scale(1); opacity: 0; border-width: 4px; }
    20% { opacity: 1; }
    100% { width: 100px; height: 100px; transform: translate(-50%, -50%) scale(15); opacity: 0; border-width: 0.5px; }
}

@keyframes star-drift {
    0% { opacity: 0; }
    15% { opacity: var(--star-brightness, 0.6); }
    70% { opacity: var(--star-brightness, 0.6); transform: translate(var(--drift-x), var(--drift-y)); }
    100% { opacity: 0; transform: translate(calc(var(--drift-x) * 1.5), calc(var(--drift-y) * 1.5)); }
}

/* Soft Singularity Glow — gentle ambient light behind content */
.rift-singularity-glow {
    position: fixed;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 500px; height: 500px;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, rgba(126, 34, 206, 0.08) 35%, rgba(88, 28, 135, 0.03) 60%, transparent 80%);
}

@keyframes singularity-breathe {
    0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
    10% { transform: translate(-50%, -50%) scale(0.6); opacity: 0.8; }
    40% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
    70% { transform: translate(-50%, -50%) scale(1.15); opacity: 0.35; }
    90% { transform: translate(-50%, -50%) scale(1.3); opacity: 0.15; }
    100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
}

/* Keyframes */
@keyframes vault-fade-black {
    0% { background: radial-gradient(circle at center, transparent 20%, rgba(2, 15, 8, 0.95) 100%); backdrop-filter: blur(5px); }
    30% { background: radial-gradient(circle at center, #051A10 0%, #000000 100%); backdrop-filter: blur(30px); }
    80% { background: radial-gradient(circle at center, #051A10 0%, #000000 100%); backdrop-filter: blur(30px); }
    100% { background: #000; backdrop-filter: blur(30px); }
}

@keyframes vault-implosion {
    0%, 75% { transform: scale(1); filter: brightness(1); opacity: 1; }
    85% { transform: scale(1.02); filter: brightness(1.2) drop-shadow(0 0 20px #cbd5e1); opacity: 1; }
    100% { transform: scale(0.9); filter: brightness(0); opacity: 0; }
}

@keyframes ps-circle-load {
    0% { stroke-dashoffset: 350; transform: rotate(-90deg); opacity: 0; }
    10% { opacity: 1; }
    60% { stroke-dashoffset: 60; transform: rotate(270deg); }
    80% { stroke-dashoffset: 0; transform: rotate(630deg); filter: drop-shadow(0 0 10px rgba(148, 163, 184, 0.5)); }
    85% { stroke-dashoffset: 0; transform: rotate(630deg) scale(1.05); filter: drop-shadow(0 0 30px #cbd5e1); }
    100% { stroke-dashoffset: 0; transform: rotate(630deg) scale(1); filter: drop-shadow(0 0 15px rgba(148, 163, 184, 0.8)); }
}

@keyframes secure-snap {
    0% { letter-spacing: 30px; opacity: 0; filter: blur(5px); transform: scale(1.05); }
    100% { letter-spacing: 12px; opacity: 1; filter: blur(0px); transform: scale(1); text-shadow: 0 0 20px rgba(16, 185, 129, 0.6); }
}

@keyframes shockwave-snap {
    0% { transform: translate(-50%, -50%) scale(0.5); opacity: 1; box-shadow: 0 0 20px #a7f3d0 inset, 0 0 20px #a7f3d0; border-width: 2px; }
    80% { transform: translate(-50%, -50%) scale(12); opacity: 0.6; box-shadow: 0 0 50px #a7f3d0 inset, 0 0 50px #a7f3d0; border-width: 1px; }
    100% { transform: translate(-50%, -50%) scale(20); opacity: 0; border-width: 0px; }
}

@keyframes screen-border-glow {
    0% { opacity: 0; box-shadow: inset 0 0 0px transparent; border: 1px solid transparent; }
    40% { opacity: 1; box-shadow: inset 0 0 20px rgba(167, 243, 208, 0.8), inset 0 0 50px rgba(52, 211, 153, 0.6); border: 1px solid rgba(167, 243, 208, 0.8); }
    100% { opacity: 0; box-shadow: inset 0 0 10px transparent; border: 1px solid transparent; }
}

@keyframes secure-pulse {
    0% { text-shadow: 0 0 10px rgba(16, 185, 129, 0.4); color: #10b981; }
    100% { text-shadow: 0 0 25px rgba(16, 185, 129, 0.9), 0 0 40px rgba(16, 185, 129, 0.4); color: #34d399; }
}

@keyframes vault-content-sequence {
    0%, 5% { opacity: 0; filter: blur(30px); transform: translate(-50%, -50%) scale(0.85); }
    35% { opacity: 1; filter: blur(0px); transform: translate(-50%, -50%) scale(1); }
    75% { opacity: 1; filter: blur(0px); transform: translate(-50%, -50%) scale(1.05); }
    80% { opacity: 1; filter: blur(0px); transform: translate(-50%, -50%) scale(1.05); }
    100% { opacity: 1; filter: blur(0px); transform: translate(-50%, -50%) scale(1.05); }
}

@keyframes draw-path {
    to { stroke-dashoffset: 0; }
}
@keyframes vault-spin-snap {
    0% { transform: rotate(-180deg); stroke-dashoffset: 350; opacity: 0; }
    30% { stroke-dashoffset: 0; opacity: 1; }
    50% { transform: rotate(45deg); opacity: 1; }
    100% { transform: rotate(0deg); opacity: 1; }
}
@keyframes rotate-slow {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
@keyframes rotate-reverse {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(-360deg); }
}
@keyframes lock-snap {
    0% { transform: rotate(-90deg); }
    100% { transform: rotate(0deg); }
}
@keyframes leaf-bloom {
    0% { opacity: 0; transform: scale(0.8) translateY(10px); }
    100% { opacity: 1; transform: scale(1) translateY(0); }
}
@keyframes core-pulse {
    0% { opacity: 0.5; transform: scale(0.8); filter: drop-shadow(0 0 0px #a7f3d0); }
    100% { opacity: 1; transform: scale(1.2); filter: drop-shadow(0 0 10px #a7f3d0); }
}
@keyframes text-expand-fade {
    0% { opacity: 0; letter-spacing: 14px; text-indent: 14px; transform: translateY(10px); }
    30% { opacity: 1; letter-spacing: 16px; text-indent: 16px; transform: translateY(0); }
    100% { opacity: 1; letter-spacing: 20px; text-indent: 20px; transform: translateY(0); }
}
@keyframes text-sweep {
    to { background-position: 200% center; }
}
@keyframes subtext-fade-in {
    0% { color: rgba(16, 185, 129, 0); transform: translateY(10px); }
    100% { color: rgba(16, 185, 129, 0.7); transform: translateY(0); }
}
`;
    _activeDoc.head.appendChild(styleEl);
}

dv.container.insertAdjacentHTML("beforeend", `
<div style="position: relative; overflow: visible; padding-bottom: 50px;">
    <!-- Background Particles -->
    <div class="sleep-particles-container">
        <!-- ZZZ Particles -->
        <div class="zzz-particle" style="left: 10%; top: 5%; animation-delay: 0s; font-size: 1.2em;">z</div>
        <div class="zzz-particle" style="left: 15%; top: 15%; animation-delay: 1.5s; font-size: 1.8em;">z</div>
        <div class="zzz-particle" style="left: 20%; top: 25%; animation-delay: 3s; font-size: 2.5em;">Z</div>
        <div class="zzz-particle" style="left: 30%; top: 10%; animation-delay: 4.5s; font-size: 1.5em;">z</div>
        
        <div class="zzz-particle" style="right: 10%; top: 5%; animation-delay: 2s; font-size: 1.2em;">z</div>
        <div class="zzz-particle" style="right: 15%; top: 15%; animation-delay: 3.5s; font-size: 1.8em;">z</div>
        <div class="zzz-particle" style="right: 20%; top: 25%; animation-delay: 5s; font-size: 2.5em;">Z</div>
        <div class="zzz-particle" style="right: 30%; top: 10%; animation-delay: 1s; font-size: 1.5em;">z</div>
    </div>

    <div class="breathing-element" style="display: flex; flex-direction: column; align-items: center; text-align: center; margin: 25px 0 20px 0; padding: 20px 15px; background: linear-gradient(145deg, rgba(30,30,30,0.5) 0%, color-mix(in srgb, var(--dark) 45%, black 45%) 100%); border-top: 1px solid color-mix(in srgb, var(--primary) 40%, transparent); border-bottom: 1px solid color-mix(in srgb, var(--primary) 10%, transparent); border-radius: 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05); position: relative; z-index: 2;">
      <div style="font-size: 0.7em; letter-spacing: 5px; color: var(--primary); text-transform: uppercase; font-weight: 700; margin-bottom: 10px; opacity: 0.9; text-shadow: 0 0 10px color-mix(in srgb, var(--primary) 30%, transparent);">PILLAR V • SHUTDOWN COMPLETE</div>
      <div class="cinematic-gate-title" style="font-size: 2.8em; font-weight: 800; letter-spacing: 6px; color: var(--highlight); text-transform: uppercase; margin: 0; text-shadow: 0 0 15px color-mix(in srgb, var(--primary) 60%, transparent), 0 0 25px color-mix(in srgb, var(--primary) 30%, transparent); line-height: 1.1;">NOTE CLOSED</div>
      <div style="width: 40px; height: 2px; background: var(--primary); box-shadow: 0 0 15px var(--primary); margin: 15px 0 10px 0; border-radius: 2px;"></div>
      <div style="font-size: 1em; color: var(--text-normal); font-family: 'Georgia', serif; font-style: italic; opacity: 0.9;">The day is done. Rest well.</div>
    </div>

    <div class="breathing-element" style="text-align: center; margin: 5px 0 10px 0; position: relative; z-index: 2; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
        <img src="${imgSrc}" style="width: 100%; height: 55vh; object-fit: cover; object-position: center bottom; display: block;" />
        
        <!-- Celestial Bodies -->
        <div class="star-particle-sleep" style="left: 15%; bottom: 10%; animation-delay: 0s; font-size: 1.2em;">✨</div>
        <div class="star-particle-sleep" style="left: 25%; bottom: 30%; animation-delay: 6s; font-size: 1.8em;">⭐</div>
        <div class="star-particle-sleep" style="left: 35%; bottom: 15%; animation-delay: 11s; font-size: 1em;">✨</div>
        <div class="moon-particle-sleep" style="left: 45%; bottom: 25%; animation-delay: 3s; font-size: 1.5em;">🌙</div>
        <div class="star-particle-sleep" style="left: 55%; bottom: 5%; animation-delay: 16s; font-size: 1.3em;">✨</div>
        <div class="moon-particle-sleep" style="right: 35%; bottom: 20%; animation-delay: 14s; font-size: 1.4em;">🌙</div>
        <div class="star-particle-sleep" style="right: 25%; bottom: 10%; animation-delay: 9s; font-size: 1.7em;">✨</div>
        <div class="star-particle-sleep" style="right: 15%; bottom: 35%; animation-delay: 13s; font-size: 1.1em;">⭐</div>
        <div class="star-particle-sleep" style="right: 5%; bottom: 15%; animation-delay: 4s; font-size: 1.6em;">✨</div>
        
        <!-- Easter Eggs -->
        ${easterEggsHtml}
    </div>
    
    <!-- Shining Beam Separator -->
    <div class="shutdown-separator-trigger" style="width: 100%; height: 2px; background: linear-gradient(90deg, transparent, var(--interactive-accent), transparent); box-shadow: 0 0 15px var(--interactive-accent), 0 0 30px var(--interactive-accent); margin: 30px auto 40px auto; opacity: 0.8; position: relative; z-index: 10;"></div>
</div>
`);

// --- Premium Shutdown Animation Logic ---
setTimeout(() => {
    // Inject Gate GIF CSS globally to ensure all pillar GIFs are styled correctly
    if (!_activeDoc.getElementById('gate-gif-styles')) {
        const styleEl = _activeDoc.createElement('style');
        styleEl.id = 'gate-gif-styles';
        styleEl.innerHTML = `
            p:has(img[alt="gate-gif"]) {
                max-width: none !important;
                width: 100% !important;
                margin-left: 0 !important;
                margin-right: 0 !important;
            }
            span.internal-embed[alt="gate-gif"] {
                display: block !important;
                width: 100% !important;
                max-width: none !important;
            }
            img[alt="gate-gif"] {
                width: 100% !important;
                height: 55vh !important;
                max-width: none !important;
                object-fit: cover !important;
                object-position: center bottom !important;
                border-radius: 12px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                display: block;
                margin-top: 5px;
                margin-bottom: 10px;
            }
        `;
        _activeDoc.head.appendChild(styleEl);
    }
    const queryRoot = (typeof dv !== 'undefined' && dv.container) ? dv.container : document;
    const activeDocument = queryRoot.ownerDocument || document;
    const noteClosedEls = queryRoot.querySelectorAll('.cinematic-gate-title');
    if (!noteClosedEls || noteClosedEls.length === 0) return;
    
    // ALWAYS grab the very last title, which is NOTE CLOSED at the absolute bottom.
    const noteClosedEl = noteClosedEls[noteClosedEls.length - 1];
    
    // Instead of fragile style matching, if we have containerEl (Svelte), use its parent!
    let parentContainer;
    if (typeof containerEl !== 'undefined' && containerEl) {
        parentContainer = containerEl.parentElement;
    } else {
        parentContainer = noteClosedEl.closest('div[style*="padding-bottom"]');
        if (!parentContainer) {
            let curr = noteClosedEl;
            while (curr && curr.parentElement && curr.parentElement !== queryRoot) {
                curr = curr.parentElement;
            }
            parentContainer = curr;
        }
    }
    if (!parentContainer) return;
    
    // Completely replace any existing overlay in this document
    let existingOverlay = activeDocument.querySelector('.premium-shutdown-overlay');
    if (existingOverlay) existingOverlay.remove();
    
    // Find the shining beam separator to use as the trigger
    const triggerEl = parentContainer.querySelector('.shutdown-separator-trigger');
    if (!triggerEl) return;
    
    // Find the Easter Egg Container for Dynamic Spawning
    const eggContainer = parentContainer.querySelector('.easter-egg-container');
    
    // Create a dummy global overlay to prevent ReferenceErrors from legacy easter egg code
    const overlay = activeDocument.createElement('div');
    overlay.className = 'premium-shutdown-overlay';
    overlay.style.display = 'none';
    parentContainer.appendChild(overlay);
    
    let isIntersecting = false;
    let lastReset = 0;
    let isExecuting = false;
    
    // --- Dynamic Spawner System ---
    if (parentContainer.dailyEasterEggSpawner) clearInterval(parentContainer.dailyEasterEggSpawner);
    
    const activeEvents = { sky: false, ground: false, comet: false, legendary: false };
    
    function spawnParticle(html, duration, category) {
        if (!eggContainer) return;
        activeEvents[category] = true;
        const wrapper = document.createElement('div');
        wrapper.innerHTML = html;
        const elements = Array.from(wrapper.children);
        
        elements.forEach(el => eggContainer.appendChild(el));
        
        setTimeout(() => {
            elements.forEach(el => {
                if (el.parentNode === eggContainer) eggContainer.removeChild(el);
            });
            activeEvents[category] = false;
        }, duration + 500);
    }
    
    function spawnLegendary(html, duration, globalHtml = '', overlayExtraHtml = '') {
        if (!eggContainer) return;
        activeEvents.legendary = true;
        stopShutdownTimer();
        isExecuting = true; // Lock everything out
        
        let isRift = typeof globalHtml !== 'undefined' && globalHtml.includes('legendary-rift');
        let isGuardian = typeof globalHtml !== 'undefined' && globalHtml.includes('legendary-guardian');
        let isMothership = typeof globalHtml !== 'undefined' && globalHtml.includes('legendary-mothership');
        
        // Force open sidebars to ensure maximum UI absorption visibility
        if (typeof app !== 'undefined' && app.workspace) {
            if (app.workspace.leftSplit) app.workspace.leftSplit.expand();
            if (app.workspace.rightSplit) app.workspace.rightSplit.expand();
        }
        
        // Make standard overlay visible but fully transparent if it's the black hole!
        if (isRift) {
            overlay.style.display = 'block';
            overlay.style.background = 'transparent';
            overlay.style.backdropFilter = 'none';
        } else {
            overlay.style.display = 'none';
        }

        const wrapper = document.createElement('div');
        wrapper.innerHTML = html;
        const elements = Array.from(wrapper.children);
        
        elements.forEach(el => eggContainer.appendChild(el));
        
        let globalElements = [];
        if (globalHtml) {
            const rect = eggContainer.getBoundingClientRect();
            let centerX = rect.left + rect.width / 2;
            let centerY = rect.top + rect.height / 2;
            
            // Re-center perfectly onto the pixel art GIF if it exists
            const targetImg = eggContainer.parentElement ? eggContainer.parentElement.querySelector('img') : null;
            if (targetImg) {
                const imgRect = targetImg.getBoundingClientRect();
                centerX = imgRect.left + imgRect.width / 2;
                centerY = imgRect.top + (imgRect.height * 0.65); // Shift down slightly to align with the character
            }
            
            if (isRift) {
                centerX += 180; // Shift the black hole to the right so it doesn't spawn exactly on top of the character
            }
            
            const globalWrapper = document.createElement('div');
            globalWrapper.innerHTML = globalHtml;
            globalElements = Array.from(globalWrapper.children);
            
            globalElements.forEach(el => {
                if (el.classList.contains('legendary-rift') || el.classList.contains('legendary-rift-aura') || el.classList.contains('legendary-guardian')) {
                    el.style.left = `${centerX}px`;
                    el.style.left = `${centerX}px`;
                    el.style.top = `${centerY}px`;
                } else if (el.classList.contains('legendary-mothership')) {
                    el.style.left = `${centerX}px`;
                } else if (el.classList.contains('legendary-abduction-beam')) {
                    el.style.left = `${centerX - 125}px`;
                }
                document.body.appendChild(el);
            });
            
            if (isRift) {
                if (!window.suckedOriginals) window.suckedOriginals = [];
                
                // Inject personalized black hole closing animation
                const riftCloseStyle = document.createElement('style');
                riftCloseStyle.id = 'legendary-rift-close-style';
                riftCloseStyle.innerHTML = `
                    @keyframes rift-core-collapse {
                        0% { transform: translate(-50%, -50%) scale(60) rotate(5400deg); opacity: 1; box-shadow: none; background: #000; }
                        50% { transform: translate(-50%, -50%) scale(3) rotate(6000deg); opacity: 1; box-shadow: 0 0 200px 100px #fff, inset 0 0 100px #fff; background: #fff; border-color: #fff; }
                        95% { transform: translate(-50%, -50%) scale(0.1) rotate(8000deg); opacity: 1; box-shadow: 0 0 500px 200px #fff; background: #fff; }
                        100% { transform: translate(-50%, -50%) scale(0) rotate(8280deg); opacity: 0; }
                    }
                    .rift-core-executing {
                        animation: rift-core-collapse 3.5s cubic-bezier(0.8, 0, 0.2, 1) forwards !important;
                        transform-origin: center center;
                    }
                    @keyframes disk-collapse {
                        0% { transform: translate(-50%, -50%) scale(2.5) rotate(720deg); opacity: 0.8; }
                        50% { transform: translate(-50%, -50%) scale(0.5) rotate(1440deg); opacity: 1; filter: brightness(300%) drop-shadow(0 0 100px #fff); }
                        100% { transform: translate(-50%, -50%) scale(0) rotate(2160deg); opacity: 0; }
                    }
                    .disk-executing {
                        animation: disk-collapse 3.5s cubic-bezier(0.8, 0, 0.2, 1) forwards !important;
                        transform-origin: center center;
                    }
                    @keyframes implosion-shockwave {
                        0% { opacity: 0; transform: translate(-50%, -50%) scale(0); border: 200px solid #fff; }
                        40% { opacity: 1; transform: translate(-50%, -50%) scale(1); border: 20px solid rgba(139, 92, 246, 0.8); background: rgba(139, 92, 246, 0.2); }
                        100% { opacity: 0; transform: translate(-50%, -50%) scale(8); border: 0px solid rgba(139, 92, 246, 0); background: transparent; }
                    }
                    .implosion-wave {
                        position: fixed; top: 50vh; left: 50vw; width: 200px; height: 200px; border-radius: 50%;
                        z-index: 10005; pointer-events: none; mix-blend-mode: screen;
                        animation: implosion-shockwave 2s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
                    }
                    @keyframes wash-collapse {
                        0% { opacity: 1; background: rgba(0, 0, 0, 1); backdrop-filter: blur(25px); }
                        100% { opacity: 1; background: rgba(0, 0, 0, 1); backdrop-filter: blur(25px); }
                    }
                    .wash-collapse-executing {
                        animation: wash-collapse 15s cubic-bezier(0.5, 0, 0.2, 1) forwards !important;
                    }
                    @keyframes reality-collapse-text {
                        0% { opacity: 0; filter: blur(30px); transform: scale(1.1); letter-spacing: -10px; }
                        30% { opacity: 1; filter: blur(0px); transform: scale(1); letter-spacing: 4px; text-shadow: 0 0 30px #3FD9C0, 0 0 60px #3FD9C0; }
                        100% { opacity: 1; filter: blur(0px); transform: scale(0.95); letter-spacing: 15px; text-shadow: 0 0 30px #3FD9C0, 0 0 60px #3FD9C0; }
                    }
                `;
                document.head.appendChild(riftCloseStyle);
                
                // Add Accretion Disk
                const accretionDisk = document.createElement('div');
                accretionDisk.className = 'legendary-accretion-disk';
                accretionDisk.style.setProperty('--centerX', centerX + 'px');
                accretionDisk.style.setProperty('--centerY', centerY + 'px');
                document.body.appendChild(accretionDisk);
                globalElements.push(accretionDisk);

                // Warning 1: ANOMALY DETECTED
                setTimeout(() => {
                    const anomalyMsg = document.createElement('div');
                    anomalyMsg.style.position = 'fixed';
                    anomalyMsg.style.top = '50vh';
                    anomalyMsg.style.left = '50vw';
                    anomalyMsg.style.transform = 'translate(-50%, -50%)';
                    anomalyMsg.style.color = '#3FD9C0';
                    anomalyMsg.style.fontFamily = '"Arial Black", "Impact", system-ui, sans-serif';
                    anomalyMsg.style.fontSize = '2.5em';
                    anomalyMsg.style.fontWeight = '900';
                    anomalyMsg.style.letterSpacing = '4px';
                    anomalyMsg.style.lineHeight = '1.2';
                    anomalyMsg.style.zIndex = '10001';
                    anomalyMsg.style.textAlign = 'center';
                    anomalyMsg.style.textTransform = 'uppercase';
                    anomalyMsg.style.background = 'rgba(0, 0, 0, 0.85)';
                    anomalyMsg.style.border = '3px solid #3FD9C0';
                    anomalyMsg.style.borderRadius = '16px';
                    anomalyMsg.style.padding = '20px 50px';
                    anomalyMsg.style.boxShadow = '0 0 50px rgba(139, 92, 246, 0.5), inset 0 0 20px rgba(139, 92, 246, 0.3)';
                    anomalyMsg.innerHTML = 'SPATIAL ANOMALY DETECTED<br><span style="font-size: 0.55em; color: #c4b5fd; letter-spacing: 8px;">GRAVITATIONAL COLLAPSE IMMINENT</span>';
                    anomalyMsg.style.animation = 'anomaly-warning 5.5s ease-in-out forwards'; 
                    document.body.appendChild(anomalyMsg);
                    globalElements.push(anomalyMsg);
                }, 0);

                // Violent Screen Shake
                window.riftShakeTimeout = setTimeout(() => {
                    document.body.classList.add('violent-shake-active');
                }, 16000);

                // DISSOLVE THE STRUCTURAL PANELS (Simple Fade)
                setTimeout(() => {
                    const structuralPanels = document.querySelectorAll('.workspace-leaf-content, .view-content, .view-header, .workspace-tab-header-container, .nav-files-container, .workspace-ribbon, .markdown-reading-view, .markdown-source-view');
                    structuralPanels.forEach(p => {
                        p.style.transition = 'background 3s ease-in, box-shadow 3s ease-in, border-color 3s ease-in';
                        p.style.background = 'transparent';
                        p.style.backgroundColor = 'transparent';
                        p.style.boxShadow = 'none';
                        p.style.borderColor = 'transparent';
                        window.suckedOriginals.push(p);
                    });
                }, 6000);

                // MASTERPIECE: THE GREAT ABSORPTION (DISINTEGRATION)
                setTimeout(() => {
                    const suckableElements = document.querySelectorAll('.nav-file-title, .nav-folder-title, .workspace-tab-header, .ribbon-tab, .markdown-preview-section > div > p, .markdown-preview-section > div > h1, .markdown-preview-section > div > h2, .markdown-preview-section > div > h3, .markdown-preview-section > div > h4, .markdown-preview-section > div > ul > li, .markdown-preview-section > div > ol > li, .markdown-rendered p, .markdown-rendered li, .markdown-rendered h1, .markdown-rendered h2, .markdown-rendered h3, .markdown-rendered h4, .callout, .task-list-item, .cm-line, .metadata-property, .clickable-icon, canvas, td, th, .calendar-day, .week-num, .day, .tree-item-self, .tree-item, .search-result-file-match, .search-result-file-title, .tag-pane-tag, .workspace-tab-header-inner, .premium-banner, .vault-text, .vault-subtext, .view-header-title-container, .view-header-breadcrumb, .view-header-title, .status-bar, .workspace-drawer-vault-switcher, .workspace-drawer-name, .nav-header, .workspace-drawer-header');
                    
                    // Deduplicate hierarchical DOM elements to prevent ghost/overlapping clones
                    const elementSet = new Set(suckableElements);
                    const uniqueElements = Array.from(suckableElements).filter(el => {
                        let parent = el.parentElement;
                        while (parent) {
                            if (elementSet.has(parent)) return false; // Parent is already flying, skip child
                            parent = parent.parentElement;
                        }
                        return true;
                    });
                    
                    const elementsArray = uniqueElements.sort(() => 0.5 - Math.random());
                    // PRE-READ ALL RECTS AND STYLES (Zero Layout Thrashing - Insanely Fast)
                    const elementData = elementsArray.map(el => {
                        const rect = el.getBoundingClientRect();
                        
                        // Check if element is completely clipped/hidden by a scrollable parent (like the file explorer)
                        let isClipped = false;
                        let parent = el.parentElement;
                        while (parent && parent !== document.body) {
                            if (parent.classList.contains('nav-files-container') || parent.classList.contains('workspace-leaf-content')) {
                                const parentRect = parent.getBoundingClientRect();
                                if (rect.top >= parentRect.bottom || rect.bottom <= parentRect.top || rect.left >= parentRect.right || rect.right <= parentRect.left) {
                                    isClipped = true;
                                    break;
                                }
                            }
                            parent = parent.parentElement;
                        }
                        
                        // Check if element is physically covered by a floating panel (like Recent Files overlapping File Explorer)
                        let isCovered = false;
                        if (rect.width > 0 && rect.height > 0 && !isClipped) {
                            const elCenterX = rect.left + rect.width / 2;
                            const elCenterY = rect.top + rect.height / 2;
                            // Temporarily hide suckContainer if it exists so it doesn't block the raycast
                            const topElement = document.elementFromPoint(elCenterX, elCenterY);
                            if (topElement && el !== topElement && !el.contains(topElement) && !topElement.contains(el)) {
                                isCovered = true;
                            }
                        }
                        
                        const compStyle = window.getComputedStyle(el);
                        const isInvisible = compStyle.opacity === '0' || compStyle.visibility === 'hidden' || compStyle.display === 'none';
                        
                        return {
                            el,
                            rect,
                            deltaX: centerX - (rect.left + rect.width / 2),
                            deltaY: centerY - (rect.top + rect.height / 2),
                            bg: compStyle.background !== 'rgba(0, 0, 0, 0)' ? compStyle.background : 'var(--background-secondary)',
                            color: compStyle.color,
                            border: compStyle.border,
                            borderRadius: compStyle.borderRadius,
                            valid: rect.width > 0 && rect.height > 0 && !isClipped && !isCovered && !isInvisible
                        };
                    });

                    // Create a container to hold all clones ABOVE all other stacking contexts
                    const suckContainer = document.createElement('div');
                    suckContainer.className = 'legendary-suck-container';
                    suckContainer.style.position = 'fixed';
                    suckContainer.style.top = '0';
                    suckContainer.style.left = '0';
                    suckContainer.style.width = '100vw';
                    suckContainer.style.height = '100vh';
                    suckContainer.style.zIndex = '10005';
                    suckContainer.style.pointerEvents = 'none';
                    document.body.appendChild(suckContainer);
                    globalElements.push(suckContainer);

                    // WRITE PHASE: Clone and Pull literally EVERY element in the UI!
                    elementData.forEach(({el, rect, deltaX, deltaY, bg, color, border, borderRadius, valid}) => {
                        if (!valid) return;
                        
                        // Exponential Gravity Curve: Most elements fall late in the sequence (avalanche)
                        const progress = 1 - Math.pow(Math.random(), 3); // Skewed heavily towards 1.0
                        
                        // Delay from 5s to 18s. The majority of elements wait until the black hole is massive.
                        let delay = 5000 + (progress * 13000);
                        
                        // The earlier they fall, the slower they float (up to 8s). 
                        // The later they fall, the faster they are violently ripped in (down to 1s).
                        let flightDuration = 1000 + ((1 - progress) * 7000);
                        
                        if (el.tagName === 'CANVAS') {
                            delay = 7000; 
                        } else if (el.classList && (el.classList.contains('premium-banner') || el.classList.contains('vault-text') || el.classList.contains('vault-subtext'))) {
                            delay = 20000 + (Math.random() * 1000);
                            flightDuration = 800 + (Math.random() * 400); // Force incredibly fast flight so they are swallowed before 22s
                        }
                        
                        if (el.tagName === 'CANVAS') {
                            // Canvas can't be safely cloned due to WebGL buffers, animate original
                            el.style.transition = `all 12s cubic-bezier(0.5, 0, 0.8, 1)`;
                            el.style.position = 'relative';
                            el.style.zIndex = '10005';
                            setTimeout(() => {
                                const spin = (Math.random() - 0.5) * 360;
                                el.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0) scale(0) rotate(${spin}deg)`;
                                el.style.opacity = '0';
                                el.style.filter = 'blur(10px)';
                            }, delay);
                            window.suckedOriginals.push(el);
                            return;
                        }

                        // Clone to escape stacking contexts!
                        const clone = el.cloneNode(true);
                        clone.style.position = 'absolute';
                        clone.style.left = rect.left + 'px';
                        clone.style.top = rect.top + 'px';
                        clone.style.width = rect.width + 'px';
                        clone.style.height = rect.height + 'px';
                        clone.style.margin = '0';
                        
                        clone.style.background = bg;
                        clone.style.color = color;
                        clone.style.border = border;
                        clone.style.borderRadius = borderRadius;
                        clone.style.boxShadow = 'none'; // Save GPU
                        
                        // Delay the opacity fade so they remain fully visible until they reach the black hole!
                        // SPAGHETTIFY! Skew and stretch them as they fall.
                        clone.style.animation = `spaghettify ${flightDuration}ms cubic-bezier(0.5, 0, 0.8, 1) ${delay}ms forwards`;
                        clone.style.transition = `transform ${flightDuration}ms cubic-bezier(0.5, 0, 0.8, 1), opacity ${flightDuration * 0.15}ms ease-out ${flightDuration * 0.85}ms`;
                        clone.style.willChange = 'transform, opacity';
                        
                        suckContainer.appendChild(clone);
                        
                        // Hide original immediately
                        el.style.opacity = '0';
                        window.suckedOriginals.push(el);
                        
                        // Trigger flight animation
                        setTimeout(() => {
                            requestAnimationFrame(() => {
                                const spin = (Math.random() - 0.5) * 720;
                                clone.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0) scale(0) rotate(${spin}deg)`;
                                clone.style.opacity = '0';
                            });
                        }, delay);
                    });
                }, 500); // 500ms delay to allow sidebars to fully render into the DOM before capturing elements
            } else if (isMothership) {
                // Inject Mothership Defense CSS
                const mothershipStyle = document.createElement('style');
                mothershipStyle.id = 'legendary-mothership-style';
                mothershipStyle.innerHTML = `
                    .premium-shutdown-overlay.defense-success-theme .vault-text { -webkit-text-fill-color: #a5f3fc !important; color: #a5f3fc !important; text-shadow: 0 0 20px rgba(6, 182, 212, 0.8), 0 0 40px rgba(6, 182, 212, 0.6) !important; }
                    .premium-shutdown-overlay.defense-success-theme .vault-subtext { -webkit-text-fill-color: #fff !important; color: #fff !important; }
                    .premium-shutdown-overlay.defense-success-theme .lv-vault-lock { stroke: #cffafe !important; filter: drop-shadow(0 0 12px rgba(6, 182, 212, 0.7)); }
                    .premium-shutdown-overlay.defense-success-theme .lv-hex-inner { stroke: #06b6d4 !important; filter: drop-shadow(0 0 8px rgba(6, 182, 212, 0.4)); }
                    .premium-shutdown-overlay.defense-success-theme .lv-hex-outer { stroke: rgba(103, 232, 249, 0.6) !important; }
                    .premium-shutdown-overlay.defense-success-theme .lv-ring { stroke: rgba(103, 232, 249, 0.5) !important; }
                    .premium-shutdown-overlay.defense-success-theme .vault-easter-egg {
                        box-shadow: 0 0 30px rgba(6, 182, 212, 0.6), inset 0 0 30px rgba(6, 182, 212, 0.6) !important;
                        border-color: rgba(6, 182, 212, 0.8) !important;
                    }
                    
                    @keyframes defense-success-glow {
                        0% { opacity: 0; box-shadow: inset 0 0 0px rgba(6, 182, 212, 0); }
                        20% { opacity: 1; box-shadow: inset 0 0 150px rgba(6, 182, 212, 0.4), inset 0 0 30px rgba(6, 182, 212, 0.8); }
                        100% { opacity: 0; box-shadow: inset 0 0 0px rgba(6, 182, 212, 0); }
                    }
                    .premium-shutdown-overlay.defense-success-theme.shutdown-executing::after {
                        animation: defense-success-glow 3s ease-in-out 3.7s forwards !important;
                    }
                    
                    @keyframes cinematic-darkness {
                        0% { opacity: 0; }
                        10% { opacity: 0.8; }
                        100% { opacity: 0.95; }
                    }
                    .legendary-brainwash-wash {
                        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
                        background: #000;
                        z-index: 9995; pointer-events: none;
                        animation: cinematic-darkness 5s ease-out forwards;
                    }
                    @keyframes emp-ring-expand {
                        0% { transform: scale(0); opacity: 1; border: 50px solid #fff; }
                        50% { opacity: 1; border: 20px solid #a5f3fc; background: rgba(255, 255, 255, 0.5); }
                        100% { transform: scale(50); opacity: 0; border: 0px solid #fff; background: transparent; }
                    }
                    .legendary-emp-ring {
                        position: fixed; top: calc(10vh + 80px); left: calc(var(--ufo-center, 50vw) - 50px);
                        width: 100px; height: 100px; border-radius: 50%;
                        z-index: 10002; pointer-events: none;
                        animation: emp-ring-expand 1.5s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
                    }
                    @keyframes missile-impact {
                        0% { transform: scale(0.5); opacity: 1; filter: brightness(2); }
                        100% { transform: scale(3); opacity: 0; filter: brightness(1); }
                    }
                    @keyframes missile-launch {
                        0% { transform: translate(var(--start-x), var(--start-y)) rotate(var(--missile-angle)) scale(0.5); opacity: 0; }
                        10% { transform: translate(var(--start-x), var(--start-y)) rotate(var(--missile-angle)) scale(0.8); opacity: 1; }
                        95% { transform: translate(var(--end-x), var(--end-y)) rotate(var(--missile-angle)) scale(1.5); opacity: 1; }
                        100% { transform: translate(var(--end-x), var(--end-y)) rotate(var(--missile-angle)) scale(1.5); opacity: 0; }
                    }
                    .legendary-missile {
                        position: fixed; top: 0; left: 0; width: 15px; height: 60px;
                        background: linear-gradient(to top, rgba(255,255,255,0), #fff, #a5f3fc);
                        box-shadow: 0 0 10px #a5f3fc, 0 0 20px #06b6d4;
                        border-radius: 3px; z-index: 9997; pointer-events: none;
                        --missile-angle: 0deg; --start-x: 0px; --start-y: 0px; --mid-x: 0px; --mid-y: 0px; --end-x: 0px; --end-y: 0px;
                    }
                    @keyframes shield-deploy {
                        0% { transform: scale(0); opacity: 0; }
                        50% { transform: scale(1.2); opacity: 1; box-shadow: 0 0 100px #06b6d4, inset 0 0 100px #06b6d4; }
                        100% { transform: scale(1); opacity: 0.8; box-shadow: 0 0 50px #06b6d4, inset 0 0 50px #06b6d4; }
                    }
                    @keyframes shield-hold {
                        0%, 100% { transform: scale(1); opacity: 0.8; box-shadow: 0 0 50px #06b6d4, inset 0 0 50px #06b6d4; }
                        50% { transform: scale(1.05); opacity: 1; box-shadow: 0 0 80px #06b6d4, inset 0 0 80px #a5f3fc; }
                    }
                    .legendary-ufo-shield {
                        position: fixed; width: 340px; height: 340px; border-radius: 50%;
                        border: 6px solid rgba(165, 243, 252, 0.8);
                        background: radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, rgba(6, 182, 212, 0.05) 70%, transparent 100%);
                        z-index: 10000; pointer-events: none;
                        animation: shield-deploy 0.5s cubic-bezier(0.1, 0.8, 0.3, 1) forwards, shield-hold 2s ease-in-out 0.5s infinite;
                    }
                    @keyframes orbital-strike {
                        0% { transform: scaleX(0); opacity: 0; }
                        5% { transform: scaleX(1); opacity: 1; filter: drop-shadow(0 0 50px #ef4444); }
                        80% { transform: scaleX(2); opacity: 1; filter: drop-shadow(0 0 200px #ef4444); }
                        100% { transform: scaleX(0); opacity: 0; }
                    }
                    .legendary-orbital-strike {
                        position: fixed; top: 0; width: 250px; height: 100vh;
                        background: linear-gradient(to right, rgba(239,68,68,0) 0%, rgba(239,68,68,0.8) 20%, rgba(255,255,255,1) 50%, rgba(239,68,68,0.8) 80%, rgba(239,68,68,0) 100%);
                        z-index: 9998; pointer-events: none;
                        animation: orbital-strike 2s ease-in forwards;
                    }
                    @keyframes mothership-explode {
                        0% { transform: translateX(-50%) translateY(0px) scale(1); filter: brightness(1); opacity: 1; }
                        10% { transform: translateX(-50%) translateY(0px) scale(1.2); filter: brightness(3) drop-shadow(0 0 100px #ef4444); opacity: 1; }
                        20% { transform: translateX(-50%) translateY(0px) scale(0.1); filter: brightness(5) drop-shadow(0 0 200px #fff); opacity: 1; }
                        100% { transform: translateX(-50%) translateY(0px) scale(0); opacity: 0; }
                    }
                    .mothership-exploding {
                        animation: mothership-explode 2s ease-out forwards !important;
                    }
                    @keyframes defense-text-appear {
                        0% { opacity: 0; filter: blur(20px); transform: translateX(-50%) scale(1.05); }
                        15% { opacity: 1; filter: blur(0px); transform: translateX(-50%) scale(1); text-shadow: 0 0 20px #ef4444, 0 0 40px #ef4444; }
                        50% { opacity: 0.7; transform: translateX(-50%) scale(0.98); text-shadow: 0 0 10px #ef4444, 0 0 20px #ef4444; }
                        85% { opacity: 1; filter: blur(0px); transform: translateX(-50%) scale(1.02); text-shadow: 0 0 30px #ef4444, 0 0 60px #ef4444; }
                        100% { opacity: 0; filter: blur(20px); transform: translateX(-50%) scale(1.05); }
                    }
                `;
                document.body.appendChild(mothershipStyle);
                globalElements.push(mothershipStyle);

                // Find actual UFO center X based on the NOTE CLOSED element!
                const targetRect = (typeof triggerEl !== 'undefined' && triggerEl && document.body.contains(triggerEl)) 
                    ? triggerEl.getBoundingClientRect() 
                    : { left: window.innerWidth / 2, width: 0 };
                let ufoCenterX = targetRect.left + targetRect.width / 2;
                
                // Inject the CSS Variable so the static CSS payload can use it!
                document.documentElement.style.setProperty('--ufo-center', `${ufoCenterX}px`);

                // 1. EMP Flash at 3.0s
                setTimeout(() => {
                    const emp = document.createElement('div');
                    emp.className = 'legendary-emp-ring';
                    document.body.appendChild(emp);
                    globalElements.push(emp);
                }, 3000);

                // 2. Cinematic Darkness at 3.2s
                setTimeout(() => {
                    const brainwash = document.createElement('div');
                    brainwash.className = 'legendary-brainwash-wash';
                    document.body.appendChild(brainwash);
                    globalElements.push(brainwash);
                }, 3200);

                // 3. Airspace Breach Detected at 10s
                setTimeout(() => {
                    const defenseMsg = document.createElement('div');
                    defenseMsg.style.position = 'fixed';
                    defenseMsg.style.bottom = '10vh';
                    defenseMsg.style.left = '50vw';
                    defenseMsg.style.transform = 'translateX(-50%)';
                    defenseMsg.style.color = '#ef4444';
                    defenseMsg.style.fontFamily = '"Arial Black", "Impact", system-ui, sans-serif';
                    defenseMsg.style.fontSize = '4.5em';
                    defenseMsg.style.fontWeight = '900';
                    defenseMsg.style.letterSpacing = '4px';
                    defenseMsg.style.lineHeight = '1.2';
                    defenseMsg.style.zIndex = '10000';
                    defenseMsg.style.textAlign = 'center';
                    defenseMsg.style.textTransform = 'uppercase';
                    defenseMsg.style.background = 'rgba(0, 0, 0, 0.85)';
                    defenseMsg.style.border = '3px solid #ef4444';
                    defenseMsg.style.borderRadius = '16px';
                    defenseMsg.style.padding = '20px 50px';
                    defenseMsg.style.boxShadow = '0 0 50px rgba(239, 68, 68, 0.5), inset 0 0 20px rgba(239, 68, 68, 0.3)';
                    defenseMsg.innerHTML = 'AIRSPACE BREACH DETECTED<br><span style="font-size: 0.55em; color: #f97316; letter-spacing: 8px;">INITIATING DEFENSE PROTOCOLS</span>';
                    defenseMsg.style.animation = 'defense-text-appear 6s ease-in-out forwards'; 
                    document.body.appendChild(defenseMsg);
                    globalElements.push(defenseMsg);
                }, 10000);

                // 3. Keep updating UFO Center at 13s for missiles
                setTimeout(() => {
                    const mothership = document.querySelector('.legendary-mothership');
                    if (mothership) {
                        const rect = mothership.getBoundingClientRect();
                        ufoCenterX = rect.left + rect.width / 2;
                    }
                }, 15000);

                // 4. Missile Swarm at 14.5s
                setTimeout(() => {
                    for (let i = 0; i < 15; i++) {
                        setTimeout(() => {
                            const missile = document.createElement('div');
                            missile.className = 'legendary-missile';
                            
                            let startX, startY;
                            const edge = Math.random();
                            if (edge < 0.33) { startX = -100; startY = window.innerHeight * Math.random(); } // Left
                            else if (edge < 0.66) { startX = window.innerWidth + 100; startY = window.innerHeight * Math.random(); } // Right
                            else { startX = Math.random() * window.innerWidth; startY = window.innerHeight + 100; } // Bottom
                            
                            const targetX = ufoCenterX + (Math.random() - 0.5) * 50;
                            const targetY = (window.innerHeight * 0.1) + 130 + (Math.random() - 0.5) * 50; // 10vh + 130px (Shield center)
                            
                            const dx = targetX - startX;
                            const dy = targetY - startY; 
                            const distance = Math.sqrt(dx*dx + dy*dy);
                            const stopDistance = distance - 170; // Stop exactly at the shield radius (170px)
                            
                            const endX = startX + (dx / distance) * stopDistance;
                            const endY = startY + (dy / distance) * stopDistance;
                            
                            // Calculate angle to converge on the UFO
                            let angle = Math.atan2(dx, -dy) * (180 / Math.PI);
                            
                            missile.style.setProperty('--start-x', `${startX}px`);
                            missile.style.setProperty('--start-y', `${startY}px`);
                            missile.style.setProperty('--end-x', `${endX}px`);
                            missile.style.setProperty('--end-y', `${endY}px`);
                            missile.style.setProperty('--missile-angle', `${angle}deg`);
                            
                            const duration = 0.6 + Math.random() * 0.4;
                            missile.style.animation = `missile-launch ${duration}s ease-in forwards`;
                            document.body.appendChild(missile);
                            globalElements.push(missile);
                            
                            // Shield impact flash when missile hits
                            setTimeout(() => {
                                const shield = document.querySelector('.legendary-ufo-shield');
                                if (shield) {
                                    shield.style.boxShadow = '0 0 150px #fff, inset 0 0 150px #fff';
                                    shield.style.borderColor = '#fff';
                                    setTimeout(() => {
                                        shield.style.boxShadow = '';
                                        shield.style.borderColor = '';
                                    }, 50);
                                }
                                
                                const impact = document.createElement('div');
                                impact.style.position = 'fixed';
                                impact.style.left = `${endX - 15}px`;
                                impact.style.top = `${endY - 15}px`;
                                impact.style.width = '30px';
                                impact.style.height = '30px';
                                impact.style.background = '#a5f3fc';
                                impact.style.borderRadius = '50%';
                                impact.style.boxShadow = '0 0 20px #fff, inset 0 0 20px #fff';
                                impact.style.zIndex = '10001';
                                impact.style.pointerEvents = 'none';
                                impact.style.animation = 'missile-impact 0.3s ease-out forwards';
                                document.body.appendChild(impact);
                                globalElements.push(impact);
                            }, duration * 1000);
                        }, i * 80);
                    }
                }, 16500);

                // 4.2 Shield Activation at 15.2s
                setTimeout(() => {
                    const shield = document.createElement('div');
                    shield.className = 'legendary-ufo-shield';
                    shield.style.top = 'calc(10vh - 40px)';
                    shield.style.left = `calc(var(--ufo-center) - 170px)`;
                    document.body.appendChild(shield);
                    globalElements.push(shield);
                }, 17200);

                // 4.4 Shield Detected Warning at 21.5s (6s after missiles hit)
                setTimeout(() => {
                    const shieldMsg = document.createElement('div');
                    shieldMsg.style.position = 'fixed';
                    shieldMsg.style.bottom = '10vh';
                    shieldMsg.style.left = '50vw';
                    shieldMsg.style.transform = 'translateX(-50%)';
                    shieldMsg.style.color = '#ef4444';
                    shieldMsg.style.fontFamily = '"Arial Black", "Impact", system-ui, sans-serif';
                    shieldMsg.style.fontSize = '4.5em';
                    shieldMsg.style.fontWeight = '900';
                    shieldMsg.style.letterSpacing = '4px';
                    shieldMsg.style.lineHeight = '1.2';
                    shieldMsg.style.zIndex = '10001';
                    shieldMsg.style.textAlign = 'center';
                    shieldMsg.style.textTransform = 'uppercase';
                    shieldMsg.style.background = 'rgba(0, 0, 0, 0.85)';
                    shieldMsg.style.border = '3px solid #ef4444';
                    shieldMsg.style.borderRadius = '16px';
                    shieldMsg.style.padding = '20px 50px';
                    shieldMsg.style.boxShadow = '0 0 50px rgba(239, 68, 68, 0.5), inset 0 0 20px rgba(239, 68, 68, 0.3)';
                    shieldMsg.innerHTML = 'EMERGENCY MEASURE<br><span style="font-size: 0.55em; color: #f97316; letter-spacing: 8px;">AUTHORIZING ORBITAL CANNON</span>';
                    shieldMsg.style.animation = 'defense-text-appear 5s ease-in-out forwards'; 
                    document.body.appendChild(shieldMsg);
                    globalElements.push(shieldMsg);
                }, 23500);

                // 4.5 Orbital Strike at 26.5s
                setTimeout(() => {
                    const orbital = document.createElement('div');
                    orbital.className = 'legendary-orbital-strike';
                    orbital.style.left = `calc(var(--ufo-center) - 125px)`;
                    document.body.appendChild(orbital);
                    globalElements.push(orbital);
                    
                    // Shield Resists Orbital Cannon!
                    const shield = document.querySelector('.legendary-ufo-shield');
                    if (shield) {
                        shield.style.animation = 'none';
                        shield.style.transition = 'all 0.1s';
                        shield.style.boxShadow = '0 0 300px #ef4444, inset 0 0 150px #ef4444';
                        shield.style.borderColor = '#fff';
                        shield.style.background = 'rgba(239, 68, 68, 0.4)';
                        
                        let shakeInt = setInterval(() => {
                            shield.style.transform = `translate(${(Math.random()-0.5)*20}px, ${(Math.random()-0.5)*20}px)`;
                        }, 50);
                        
                        // Shatter after 1s of resistance
                        setTimeout(() => {
                            clearInterval(shakeInt);
                            shield.style.transition = 'all 0.2s';
                            shield.style.transform = 'scale(2)';
                            shield.style.opacity = '0';
                        }, 1000);
                    }
                }, 28500);

                // 5. Explosion at 27.6s (0.1s after shield drops)
                setTimeout(() => {
                    // Remove brainwash effect gently
                    const brainwash = document.querySelector('.legendary-brainwash-wash');
                    if (brainwash) {
                        brainwash.style.transition = 'opacity 0.2s';
                        brainwash.style.opacity = '0';
                    }

                    // Explode Mothership
                    const mothership = document.querySelector('.legendary-mothership');
                    if (mothership) mothership.classList.add('mothership-exploding');

                    // Cleanup orbital
                    const orbital = document.querySelector('.legendary-orbital-strike');
                    if (orbital) {
                        orbital.style.transition = 'opacity 0.5s';
                        orbital.style.opacity = '0';
                    }

                    const beam = document.querySelector('.legendary-abduction-beam');
                    if (beam) {
                        beam.style.transition = 'opacity 0.2s';
                        beam.style.opacity = '0';
                    }
                    
                    // Flash entire screen Red/Orange
                    const blast = document.createElement('div');
                    blast.style.position = 'fixed';
                    blast.style.top = '0';
                    blast.style.left = '0';
                    blast.style.width = '100vw';
                    blast.style.height = '100vh';
                    blast.style.background = '#ef4444';
                    blast.style.zIndex = '10001';
                    blast.style.opacity = '0';
                    blast.style.transition = 'opacity 0.2s';
                    blast.style.pointerEvents = 'none';
                    document.body.appendChild(blast);
                    globalElements.push(blast);
                    
                    setTimeout(() => blast.style.opacity = '0.9', 50);
                    setTimeout(() => blast.style.opacity = '0', 400);

                    // Update Title Override to Success!
                    const titleOverride = document.querySelector('.vault-title-override');
                    if (titleOverride) {
                        titleOverride.setAttribute('data-title', 'TARGET NEUTRALIZED');
                        titleOverride.setAttribute('data-sub', 'AIRSPACE SECURED');
                        titleOverride.style.color = '#ef4444';
                    }
                }, 29600);

            } else if (isGuardian) {
                if (!window.suckedOriginals) window.suckedOriginals = [];
                
                // Inject Matrix specific keyframes
                const guardianStyle = document.createElement('style');
                guardianStyle.id = 'legendary-guardian-style';
                guardianStyle.innerHTML = `
                    @keyframes mid-air-disintegrate {
                        0% { filter: blur(0px) brightness(100%); opacity: 1; box-shadow: inset 0 0 15px rgba(34, 197, 94, 0.3); }
                        100% { filter: blur(20px) brightness(1000%); opacity: 0 !important; box-shadow: inset 0 0 100px rgba(34, 197, 94, 1); }
                    }
                    @keyframes virus-fight {
                        0%, 40%, 80% { background: rgba(0, 20, 0, 0.9); color: #22c55e; border-color: rgba(34, 197, 94, 0.5); box-shadow: inset 0 0 15px rgba(34, 197, 94, 0.3); }
                        20%, 60%, 100% { background: rgba(40, 30, 0, 0.9); color: #fbbf24; border-color: rgba(251, 191, 36, 0.5); box-shadow: inset 0 0 15px rgba(251, 191, 36, 0.3); }
                    }
                    @keyframes defense-text-appear {
                        0% { opacity: 0; filter: blur(10px); transform: translate(-50%, -50%) scale(1.1); }
                        5% { opacity: 1; filter: blur(0px); transform: translate(-50%, -50%) scale(1); text-shadow: 0 0 20px #fbbf24, 0 0 40px #fbbf24; }
                        20%, 60% { opacity: 0.7; transform: translate(-50%, -50%) scale(0.98); text-shadow: 0 0 10px #fbbf24, 0 0 20px #fbbf24; }
                        40%, 80% { opacity: 1; transform: translate(-50%, -50%) scale(1.02); text-shadow: 0 0 30px #fbbf24, 0 0 60px #fbbf24; }
                        95%, 100% { opacity: 1; filter: blur(0px); transform: translate(-50%, -50%) scale(1); text-shadow: 0 0 30px #fbbf24, 0 0 60px #fbbf24; }
                    }
                `;
                document.body.appendChild(guardianStyle);
                globalElements.push(guardianStyle);
                // 0. Calculate exact coordinates using the trigger element (separator) as the anchor!
                let targetRect = { top: window.innerHeight / 2, height: 0, left: window.innerWidth / 2, width: 0 };
                
                if (typeof triggerEl !== 'undefined' && triggerEl && document.body.contains(triggerEl)) {
                    targetRect = triggerEl.getBoundingClientRect();
                } else {
                    const fallback = document.querySelector('.premium-banner') || document.querySelector('.workspace-leaf.mod-active .view-header') || document.querySelector('.view-header');
                    if (fallback) targetRect = fallback.getBoundingClientRect();
                }
                
                const activeLeaf = document.querySelector('.workspace-leaf.mod-active') || document.body;
                const leafRect = activeLeaf.getBoundingClientRect();
                const startX = leafRect.left + leafRect.width / 2;
                
                // Target the sky of the GIF precisely by shifting 180 pixels UP from the trigger separator!
                const startY = targetRect.top - 180;
                
                document.documentElement.style.setProperty('--guardian-start-y', startY + 'px');
                document.documentElement.style.setProperty('--guardian-start-x', startX + 'px');
                
                // 1. Guardian blinks in and corrupts the trigger area with an aura of dead pixels
                setTimeout(() => {
                    const centerX = startX;
                    const centerY = startY;
                    for (let i = 0; i < 60; i++) {
                        // Stagger the generation so it spreads slowly over 3.6 seconds!
                        setTimeout(() => {
                            const pixel = document.createElement('div');
                            pixel.className = 'legendary-banner-pixel';
                            pixel.style.position = 'absolute';
                            
                            // Generate random coordinates within a circular aura (radius up to 150px)
                            const angle = Math.random() * Math.PI * 2;
                            const radius = Math.random() * 150;
                            
                            // Offset by half the max pixel size (around 15px) to keep it centered
                            pixel.style.left = (centerX + Math.cos(angle) * radius - 15) + 'px';
                            pixel.style.top = (centerY + Math.sin(angle) * radius - 15) + 'px';
                            const size = 5 + Math.random() * 25;
                            pixel.style.width = size + 'px';
                            pixel.style.height = size + 'px';
                            pixel.style.background = Math.random() < 0.5 ? '#000' : '#22c55e';
                            if (pixel.style.background === 'rgb(0, 0, 0)') {
                                pixel.style.border = '1px solid #22c55e';
                            }
                            pixel.style.zIndex = '10006';
                            pixel.style.opacity = '0';
                            pixel.style.transition = 'opacity 0.6s ease-in';
                            document.body.appendChild(pixel);
                            globalElements.push(pixel);
                            
                            // Fade in shortly after DOM insertion
                            requestAnimationFrame(() => {
                                setTimeout(() => { pixel.style.opacity = '1'; }, 50);
                            });
                            
                            window.suckedOriginals.push(pixel);
                        }, i * 60);
                    }
                }, 1000); // Start contamination early at 1s!
                
                // Clear the local banner pixels as the soft wave hits
                setTimeout(() => {
                    document.querySelectorAll('.legendary-banner-pixel').forEach(p => {
                        p.style.transition = 'opacity 0.6s ease-out';
                        p.style.opacity = '0';
                        setTimeout(() => p.remove(), 600);
                    });
                }, 5100);
                
                // Detonate the expanding energy shockwave from the crystal's location!
                setTimeout(() => {
                    const wave = document.createElement('div');
                    wave.className = 'legendary-energy-wave';
                    document.body.appendChild(wave);
                    globalElements.push(wave);
                    setTimeout(() => wave.remove(), 3000);
                }, 5250);
                
                // 2. Shortly after the banner glitches, corrupt the ENTIRE vault (Matrix Cascade)
                setTimeout(() => {
                    const suckableElements = document.querySelectorAll('.nav-file-title, .nav-folder-title, .workspace-tab-header, .ribbon-tab, .markdown-preview-section > div > p, .markdown-preview-section > div > h1, .markdown-preview-section > div > h2, .markdown-preview-section > div > h3, .markdown-preview-section > div > h4, .markdown-preview-section > div > ul > li, .markdown-preview-section > div > ol > li, .cm-line, .metadata-property, .clickable-icon, td, th, .calendar-day, .week-num, .day, .tree-item-self, .workspace-tab-header-inner, .view-header-title-container, .view-header-breadcrumb, .view-header-title, .status-bar, .workspace-drawer-vault-switcher, .workspace-drawer-name, .nav-header, .workspace-drawer-header');
                    
                    const elementSet = new Set(suckableElements);
                    const uniqueElements = Array.from(suckableElements).filter(el => {
                        let parent = el.parentElement;
                        while (parent) {
                            if (elementSet.has(parent)) return false;
                            parent = parent.parentElement;
                        }
                        return true;
                    });
                    
                    const matrixContainer = document.createElement('div');
                    matrixContainer.className = 'legendary-suck-container';
                    matrixContainer.style.position = 'fixed';
                    matrixContainer.style.top = '0';
                    matrixContainer.style.left = '0';
                    matrixContainer.style.width = '100vw';
                    matrixContainer.style.height = '100vh';
                    matrixContainer.style.zIndex = '10005';
                    matrixContainer.style.pointerEvents = 'none';
                    document.body.appendChild(matrixContainer);
                    globalElements.push(matrixContainer);
                    
                    const elementData = uniqueElements.map(el => {
                        const rect = el.getBoundingClientRect();
                        let isClipped = false;
                        let parent = el.parentElement;
                        while (parent && parent !== document.body) {
                            if (parent.classList.contains('nav-files-container') || parent.classList.contains('workspace-leaf-content')) {
                                const parentRect = parent.getBoundingClientRect();
                                if (rect.top >= parentRect.bottom || rect.bottom <= parentRect.top || rect.left >= parentRect.right || rect.right <= parentRect.left) {
                                    isClipped = true; break;
                                }
                            }
                            parent = parent.parentElement;
                        }
                        const compStyle = window.getComputedStyle(el);
                        return { 
                            el, rect, 
                            bg: compStyle.background !== 'rgba(0, 0, 0, 0)' ? compStyle.background : 'var(--background-secondary)',
                            color: compStyle.color,
                            border: compStyle.border,
                            borderRadius: compStyle.borderRadius,
                            valid: rect.width > 0 && rect.height > 0 && !isClipped 
                        };
                    });
                    
                    // Smooth, Ethereal Short Circuit Engine
                    const electricityInterval = setInterval(() => {
                        // 1. Spawning ethereal electrical arcs
                        if (Math.random() < 0.3) {
                            const spark = document.createElement('div');
                            spark.style.position = 'absolute';
                            spark.style.left = (Math.random() * 100) + 'vw';
                            spark.style.top = (Math.random() * 100) + 'vh';
                            const isHorizontal = Math.random() < 0.5;
                            spark.style.width = isHorizontal ? (30 + Math.random() * 100) + 'px' : (1 + Math.random() * 2) + 'px';
                            spark.style.height = isHorizontal ? (1 + Math.random() * 2) + 'px' : (30 + Math.random() * 100) + 'px';
                            spark.style.background = Math.random() < 0.5 ? '#fff' : '#22c55e';
                            spark.style.boxShadow = '0 0 10px ' + spark.style.background + ', 0 0 20px ' + spark.style.background;
                            spark.style.transform = `rotate(${(Math.random() - 0.5) * 20}deg)`;
                            spark.style.zIndex = '10006';
                            spark.style.pointerEvents = 'none';
                            spark.style.mixBlendMode = 'screen';
                            
                            spark.style.transition = 'opacity 0.6s ease-in-out';
                            spark.style.opacity = '0';
                            
                            matrixContainer.appendChild(spark);
                            
                            // Smooth flicker
                            setTimeout(() => spark.style.opacity = '0.5', 50);
                            setTimeout(() => spark.style.opacity = '0', 500);
                            setTimeout(() => spark.remove(), 1200);
                        }
                        
                        // 2. Spawning smooth corrupted pixel blocks
                        for (let i = 0; i < 2; i++) {
                            if (Math.random() < 0.4) {
                                const pixel = document.createElement('div');
                                pixel.style.position = 'absolute';
                                pixel.style.left = (Math.random() * 100) + 'vw';
                                pixel.style.top = (Math.random() * 100) + 'vh';
                                const size = 5 + Math.random() * 25;
                                pixel.style.width = size + 'px';
                                pixel.style.height = size + 'px';
                                pixel.style.background = Math.random() < 0.3 ? '#fff' : (Math.random() < 0.5 ? '#22c55e' : '#000');
                                if (pixel.style.background === 'rgb(0, 0, 0)') {
                                    pixel.style.border = '1px solid #22c55e';
                                }
                                pixel.style.zIndex = '10006';
                                pixel.style.pointerEvents = 'none';
                                
                                pixel.style.transition = 'opacity 0.8s ease-in-out';
                                pixel.style.opacity = '0';
                                
                                matrixContainer.appendChild(pixel);
                                
                                // Smooth fade
                                setTimeout(() => pixel.style.opacity = '0.7', 50);
                                setTimeout(() => pixel.style.opacity = '0', 700);
                                setTimeout(() => pixel.remove(), 1600);
                            }
                        }
                    }, 150); // Runs much slower (every 150ms)
                    
                    // Stop the electrical arcing when the sequence is over
                    setTimeout(() => clearInterval(electricityInterval), 11500);
                    
                    elementData.forEach((dataItem, index) => {
                        const {el, rect, bg, color, border, borderRadius, valid} = dataItem;
                        if (!valid) return;
                        
                        const clone = el.cloneNode(true);
                        clone.style.position = 'absolute';
                        clone.style.left = rect.left + 'px';
                        clone.style.top = rect.top + 'px';
                        clone.style.width = rect.width + 'px';
                        clone.style.height = rect.height + 'px';
                        clone.style.margin = '0';
                        
                        // Save reference to clone for Defense Protocol
                        dataItem.clone = clone;
                        
                        // Initial state matches the real UI exactly
                        clone.style.background = bg;
                        clone.style.color = color;
                        clone.style.border = border;
                        clone.style.borderRadius = borderRadius;
                        clone.style.boxShadow = 'none';
                        
                        matrixContainer.appendChild(clone);
                        el.style.opacity = '0';
                        window.suckedOriginals.push(el);
                        
                        // Purely random failing over 18 seconds!
                        const corruptionDelay = Math.random() * 18000;
                        
                        // Completely random defense! No wave effect.
                        const defenseDelay = 10000 + (Math.random() * 10000);
                        
                        dataItem.corruptionTimeout = setTimeout(() => {
                            // 1. Instantly corrupt the element
                            clone.style.transition = 'background 0.3s, color 0.3s, border 0.3s, box-shadow 0.3s, text-shadow 0.3s, transform 4.5s cubic-bezier(0.4, 0, 1, 1) 0.3s, opacity 3s ease-out 2s';
                            clone.style.background = 'rgba(0, 20, 0, 0.9)';
                            clone.style.color = '#22c55e'; // Matrix green!
                            clone.style.border = '1px solid rgba(34, 197, 94, 0.5)';
                            clone.style.boxShadow = 'inset 0 0 15px rgba(34, 197, 94, 0.3)';
                            clone.style.textShadow = '0 0 8px #22c55e';
                            
                            // 2. Detach and plummet
                            clone.style.transform = `translateY(${window.innerHeight + 300}px) skewX(${(Math.random() - 0.5) * 20}deg)`;
                            clone.style.opacity = '0';
                            
                            // 3. Mid-air disintegration! (40% chance)
                            if (Math.random() < 0.4) {
                                const disintegrateDelay = 800 + Math.random() * 1700;
                                clone.disintegrateTimeout = setTimeout(() => {
                                    clone.style.animation = 'mid-air-disintegrate 0.3s ease-in forwards';
                                }, disintegrateDelay);
                            }
                        }, corruptionDelay);
                        
                        // INDIVIDUAL DEFENSE PROTOCOL (RECONSTRUCTION!)
                        setTimeout(() => {
                            clearTimeout(dataItem.corruptionTimeout);
                            clearTimeout(clone.disintegrateTimeout);
                            
                            // 1. Dissolve the falling/corrupted clone mid-air!
                            clone.style.transition = 'opacity 0.5s, filter 0.5s';
                            clone.style.opacity = '0';
                            clone.style.filter = 'blur(10px)';
                            
                            // 2. Reconstruct the element holographically in its original position!
                            const reconstructClone = el.cloneNode(true);
                            reconstructClone.style.position = 'absolute';
                            reconstructClone.style.left = rect.left + 'px';
                            reconstructClone.style.top = rect.top + 'px';
                            reconstructClone.style.width = rect.width + 'px';
                            reconstructClone.style.height = rect.height + 'px';
                            reconstructClone.style.margin = '0';
                            
                            // It starts as solid gold
                            reconstructClone.style.background = 'rgba(40, 30, 0, 0.9)';
                            reconstructClone.style.color = '#fbbf24';
                            reconstructClone.style.border = '1px solid rgba(251, 191, 36, 0.5)';
                            reconstructClone.style.boxShadow = 'inset 0 0 15px rgba(251, 191, 36, 0.3)';
                            reconstructClone.style.opacity = '0';
                            reconstructClone.style.filter = 'brightness(500%) blur(10px)';
                            reconstructClone.style.transition = 'background 0.2s, color 0.2s, border 0.2s, box-shadow 0.2s, opacity 0.5s, filter 1s ease-out';
                            
                            matrixContainer.appendChild(reconstructClone);
                            
                            // Fade in glowing and begin the fight!
                            setTimeout(() => {
                                reconstructClone.style.opacity = '1';
                                reconstructClone.style.filter = 'brightness(100%) blur(0px)';
                                
                                const fightDuration = 2000 + Math.random() * 2500;
                                const startTime = Date.now();
                                
                                const fightInterval = setInterval(() => {
                                    const progress = (Date.now() - startTime) / fightDuration;
                                    const vaultWinChance = 0.2 + (progress * 0.8); // Progressively turns golden!
                                    
                                    if (Math.random() < vaultWinChance) {
                                        // Gold (Vault winning)
                                        reconstructClone.style.background = 'rgba(40, 30, 0, 0.9)';
                                        reconstructClone.style.color = '#fbbf24';
                                        reconstructClone.style.border = '1px solid rgba(251, 191, 36, 0.5)';
                                        reconstructClone.style.boxShadow = 'inset 0 0 15px rgba(251, 191, 36, 0.3)';
                                    } else {
                                        // Green (Virus fighting back)
                                        reconstructClone.style.background = 'rgba(0, 20, 0, 0.9)';
                                        reconstructClone.style.color = '#22c55e';
                                        reconstructClone.style.border = '1px solid rgba(34, 197, 94, 0.5)';
                                        reconstructClone.style.boxShadow = 'inset 0 0 15px rgba(34, 197, 94, 0.3)';
                                    }
                                }, 200 + Math.random() * 400); // Random flicker
                                
                                // End fight, lock to gold, then fade to UI
                                setTimeout(() => {
                                    clearInterval(fightInterval);
                                    reconstructClone.style.transition = 'background 0.5s, color 0.5s, border 0.5s, box-shadow 0.5s, opacity 0.5s, filter 1s ease-out';
                                    
                                    reconstructClone.style.background = 'rgba(40, 30, 0, 0.9)';
                                    reconstructClone.style.color = '#fbbf24';
                                    reconstructClone.style.border = '1px solid rgba(251, 191, 36, 0.5)';
                                    reconstructClone.style.boxShadow = 'inset 0 0 15px rgba(251, 191, 36, 0.3)';
                                    
                                    setTimeout(() => {
                                        reconstructClone.style.background = bg;
                                        reconstructClone.style.color = color;
                                        reconstructClone.style.border = border;
                                        reconstructClone.style.boxShadow = 'none';
                                        // The clone safely stays right here, keeping the visual perfectly intact!
                                    }, 1000);
                                }, fightDuration);
                            }, 500); // 0.5s delay before reconstruction appears
                        }, defenseDelay);
                    });
                    
                    // ==========================================
                    // GLOBAL DEFENSE INITIATION ALARM
                    // ==========================================
                    setTimeout(() => {
                        // 1. Flash golden defense message
                        const defenseMsg = document.createElement('div');
                        defenseMsg.innerHTML = 'DEFENSE PROTOCOLE ACTIVATED';
                        defenseMsg.style.position = 'fixed';
                        defenseMsg.style.top = '50vh';
                        defenseMsg.style.left = '50vw';
                        defenseMsg.style.transform = 'translate(-50%, -50%)';
                        defenseMsg.style.color = '#fbbf24'; // Golden amber
                        defenseMsg.style.fontFamily = 'monospace';
                        defenseMsg.style.fontSize = '3em';
                        defenseMsg.style.fontWeight = 'bold';
                        defenseMsg.style.textAlign = 'center';
                        defenseMsg.style.textShadow = '0 0 20px #fbbf24, 0 0 40px #fbbf24';
                        defenseMsg.style.zIndex = '10008';
                        defenseMsg.style.pointerEvents = 'none';
                        defenseMsg.style.animation = 'defense-text-appear 21.5s forwards';
                        document.body.appendChild(defenseMsg);
                        globalElements.push(defenseMsg);
                        
                        // 2. Erase the corrupting electricity and glitch texts slowly
                        const wash = document.querySelector('.legendary-glitch-wash');
                        if (wash) {
                            wash.style.transition = 'background 8s ease-in-out';
                            wash.style.background = 'rgba(0, 0, 0, 0.95)'; // Turn background fully black
                            
                            // Golden energy wave emitting from the text!
                            setTimeout(() => {
                                const goldWave = document.createElement('div');
                                goldWave.className = 'legendary-gold-wave';
                                document.body.appendChild(goldWave);
                                globalElements.push(goldWave);
                                setTimeout(() => goldWave.remove(), 2000);
                            }, 18500); // 18.5s from this block = 33s total
                            
                            // Golden pulse right as wave hits the borders!
                            setTimeout(() => {
                                const borderPulse = document.createElement('div');
                                borderPulse.style.position = 'fixed';
                                borderPulse.style.top = '0';
                                borderPulse.style.left = '0';
                                borderPulse.style.width = '100vw';
                                borderPulse.style.height = '100vh';
                                borderPulse.style.boxSizing = 'border-box';
                                borderPulse.style.border = '0px solid rgba(251, 191, 36, 0)';
                                borderPulse.style.boxShadow = 'inset 0 0 0px rgba(251, 191, 36, 0)';
                                borderPulse.style.zIndex = '9999';
                                borderPulse.style.pointerEvents = 'none';
                                document.body.appendChild(borderPulse);
                                globalElements.push(borderPulse);
                                
                                // The wave hits the walls! Instant heavy impact!
                                borderPulse.style.transition = 'none';
                                borderPulse.style.border = '0px solid transparent';
                                borderPulse.style.boxShadow = 'inset 0 0 200px rgba(251, 191, 36, 0.8), 0 0 200px rgba(251, 191, 36, 0.8)';
                                borderPulse.style.background = 'rgba(251, 191, 36, 0.1)';
                                
                                // Bounce back to a subtle state
                                setTimeout(() => {
                                    borderPulse.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                                    borderPulse.style.border = '0px solid transparent';
                                    borderPulse.style.boxShadow = 'inset 0 0 100px rgba(251, 191, 36, 0.4), 0 0 100px rgba(251, 191, 36, 0.4)';
                                    borderPulse.style.background = 'transparent';
                                }, 50);
                                
                                // Fade the pulse out slowly before the UI restores
                                setTimeout(() => {
                                    borderPulse.style.transition = 'all 2.5s ease-out';
                                    borderPulse.style.border = '0px solid rgba(251, 191, 36, 0)';
                                    borderPulse.style.boxShadow = 'inset 0 0 0px rgba(251, 191, 36, 0)';
                                    borderPulse.style.background = 'transparent';
                                }, 1000);
                            }, 19200); // 19.2s from this block = 33.7s total (0.7s after gold wave is emitted)
                            
                            // Fast fade out to pitch black!
                            setTimeout(() => {
                                matrixContainer.style.transition = 'opacity 4s ease-in-out';
                                matrixContainer.style.opacity = '0';
                                wash.style.transition = 'background 4s ease-in-out';
                                wash.style.background = 'rgba(0, 0, 0, 1)';
                                
                                // FORCE the defense message to fade out softly with everything else
                                // Step 1: Kill the animation and lock current opacity
                                defenseMsg.style.animation = 'none';
                                defenseMsg.style.opacity = '1'; // Lock at fully visible
                                // Step 2: Force a reflow so the browser registers opacity:1 as the starting point
                                void defenseMsg.offsetHeight;
                                // Step 3: NOW apply the transition and fade to 0
                                defenseMsg.style.transition = 'opacity 2s ease-in-out';
                                defenseMsg.style.opacity = '0';
                            }, 20000); // 20s from this block = 34.5s total (Starts 2s fade to black, ending at exactly 36.5s)
                        }
                    }, 8000); // 8 seconds after cascade starts (14.5s total). First defense is at 10s (16.5s total)!
                }, 6500); // Wait 6.5 seconds for pulse
            }
        }
        
        setTimeout(() => {
            // Restore standard overlay
            overlay.style.display = 'block';
            
            // Inject personalized elements into overlay
            let extraElements = [];
            if (overlayExtraHtml) {
                const extraWrapper = document.createElement('div');
                extraWrapper.innerHTML = overlayExtraHtml;
                extraElements = Array.from(extraWrapper.children);
                extraElements.forEach(el => overlay.appendChild(el));

                const titleOverride = overlay.querySelector('.vault-title-override');
                if (titleOverride) {
                    const vaultText = overlay.querySelector('.vault-text');
                    const vaultSubtext = overlay.querySelector('.vault-subtext');
                    if (vaultText) vaultText.innerHTML = titleOverride.dataset.title;
                    if (vaultSubtext) vaultSubtext.innerHTML = titleOverride.dataset.sub;
                    if (titleOverride.dataset.theme) {
                        overlay.classList.add(titleOverride.dataset.theme);
                    } else {
                        overlay.classList.add('alien-theme');
                    }
                }
            }
            
            // Clean up the legendary banner elements
            elements.forEach(el => {
                if (el.parentNode === eggContainer) eggContainer.removeChild(el);
            });
            // DO NOT instantly remove globalElements! Let the overlay fade in perfectly over them!
            
            // Force a reflow so the browser restarts the CSS animations after display:block
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    // Immediately start the final shutdown animation!
                    overlay.classList.remove('shutdown-darkening');
                    if (isRift) {
                        if (window.riftShakeTimeout) { clearTimeout(window.riftShakeTimeout); window.riftShakeTimeout = null; }
                        document.body.classList.remove('violent-shake-active');
                        
                        // Let the CSS animation handle the beautiful dark backdrop naturally
                        fadeGlobalAudio(); overlay.classList.add('shutdown-executing');
                        
                        // The black hole implodes beautifully into a white singularity and flashes
                        const rift = document.querySelector('.legendary-rift');
                        if (rift) {
                            // Freeze the current state to prevent 1-frame animation fallback flashes
                            rift.style.transform = 'translate(-50%, -50%) scale(60) rotate(5400deg)';
                            rift.style.background = '#000';
                            rift.classList.add('rift-core-executing');
                        }
                        
                        // The aura vanishes instantly as gravity breaks
                        const aura = document.querySelector('.legendary-rift-aura');
                        if (aura) aura.style.display = 'none';
                        
                        const disk = document.querySelector('.legendary-accretion-disk');
                        if (disk) disk.classList.add('disk-executing');
                        
                        const wash = document.querySelector('.legendary-rift-wash');
                        if (wash) {
                            // Freeze wash to pitch black to prevent background flash
                            wash.style.background = 'rgba(0, 0, 0, 1)';
                            wash.classList.add('wash-collapse-executing');
                        }

                        // Implosion Shockwave triggers exactly as the core hits scale 0
                        setTimeout(() => {
                            const shockwave = document.createElement('div');
                            shockwave.className = 'implosion-wave';
                            document.body.appendChild(shockwave);
                            globalElements.push(shockwave);
                            
                            // Let's add a quick camera shake for the shockwave!
                            document.body.classList.add('violent-shake-active');
                            setTimeout(() => {
                                document.body.classList.remove('violent-shake-active');
                            }, 500);
                        }, 3400); // 3.4s is roughly when the rift-core-collapse hits 0%

                        // Delay the REALITY COLLAPSED text so it appears AFTER the implosion
                        const titleOverride = overlay.querySelector('.vault-title-override');
                        if (titleOverride) {
                            titleOverride.style.opacity = '0';
                            titleOverride.style.animation = 'reality-collapse-text 14s cubic-bezier(0.2, 0, 0.2, 1) 4.5s forwards'; // Fade in extremely slowly over 14s after 4.5s delay
                        }
                        
                        // ═══ SMOOTH RIFT CLOSING ATMOSPHERE ═══
                        
                        // Soft Singularity Glow — gentle ambient light behind content
                        const glow = document.createElement('div');
                        glow.className = 'rift-singularity-glow';
                        glow.style.animation = 'singularity-breathe 14s ease-in-out forwards';
                        document.body.appendChild(glow);
                        globalElements.push(glow);
                        
                        // Decorative Mini Black Holes — flanking the logo
                        const miniPositions = [
                            { x: -220, y: -30, size: 45 },
                            { x: 220, y: -30, size: 40 },
                        ];
                        miniPositions.forEach((pos, i) => {
                            setTimeout(() => {
                                const mini = document.createElement('div');
                                mini.className = 'rift-mini-blackhole';
                                mini.style.left = `calc(50% + ${pos.x}px)`;
                                mini.style.top = `calc(50% + ${pos.y}px)`;
                                mini.style.width = pos.size + 'px';
                                mini.style.height = pos.size + 'px';
                                mini.style.transform = `translate(-50%, -50%)`;
                                mini.style.animation = `mini-blackhole-fade-in 12s ease-in-out forwards`;
                                document.body.appendChild(mini);
                                globalElements.push(mini);
                            }, 500 + i * 800);
                        });
                        
                        // SICK STARRY SPACE: Ambient and Shining Stars
                        const starCount = 300; // Massive increase for a true starry space
                        for (let i = 0; i < starCount; i++) {
                            const isShining = Math.random() > 0.8; // 20% are bright shining diamonds
                            const star = document.createElement('div');
                            star.className = isShining ? 'rift-shining-star' : 'rift-ambient-star';
                            
                            const size = isShining ? (6 + Math.random() * 6) : (1 + Math.random() * 2.5);
                            star.style.width = size + 'px';
                            star.style.height = size + 'px';
                            star.style.left = (Math.random() * 100) + '%';
                            star.style.top = (Math.random() * 100) + '%';
                            
                            if (!isShining) {
                                star.style.background = Math.random() > 0.6 ? '#c4b5fd' : '#fff';
                                star.style.boxShadow = `0 0 ${size}px rgba(168,85,247,0.4)`;
                            }
                            
                            const driftX = (Math.random() - 0.5) * 60;
                            const driftY = (Math.random() - 0.5) * 60;
                            star.style.setProperty('--drift-x', driftX + 'px');
                            star.style.setProperty('--drift-y', driftY + 'px');
                            star.style.setProperty('--star-brightness', isShining ? (0.7 + Math.random() * 0.3).toString() : (0.2 + Math.random() * 0.4).toString());
                            
                            star.style.animation = isShining 
                                ? `shining-star-twinkle ${4 + Math.random() * 6}s ease-in-out forwards`
                                : `star-drift ${8 + Math.random() * 5}s ease-in-out forwards`;
                            
                            star.style.animationDelay = (Math.random() * 5) + 's';
                            document.body.appendChild(star);
                            globalElements.push(star);
                        }
                        
                        // ═══ SOPHISTICATED EFFECTS: SPARKS & GRAVITY PULSES ═══
                        
                        // Orbiting Sparks — High energy particle traces near the event horizon
                        for (let i = 0; i < 15; i++) {
                            setTimeout(() => {
                                const spark = document.createElement('div');
                                spark.className = 'rift-spark';
                                const startAngle = Math.random() * 360;
                                const radius = 100 + Math.random() * 200;
                                const spinDir = Math.random() > 0.5 ? 1 : -1;
                                spark.style.setProperty('--start-angle', startAngle + 'deg');
                                spark.style.setProperty('--orbit-radius', radius + 'px');
                                spark.style.setProperty('--spin-dir', spinDir);
                                spark.style.setProperty('--spark-opacity', (0.5 + Math.random() * 0.5).toString());
                                spark.style.animation = `spark-orbit ${2 + Math.random() * 3}s cubic-bezier(0.2, 0, 0.8, 1) forwards`;
                                document.body.appendChild(spark);
                                globalElements.push(spark);
                            }, 1000 + i * 400); // Staggered over 7 seconds
                        }
                    } else {
                        fadeGlobalAudio(); 
                        overlay.style.display = 'block';
                        overlay.classList.add('shutdown-executing');
                        overlay.style.opacity = '1';
                        overlay.style.zIndex = '100000';
                        const wash = document.querySelector('.legendary-glitch-wash');
                        if (wash) wash.style.opacity = '0'; // Completely remove wash from blocking the view
                        if (typeof matrixContainer !== 'undefined' && matrixContainer) matrixContainer.style.opacity = '0';
                    }
                });
            });
            
            // Final blackout animation, then close tab
            let closeDelay = 6800;
            if (isRift) closeDelay = 21500; // Text animation ends at 21s, trigger close very shortly after
            if (isGuardian) closeDelay = 12000;


            setTimeout(() => {
                window.close(); // Close the app entirely instead of just the tab
                setTimeout(() => {
                    if(document.body.contains(overlay)) overlay.remove();
                    
                    // Final cleanup
                    globalElements.forEach(el => {
                        if (el.parentNode === document.body) document.body.removeChild(el);
                    });
                    
                    if (window.suckedOriginals) {
                        window.suckedOriginals.forEach(el => {
                            if (el) {
                                if (el.classList) el.classList.remove('legendary-dissolve-panel');
                                if (el.style) {
                                    el.style.opacity = '';
                                    el.style.transition = '';
                                    el.style.background = '';
                                    el.style.backgroundColor = '';
                                    el.style.boxShadow = '';
                                    el.style.borderColor = '';
                                    el.style.overflow = '';
                                    el.style.transform = '';
                                    el.style.filter = '';
                                    el.style.position = '';
                                    el.style.zIndex = '';
                                }
                            }
                        });
                        window.suckedOriginals = null;
                    }
                    const styleEl = document.getElementById('legendary-rift-close-style');
                    if (styleEl) styleEl.remove();
                    
                    extraElements.forEach(el => {
                        if (el.parentNode === overlay) overlay.removeChild(el);
                    });
                }, 1000);
            }, closeDelay); 
        }, duration);
    }
    


    parentContainer.dailyEasterEggSpawner = setInterval(() => {
        // Clean up loop if note is closed
        if (!document.body.contains(triggerEl)) {
            clearInterval(parentContainer.dailyEasterEggSpawner);
            return;
        }
        
        // Pause spawning if screen is executing shutdown or user is not looking
        if (document.visibilityState !== 'visible' || isExecuting || !isIntersecting) return;
        
        // 1. Roll Big Sky
        if (!activeEvents.sky) {
            const skyRoll = Math.random();
            if (skyRoll < (1/10)) { // 1 in 10 Crashing UFO (lowest probability first)
                // Wait to spawn again randomly
                spawnParticle('<div class="ufo-victim-particle" style="animation-delay: 0s;">🛸</div><div class="meteor-strike-particle" style="animation-delay: 0s;">☄️</div><div class="explosion-particle" style="animation-delay: 0s;"></div>', 25000, 'sky');
            } else if (skyRoll < (1/10 + 1/5)) { // 1 in 5 Satellite
                spawnParticle('<div class="satellite-particle" style="animation-delay: 0s;">🛰️</div>', 45000, 'sky');
            } else if (skyRoll < (1/10 + 1/5 + 1/3)) { // 1 in 3 Standard UFO
                spawnParticle('<div class="ufo-particle" style="animation-delay: 0s;">🛸</div>', 25000, 'sky');
            }
        }
        
        // 2. Roll Ground
        if (!activeEvents.ground) {
            const groundRoll = Math.random();
            if (groundRoll < (1/5)) { // 1 in 5 Rabbit
                spawnParticle('<div class="rabbit-particle" style="animation-delay: 0s;">🐇<span class="carrot-item">🥕</span></div><div class="fox-particle" style="animation-delay: 0s;">🦊</div>', 60000, 'ground');
            } else if (groundRoll < (1/5 + 1/3)) { // 1 in 3 Owl
                spawnParticle('<div class="owl-particle" style="animation-delay: 0s;">🦉</div>', 40000, 'ground');
            }
        }
        
        // 3. Roll Comet
        if (!activeEvents.comet && Math.random() < (1/2)) { // 1 in 2 Meteor
            spawnParticle('<div class="comet-particle" style="animation-delay: 0s;">☄️</div>', 35000, 'comet');
        }
    }, 5000); // Check every 5 seconds!
    
    function startShutdownTimer() {
        if (isExecuting) return;
        if (parentContainer.dailyShutdownTimer) clearTimeout(parentContainer.dailyShutdownTimer);
        if (parentContainer.dailyDarkenTimer) clearTimeout(parentContainer.dailyDarkenTimer);
        
        // Force block in case it was hidden
        overlay.style.display = 'block';
        
        // Remove darkening class (CSS transition will smoothly fade it out if it was partially visible)
        overlay.classList.remove('shutdown-darkening');
        
        const rand = Math.random();
        
        if (rand < (1/30)) {
            // Rift (Most Complex - 1 in 30 chance)
            parentContainer.dailyShutdownTimer = setTimeout(() => {
                spawnLegendary(
                    '', 
                    22000, 
                    `<svg width="0" height="0" style="position: absolute; z-index: -1;">
                        <filter id="twirl-distort">
                            <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="turbulence">
                                <animate attributeName="baseFrequency" values="0.015;0.05;0.015" dur="4s" repeatCount="indefinite"/>
                            </feTurbulence>
                            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="50" xChannelSelector="R" yChannelSelector="G"/>
                        </filter>
                     </svg>
                     <div class="legendary-rift-wash"></div><div class="legendary-rift-aura"></div><div class="legendary-rift"></div>`,
                    '<div class="legendary-rift-particle p1">✨</div><div class="legendary-rift-particle p2">✨</div><div class="vault-title-override" data-title="REALITY COLLAPSED" data-sub="DIMENSION SEALED" data-theme="rift-success-theme"></div>'
                );
            }, 15000);
            return;
        } else if (rand < (1/30 + 1/15)) {
            // Guardian (Medium Complexity - 1 in 15 chance)
            parentContainer.dailyShutdownTimer = setTimeout(() => {
                spawnLegendary(
                    '', 
                    36500, 
                    '<div class="legendary-glitch-wash"></div><div class="legendary-guardian">💠</div><div class="legendary-terminal-log">SYSTEM BREACHED.<br>VIRUS DETECTED.</div>',
                    '<div class="vault-title-override" data-title="SYSTEM OVERRIDE" data-sub="PROTOCOL SECURED" data-theme="guardian-theme"></div>'
                );
            }, 15000);
            return;
        } else if (rand < (1/30 + 1/15 + 1/7)) {
            // Mothership (Least Complex - 1 in 7 chance)
            parentContainer.dailyShutdownTimer = setTimeout(() => {
                spawnLegendary(
                    '', 
                    33000, 
                    '<div class="legendary-mothership"><div class="legendary-mothership-sprite">🛸</div></div><div class="legendary-abduction-beam"></div><div class="legendary-cow">🐄</div><div class="legendary-beam-sparkle s1"></div><div class="legendary-beam-sparkle s2"></div><div class="legendary-beam-sparkle s3"></div><div class="legendary-beam-sparkle s4"></div><div class="legendary-beam-sparkle s5"></div>',
                    '<div class="ufo-fade-container"><div class="legendary-mini-ufo ufo1">🛸</div><div class="legendary-mini-ufo ufo2">🛸</div><div class="legendary-mini-ufo ufo3">🛸</div><div class="legendary-mini-ufo ufo4">🛸</div><div class="legendary-mini-ufo ufo5">🛸</div><div class="legendary-mini-ufo ufo6">🛸</div></div><div class="vault-title-override" data-title="TARGET NEUTRALIZED" data-sub="AIRSPACE SECURED" data-theme="defense-success-theme"></div>'
                );
            }, 15000);
            return;
        }
        
        // Wait 15 seconds of perfect stillness before starting the 10s creep
        parentContainer.dailyDarkenTimer = setTimeout(async () => {
            // Revert back EXACTLY to the dynamic creation that worked previously
            const finalOverlay = activeDocument.createElement('div');
            finalOverlay.id = 'premium-shutdown-final-overlay';
            finalOverlay.className = 'premium-shutdown-overlay'; 
            
            finalOverlay.innerHTML = `
                <style>
                    @keyframes premiumDarkenAnim {
                        0% { opacity: 0; }
                        100% { opacity: 1; }
                    }
                </style>
                <div class="premium-shutdown-crt-container">
                    <div class="premium-shutdown-content">
                        <div class="vault-emblem-container">
                            <svg class="life-vault-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                <circle class="lv-vault-lock" cx="50" cy="50" r="48" fill="none" stroke="url(#lv-platinum)" stroke-dasharray="4 8" />
                                
                                <circle class="lv-ring-outer" cx="50" cy="50" r="49" fill="none" stroke="rgba(167, 243, 208, 0.3)" stroke-width="0.5" stroke-dasharray="1 3" />
                                <circle class="lv-ring" cx="50" cy="50" r="46" fill="none" stroke="rgba(167, 243, 208, 0.5)" stroke-width="0.5" />
                                <polygon class="lv-hex-outer" points="50,5 89,27.5 89,72.5 50,95 11,72.5 11,27.5" fill="none" stroke="rgba(167, 243, 208, 0.6)" stroke-width="0.5" />
                                <polygon class="lv-hex-inner" points="50,15 80,32.5 80,67.5 50,85 20,67.5 20,32.5" fill="none" stroke="url(#lv-platinum)" stroke-width="1.2" />
                                
                                <path class="lv-leaf" d="M50,85 C30,70 25,45 50,20 C50,45 40,65 50,85 Z" fill="url(#lv-grad)" />
                                <path class="lv-leaf" d="M50,85 C70,70 75,45 50,20 C50,45 60,65 50,85 Z" fill="url(#lv-grad)" />
                                
                                <circle class="lv-core" cx="50" cy="55" r="4" fill="#a7f3d0" />
                                
                                <defs>
                                    <linearGradient id="lv-platinum" x1="0%" y1="100%" x2="100%" y2="0%">
                                        <stop offset="0%" stop-color="#ffffff" />
                                        <stop offset="30%" stop-color="#a7f3d0" />
                                        <stop offset="60%" stop-color="#475569" />
                                        <stop offset="100%" stop-color="#0f172a" />
                                    </linearGradient>
                                    <linearGradient id="lv-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stop-color="#6ee7b7" />
                                        <stop offset="100%" stop-color="#022c22" />
                                    </linearGradient>
                                    <linearGradient id="lv-rift-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stop-color="#d8b4fe" />
                                        <stop offset="100%" stop-color="#3b0764" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div class="vault-text">SYLVICS</div>
                        <div class="vault-text" style="font-size: 0.65em; letter-spacing: 8px; text-indent: 8px; margin-top: 5px; margin-bottom: 25px; color: #cbd5e1; font-weight: 500;">BY VERDANT CYBERNETICS</div>
                        <div class="vault-subtext">DAY SECURED</div>
                    </div>
                </div>
            `;
            // Apply the darkness using the exact setAttribute string that worked before, but ensure visibility overrides the class default
            finalOverlay.setAttribute('style', 'position: fixed !important; top: 0 !important; left: 0 !important; width: 100vw !important; height: 100vh !important; background: radial-gradient(circle at center, transparent 20%, rgba(0,0,0,0.95) 100%) !important; pointer-events: none !important; z-index: 2147483647 !important; animation: premiumDarkenAnim 10s linear forwards !important; backdrop-filter: blur(5px) !important; visibility: visible !important; transition: none !important;');
            
            // Append exactly as it worked before
            activeDocument.documentElement.appendChild(finalOverlay);
            parentContainer._finalOverlay = finalOverlay;
            
            try { 
                const activeFile = typeof app !== 'undefined' ? app.workspace.getActiveFile() : null;
                const fileName = activeFile ? activeFile.basename : 'unknown';
            } catch(e) {}
        }, 15000);
        
        // Lock in and execute final sequence at 25s
        parentContainer.dailyShutdownTimer = setTimeout(() => {
            isExecuting = true;
            fadeGlobalAudio();
            
            // Failsafe for the executing state
            if (parentContainer._finalOverlay) {
                parentContainer._finalOverlay.classList.add('shutdown-executing');
                parentContainer._finalOverlay.setAttribute('style', 'position: fixed !important; top: 0 !important; left: 0 !important; width: 100vw !important; height: 100vh !important; z-index: 2147483647 !important; background: #000 !important; opacity: 1 !important; visibility: visible !important; backdrop-filter: blur(10px) !important;');
            }
            
            // We append the final executing UI elements 
            setTimeout(async () => {
                try { await app.vault.adapter.write(".obsidian/vault_shutdown_state.json", JSON.stringify({ timestamp: Date.now() })); } catch(e) {}
                window.close(); // Close the app entirely instead of just the tab
                
                // Clean up if it failed to close for some reason
                setTimeout(() => {
                    if(document.body.contains(overlay)) overlay.remove();
                }, 1000);
            }, 7500); // Trigger close exactly as it reaches max blur
        }, 25000);
    }
    
    function stopShutdownTimer() {
        if (isExecuting) return;
        if (parentContainer.dailyShutdownTimer) clearTimeout(parentContainer.dailyShutdownTimer);
        if (parentContainer.dailyDarkenTimer) clearTimeout(parentContainer.dailyDarkenTimer);
        if (parentContainer._finalOverlay) {
            parentContainer._finalOverlay.remove();
            parentContainer._finalOverlay = null;
        }
    }

    if (parentContainer.dailyActivityHandler) {
        document.removeEventListener('mousemove', parentContainer.dailyActivityHandler);
        document.removeEventListener('keydown', parentContainer.dailyActivityHandler);
        document.removeEventListener('click', parentContainer.dailyActivityHandler);
        document.removeEventListener('scroll', parentContainer.dailyActivityHandler, true);
    }
    parentContainer.dailyActivityHandler = () => {
        if (!activeDocument.body.contains(triggerEl)) return; // Stop running if trigger is gone
        
        if (isIntersecting && !isExecuting) {
            stopShutdownTimer(); // Immediately strip the visual effect and clear timers
            
            if (parentContainer.activityDebounce) clearTimeout(parentContainer.activityDebounce);
            parentContainer.activityDebounce = setTimeout(() => {
                startShutdownTimer();
            }, 150);
        } else if (!isIntersecting && !isExecuting) {
            stopShutdownTimer();
            if (parentContainer.activityDebounce) clearTimeout(parentContainer.activityDebounce);
        }
    };
    
    document.addEventListener('mousemove', parentContainer.dailyActivityHandler);
    document.addEventListener('keydown', parentContainer.dailyActivityHandler);
    document.addEventListener('click', parentContainer.dailyActivityHandler);
    document.addEventListener('scroll', parentContainer.dailyActivityHandler, true);
    
    if (parentContainer.dailyVisibilityHandler) document.removeEventListener('visibilitychange', parentContainer.dailyVisibilityHandler);
    parentContainer.dailyVisibilityHandler = () => {
        if (document.visibilityState === 'hidden') {
            if (isIntersecting && !isExecuting) stopShutdownTimer();
        } else if (document.visibilityState === 'visible') {
            if (isIntersecting && !isExecuting && document.body.contains(triggerEl)) startShutdownTimer();
        }
    };
    document.addEventListener('visibilitychange', parentContainer.dailyVisibilityHandler);
    
    parentContainer.dailyShutdownObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Trigger when ANY part of the absolute bottom trigger is visible
            if (entry.isIntersecting) {
                if (!isIntersecting) {
                    isIntersecting = true;
                    if (document.visibilityState === 'visible') {

                        startShutdownTimer();
                    }
                }
            } else {
                // Abort if user scrolls away!
                isIntersecting = false;
                stopShutdownTimer();
            }
        });
    });
    
    // Wait 3 seconds before observing so it doesn't falsely trigger while Dataview is still building the page!
    setTimeout(() => {
        if (document.body.contains(triggerEl)) {
            parentContainer.dailyShutdownObserver.observe(triggerEl);
        }
    }, 3000);
}, 1000);

// --- Value Pills Interactive Navigation V5 ---
// Uses document-level event delegation to survive Meta Bind DOM re-renders
if (!window.sylvicsValuePillsV5) {
    window.sylvicsValuePillsV5 = true;
    
    document.addEventListener('click', (e) => {
        // 1. Only care about clicks inside the pill list container
        const container = e.target.closest('.values-pill-list');
        if (!container) return;
        
        // 2. Find the specific pill element that was clicked
        // Meta Bind uses various structures depending on mode, so we check for common pill classes/tags
        const pill = e.target.closest('.meta-bind-list-item, li, .values-pill-list > div > div');
        if (!pill) return;
        
        // 3. Ignore clicks on the 'Add Value' button, remove buttons, SVG icons, or native links
        if (pill.tagName === 'BUTTON' || e.target.closest('button') || e.target.closest('svg') || e.target.tagName === 'PATH' || e.target.closest('a.internal-link')) return;
        
        // 4. Safely extract the text
        const clone = pill.cloneNode(true);
        clone.querySelectorAll('button, svg').forEach(b => b.remove());
        const valueName = clone.textContent.trim();
        
        // 5. Ignore if it's somehow empty or is the add button text
        if (!valueName || valueName.includes('+ Add Value') || valueName.includes('Add new item')) return;
        
        // Intercept the click before Meta Bind handles it
        e.stopPropagation();
        e.preventDefault();
        
        // 6. Navigate
        if (window.app && window.app.workspace) {
            // Visual feedback
            pill.style.transform = 'scale(0.92)';
            pill.style.boxShadow = '0 0 25px var(--interactive-accent)';
            
            setTimeout(() => {
                pill.style.transform = '';
                pill.style.boxShadow = '';
                
                // Bulletproof navigation
                const targetFile = window.app.metadataCache.getFirstLinkpathDest(valueName, "");
                if (targetFile) {
                    window.app.workspace.getLeaf(false).openFile(targetFile);
                } else {
                    if (window.Notice) new Notice("Could not find Value file: " + valueName);
                }
            }, 180);
        }
    }, true); // true = Capture phase (crucial to beat Meta Bind)
}

// --- EMOJI PICKER INTERCEPTOR ---
if (typeof document !== "undefined") {
    document.addEventListener('click', (e) => {
        let input = e.target.closest('.syl-icon-input input');
        if (input && window.app && window.app.workspace && window.app.plugins) {
            let emojiPlugin = window.app.plugins.getPlugin("obsidian-emoji-toolbar");
            if (emojiPlugin) {
                e.preventDefault();
                let cmd = window.app.commands.commands['obsidian-emoji-toolbar:emoji-picker:open-picker'];
                if (cmd && cmd.editorCheckCallback) {
                    
                    // Create a mock editor object to intercept the emoji insertion directly
                    let mockEditor = {
                        getCursor: function() { return { line: 0, ch: 0 }; },
                        setCursor: function() {},
                        replaceRange: function(text, from, to) {
                            input.value = text;
                            input.dispatchEvent(new Event('input', { bubbles: true }));
                            input.dispatchEvent(new Event('change', { bubbles: true }));
                            // Remove focus so it looks native
                            input.blur();
                        }
                    };
                    
                    // Call the command directly with our mock editor
                    cmd.editorCheckCallback(false, mockEditor);
                }
            }
        }
    }, true);
}

// --- PAGE PREVIEW BLOCKER FOR PREMIUM WIDGETS ---
// Obsidian's Page Preview plugin uses 'pointerover' to trigger hover previews.
// We intercept it in the capture phase to prevent popups on links inside premium widgets.
if (typeof document !== "undefined") {
    ['pointerover', 'mouseover', 'mouseenter'].forEach(eventType => {
        document.addEventListener(eventType, (e) => {
            const link = (e.target && e.target.closest) ? e.target.closest('a.internal-link') : null;
            if (link && link.closest('.callout[data-callout="syl-premium-widget"]')) {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }
        }, true);
    });
}

