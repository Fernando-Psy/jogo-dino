const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

let isJumping = false;
let gravity = 0.9;

function jump() {
    if (isJumping) return;
    isJumping = true;
    let position = 0;

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);

            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 5;
                    dino.style.bottom = position + "px";
                }
            }, 20);
        } else {
            position += 20;
            dino.style.bottom = position + "px";
        }
    }, 20);
}

function moveCactus() {
    let cactusPosition = 1000;
    cactus.style.left = cactusPosition + "px";

    let leftInterval = setInterval(() => {
        if (cactusPosition < -60) {
            cactusPosition = 1000;
        } else if (cactusPosition > 0 && cactusPosition < 60 && parseInt(dino.style.bottom) < 60) {
            clearInterval(leftInterval);
            alert("Game Over!");
            location.reload();
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + "px";
        }
    }, 20);
}

document.addEventListener("keydown", (event) => {
    if (event.key === " " || event.key === "ArrowUp") {
        jump();
    }
});

moveCactus();
