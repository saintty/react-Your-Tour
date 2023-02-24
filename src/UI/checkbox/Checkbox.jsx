import React from "react";

import styles from "./Checkbox.module.scss";

const Checkbox = ({ id, label, children }) => {
  return (
    <>
      <input id={id} className={styles.input} type="checkbox" />
      <label htmlFor={id} className={styles.label}>
        {label}
        {children}
      </label>
    </>
  );
};

export default Checkbox;
