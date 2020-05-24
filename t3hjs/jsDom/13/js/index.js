const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

const daysTime = document.getElementById("days");
const hoursTime = document.getElementById("hours");
const minutesTime = document.getElementById("minutes");
const secondsTime = document.getElementById("seconds");

let daysTimeValue = daysTime.innerText;
let hoursTimeValue = hoursTime.innerText;
let minutesTimeValue = minutesTime.innerText;
let secondsTimeValue = secondsTime.innerText;

var Times = 0;
var stopTimes;

function start() {
  stopTimes = setInterval(() => {
    Times++;
    secondsTimeValue++;
    if (secondsTimeValue >= 60 && Times % 60 === 0) {
      secondsTimeValue = 0;
      minutesTimeValue++;
    }
    if (minutesTimeValue >= 60 && Times % 3600 === 0) {
      minutesTimeValue = 0;
      hoursTimeValue++;
    }
    if (hoursTimeValue >= 24 && Times % 86400 === 0) {
      hoursTimeValue = 0;
      daysTimeValue++;
    }
    daysTime.innerHTML = daysTimeValue;
    hoursTime.innerHTML = hoursTimeValue;
    minutesTime.innerHTML = minutesTimeValue;
    secondsTime.innerHTML = secondsTimeValue;
  }, 1000);
  pauseBtn.style.display = "inline-block";
}

function pause() {
  clearInterval(stopTimes);
  startBtn.innerHTML = "Tiếp tục";
}

function reset() {
  clearInterval(stopTimes);
  Times = 0;
  startBtn.innerHTML = "Bắt đầu";
  secondsTimeValue = 0;
  minutesTimeValue = 0;
  hoursTimeValue = 0;
  daysTimeValue = 0;

  daysTime.innerHTML = daysTimeValue;
  hoursTime.innerHTML = hoursTimeValue;
  minutesTime.innerHTML = minutesTimeValue;
  secondsTime.innerHTML = secondsTimeValue;
}
