let today = new Date();
let y = today.getFullYear();
let month = today.getMonth();
let dt = today.getDate();
let d = today.getDay();

let monthlist = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
  "Thursday",
  "Friday",
  "Saturday",
];

console
  .log
  // "Today is : " + daylist[d] +" " +monthlist[month] + " " + dt+ " "
  ();
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
console.log("Current Time : " + hour + " : " + minute + " : " + dt);

const times = () => {
  const date = new Date();
  console.log(date);
  const newyear = new Date(y + 1, 0, 1);
  console.log(newyear);
let y2 = newyear.getFullYear();

  const timeLeft = newyear - date;
  // console.log(timeLeft);
  if (timeLeft < 0) return;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  console.log(`${days} days remainng`);
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  console.log(`${hours}  hours remainng`);
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  console.log(`${minutes} minutes remainng`);
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  console.log(`${seconds} seconds remainng`);

  const day = (document.querySelector("#days").textContent = days);
  const hour = (document.querySelector("#hours").textContent = hours);
  const min = (document.querySelector("#mins").textContent = minutes);
  const sec = (document.querySelector("#sec").textContent = seconds);
  const current = (document.querySelector(
    "#h"
  ).innerHTML = `Today is :  ${daylist[d]}  ${dt} ${monthlist[month]}  ${y}
  `);

  (document.querySelector(
    "#h2"
  ).innerHTML = `Time remaining for  Next new Year (${y2})`);
};

setInterval(times, 1000);
