const apiKey = "1f849040802d339704da284350cc6e32";
const weatherIcon = document.querySelector(".weather-icon")

async function getWeather(){

    const city = document.getElementById("cityName").value;
    //get coordinates. Since when? idk
    const geoResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`);
    const geoData = await geoResponse.json();
    console.log(geoData);
    if(!geoResponse.ok || geoData.length === 0){
            document.querySelector(".error").style.display= "block";
            document.querySelector(".weather").style.display = "none";
            return;
        }
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geoData[0].lat}&lon=${geoData[0].lon}&appid=${apiKey}&units=metric`)
    const data = await response.json();
    if(!response.ok){
            document.querySelector(".error").style.display= "block";
            document.querySelector(".weather").style.display = "none";
            return;
        }
    
    console.log(data);

    document.querySelector(".city").innerHTML = data.name; 
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&#176;C"; 
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"; 
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"; 

    weatherIcon.src = `/BoringWeatherApp/weather-app-img/images/${data.weather[0].main.toLowerCase()}.png`;

    document.querySelector(".weather").style.display = "block";
}