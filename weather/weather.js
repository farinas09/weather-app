const axios = require('axios');

const getWeather = async(lat, lng) => {

    resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=202a5581ce845d6ad77e6ae69838d7da&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getWeather
}