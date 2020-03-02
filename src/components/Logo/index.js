import React from 'react';
import { Link } from 'react-router-dom';
import { projectName } from '../../utils/constants';
import './_styles.css';

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