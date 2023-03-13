import React from "react";
import PropTypes from "prop-types";

import styles from "./ButtonRow.module.scss";

const ButtonRow = React.memo(({ children }) => {
  return <div className={styles.row}>{children}</div>;
});

ButtonRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element).isRequired,
  ]).isRequired,
};

export default ButtonRow;
