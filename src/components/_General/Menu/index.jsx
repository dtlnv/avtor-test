import React from "react";
import FormatSelect from "../FormatSelect";
import MenuItem from "./MenuItem";
import "./_styles.scss";

/**
 * @name Menu
 * @description Renders the navigation menu and format select
 */
const Menu = () => (
  <nav className="menu">
    <ul>
      <MenuItem title="Home" link="/" />
      <MenuItem title="Add City" link="/cities" />
      <MenuItem title="News" link="/news" />
      <FormatSelect />
    </ul>
  </nav>
);

export default Menu;
