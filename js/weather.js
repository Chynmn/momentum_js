// function onGeoOk(position) {
//   const lat = position.coords.latitude;
//   const lon = position.coords.longitude;
//   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       const weather = document.querySelector(
//         ".js-weather #weather span:first-child"
//       );
//       const city = document.querySelector("#weather span:last-child");
//       weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
//       city.innerText = data.name;
//     });
// }

// function onGeoError() {
//   alert("Can't find you. No weather for you");
// }

// navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

const weather = document.querySelector(".js-weather .weather__text");

function getWeather(coords) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lng}&appid=1dafe9c97635a032f14ab32b9f36d61f&units=metric`
  )
    .then((response) => response.json())
    .then((json) => {
      const name = json.name;
      const temperature = json.main.temp;
      weather.innerHTML = `${Math.floor(temperature)}℃ ${name}`;
    });
}

function handleGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const coords = {
    lat,
    lng,
  };
  localStorage.setItem("coords", JSON.stringify(coords));
  getWeather(coords);
}

function handleGeoFailure() {
  console.log("no location");
}

function loadWeather() {
  const currentCoords = localStorage.getItem("coords");
  if (currentCoords !== null) {
    const parsedCoords = JSON.parse(currentCoords);
    getWeather(parsedCoords);
    return;
  } else {
    navigator.geolocation.getCurrentPosition(
      handleGeoSuccess,
      handleGeoFailure
    );
  }
}

function init() {
  loadWeather();
}

init();
