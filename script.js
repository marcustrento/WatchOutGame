const man = document.querySelector(".running-man");
const car = document.querySelector(".car-game");

//Man Jump
const jump = () => {
    man.classList.add("jump-man");

    setTimeout(() => {
        man.classList.remove("jump-man");
    }, 500);
}

document.addEventListener("keydown", jump);

//Game Loop and Restart

const loopGame = setInterval(() => {

    const carPosition = car.offsetLeft;
    const manPosition = +window
        .getComputedStyle(man)
        .bottom.replace("px", "");

    if (carPosition <= 120 && carPosition > 0 && manPosition < 80) {
        car.style.animation = "none";
        car.style.left = `${carPosition}px`;

        man.style.animation = "none";
        man.style.bottom = `${manPosition}px`;

        man.src = "./imagens/deadMan.png";
        man.style.width = "250px";
        man.style.marginLeft = "45px";

        clearInterval(loopGame);
    }
}, 10);

//Set scores

