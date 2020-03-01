import React from 'react';
import { Link } from 'react-router-dom';
import './_styles.css';
import { projectName } from '../../utils/constants';

/**
 * @name Logo
 * @description Print the logo 
 */

const Logo = () => (
    <Link to="/">
        <div className="logo">
            {projectName}
        </div>
    </Link>
);

export default Logo;