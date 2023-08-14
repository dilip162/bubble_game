const game_container = document.querySelector(".game_container");
const timerVal = document.querySelector("#timerVal");
const scoreVal = document.querySelector("#scoreVal");
const hitVal = document.querySelector("#hitVal");

let correctVal = "";

let initialScore = 0;

for (let i = 1; i < 145; i++) {
  random = Math.floor(Math.random() * 25);
  game_container.innerHTML += `<div class="bubble">${random}</div>`;
}

function increaseScore() {
  initialScore += 10;
  scoreVal.textContent = initialScore;
}

function hitvalGame() {
  let newRandom = Math.floor(Math.random() * 25);
  correctVal = hitVal.textContent = newRandom;
}

game_container.addEventListener("click", (e) => {
  if (e.target.textContent == correctVal) {
    console.log("You are doing greate");
    increaseScore();
    hitvalGame();
  }
});

function timer() {
  let initialVal = 30;
  setInterval(() => {
    if (initialVal >= 0) {
      timerVal.textContent = initialVal;
      initialVal--;
    } else if (initialVal < 0) {
      game_container.innerHTML = "";
      game_container.style.flexDirection = "column";
      game_container.style.justifyContent = "space-around";
      game_container.innerHTML = `<h1 class='finalScore'>you final score is ${scoreVal.textContent}</h1><h1 class='endGame'>Game Over</h1><button class='btn'>Play Again</button>`;

      document.querySelector(".btn").addEventListener("click", () => {
        location.reload();
      });
      game_container.style.backgroundColor = "#FFFFE0";
    }
  }, 1000);
}

timer();

hitvalGame();
