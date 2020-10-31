import React from "react";
import PropTypes from "prop-types";
import "./_styles.scss";

/**
 * @name Input
 * @description Print the search input
 * @param {String} type
 */

const Input = ({ type = "text", ...props }) => (
  <input type={type} className="input" {...props} />
);

Input.propTypes = {
  type: PropTypes.string,
  props: PropTypes.any,
};

export default Input;
