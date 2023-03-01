import React from "react";

import styles from "./SectionSubTitle.module.scss";

const SectionSubTitle = ({ subtitle }) => {
  return <p className={styles.subtitle}>{subtitle}</p>;
};

export default SectionSubTitle;
