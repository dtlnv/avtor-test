import React from 'react';
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

export default Button;