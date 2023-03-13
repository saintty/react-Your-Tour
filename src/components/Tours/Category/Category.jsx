import React from "react";
import PropTypes from "prop-types";

import cx from "classnames";
import styles from "./Category.module.scss";

const Category = ({ name, link, active, setActive }) => {
  return (
    <li
      className={cx(styles.item, active ? styles.active : "")}
      onClick={() => setActive(name)}
    >
      <a href={link} className={styles.link}>
        {name}
      </a>
    </li>
  );
};

Category.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  active: PropTypes.bool,
  setActive: PropTypes.func.isRequired,
};

Category.defaultProps = {
  active: false,
};

export default Category;
