import React from "react";
import PropTypes from "prop-types";

/**
 * @name Error
 * @description Renders the error block
 * @param {string} title 
 * @param {any} children
 */
const Error = ({ title = "Ooops.", children = "Something went wrong" }) => (
  <div className="center">
    <h1>{title}</h1>
    {children}
  </div>
);

Error.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};

export default Error;
