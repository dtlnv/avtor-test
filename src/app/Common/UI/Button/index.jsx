import React from 'react';
import PropTypes from 'prop-types';
import './_styles.scss';

/**
 * @name Button
 * @description Print button with external handler
 * @param {Element} children 
 * @param {string} className
 */

const Button = ({ children, className = '', ...rest }) => (
    <button className={`btn ${className}`} {...rest}>
        {children}
    </button>
);

Button.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string
}

export default Button;