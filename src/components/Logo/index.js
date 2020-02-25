import React from 'react';
import { Link } from 'react-router-dom';
import './_styles.css';

const Menu = () => (
    <Link to="/">
        <div className="logo">
            Weather
        </div>
    </Link>
);

export default Menu;