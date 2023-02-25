import React from "react";

import styles from "./Picture.module.scss";

const Picture = ({ picture }) => {
  return (
    <div className={styles.item}>
      <img className={styles.img} src={picture} alt="Галерея путешествий" />
    </div>
  );
};

export default Picture;
