import React from "react";
import CardContent from "../CardContent/CardContent";
import CardFooter from "../CardFooter/CardFooter";

import styles from "./Card.module.scss";

const Card = ({ card }) => {
  return (
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
  );
};

export default Card;
