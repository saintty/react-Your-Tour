import React from "react";
import Benefits from "../Benefits/Benefits";

import styles from "./CardContent.module.scss";

const CardContent = ({ name, description, benefits }) => {
  return (
    <div className={styles.content}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
      {benefits && <Benefits benefits={benefits} />}
    </div>
  );
};

export default CardContent;
