import React from 'react';
import PropTypes from 'prop-types';
import './_styles.css';

/**
 * @name Button
 * @description Print button with external handler
 * @param {function} clickHandle 
 * @param {Element} children 
 * @param {string} className
 */

const Button = ({ clickHandle, children, className = '' }) => (
    <button className={`btn ${className}`} onClick={clickHandle}>
        {children}
    </button>
);

Button.propTypes = {
    clickHandle: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired,
    className: PropTypes.string
}

export default Button;