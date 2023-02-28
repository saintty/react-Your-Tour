import React, { Children } from "react";

import styles from "./PhoneLink.module.scss";

const PhoneLink = ({ to, children }) => {
  return (
    <a className={styles.phone} href={to}>
      {children}
    </a>
  );
};

export default PhoneLink;
