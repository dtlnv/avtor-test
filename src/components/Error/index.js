import React from 'react';
import './_styles.css';

const Error = ({ children }) => (
    <>
        <i className="sadicon far fa-sad-cry"></i>
        {children ? children : 'Please reload page later.'}
    </>
);

export default Error;