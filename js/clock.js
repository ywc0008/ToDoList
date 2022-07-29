const clock = document.querySelector("#clock");

function getWatch() {
  const date = new Date();
  const hour = String(date.getHours());
  const min = String(date.getMinutes());
  const second = String(date.getSeconds());
  clock.innerText = `${hour}시 ${min}분 ${second}초`;
}

getWatch();
setInterval(getWatch, 1000);
