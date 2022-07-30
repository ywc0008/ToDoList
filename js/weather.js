const API_KEY = "ce059c3a4875e3ca478937741c0385bf";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerText = `위치: ${data.name}`;
      weather.innerText = `날씨: ${data.weather[0].main} / 기온: ${data.main.temp}`;
    });
}
function onGeoEroor() {
  alert("위치를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoEroor);
