import React from "react";

import styles from "./PageCaption.module.scss";

const PageCaption = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>;
};

export default PageCaption;
