import React from "react";
import Input from "../input/Input";
import Label from "../label/Label";

import styles from "./LabeledInput.module.scss";

const LabeledInput = ({ input }) => {
  return (
    <div className={styles.field}>
      <Label label={input.label} htmlFor={input.id} />
      <Input
        id={input.id}
        type={input.type}
        placeholder={input.placeholder}
        required={input.required}
      />
    </div>
  );
};

export default LabeledInput;
