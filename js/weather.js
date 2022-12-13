const APIKey = "31a17dd6d7d8078c10a697f8154e895a";

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weatherContainer = document.querySelectorAll("#weather span");
        const weatherIcon = document.createElement("img");
        weatherIcon.classList.add("icon");
        weatherIcon.src = `img/icon/${data.weather[0].icon}.png`;
        console.log(weatherIcon.src);
        weatherContainer[0].appendChild(weatherIcon);
        weatherContainer[1].innerHTML = ` ${data.weather[0].main} &nbsp;&nbsp;${data.main.temp}° &nbsp;&nbsp;${data.main.temp_max}°/${data.main.temp_min}° &nbsp;&nbsp;${data.name}`;
    });
}

function onGeoError() {
    alert("getCurrentPosition error!");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);