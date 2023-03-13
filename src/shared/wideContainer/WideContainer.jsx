import React from "react";
import PropTypes from "prop-types";

import styles from "./WideContainer.scss";

const WideContainer = React.memo(({ children }) => {
  return <div className={styles.container}>{children}</div>;
});

WideContainer.propTypes = {
  children: PropTypes.node,
};

export default WideContainer;
