const argv = require('yargs').options({
    direction: {
        alias: 'd',
        desc: 'Dirección de la ciudad',
        demand: true
    }
}).argv;

const place = require('./place/place');
const weather = require('./weather/weather');

//var lat;
//var lng;

console.log(argv.direction);

const getInfo = async(direction) => {
    try {
        const coords = await place.getPlaceLatLng(direction);
        const temp = await weather.getWeather(coords.lat, coords.lng);
        return `La temperatura en ${direction} es de ${temp}º`;

    } catch (error) {
        return `No se pudo determinar el clima de ${direction}`;
    }
}

getInfo(argv.direction)
    .then(console.log)
    .catch(console.log);