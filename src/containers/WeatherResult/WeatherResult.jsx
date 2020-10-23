import React from "react";
import {useSelector} from "react-redux";
import {Jumbotron} from "react-bootstrap";
import {weatherResult} from "store/selectors"

import "./styles.scss";

function WeatherResult() {
    const weather = useSelector(weatherResult);

    if (!weather || !Object.keys(weather).length) return null;
    return (
        <div className="weather-result">
            <Jumbotron>
                {weather?.weather[0] && (
                    <>
                        <img
                            alt="weather icon"
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        />
                        <h3>{weather.weather[0].main}</h3>
                    </>
                )}
                {weather?.main && (
                    <>
                        {weather.main?.temp && <p>Temperature: {weather.main.temp} Kelvin</p>}
                        {weather.main?.feels_like && <p>Temperature feels like: {weather.main.feels_like} Kelvin</p>}
                        {weather.main?.pressure && <p>Atmospheric pressure: {weather.main.pressure} hPa</p>}
                        {weather.main?.humidity && <p>Humidity: {weather.main.humidity}%</p>}
                        {weather.main?.temp_min &&
                        <p>Minimum temperature at the moment: {weather.main.temp_min} Kelvin</p>}
                        {weather.main?.temp_max &&
                        <p>Maximum temperature at the moment: {weather.main.temp_max} Kelvin</p>}
                        {weather.main?.sea_level &&
                        <p>Atmospheric pressure on the sea level: {weather.main.sea_level} hPa</p>}
                        {weather.main?.grnd_level &&
                        <p>Atmospheric pressure on the ground level: {weather.main.grnd_level} hPa</p>}
                    </>
                )
                }
                {weather?.wind && (
                    <>
                        {weather.wind?.speed && <p>Wind speed: {weather.wind.speed} meter/sec</p>}
                        {weather.wind?.deg && <p>Wind direction: {weather.wind.deg} degrees</p>}
                        {weather.wind?.gust && <p>Wind gust: {weather.wind.gust} meter/sec</p>}
                    </>
                )
                }
                {weather?.clouds.all && <p>Cloudiness: {weather.clouds.all}%</p>}

                {weather?.rain && (
                    Object.entries(weather?.rain).map((item, idx) => (
                        <p key={{idx}}>Rain volume for the last {item[0]}: {item[1]} mm</p>
                    ))
                )}
                {weather?.snow && (
                    Object.entries(weather?.snow).map((item, idx) => (
                        <p key={{idx}}>Snow volume for the last {item[0]}: {item[1]} mm</p>
                    ))
                )}
            </Jumbotron>
        </div>
    );
}

export default WeatherResult;

