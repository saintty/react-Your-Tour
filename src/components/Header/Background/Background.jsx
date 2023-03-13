import React from "react";
import PropTypes from "prop-types";

import styles from "./Background.module.scss";

const Background = ({ background }) => {
  return (
    <img
      className={styles.background}
      src={background}
      alt="Фоновое изображение шапки сайта, деревянные постройки на фоне реки"
    />
  );
};

Background.propTypes = {
  background: PropTypes.string.isRequired,
};

export default Background;
