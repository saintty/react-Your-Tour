import React from "react";
import cx from "classnames";

import styles from "./Picture.module.scss";

const Picture = ({ picture, hide }) => {
  return (
    <div
      className={cx(
        styles.item,
        hide === "medium" && styles.mediumHide,
        hide === "small" && styles.smallHide
      )}
    >
      <img className={styles.img} src={picture} alt="Галерея путешествий" />
    </div>
  );
};

export default Picture;
