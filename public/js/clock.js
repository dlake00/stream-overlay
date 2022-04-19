function currentTime() {

  /* creating object of Date class */
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var noon = "AM";

  /* assign AM/PM */
  noon = (hour >= 12) ? "PM" : "AM";
  /* assign hour in 12-hour format */
  hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour);
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);

   /* add time to clock div */
  document.getElementById("clock").innerText = hour + ":" + min + ":" + sec + " " + noon;
  
  /* set timer */
  var t = setTimeout(currentTime, 1000);
}

/* append 0 before time elements if less than 10 */
function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

/* call function */
currentTime();
