import React from "react";

import styles from "./Background.module.scss";

const Background = ({background}) => {
  return (
    <img
      className={styles.background}
      src={background}
      alt="Фоновое изображение шапки сайта, деревянные постройки на фоне реки"
    />
  );
};

export default Background;
