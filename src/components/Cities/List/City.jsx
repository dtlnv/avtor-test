import React from "react";
import { Button } from "../../_General/UI";
import PropTypes from "prop-types";
import { useAddCity, useRemoveCity } from "../../../utils/hooks";
import "./_styles.scss";

/**
 * @name City
 * @description Renders the city in the search
 * @param {object} city
 * @param {boolean} following
 */
const City = ({ city, following }) => {
  const [add, remove] = [useAddCity(), useRemoveCity()];

  const clickAction = (toFollow) => {
    if (toFollow) {
      add({ id: city.annotations.geohash, name: city.formatted });
    } else {
      remove(city.annotations.geohash);
    }
  };

  return city.formatted ? (
    <div className="city-in-search">
      <div className="city-name">{city.formatted}</div>
      <div className="details">
        <Button
          onClick={() => clickAction(!following)}
          className={`add-city-button ${following ? "red" : ""}`}>
          {following ? "Unfollow" : "Follow"}
        </Button>
      </div>
    </div>
  ) : null;
};

City.propTypes = {
  city: PropTypes.object.isRequired,
  following: PropTypes.bool,
};

export default City;
