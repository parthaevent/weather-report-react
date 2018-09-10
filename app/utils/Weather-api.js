import axios from 'axios';

const BASE_URL = 'http://mytest.dev';

export {getWeatherData};

function getWeatherData(city) {
    const url = `${BASE_URL}/compare/weather`;
    return axios.post(url, {place_name: city}).then(response => response.data);
}
