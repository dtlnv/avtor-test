import React from "react";
import { Button } from "../../Common/UI";
import PropTypes from "prop-types";
import { useSaveCity } from "../../../utils/hooks";
import "./_styles.scss";

/**
 * @name City
 * @description Print the city in the search
 * @param {object} city
 * @param {boolean} following
 */

const City = ({ city, following }) => {
  const save = useSaveCity();

  const clickAction = (toFollow) => {
    save({ id: city.annotations.geohash, name: city.formatted }, toFollow ? "add" : "remove");
  };

  return city.formatted ? (
    <div className="city_in_search">
      <div className="city_name">{city.formatted}</div>
      <div className="details">
        <Button onClick={() => clickAction(!following)} className={following ? "red" : ""}>
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
