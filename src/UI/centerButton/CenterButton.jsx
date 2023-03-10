import React from "react";

import styles from "./CenterButton.module.scss";

const CenteredButton = ({ to, label }) => {
  return (
    <div className={styles.wrapper}>
      <a className={styles.button} href={to} target="_blank">
        {label}
      </a>
    </div>
  );
};

export default CenteredButton;
