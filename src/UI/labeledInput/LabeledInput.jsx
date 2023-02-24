import React from "react";
import Input from "../input/Input";
import Label from "../label/Label";

import styles from "./LabeledInput.module.scss";

const LabeledInput = ({ id, type, label, placeholder, required }) => {
  return (
    <div className={styles.field}>
      <Label label={label} htmlFor={id} />
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default LabeledInput;
