import React from "react";
import PropTypes from "prop-types";

import cx from "classnames";
import styles from "./Button.module.scss";

const Button = ({ open, setOpen }) => {
  return (
    <button
      className={cx(styles.button, open && styles.open)}
      onClick={setOpen}
    >
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </button>
  );
};

Button.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Button;
