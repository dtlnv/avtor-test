import React from 'react';
import './_styles.css';
import FormatSelect from '../FormatSelect';
import MenuItem from './item';

/**
 * @name Menu
 * @description Print navigation menu and format select
 */

const Menu = () => (
    <nav>
        <ul>
            <MenuItem title="Home" link="/" />
            <MenuItem title="Cities" link="/cities" />
            <MenuItem title="News" link="/news" />
            <FormatSelect />
        </ul>
    </nav>
);

export default Menu;