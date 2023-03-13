import React from "react";
import PropTypes from "prop-types";

import cx from "classnames";
import styles from "./Label.module.scss";

const Label = React.memo(({ label, htmlFor, long }) => {
  return (
    <label className={cx(styles.label, long && styles.long)} htmlFor={htmlFor}>
      {label}
    </label>
  );
});

Label.propTypes = {
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  long: PropTypes.bool,
};

Label.defaultProps = {
  long: false,
};

export default Label;
