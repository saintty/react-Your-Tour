import React from "react";
import PropTypes from "prop-types";
import CardHeader from "./CardHeader";
import InfoButton from "./../../../UI/infoButton";
import { Zoom } from "react-awesome-reveal";

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

Card.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
};

export default Card;
