import React from "react";
import PropTypes from "prop-types";

import styles from "./CenterButton.module.scss";

const CenterButton = ({ to, label }) => {
  return (
    <div className={styles.wrapper}>
      <a className={styles.button} href={to} target="_blank">
        {label}
      </a>
    </div>
  );
};

CenterButton.propTypes = {
  to: PropTypes.string,
  label: PropTypes.string,
};

CenterButton.defaultProps = {
  to: "/",
  label: "Перейти",
};

export default CenterButton;
