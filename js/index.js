$(document).ready(function() {
  function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    /*Set AM and PM, 12-hour format*/
    var meridiem = "AM"
    if (hours > 12) {
      hours = hours - 12;
      meridiem = "PM";
    }
    if (hours === 0) {
      hours = 12;
    }
    /*Add zero in front of digits < 10*/
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }
    /*Get handle to 'clock' div in html*/
    var clockDiv = document.getElementById('clock');
    /*Set text inside 'clock' div*/
    clockDiv.innerText = hours + " : " + minutes + " : " + seconds + " " + meridiem;
    
  }
  /*Run function for first time*/
  displayTime();
  /*Call function every 1000ms*/
  setInterval(displayTime, 1000);
})