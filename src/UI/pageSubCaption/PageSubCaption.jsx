import React from "react";
import PropTypes from "prop-types";

import styles from "./PageSubCaption.module.scss";

const PageSubCaption = ({ text }) => {
  return <h2 className={styles.subtitle}>{text}</h2>;
};

PageSubCaption.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PageSubCaption;
