import React from "react";
import styles from "./WideContainer.scss";

const WideContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default WideContainer;
