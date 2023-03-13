import React from "react";
import PropTypes from "prop-types";

import cx from "classnames";
import styles from "./InputRow.module.scss";

const InputRow = ({ long, children }) => {
  return (
    <fieldset className={cx(styles.row, long && styles.longRow)}>
      {children}
    </fieldset>
  );
};

InputRow.propTypes = {
  long: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

InputRow.defaultProps = {
  long: false,
};

export default InputRow;
