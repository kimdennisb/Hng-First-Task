const getDay = new Date().getDay();

const UTCtimeInMilliseconds = Date.now();

const daysOfTheWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const day = daysOfTheWeek[getDay];

document.querySelector("[data-testid='currentDayOfTheWeek']").textContent = day;

document.querySelector("[data-testid='currentUTCTime']").textContent =
  UTCtimeInMilliseconds;
