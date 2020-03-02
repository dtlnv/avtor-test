import React from 'react';
import PropTypes from 'prop-types';
import City from './city';
import { useSelector } from 'react-redux';
import './_styles.css';

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
                <City city={city} key={index} following={cities.filter(following => following.id === city.annotations.geohash).length > 0} />
            )) : null
    );
}

SearchList.propTypes = {
    list: PropTypes.array
}

export default SearchList;