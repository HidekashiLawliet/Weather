
let W_city  = document.querySelector('.W_city')
let T_city = document.querySelector('.T_city')
let humidity = document.querySelector('.humidity')
let wind = document.querySelector('.wind')
let description = document.querySelector('.description')
let refresh = document.querySelector('.refresh')
let cels = document.querySelector('.cels')
let fahr = document.querySelector('.fahr')
let temp

// To change the city you want, you can modify the variable below  //
let city = 'Talence';

console.log("this page will automatically refresh every 5 minutes")

setInterval(function() {
    location.reload();
}, 300000);


fahr.addEventListener('change', function() {
    if (fahr.checked) {
        location.reload();
    }
});
cels.addEventListener('change', function() {
    if (cels.checked) {
        location.reload();
    }
});
window.addEventListener("load", (event) => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=f5436b6a8bb258c06f5922c0752e2215&units=metric')
    .then(response => response.json())
    .then(data => {
        let W_cityValue = data['name'];
        let T_cityValue = data['main']['temp'];
        let windValue = data['wind']['speed'];
        let humidityValue = data['main']['humidity'];
        let descriptionValue = data['weather']['0']['description'];
        temp = T_cityValue;
        
        
        if (fahr.checked) {
            temp = temp * 1.8 + 32;
            temp =Math.round(temp * 100) / 100;
            console.log(temp);
        } else {
            temp = T_cityValue;
        }
        T_city.innerHTML = temp;
        W_city.innerHTML = W_cityValue;
        humidity.innerHTML = humidityValue;
        wind.innerHTML = windValue;
        description.innerHTML = descriptionValue;
        
        T_city.innerHTML += ' °C';
        wind.innerHTML += ' Km/h (wind speed)';
        humidity.innerHTML += ' % (humidity)';
    })
});



