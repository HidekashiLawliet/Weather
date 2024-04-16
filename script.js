
let W_city  = document.querySelector('.W_city')
let T_city = document.querySelector('.T_city')
let humidity = document.querySelector('.humidity')
let wind = document.querySelector('.wind')
let description = document.querySelector('.description')
let refresh = document.querySelector('.refresh')
let cels = document.querySelector('.cels')
let fahr = document.querySelector('.fahr')
let temp = 0;
let clock = document.querySelector('.clock')


// To change the city you want, you can modify the variable below  //
let city = 'Talence';

window.onload = function() {

    var pageTitle = document.title;
    var attentionMessage = 'You are missing the weather!';
    
    document.addEventListener('visibilitychange', function() {
        console.log(document.hidden);
        document.title = document.hidden?  `${attentionMessage} \u{1F622}` : pageTitle;  
    });
}

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
        
        
        if (fahr.checked) {
            T_cityValue = T_cityValue * 1.8 + 32;
            T_cityValue = Math.round(T_cityValue * 100) / 100;
            T_city.innerHTML = T_cityValue + ' °F';
        } else {
            T_cityValue = T_cityValue;
            T_city.innerHTML = T_cityValue + ' °C';
        }
        W_city.innerHTML = W_cityValue;
        humidity.innerHTML = humidityValue;
        wind.innerHTML = windValue;
        description.innerHTML = descriptionValue;
        
        wind.innerHTML += ' Km/h (wind speed)';
        humidity.innerHTML += ' % (humidity)';
    })
});


setInterval(function() {
    upDate();
}, 1000);

function upDate() {
    let date = new Date();
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');;
    let seconds = date.getSeconds().toString().padStart(2, '0');;

    clock.innerHTML = hours + ':' + minutes + ':' + seconds;
}

