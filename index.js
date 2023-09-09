const getDay = new Date().getDay();

const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const day = daysOfTheWeek[getDay];

document.querySelector("[data-testid='currentDayOfTheWeek']").textContent = day;

const currentUTCTime = document.querySelector("[data-testid='currentUTCTime']");

function setMilliseconds() {
  const UTCtimeInMilliseconds = Date.now();
  currentUTCTime.innerHTML = UTCtimeInMilliseconds;
}

setInterval(setMilliseconds, 1000);
