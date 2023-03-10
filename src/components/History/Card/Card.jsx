import React from "react";
import CardContent from "../CardContent/CardContent";
import CardFooter from "../CardFooter/CardFooter";
import { Zoom } from "react-awesome-reveal";

import styles from "./Card.module.scss";

const Card = ({ card }) => {
  return (
    <Zoom duration={1500} triggerOnce={true}>
      <li className={styles.item}>
        <a className={styles.link} href={card.link}>
          <img
            className={styles.picture}
            src={card.picture}
            alt="Фоновое изображение истории"
          />
          <div className={styles.card}>
            <CardContent
              name={card.name}
              description={card.description}
              benefits={card.benefits}
            />
            <CardFooter links={card.socials} />
          </div>
        </a>
      </li>
    </Zoom>
  );
};

export default Card;
