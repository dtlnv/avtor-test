import React from 'react';
import './_styles.css';
import Button from '../Button';
import { addCityHandle, removeCityHandle } from '../../utils/globalStorage';

/**
 * @name City
 * @description Print the city
 * @param {object} city
 * @param {boolean} following
 */

const City = ({ city, following }) => {

    const addHandle = () => {
        addCityHandle({ id: city.id, lat: city.latitude, lon: city.longitude });
    }
    const removeHandle = () => {
        removeCityHandle(city.id);
    }

    return (
        <div className="cityInSearch">
            <div>
                <h2>
                    {city.name}
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
export default City;