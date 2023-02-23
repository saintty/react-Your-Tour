import React from "react";

import styles from "./SectionTitle.module.scss";

const SectionTitle = ({ title }) => {
  return <h2 className={styles.title}>{title}</h2>;
};

export default SectionTitle;
