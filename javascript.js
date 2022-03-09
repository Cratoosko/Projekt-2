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

document.getElementById("timer-display").innerHTML = currentTime+1 + " seconds";

function timerIsUp() {
  alert("Your time is up!");
}

function timeDisplay() {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hour = formatTimeDisplay(hour)
  min = formatTimeDisplay(min)
  sec = formatTimeDisplay(sec)
  document.getElementById("clock").innerHTML = hour + ":" + min + ":" + sec;
}


var t = 
setTimeout(function(){ 
timeDisplay() }, 1000);

function formatTimeDisplay(s) {
  if(s < 10) {
    return "0" + s;
  }
  else {
    return s;
  }
}

timeDisplay();
