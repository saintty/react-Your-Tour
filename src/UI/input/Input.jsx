import React from "react";

import styles from "./Input.module.scss";

const Input = ({ id, type, placeholder, required }) => {
  return (
    <input
      id={id}
      className={styles.input}
      type={type}
      placeholder={placeholder}
      required={required}
    />
  );
};

export default Input;
