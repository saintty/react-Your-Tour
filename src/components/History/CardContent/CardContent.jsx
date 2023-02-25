import React from "react";
import Benefits from "../Benefits/Benefits";

import styles from "./CardContent.module.scss";

const CardContent = ({ name, description, benefits }) => {
  return (
    <div class={styles.content}>
      <h3 class={styles.name}>{name}</h3>
      <p class={styles.description}>{description}</p>
      {benefits && <Benefits benefits={benefits} />}
    </div>
  );
};

export default CardContent;
