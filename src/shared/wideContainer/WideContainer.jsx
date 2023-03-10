import React from "react";
import PropTypes from "prop-types";

import styles from "./WideContainer.scss";

const WideContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

WideContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default WideContainer;
