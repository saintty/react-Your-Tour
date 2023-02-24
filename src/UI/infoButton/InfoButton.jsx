import React from "react";

import styles from "./InfoButton.module.scss";
import icon from "./arrow-right.svg";

const InfoButton = ({ label }) => {
  return (
    <div className={styles.button}>
      <span className={styles.label}>{label}</span>
      <img className={styles.icon} src={icon} />
    </div>
  );
};

export default InfoButton;
