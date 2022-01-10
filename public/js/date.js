function currentDate() {

  /* creating object of Date class */
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();

  let wDay;
  switch (date.getDay()) {
  case 0:
    wDay = "Sunday";
    break;
  case 1:
    wDay = "Monday";
    break;
  case 2:
    wDay = "Tuesday";
    break;
  case 3:
    wDay = "Wednesday";
    break;
  case 4:
    wDay = "Thursday";
    break;
  case 5:
    wDay = "Friday";
    break;
  case 6:
    wDay = "Saturday";
  }

  let wMonth;
  switch (month) {
  case 0:
    wMonth = "January";
    break;
  case 1:
    wMonth = "February";
    break;
  case 2:
    wMonth = "March";
    break;
  case 3:
    wMonth = "April";
    break;
  case 4:
    wMonth = "May";
    break;
  case 5:
    wMonth = "June";
    break;
  case 6:
    wMonth = "July";
    break;
  case 7:
    wMonth = "August";
    break;
  case 8:
    wMonth = "September";
    break;
  case 9:
    wMonth = "October";
    break;
  case 10:
    wMonth = "November";
    break;
  case 11:
    wMonth = "December";
  }

  let suffix;
  switch (day) {
    case 1:
      suffix = "st";
      break;
    case 2:
      suffix = "nd";
      break;
    case 3:
      suffix = "rd";
      break;
    case 21:
      suffix = "st";
      break;
    case 22:
      suffix = "nd";
      break;
    case 23:
      suffix = "rd";
      break;
    case 31:
      suffix = "st";
      break;
    default:
      suffix = "th";
  }

  /* add to date div */
  document.getElementById("date").innerText = wDay + ", " + day + suffix + " " + wMonth + " " + year;
}

/* call function */
currentDate();
