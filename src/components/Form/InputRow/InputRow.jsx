import React from "react";

import styles from "./InputRow.module.scss";

const InputRow = ({ children }) => {
  return <fieldset class={styles.row}>{children}</fieldset>;
};

export default InputRow;
