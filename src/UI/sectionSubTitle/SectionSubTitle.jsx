import React from "react";
import PropTypes from "prop-types";

import styles from "./SectionSubTitle.module.scss";

const SectionSubTitle = ({ subtitle }) => {
  return <p className={styles.subtitle}>{subtitle}</p>;
};

SectionSubTitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
};

export default SectionSubTitle;
