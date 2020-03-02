import React from 'react';
import Button from '../Button';
import PropTypes from 'prop-types';
import { addCityHandle, removeCityHandle } from '../../utils/globalStorage';
import './_styles.css';

/**
 * @name City
 * @description Print the city
 * @param {object} city
 * @param {boolean} following
 */

const City = ({ city, following }) => {

    const addHandle = () => {
        addCityHandle({ id: city.annotations.geohash, name: city.formatted });
    }
    
    const removeHandle = () => {
        removeCityHandle(city.annotations.geohash);
    }

    return (
        <div className="cityInSearch">
            <div>
                <h2>
                    {city.formatted}
                </h2>
                <small>{city.country}</small>
            </div>
            <div className="details">
                {following ?
                    <Button clickHandle={removeHandle} className="red">Unfollow</Button>
                    :
                    <Button clickHandle={addHandle}>Follow</Button>
                }

            </div>
        </div>
    );
}

City.propTypes = {
    city: PropTypes.object.isRequired,
    following: PropTypes.bool
}

export default City;