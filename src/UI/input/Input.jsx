import React from "react";
import PropTypes from "prop-types";
import Label from "../label/Label";

import styles from "./Input.module.scss";

const Input = ({ id, type, label, placeholder, required }) => {
  return (
    <>
      <Label label={label} htmlFor={id} />
      <input
        id={id}
        className={styles.input}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

Input.defaultTypes = {
  placeholder: "",
  require: false,
};

export default Input;
