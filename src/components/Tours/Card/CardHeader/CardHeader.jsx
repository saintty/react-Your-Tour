import React from "react";

import styles from "./CardHeader.module.scss";

const CardHeader = ({ name, price }) => {
  return (
    <div>
      <h3 className={styles.name}>{name}</h3>
      <span className={styles.price}>{price}</span>
    </div>
  );
};

export default CardHeader;
