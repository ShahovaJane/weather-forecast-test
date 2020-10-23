import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

export function getWeatherByCityName(cityName) {
    return instance.get('/data/2.5/weather', { params: { q: cityName, appid: process.env.REACT_APP_WEATHER_API_KEY } })
        .then((res) => res.data);
}
