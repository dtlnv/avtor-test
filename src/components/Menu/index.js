import React from 'react';
import { Link } from 'react-router-dom';
import './_styles.css';

const Menu = () => (
    <nav>
        <ul>
            <MenuItem title="Home" link="/" />
            <MenuItem title="Cities" link="/cities" />
            <MenuItem title="News" link="/news" />
        </ul>
    </nav>
);

const MenuItem = ({ title, link }) => (
    <li>
        <Link to={link} className={document.location.pathname === link ? 'active' : ''}>
            {title}
        </Link>
    </li>
);

export default Menu;