function timeDisplay() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = formatTimeDisplay(hour)
    min = formatTimeDisplay(min)
    sec = formatTimeDisplay(sec)
    document.getElementById("clock").innerHTML = hour + ":" + min + ":" + sec;
    var t = 
    setTimeout(function(){ 
    timeDisplay() }, 1000);
  }
  
function formatTimeDisplay(s) {
  if(s < 10) {
    return "0" + s;
  }
  else {
    return s;
  }
}
  
  timeDisplay();