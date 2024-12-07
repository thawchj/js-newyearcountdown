function onloadPage() {
  setInterval("setTimeNewYear()", 1000);  
}

function setTimeNewYear(){
  let nextYear = new Date(new Date().getFullYear() + 1, 0, 1);

  let dateNow = new Date();
  let seconds = Math.floor((nextYear - dateNow) / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  hours = hours - days * 24;
  minutes = minutes - days * 24 * 60 - hours * 60;
  seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;

  document.getElementById("days").innerHTML = days < 10 ? '0' + days : days;
  document.getElementById("hours").innerHTML = hours < 10 ? '0' + hours : hours;
  document.getElementById("minutes").innerHTML = minutes < 10 ? '0' + minutes : minutes;
  document.getElementById("seconds").innerHTML = seconds < 10 ? '0' + seconds : seconds;
  document.getElementById("title").innerHTML = nextYear.getFullYear();
}


onloadPage();
