import React from "react";

import styles from "./Label.module.scss";

const Label = ({ label, htmlFor }) => {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {label}
    </label>
  );
};

export default Label;
