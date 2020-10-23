import React, {useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";

import {Button, Form} from "react-bootstrap";

import ErrorMessage from "components/ErrorMessage"
import FormInput from "components/FormInput"
import {requestGetWeatherInfByCity} from "store/actions"
import {weatherError} from "store/selectors"

import "./styles.scss";

function WeatherForm() {
    const {register, errors, handleSubmit} = useForm();
    const [hideErrorOnChangeInput, setHideErrorOnChangeInput] = useState(false);

    const weatherResponseError = useSelector(weatherError);
    const dispatch = useDispatch();

    const getWeatherInfByCity = useCallback(
        (data) => dispatch(requestGetWeatherInfByCity(data)),
        [dispatch]
    );

    const onGetWeather = useCallback((data) => {
        getWeatherInfByCity(data.city);
        setHideErrorOnChangeInput(false);
    }, [getWeatherInfByCity]);

    const onChangeInput = useCallback(() => {
        setHideErrorOnChangeInput(true);
    }, []);

    return (
        <Form className="container weather-form">
            <FormInput
                name={"city"}
                type={"text"}
                placeholder={"Enter city"}
                ref={register({ required: "Field is required!" })}
                valid={errors?.city?.message}
                onChange={onChangeInput}
            />
            <Button
                children={"Get"}
                variant="primary"
                type="submit"
                onClick={handleSubmit(onGetWeather)}
            />
            {!hideErrorOnChangeInput && !!weatherResponseError && <ErrorMessage message={weatherResponseError}/>}
        </Form>

    );
}

export default WeatherForm;
