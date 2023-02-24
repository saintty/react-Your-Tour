import React from "react";
import Label from "../label/Label";

import styles from "./Textarea.module.scss";

const Textarea = ({ textarea }) => {
  return (
    <>
      <Label label={textarea.label} htmlFor={textarea.id} />
      <textarea
        id={textarea.id}
        className={styles.textarea}
        placeholder={textarea.placeholder}
      ></textarea>
    </>
  );
};

export default Textarea;
