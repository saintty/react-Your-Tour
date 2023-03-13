import React from "react";
import PropTypes from "prop-types";

import styles from "./Radio.module.scss";

const Radio = ({ radio }) => {
  return (
    <>
      <input
        id={radio.id}
        className={styles.input}
        type="radio"
        name={radio.name}
        value={radio.value}
        {...radio.required}
      />
      <label className={styles.label} htmlFor={radio.id}>
        {radio.label}
      </label>
    </>
  );
};

Radio.propTypes = {
  radio: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    require: PropTypes.bool,
  }),
};

Radio.defaultProps = {
  require: false,
};

export default Radio;
