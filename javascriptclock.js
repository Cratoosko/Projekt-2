function dateDisplay() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth();
  var year = currentDate.getFullYear();
  document.getElementById("date").innerHTML = year + "-" + (month+1) + "-" + day;
  /*The month variable displays the month before for some reason so this is a short term fix*/
  var t = 
  setTimeout(function(){
    dateDisplay() }, 1000);
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

Date.prototype.getWeek = function() {
  var onejan = new Date(this.getFullYear(),0,1);
  var today = new Date(this.getFullYear(),this.getMonth(),this.getDate());
  var dayOfYear = ((today - onejan + 86400000)/86400000);
  return Math.ceil(dayOfYear/7)
};

function weekDisplay() {
  var today = new Date();
  var currentWeek = today.getWeek();
  document.getElementById("week").innerHTML = currentWeek;
  var t = 
  setTimeout(function(){ 
  timeDisplay() }, 1000);
}


  weekDisplay();
  timeDisplay();
  dateDisplay();