import React from "react";
import PropTypes from "prop-types";
import City from "./City";
import { useSelector } from "react-redux";
import "./_styles.scss";

/**
 * @name CitiesList
 * @description Print searched list of the cities
 * @param {array} list
 */

const CitiesList = ({ list = [] }) => {
  const cities = useSelector((store) => store.cities) || [];

  return (
    <div className="cities-list">
      {list.map((city, index) => (
        <City
          key={index}
          city={city}
          following={!!cities.find((following) => following.id === city.annotations.geohash)}
        />
      ))}
    </div>
  );
};

CitiesList.propTypes = {
  list: PropTypes.array,
};

export default CitiesList;
