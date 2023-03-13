import React from "react";
import PropTypes from "prop-types";

import styles from "./Benefits.module.scss";

const Benefits = React.memo(({ benefits }) => {
  return (
    <ul className={styles.list}>
      {benefits.map((item) => (
        <li className={styles.item} key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
});

Benefits.propTypes = {
  benefits: PropTypes.arrayOf(PropTypes.string),
};

export default Benefits;
