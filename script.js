const options = {
    method: 'GET',
    // headers: {
    //     'X-RapidAPI-Key': 'efbdb81ed2msh4fcc6b9530921bap101f0bjsn150281adb9cb',
    //     'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    // }
};
var main

const getWeather = (city) => {
    cityname.innerHTML = city
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + 'da0d5fadcf84636d0180797444d1819a', options)
        .then(response => response.json())
        .then(response => {


            console.log(response)
            const hours = (new Date(response.dt * 1000)).getHours();
            
            if(hours >= 18) {
                document.getElementById('DN').style.cssText += `background-image:url('Night.jpg');background-size: cover; color: white;`;
            } else if (hours >= 12) {
                document.getElementById('DN').style.cssText += `background-image:url('Afternoon.jpg');background-size: cover; color: white;`;
            } else if (hours > 0) {
                document.getElementById('DN').style.cssText += `background-image:url('Day.jpg');background-size: cover;`;
            } 
            console.log(hours)
            lat.innerHTML = response.coord.lat
            lon.innerHTML = response.coord.lon
            feels_like.innerHTML = response.main.feels_like
            humidity.innerHTML = response.main.humidity
            temp_min.innerHTML = (response.main.temp_min - 273.15).toFixed(2)
            temp_max.innerHTML = (response.main.temp_max - 273.15).toFixed(2)
            temp.innerHTML = (response.main.temp - 273.15).toFixed(2)
            dt.innerHTML = new Date(response.dt * 1000)
            country.innerHTML = response.sys.country
            timezone.innerHTML = new Date(response.timezone * 1000)
            visibility.innerHTML = response.visibility
            description.innerHTML = response.weather[0].description
            //icon.innerHTML = response.weather[0].icon
            pressure.innerHTML = response.main.pressure
            deg.innerHTML = response.wind.deg
            speed.innerHTML = response.wind.speed
            sunrise.innerHTML = new Date(response.sys.sunrise * 1000)
            sunset.innerHTML = new Date(response.sys.sunset * 1000)
            //document.getElementById('main').style.background = 'url('+response.weather[0].main + ".jpg"+')';
            document.getElementById('main').style.cssText += `background-image:url(${response.weather[0].main + ".jpg"});background-size: cover;`;

        })
        .catch(err => console.error(err));

}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Hyderabad")
