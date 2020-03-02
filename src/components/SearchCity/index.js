import React from 'react';
import './_styles.css';

/**
 * @name SearchCity
 * @description Print the search input
 * @param {Function} searchHandle
 */

const SearchCity = ({ searchHandle }) => (
    <input type="text" className="searchInput" onChange={searchHandle} placeholder="Type the city name" />
);

export default SearchCity;