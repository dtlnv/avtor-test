import React from 'react';
import './_styles.css';
import City from './city';
import { useSelector } from 'react-redux';

/**
 * @name SearchList
 * @description Print searched list of the cities
 * @param {array} list
 */

const SearchList = ({ list }) => {
    const cities = useSelector(store => store.cities) || [];
    return (
        list.length > 0 ?
            list.map(((city, index) =>
                <City city={city} key={index} following={cities.filter(following => following.id === city.id).length > 0} />
            )) : null
    );
}

export default SearchList;