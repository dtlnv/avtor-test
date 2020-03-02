import React from 'react';
import './_styles.css';

/**
 * @name Error
 * @description Print error block
 * @param {Element} children 
 */

const Error = ({ children }) => (
    <div className="error">
        <i className="sadicon far fa-sad-cry"></i>
        {children ? children : 'Please reload page later.'}
    </div>
);

export default Error;