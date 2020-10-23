import React from "react";
import {Container, Row, Col} from "react-bootstrap";

import WeatherForm from "../WeatherForm";
import WeatherResult from "../WeatherResult";
import "./styles.scss";

function WeatherContainer() {

    return (
        <Container fluid className="weather-wrap-container">
            <Row>
                <Col xs={12}>
                    <WeatherForm/>
                </Col>
                <Col xs={12}>
                    <WeatherResult/>
                </Col>
            </Row>
        </Container>

    );
}

export default WeatherContainer;

