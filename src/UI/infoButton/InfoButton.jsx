import React from "react";
import PropTypes from "prop-types";

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

InfoButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default InfoButton;
