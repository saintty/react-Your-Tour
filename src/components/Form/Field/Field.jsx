import React from "react";

import styles from "./Field.module.scss";

const Field = ({ children }) => {
  return <div className={styles.field}>{children}</div>;
};

export default Field;
