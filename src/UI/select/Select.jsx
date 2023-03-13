import React from "react";
import PropTypes from "prop-types";
import Label from "./../label/Label";

import styles from "./Select.module.scss";

const Select = React.memo(({ id, label, required, options }) => {
  return (
    <>
      <Label label={label} htmlFor={id} />
      <select
        id={id}
        className={styles.select}
        required={required}
        defaultValue={options[0].value}
      >
        {options.map((item) => (
          <option value={item.value} disabled={item.disabled} key={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </>
  );
});

Select.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  require: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
    })
  ),
};

export default Select;
