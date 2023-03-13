import React from "react";
import PropTypes from "prop-types";

import styles from "./PageCaption.module.scss";

const PageCaption = ({ text }) => {
  return <h1 className={styles.title}>{text}</h1>;
};

PageCaption.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PageCaption;
