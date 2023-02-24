import React from "react";

import styles from "./Radio.module.scss";

const Radio = ({ radio }) => {
  return (
    <>
      <input
        id={radio.id}
        className={styles.input}
        type="radio"
        name={radio.name}
        value={radio.value}
        {...radio.required}
      />
      <label className={styles.label} htmlFor={radio.id}>
        {radio.label}
      </label>
    </>
  );
};

export default Radio;
