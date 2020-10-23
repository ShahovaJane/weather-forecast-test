import * as actionTypes from './actionTypes';

export const requestGetWeatherInfByCity = (city) => ({
    type: actionTypes.REQUEST_GET_WEATHER_INF_BY_CITY,
    city,
});
export const requestGetWeatherInfByCitySuccess = (payload) => ({
    type: actionTypes.REQUEST_GET_WEATHER_INF_BY_CITY_SUCCESS,
    payload,
});
export const requestGetWeatherInfByCityError = (payload) => ({
    type: actionTypes.REQUEST_GET_WEATHER_INF_BY_CITY_ERROR,
    payload,
});


