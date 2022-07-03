AOS.init();
const api = {
    key: '4f57fd692db7c157d97e4ca485496564',
    url: `https://api.openweathermap.org/data/2.5/weather`
}

const card = document.getElementById('card')
const alert = document.getElementById('alert-error')

const city = document.getElementById('city');
const date = document.getElementById('date');
const tempImg = document.getElementById('temp-img');
const temp = document.getElementById('temp');
const weather = document.getElementById('weather');
const range = document.getElementById('minimamaximatem');

function updateImages(codigo) {
    let src = `http://openweathermap.org/img/wn/${codigo}@4x.png`;

    tempImg.src = src;
}

async function search(query) {
    try {
        const response = await fetch(`${api.url}?q=${query}&appid=${api.key}&lang=es`);
        const data = await response.json();
        card.style.display = 'block';
        city.innerHTML = `${data.name}, ${data.sys.country}`;
        date.innerHTML = (new Date()).toLocaleDateString();
        temp.innerHTML = `${toCelsius(data.main.temp)}c`;
        weather.innerHTML = data.weather[0].description;
        range.innerHTML = `${toCelsius(data.main.temp_min)}c / ${toCelsius(data.main.temp_max)}c`;
        updateImages(data.weather[0].icon);
    } catch (err) {
        console.log(err);
        alerta();

    }
}

function alerta() {
    swal({
        title:"Ciudad no encontrada.",
        text: "",
        icon: "error",

        dangerMode: true,
    })
}

function toCelsius(kelvin) {
    return Math.round(kelvin - 273.15);
}

function onSubmit(event) {
    event.preventDefault();
    search(searchbox.value);
}

const searchform = document.getElementById('search-form');
const searchbox = document.getElementById('searchbox');
searchform.addEventListener('submit', onSubmit, true);
