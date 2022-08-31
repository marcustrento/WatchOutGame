const man = document.querySelector(".running-man");
const car = document.querySelector(".car-game");
const cloud = document.querySelector(".cloud-game");

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
//    const cloudPosition = cloud.offsetLeft;
    const manPosition = +window
        .getComputedStyle(man)
        .bottom.replace("px", "");

    if (carPosition <= 120 && carPosition > 0 && manPosition < 80) {
        car.style.animation = "none";
        car.style.left = `${carPosition}px`;

//        cloud.style.animation = "none";
//        cloud.style.left = `${cloudPosition}px`;

        man.style.animation = "none";
        man.style.bottom = `${manPosition}px`;

        man.src = "./imagens/deadMan.png";
        man.style.width = "250px";
        man.style.marginLeft = "45px";

        clearInterval(loopGame);
    }
}, 10);

//Set scores
let points = 0;

const counter = setInterval(() => {

    const carPositionLeft = +window
        .getComputedStyle(car)
        .left.replace("px", "");

    if (carPositionLeft <= 0) {
        points++;
    }

    document.querySelector(".totalPoints").textContent = points;

}, 500);



