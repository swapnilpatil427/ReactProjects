var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=86ac54b40a42cbb4817afa652aebf392&units=imperial';

module.exports = {
    getTemp : function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requesturl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        return axios.get(requesturl).then(function (res) {
            if (res.data.cod && res.data.message) {
                throw new Error ('Error : City not found');
            } else {
                return res.data.main.temp;
            }
        }, function (res) {
            throw new Error('Error : City not found');
        });
    }
}