import React from "react";
import PropTypes from "prop-types";
import "./_styles.scss";

/**
 * @name Button
 * @description Renders the custom button
 * @param {any} children
 * @param {string} className
 * @param {any} props - any of the button attributes
 */
const Button = ({ children, className = "", ...props }) => (
  <button className={`btn ${className}`} {...props}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Button;
