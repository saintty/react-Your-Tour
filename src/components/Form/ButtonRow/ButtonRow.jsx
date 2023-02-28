import React from "react";

import styles from "./ButtonRow.module.scss";

const ButtonRow = ({ children }) => {
  return <div className={styles.row}>{children}</div>;
};

export default ButtonRow;
