import React from "react";
import PropTypes from "prop-types";
import Input from "../../../UI/input/Input";

import styles from "./Field.module.scss";

const Field = ({ input, children }) => {
  return (
    <div className={styles.field}>
      {input ? (
        <Input
          id={input.id}
          type={input.type}
          label={input.label}
          placeholder={input.placeholder}
          required={input.required}
        />
      ) : (
        children
      )}
    </div>
  );
};

Field.propTypes = {
  input: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    required: PropTypes.bool,
  }),
};

Field.defaultProps = {
  require: false,
};

export default Field;
