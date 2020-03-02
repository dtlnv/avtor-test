import React from 'react';
import PropTypes from 'prop-types';
import './_styles.css';

/**
 * @name SearchCity
 * @description Print the search input
 * @param {Function} searchHandle
 */

const SearchCity = ({ searchHandle }) => (
    <input type="text" className="searchInput" onChange={searchHandle} placeholder="Type here the city name" />
);

SearchCity.propTypes = {
    searchHandle: PropTypes.func
}

export default SearchCity;