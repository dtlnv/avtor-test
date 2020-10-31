import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { formated } from "../../../utils/functions";
import { useSelector } from "react-redux";
import "./_styles.scss";
import Error from "../../Common/Error";
import { useRemoveCity } from "../../../utils/hooks";

/**
 * @name CityCard
 * @description Renders city card based on the received data
 * @param {object} city - city data from api
 * @param {boolean} current - if current city - display location icon
 */
const CityCard = ({ city, current = false }) => {
  const [weather, setWeather] = useState(null);
  const format = useSelector((state) => state.format);
  const remove = useRemoveCity();

  useEffect(() => {
    if (Object.keys(city).length > 0) {
      if (!city.error) {
        setWeather(formated(city, format));
      } else {
        setWeather({ city: city.name, error: true });
      }
    }
  }, [city, format]);

  const removeCityAction = () => {
    remove(city.cityId);
  };

  if (!weather) {
    return null;
  } else {
    return (
      <div
        className={`city center ${weather.cityTime ? `hour-${parseInt(weather.cityTime)}` : ""}`}>
        {!current ? (
          <div className="remove-city" title="Unfollow" onClick={removeCityAction}>
            <i className="fas fa-times"></i>
          </div>
        ) : null}
        <div className="content">
          <h2>
            {current ? <i className="fas fa-location-arrow"></i> : ""}
            {weather.city}
            {weather.countryCode ? ", " + weather.countryCode : null}
          </h2>
          {weather.error ? <Error /> : null}
          {weather.cityTime ? (
            <div className="temperature">
              <h3>{weather.cityTime}</h3>
              <img src={weather.icon} alt={weather.description} />
              <h3>
                {weather.temperature}
                {weather.format.sign}
              </h3>
            </div>
          ) : null}
          <div className="details">
            <Detail title="Wind">
              {weather.wind ? weather.wind + " " + weather.format.speed : null}
            </Detail>
            <Detail title="Pressure">{weather.pressure ? weather.pressure + "mb" : null}</Detail>
            <Detail title="Humidity">{weather.humidity ? weather.humidity + "%" : null}</Detail>
            <Detail title="Sunrise">{weather.sunrise ? weather.sunrise : null}</Detail>
            <Detail title="Sunset">{weather.sunset ? weather.sunset : null}</Detail>
          </div>
        </div>
      </div>
    );
  }
};

CityCard.propTypes = {
  city: PropTypes.object.isRequired,
  current: PropTypes.bool,
};

const Detail = ({ title, children }) =>
  children ? (
    <dl>
      <dt>{title}</dt>
      <dd>{children}</dd>
    </dl>
  ) : null;

Detail.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string,
};

export default CityCard;
