import React from "react";

import styles from "./Benefits.module.scss";

const Benefits = ({ benefits }) => {
  return (
    <ul className={styles.list}>
      {benefits.map((item) => (
        <li className={styles.item} key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Benefits;
