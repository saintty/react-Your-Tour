import React from "react";

import styles from "./Logo.module.scss";
import logo from "./logo.svg";

const Logo = () => {
  return (
    <a href="/">
      <img className={styles.logo} src={logo} alt="Фирменный логотип" />
    </a>
  );
};

export default Logo;
