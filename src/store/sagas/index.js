import {call, put, takeEvery, all} from "redux-saga/effects";

import { getWeatherByCityName } from "api";

import {
    requestGetWeatherInfByCitySuccess,
    requestGetWeatherInfByCityError,
} from "../actions";

import * as actionTypes from "../actions/actionTypes";

function* getWeatherInfByCity({city}) {
    try {
        const data = yield call(getWeatherByCityName, city);

        yield put(requestGetWeatherInfByCitySuccess(data));
    } catch (err) {
        yield put(requestGetWeatherInfByCityError(err.response.data.message));
    }
}

export function* watcherSaga() {
    yield takeEvery(actionTypes.REQUEST_GET_WEATHER_INF_BY_CITY, getWeatherInfByCity);
}

export default function* rootSaga() {
    yield all([
        watcherSaga()
    ]);
};
