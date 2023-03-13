import React from "react";
import PropTypes from "prop-types";

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

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default NavLink;
