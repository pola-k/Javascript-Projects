const search_city_name = document.getElementById("search_city_name")
const search_btn = document.getElementById("search")
const weather_image = document.getElementById("weather_image")
const temperature = document.getElementById("temperature")
const city_name = document.getElementById("city_name")
const humidity = document.getElementById("humidity")
const wind_speed = document.getElementById("wind_speed")
const description = document.getElementById("description")

const API_KEY = "372871ea9bdef970b2a86e19dd9e40be"

getWeatherData("Lahore")  

const weatherImages = {
    CLEAR: "images/clear.png",
    CLOUDS: "images/clouds.png",
    RAIN: "images/rain.png",
    SNOW: "images/snow.png",
    DRIZZLE: "images/drizzle.png",
    MIST: "images/mist.png",
    THUNDERSTORM: "images/thunderstorm.png",
    SMOKE: "images/smoke.png",
    HAZE: "images/haze.png",
    DUST: "images/dust.png",
    FOG: "images/fog.png",
    SAND: "images/sand.png",
    ASH: "images/ash.png",
    SQUALL: "images/squall.png",
    TORNADO: "images/tornado.png"
};

search_btn.addEventListener("click" , function()
{
    let city_name = search_city_name.value.trim()
    if(city_name == "")
    {
        alert("Please Enter City Name")
    }
    else
    {
        getWeatherData(city_name)
    }
})

function getWeatherData(city) 
{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            updateWeatherInfo(data);
        })
        .catch(error => {
            alert(error.message);
        });
}

function updateWeatherInfo(data) 
{
    city_name.textContent = data.name;

    temperature.textContent = `${Math.round(data.main.temp)}°C`;

    humidity.textContent = `${data.main.humidity}%`;

    wind_speed.textContent = `${data.wind.speed} km/h`;

    description.textContent = `${data.weather[0].main}`;

    const weatherCondition = data.weather[0].main.toUpperCase();
    const imageSrc = weatherImages[weatherCondition]
    weather_image.src = imageSrc;
}