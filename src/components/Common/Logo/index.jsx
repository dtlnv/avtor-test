import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECT_NAME } from '../../../utils/constants';
import './_styles.scss';

/**
 * @name Logo
 * @description Print the logo 
 */

const Logo = () => (
    <Link to="/" className="logo">
        {PROJECT_NAME}
    </Link>
);

export default Logo;