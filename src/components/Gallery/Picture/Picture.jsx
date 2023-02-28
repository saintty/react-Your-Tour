import React from "react";
import classNames from "classnames";

import styles from "./Picture.module.scss";

const Picture = ({ picture, mediumHide, smallHide }) => {
  return (
    <div
      className={classNames(
        styles.item,
        mediumHide && styles.mediumHide,
        smallHide && styles.smallHide
      )}
    >
      <img className={styles.img} src={picture} alt="Галерея путешествий" />
    </div>
  );
};

export default Picture;
