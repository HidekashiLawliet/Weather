
let W_city  = document.querySelector('.W_city')
let T_city = document.querySelector('.T_city')
let humidity = document.querySelector('.humidity')
let wind = document.querySelector('.wind')
let description = document.querySelector('.description')
let refresh = document.querySelector('.refresh')

// To change the city you want, you can modify the variable below  //
let city = 'Talence';

window.addEventListener("load", (event) => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=f5436b6a8bb258c06f5922c0752e2215&units=metric')
    .then(response => response.json())
    .then(data => {
        console.log(W_city)
        let W_cityValue = data['name'];
        let T_cityValue = data['main']['temp'];
        let windValue = data['wind']['speed'];
        let humidityValue = data['main']['humidity'];
        let descriptionValue = data['weather']['0']['description'];
        
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



