import React from "react";
import Picture from "./../Picture/Picture";

import styles from "./Row.module.scss";

const Row = ({ pictures }) => {
  return (
    <div className={styles.row}>
      {pictures.map((item) => (
        <Picture picture={item} key={item}/>
      ))}
    </div>
  );
};

export default Row;
