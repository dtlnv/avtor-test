import React from 'react';
import { Link } from 'react-router-dom';
import './_styles.css';

const Menu = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/cities">
                    Cities
                </Link>
            </li>
            <li>
                <Link to="/news">
                    News
                </Link>
            </li>
        </ul>
    </nav>
);

export default Menu;