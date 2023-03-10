import React from "react";
import PropTypes from "prop-types";

import cx from "classnames";
import styles from "./FormButton.module.scss";

const FormButton = ({ label, type }) => {
  return (
    <button
      className={cx(
        styles.button,
        type === "submit" ? styles.submit : styles.reset
      )}
      type={type}
    >
      {label}
    </button>
  );
};

FormButton.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

FormButton.defaultProps = {
  label: "Отправить",
  type: "submit",
};

export default FormButton;
