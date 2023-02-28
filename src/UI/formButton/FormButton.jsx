import React from "react";
import classNames from "classnames";

import styles from "./FormButton.module.scss";

const FormButton = ({ label, type }) => {
  return (
    <button
      className={classNames(
        styles.button,
        type === "submit" ? styles.submit : styles.reset
      )}
      type={type}
    >
      {label}
    </button>
  );
};

export default FormButton;
