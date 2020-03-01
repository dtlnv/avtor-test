import React from 'react';
import PropTypes from 'prop-types';
import './_styles.css';

/**
 * @name Button
 * @description Print button with external handler
 * @param {void} clickHandle 
 * @param {Element} children 
 */

const Button = ({ clickHandle, children }) => (
    <button className="btn" onClick={clickHandle}>
        {children}
    </button>
);

Button.propTypes = {
    clickHandle: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired
}

export default Button;