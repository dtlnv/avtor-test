import React from 'react';
import { formated } from '../../utils/functions';
import { useSelector } from 'react-redux';
import './_styles.css';

const CityCard = ({ weather, current = false }) => {
    const format = useSelector(state => state.format);
    const data = formated(weather, format);
    return (
        <div className="card center">
            {<h1>{current ? <i className="fas fa-location-arrow"></i> : ""} {data.city}</h1>}
            <div className="cityCard">
                <div className="mainData">
                    <h2>{data.temperature} {data.format.sign}</h2>
                    {<img src={data.icon} alt={data.description} />}
                    <small>{data.description}</small>
                    <p>
                        <i className="fas fa-wind"></i> {' '} {data.wind} {data.format.speed}
                    </p>
                </div>
                <div className="details">
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

export default CityCard;