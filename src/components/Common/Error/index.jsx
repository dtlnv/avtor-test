import React from "react";
import PropTypes from "prop-types";

const Error = ({ title = "Ooops.", children = "Something went wrong" }) => (
  <div className="center">
    <h1>{title}</h1>
    {children}
  </div>
);

Error.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string,
};

export default Error;
