import React from "react";
import { Slide } from "react-awesome-reveal";
import CardHeader from "./CardHeader/CardHeader";
import InfoButton from "../../../UI/infoButton/InfoButton";

import styles from "./Card.module.scss";

const Card = ({ card }) => {
  return (
    <Slide direction="up" duration={700} triggerOnce={true}>
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
    </Slide>
  );
};

export default Card;
