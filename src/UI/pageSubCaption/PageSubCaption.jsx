import React from "react";

import styles from "./pageSubCaption.module.scss";

const PageSubCaption = ({ children }) => {
  return <h2 className={styles.subtitle}>{children}</h2>;
};

export default PageSubCaption;
