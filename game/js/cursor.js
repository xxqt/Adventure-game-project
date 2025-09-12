document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.createElement("img");
    cursor.id = "custom-cursor";
    
    // Detect if we're in a subdirectory
    const isInSubdir = window.location.pathname.includes('/game/');
    const pathPrefix = isInSubdir ? '../' : '';
    
    // ADD DEBUG CODE HERE:
    console.log("Current pathname:", window.location.pathname);
    console.log("Current href:", window.location.href);
    console.log("Is in subdir:", isInSubdir);
    console.log("Path prefix:", pathPrefix);
    console.log("Final cursor src:", `${pathPrefix}assets/sprites/animations/MouseCursor.png`);
    
    cursor.src = `${pathPrefix}assets/sprites/animations/MouseCursor.png`;
    document.body.appendChild(cursor);

    document.body.style.cursor = "none";

    Object.assign(cursor.style, {
        position: "fixed",
        top: "0px",
        left: "0px",
        pointerEvents: "none",
        zIndex: "10000",
        width: "32px",
        height: "32px"
    });

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });

    const clickFrames = [
        `${pathPrefix}assets/sprites/animations/MouseCursorClick1.png`,
        `${pathPrefix}assets/sprites/animations/MouseCursorClick2.png`,
        `${pathPrefix}assets/sprites/animations/MouseCursorClick3.png`
    ];

    let clickInterval = null;

    document.addEventListener("mousedown", () => {
        if (clickInterval) clearInterval(clickInterval);

        let frameIndex = 0; 
        cursor.src = clickFrames[frameIndex];

        clickInterval = setInterval(() => {
            frameIndex = (frameIndex + 1) % clickFrames.length;
            cursor.src = clickFrames[frameIndex];
        }, 80);
    });

    document.addEventListener("mouseup", () => {
        if (clickInterval) {
            clearInterval(clickInterval);
            clickInterval = null;
        }
        cursor.src = `${pathPrefix}assets/sprites/animations/MouseCursor.png`;
    });
});