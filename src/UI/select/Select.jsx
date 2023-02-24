import React from "react";
import Label from "./../label/Label";

import styles from "./Select.module.scss";

const Select = ({ id, label, required, options }) => {
  return (
    <>
      <Label label={label} htmlFor={id} />
      <select
        id={id}
        className={styles.select}
        required={required}
        defaultValue={options[0].value}
      >
        {options.map((item) => (
          <option value={item.value} disabled={item.disabled} key={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
