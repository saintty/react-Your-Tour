import React from "react";

import styles from "./SectionCaption.module.scss";

const SectionCaption = ({ caption }) => {
  return <h2 className={styles.caption}>{caption}</h2>;
};

export default SectionCaption;
