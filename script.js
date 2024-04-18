
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
let city = "Talence"

window.onload = function() {  
    var pageTitle = document.title;
    var attentionMessage = 'You are missing the weather!';
    
    document.addEventListener('visibilitychange', function() {
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
    fetch("./settings.json")
        .then(response => response.json())
        .then(data => {
            if (data.city === "") {
                data.city = "Talence";
                console.error("Please set a city in the settings.json file");
            }
            city = data.city;
            console.log(`json city: ${city}`);
            return city;
    })
    .then( city =>
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f5436b6a8bb258c06f5922c0752e2215&units=metric`)
        .then(response => response.json())
        .then(data => {
            let T_cityValue = data['main']['temp'];
            let windValue = data['wind']['speed'];
            let humidityValue = data['main']['humidity'];
            let descriptionValue = data['weather']['0']['description'];
            let timezone = data['timezone']
            
            if (fahr.checked) {
                T_cityValue = T_cityValue * 1.8 + 32;
                T_cityValue = Math.round(T_cityValue * 100) / 100;
                T_city.innerHTML = T_cityValue + ' °F';
            } else {
                T_cityValue = T_cityValue;
                T_city.innerHTML = T_cityValue + ' °C';
            }
            console.log('city: ' + city)
            W_city.innerHTML = city;
            humidity.innerHTML = humidityValue;
            wind.innerHTML = windValue;
            description.innerHTML = descriptionValue;
            
            wind.innerHTML += ' Km/h (wind speed)';
            humidity.innerHTML += ' % (humidity)';
        })
    )
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

console.log('================================');

// ! Khatanga hour = Paris hours + (city.timezone(to converte in hours) - 2) 
// ! Tokyo hour = Paris hours + (city.timezone(to converte in hours) - 2)
// ! for est country
// ! for Manitoba = Paris hours + (- city.timezone(to converte in hours) - 2)


// ! for est country X = x/60 x = x/60
// ! for west country x = -x/60 x = x/60