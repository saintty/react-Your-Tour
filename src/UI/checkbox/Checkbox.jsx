import React from "react";
import PropTypes from "prop-types";

import styles from "./Checkbox.module.scss";

const Checkbox = ({ id, label, children }) => {
  return (
    <>
      <input id={id} className={styles.input} type="checkbox" />
      <label htmlFor={id} className={styles.label}>
        {label}
        {children}
      </label>
    </>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Checkbox;
