const apikey = "c5ca07d9928444245be3e431b4613e84";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + apikey;
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search .pp");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiurl + "&q=" + city);

    if(response.status==404)
    {
        document.querySelector(".error").style.display="block";
    }
    const data = await response.json();
    // console.log(data);

    // Update the elements with weather data
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humid").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    console.log(data.weather[0].main);

    if (data.weather[0].main.includes("Cloud")) {
        weatherIcon.src = "snow_cloud-removebg-preview.png";
    } else if (data.weather[0].main.includes("Clear")) {
        weatherIcon.src = "sunnnnn-removebg-preview.png";
    } else if (data.weather[0].main.includes("Rain")) {
        weatherIcon.src = "rainys-removebg-preview.png";
    } else if (data.weather[0].main.includes("Drizzle")) {
        weatherIcon.src = "rainy-removebg-preview.png";
    } else if (data.weather[0].main.includes("Mist")) {
        weatherIcon.src = "cloud-removebg-preview.png";
    }
    document.querySelector(".weather").style.display="block"
}

searchBtn.addEventListener("click", () => {
    const cityName = searchBox.value;
    if (cityName) {
        checkWeather(cityName);
    } else {
        alert("Please enter a city name.");
    }
})

checkWeather("Mumbai");
