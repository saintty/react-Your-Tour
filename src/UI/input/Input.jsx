import React from "react";
import Label from "../label/Label";

import styles from "./Input.module.scss";

const Input = ({ id, type, label, placeholder, required }) => {
  return (
    <>
      <Label label={label} htmlFor={id} />
      <input
        id={id}
        className={styles.input}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </>
  );
};

export default Input;
