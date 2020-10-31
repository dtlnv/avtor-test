import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * @name MenuItem
 * @description Print one menu item based on received data
 * @param {string} title
 * @param {string} link
 */

const MenuItem = ({ title = "", link = "" }) =>
  title &&
  link && (
    <li>
      <Link
        to={link}
        className={document.location.pathname === link ? "active" : ""}>
        {title}
      </Link>
    </li>
  );

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default MenuItem;
