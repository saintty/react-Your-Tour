import React from "react";
import classNames from "classnames";
import styles from "./InputRow.module.scss";

const InputRow = ({ long, children }) => {
  return (
    <fieldset className={classNames(styles.row, long && styles.longRow)}>
      {children}
    </fieldset>
  );
};

export default InputRow;
