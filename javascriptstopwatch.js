const startButton = document.querySelector(".start-stopwatch-button");
const stopButton = document.querySelector(".stop-stopwatch-button");
const clearButton = document.querySelector(".clear-stopwatch-button");

startButton.addEventListener("click", startStopwatch);
stopButton.addEventListener("click", stopStopwatch);
clearButton.addEventListener("click", clearStopwatch);

let sec = 0;
let min = 0;
let hour = 0;
let t;

function updateStopwatch() {
  sec++;

    if (sec >= 60) {
      sec = 0;
      min++;
    }
    else if (min >= 60) {
      min = 0;
      hour++;
    }

    document.getElementById("stopwatch").innerHTML = hour + ":" + min + ":" + sec;
   
    timer();
} 

function timer() {
    t = setTimeout(updateStopwatch, 1000);
}
timer();


function startStopwatch() {
  timer();
}

function stopStopwatch() {
  clearTimeout(t);
}

function clearStopwatch() {
  document.getElementById("stopwatch").innerHTML = "0:0:0";
  sec = 0; 
  min = 0; 
  hour = 0;
}