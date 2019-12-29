import React from 'react';
import WeatherIcons from 'react-weathericons';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY
} from './../constants/weathers';


const icons = {
    sun: "day-sunny",
    fog: "day-fog",
    cloud: "cloud",
    cloudy: "cloudy",
    snow: "snow",
    windy: "windy",
    rain: "rain"
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if (icon)
        return <WeatherIcons name={icon} size="2x"></WeatherIcons>;

    else
        return <WeatherIcons name="day-sunny" size="2x"></WeatherIcons>;
}

const WeatherTemperature = ({temperature,weatherState}) => (
    <div>
        {
            getWeatherIcon(weatherState)
        }
        <span>{`${temperature} Cº`}</span>
    </div>
);

export default WeatherTemperature;