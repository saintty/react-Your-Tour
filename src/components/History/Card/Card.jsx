import React from "react";
import CardContent from "../CardContent/CardContent";
import CardFooter from "../CardFooter/CardFooter";

import styles from "./Card.module.scss";

const Card = () => {
  return (
    <li class="history__item card">
      <a class="history__link" href="#">
        <img
          class="history__photo card-scalable-img"
          src="images/history/history-1.jpg"
          alt="Фоновое изображение истории"
        />
        <div class="history__card">
          <CardContent />
          <CardFooter />
        </div>
      </a>
    </li>
  );
};

export default Card;
