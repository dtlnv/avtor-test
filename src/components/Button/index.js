import React from 'react';
import './_styles.css';

const Button = ({ clickHandle, children }) => (
    <button className="btn" onClick={clickHandle}>
        {children}
    </button>
);

export default Button;