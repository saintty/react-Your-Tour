import React from "react";
import classNames from "classnames";
import styles from "./Label.module.scss";

const Label = ({ label, htmlFor, long }) => {
  return (
    <label className={classNames(styles.label, long && styles.long)} htmlFor={htmlFor}>
      {label}
    </label>
  );
};

export default Label;
