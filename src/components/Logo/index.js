import React from 'react';
import { Link } from 'react-router-dom';
import './_styles.css';
import { projectName } from '../../utils/constants';

/**
 * @name Logo
 * @description Print the logo 
 */

const Logo = () => (
    <Link to="/" className="logo">
        {projectName}
    </Link>
);

export default Logo;