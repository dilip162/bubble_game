const game_container = document.querySelector(".game_container");
const timerVal = document.querySelector("#timerVal");
const scoreVal = document.querySelector("#scoreVal");
const hitVal = document.querySelector("#hitVal");
let correctVal = "";

let initialScore = 0;

for (let i = 1; i < 145; i++) {
  random = Math.floor(Math.random() * 20);
  game_container.innerHTML += `<div class="bubble">${random}</div>`;
}

function timer() {
  let initialVal = 30;
  setInterval(() => {
    if (initialVal >= 0) {
      timerVal.textContent = initialVal;
      initialVal--;
    }
  }, 1000);
}

function increaseScore() {
  initialScore += 10;
  scoreVal.textContent = initialScore;
}

function hitvalGame() {
  let newRandom = Math.floor(Math.random() * 20);
  correctVal = hitVal.textContent = newRandom;
}

game_container.addEventListener("click", (e) => {
  if (e.target.textContent == correctVal) {
    console.log("You are doing greate");
    increaseScore();
    hitvalGame();
  }
});

timer();

hitvalGame();
