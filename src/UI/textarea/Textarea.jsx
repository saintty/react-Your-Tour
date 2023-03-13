import React from "react";
import PropTypes from "prop-types";
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

Textarea.propTypes = {
  textarea: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
  }),
};

Textarea.defaultProps = {
  placeholder: "",
};

export default Textarea;
