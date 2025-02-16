const date = document.querySelector('h4#date');
const clock = document.querySelector('h2#clock');

function getClock() {
  const now = new Date();

  const year = String(now.getFullYear());
  const month = ('0' + (now.getMonth() + 1)).slice(-2);
  const day = ('0' + now.getDate()).slice(-2);

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  clock.innerText = `${hours}:${minutes}:${seconds}`;

  date.innerText = `${year}.${month}.${day}`;
}

getClock();
setInterval(getClock, 1000);
