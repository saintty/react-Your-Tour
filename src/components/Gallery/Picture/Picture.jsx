import React from "react";
import PropTypes from "prop-types";

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

Picture.propTypes = {
  picture: PropTypes.string.isRequired,
  hide: PropTypes.oneOf(["medium", "small"]),
};

export default Picture;
