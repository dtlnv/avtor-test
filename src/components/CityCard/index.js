import React from 'react';
import PropTypes from 'prop-types';
import { formated } from '../../utils/functions';
import { useSelector } from 'react-redux';
import './_styles.css';
import { CITIES_API_URL_MAP } from '../../utils/constants';

/**
 * @name CityCard
 * @description Print city card based on the received data
 * @param {object} weather - data from api
 * @param {boolean} current - if current city then print location icon
 * @param {function} removeHandle
 */

const CityCard = ({ weather, current = false, removeHandle = () => { } }) => {

    const format = useSelector(state => state.format);
    const data = formated(weather, format);

    if (!data) {
        return null;
    } else {
        return (
            <div className={`city center hour-${parseInt(data.cityTime)}`}>
                <iframe title={data.city} src={`${CITIES_API_URL_MAP}&q=${data.position.lat},${data.position.lon}`} className="map" />
                {!current ? <div className="removeCity" onClick={() => removeHandle(weather.cityId)}><i className="fas fa-times"></i></div> : ''}
                <div className="content">
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
            </div>
        )
    }
}

CityCard.propTypes = {
    weather: PropTypes.object.isRequired,
    current: PropTypes.bool,
    removeHandle: PropTypes.func
}

export default CityCard;