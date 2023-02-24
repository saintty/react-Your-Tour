import React from "react";
import CardHeader from "./cardHeader/CardHeader";

import styles from "./Card.module.scss";
import InfoButton from "../../../UI/infoButton/InfoButton";

const Card = ({ card }) => {
  return (
    <li className={styles.card}>
      <a className={styles.link} href={card.link}>
        <img
          className={styles.picture}
          src={card.picture}
          alt="Фоновое изображение путешествия"
        />
        <div className={styles.wrapper}>
          <CardHeader name={card.name} price={card.price} />
          <InfoButton label="Подробнее" />
        </div>
      </a>
    </li>
  );
};

export default Card;
