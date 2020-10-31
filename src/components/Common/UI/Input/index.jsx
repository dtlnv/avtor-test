import React from "react";
import PropTypes from "prop-types";
import "./_styles.scss";

/**
 * @name Input
 * @description Renders the custom input
 * @param {string} type
 * @param {any} rest - any of the button attributes
 */
const Input = ({ type = "text", ...props }) => <input type={type} className="input" {...props} />;

Input.propTypes = {
  type: PropTypes.string,
  props: PropTypes.any,
};

export default Input;
