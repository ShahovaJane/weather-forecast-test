import * as actionTypes from "../actions/actionTypes";

const initialState = {
    weather: null,
    weatherIcon: null,
    weatherResponseError: '',
};

export default function rootReducer(state = initialState, action) {

    switch (action.type) {
        case actionTypes.REQUEST_GET_WEATHER_INF_BY_CITY:
            return {
                ...state,
                weatherResponseError: '',
            };
        case actionTypes.REQUEST_GET_WEATHER_INF_BY_CITY_SUCCESS:
            return {
                ...state,
                weatherResponseError: '',
                weather: action.payload,

            };
        case actionTypes.REQUEST_GET_WEATHER_INF_BY_CITY_ERROR:
            return {
                ...state,
                weatherResponseError: action.payload,
                weather: null,
                weatherIcon: null,
            };

        default:
            return state;
    }
}
