const timerInput = document.querySelector(".timer-input");
const timerOutput = document.querySelector(".timer-output");
const timerButton = document.querySelector(".timer-set-button");

let currentTime = -1;

let timer;

timerButton.addEventListener("click", setTimer);

function setTimer() {
  currentTime = timerInput.value;
  timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    currentTime--;
    if (currentTime <= 0) {
        clearInterval(timer);
        timerIsUp();
    }
    timerOutput.innerHTML = currentTime;
}

function timerIsUp() {
  alert("Your time is up, Mr.");
}
