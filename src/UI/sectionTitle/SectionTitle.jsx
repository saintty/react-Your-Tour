import React from "react";
import PropTypes from "prop-types";

import styles from "./SectionTitle.module.scss";

const SectionTitle = React.memo(({ title }) => {
  return <h2 className={styles.title}>{title}</h2>;
});

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
