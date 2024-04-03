
var W_city  = document.querySelector('.W_city')
var T_city = document.querySelector('.T_city')
var humidity = document.querySelector('.humidity')
var wind = document.querySelector('.wind')
var description = document.querySelector('.description')
var refresh = document.querySelector('.refresh')

// To change the city you want, you can modify the variable below  //
var city = 'Bordeaux';

window.addEventListener("load", (event) => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=f5436b6a8bb258c06f5922c0752e2215&units=metric')
    .then(response => response.json())
    .then(data => {
        console.log(W_city)
        var W_cityValue = data['name'];
        var T_cityValue = data['main']['temp'];
        var windValue = data['wind']['speed'];
        var humidityValue = data['main']['humidity'];
        var descriptionValue = data['weather']['0']['description'];
        
        W_city.innerHTML = W_cityValue;
        T_city.innerHTML = T_cityValue;
        humidity.innerHTML = humidityValue;
        wind.innerHTML = windValue;
        description.innerHTML = descriptionValue;
        
        T_city.innerHTML += ' °C';
        wind.innerHTML += ' Km/h (wind speed)';
        humidity.innerHTML += ' % (humidity)';
    })
  });
