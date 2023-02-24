import React from "react";

import styles from "./InfoButton.module.scss";
import icon from "./arrow.svg";

const InfoButton = ({ label }) => {
  return (
    <div className={styles.button}>
      <span className={styles.label}>{label}</span>
      <img className={styles.icon} src={icon} alt="Иконка кнопки информации"/>
    </div>
  );
};

export default InfoButton;
