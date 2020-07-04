const axios = require('axios');


const getPlaceLatLng = async(direction) => {
    const params = {
        auth: '131704056629979e15938979x6489',
        locate: direction,
        json: '1'
    }

    const resp = await axios.get('https://geocode.xyz', { params })

    //console.log(resp.data);

    const lat = resp.data.latt;
    const lng = resp.data.longt;

    return {
        direction,
        lat,
        lng
    }
}

module.exports = {
    getPlaceLatLng
}