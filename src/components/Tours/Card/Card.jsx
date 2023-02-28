import React from "react";
import CardHeader from "./cardHeader/CardHeader";
import InfoButton from "../../../UI/infoButton/InfoButton";
import { Slide } from "react-awesome-reveal";

import styles from "./Card.module.scss";

const Card = ({ card }) => {
  return (
    <Slide direction="up" duration={1500} triggerOnce={true}>
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
