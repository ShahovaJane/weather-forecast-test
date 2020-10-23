import React from 'react';
import {BACKGROUND_IMAGE} from 'constants/images'
import WeatherContainer from 'containers/WeatherContainer';

function App() {
    return (
        <div className="wrap-main-container" style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}>
            <WeatherContainer />
        </div>
    );
}

export default App;
