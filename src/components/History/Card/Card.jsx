import React from "react";
import PropTypes from "prop-types";
import CardContent from "./../CardContent";
import CardFooter from "./../CardFooter";
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

Card.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    benefits: PropTypes.arrayOf(PropTypes.string),
    socials: PropTypes.arrayOf(
      PropTypes.shape({
        link: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default Card;
