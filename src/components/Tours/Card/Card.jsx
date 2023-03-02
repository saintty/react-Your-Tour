import React from "react";
import { Zoom } from "react-awesome-reveal";
import CardHeader from "./CardHeader/CardHeader";
import InfoButton from "../../../UI/infoButton/InfoButton";

import styles from "./Card.module.scss";

const Card = ({ card }) => {
  return (
    <Zoom duration={1500} triggerOnce={true}>
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
    </Zoom>
  );
};

export default Card;
