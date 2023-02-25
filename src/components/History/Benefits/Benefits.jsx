import React from "react";

import styles from "./Benefits.module.scss";

const Benefits = ({ benefits }) => {
  return (
    <ul class={styles.list}>
      {benefits.map((item) => (
        <li class={styles.item} key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Benefits;
