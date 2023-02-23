import React from "react";

import styles from "./sectionSubCaption.module.scss";

const SectionSubCaption = ({ children }) => {
  return <p className={styles.subcaption}>{children}</p>;
};

export default SectionSubCaption;
