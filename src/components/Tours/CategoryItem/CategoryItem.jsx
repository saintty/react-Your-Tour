import React from "react";
import classNames from "classnames";

import styles from "./CategoryItem.module.scss";

const CategoryItem = ({ name, link, active, setActive }) => {
  return (
    <li
      className={classNames(styles.item, active ? styles.item_active : "")}
      onClick={() => setActive(name)}
    >
      <a href={link} className={styles.link}>
        {name}
      </a>
    </li>
  );
};

export default CategoryItem;
