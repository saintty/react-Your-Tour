import React from "react";

import styles from "./sectionSubTitle.module.scss";

const SectionSubTitle = ({ subtitle }) => {
  return <p className={styles.subtitle}>{subtitle}</p>;
};

export default SectionSubTitle;
