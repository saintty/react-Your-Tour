import React from "react";
import Input from "../../../UI/input/Input";

import styles from "./Field.module.scss";

const Field = ({ input, children }) => {
  return (
    <div className={styles.field}>
      {input ? (
        <Input
          id={input.id}
          type={input.type}
          label={input.label}
          placeholder={input.placeholder}
          required={input.required}
        />
      ) : (
        children
      )}
    </div>
  );
};

export default Field;
