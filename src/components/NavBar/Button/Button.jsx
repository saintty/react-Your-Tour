import React from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

const Button = ({ open, setOpen }) => {
  return (
    <button
      className={classNames(styles.button, open && styles.open)}
      onClick={setOpen}
    >
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </button>
  );
};

export default Button;
