import React from "react";

import styles from "./NavLink.module.scss";

const NavLink = ({ to, label }) => {
  return (
    <li className={styles.item}>
      <a href={to} className={styles.link}>
        {label}
      </a>
    </li>
  );
};

export default NavLink;
