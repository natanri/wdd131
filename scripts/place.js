const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = ` ${today.getFullYear()}`; 

const lastModifiedElement = document.querySelector("#lastModified");
lastModifiedElement.textContent = `${today.toLocaleString()}`

function calculateWindChillAndUpdateHTML(temperature, windSpeed){

    let windChill = temperature - (0.2 * windSpeed);

    document.getElementById('Temperature').value = temperature + '°C';
    document.getElementById('Wind').value = windSpeed + 'km/h'
    document.getElementById('wind_chill').value = windChill.toFixed(2) + '°C'
}

function checkAndCalculateWindChill(temperature, windSpeed){
    if((temperature <= 10 && windSpeed > 4.8) || (temperature <= 50 && windSpeed > 3)){
        calculateWindChillAndUpdateHTML(temperature, windSpeed)
    }else{
        alert("Please enter valid values for Temperature and Wind Speed.")
    }
}

const temperatureCelsius = 17;
const windKmHour = 10;

checkAndCalculateWindChill(temperatureCelsius, windKmHour)