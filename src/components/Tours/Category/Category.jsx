import React, { useCallback } from "react";
import PropTypes from "prop-types";

import cx from "classnames";
import styles from "./Category.module.scss";

const Category = React.memo(({ name, link, active, setActive }) => {
  const updateActive = useCallback(() => setActive(name), [name, setActive]);

  return (
    <li
      className={cx(styles.item, active ? styles.active : "")}
      onClick={updateActive}
    >
      <a href={link} className={styles.link}>
        {name}
      </a>
    </li>
  );
});

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
