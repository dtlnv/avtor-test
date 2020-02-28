import React from 'react';
import { WIcon } from '../../utils/constants';
import { STORAGE } from '../../utils/globalStorage';
import { getFormatIcon, getTime } from '../../utils/functions';
import './_styles.css';

const CurrentCityWeather = ({ weather }) => {
    console.log(weather);
    const icon = getFormatIcon(STORAGE.getItem('format'));
    return (
        <div className="card center">
            {<h1><i className="fas fa-location-arrow"></i> {weather.name}</h1>}
            <div className="cityCard">
                <div className="mainData">
                    <small>{weather.weather[0].description}</small>
                    {<img src={WIcon(weather.weather[0].icon)} alt={weather.name} />}
                    <h2>{weather.main.temp} {icon}</h2>
                    <small>Feels like: {weather.main.feels_like} {icon}</small>
                </div>
                <div className="details">
                    <dl>
                        <dt>Pressure</dt>
                        <dd>{weather.main.pressure}mb</dd>
                    </dl>
                    <dl>
                        <dt>Humidity</dt>
                        <dd>{weather.main.humidity}%</dd>
                    </dl>
                    <dl>
                        <dt>Sunrise</dt>
                        <dd>{getTime(weather.sys.sunrise)}</dd>
                    </dl>
                    <dl>
                        <dt>Sunset</dt>
                        <dd>{getTime(weather.sys.sunset)}</dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default CurrentCityWeather;