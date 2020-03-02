import React from 'react';
import PropTypes from 'prop-types';
import { formated } from '../../utils/functions';
import { useSelector } from 'react-redux';
import './_styles.css';

/**
 * @name CityCard
 * @description Print city card based on the received data
 * @param {object} weather - data from api
 * @param {boolean} current - if current city then print location icon
 */

const CityCard = ({ weather, current = false, removeHandle = () => {} }) => {

    const format = useSelector(state => state.format);
    const data = formated(weather, format);

    return (
        <div className={`city center hour-${parseInt(data.cityTime)}`}>
            {!current ? <div className="removeCity" onClick={() => removeHandle(weather.cityId)}><i className="fas fa-times"></i></div> : ''}
            <h2>{current ? <i className="fas fa-location-arrow"></i> : ""} {data.city}, {data.countryCode}</h2>
            <div className="temperature">
                <h3>{data.cityTime}</h3>
                <img src={data.icon} alt={data.description} />
                <h3>{data.temperature}{data.format.sign}</h3>
            </div>
            <div className="details">
                <dl>
                    <dt>Wind</dt>
                    <dd>
                        {data.wind} {data.format.speed}
                    </dd>
                </dl>
                <dl>
                    <dt>Pressure</dt>
                    <dd>{data.pressure} mb</dd>
                </dl>
                <dl>
                    <dt>Humidity</dt>
                    <dd>{data.humidity}%</dd>
                </dl>
                <dl>
                    <dt>Sunrise</dt>
                    <dd>{data.sunrise}</dd>
                </dl>
                <dl>
                    <dt>Sunset</dt>
                    <dd>{data.sunset}</dd>
                </dl>
            </div>
        </div>
    )
}

CityCard.propTypes = {
    weather: PropTypes.object.isRequired,
    current: PropTypes.bool
}

export default CityCard;