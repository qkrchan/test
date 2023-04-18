const API_KEY = "d915f0ff80584f2fb62adfc29e388b99";


function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;  
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(URL).then(response => response.json())
    .then((data) => {
    const weatherDiv = document.querySelector("#weather");
    const weather = weatherDiv.querySelector("span:first-child");
    const city = weatherDiv.querySelector("span:nth-child(2)");  
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;

    const weatherIconCode = data.weather[0].icon;
    const weatherIcon = document.createElement("img");
    weatherIcon.src = `img/icons/${weatherIconCode}.png`;
    weatherDiv.appendChild(weatherIcon);
  });
}
function onGeoError(){
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
