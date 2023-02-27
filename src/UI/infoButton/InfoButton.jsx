import React from "react";

import styles from "./InfoButton.module.scss";
import icon from "./arrow.svg";

const InfoButton = ({ label }) => {
  return (
    <button className={styles.button}>
      <span className={styles.label}>{label}</span>
      <img className={styles.icon} src={icon} alt="Иконка кнопки информации" />
    </button>
  );
};

export default InfoButton;
