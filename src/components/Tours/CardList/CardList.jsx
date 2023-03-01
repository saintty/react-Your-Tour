import React from "react";
import Card from "../Card/Card";

import styles from "./CardList.module.scss";

const CardList = ({ cards }) => {
  return (
    <ul className={styles.list}>
      {cards.map((item) => (
        <Card card={item} key={`${item.price}_${item.link}`} />
      ))}
    </ul>
  );
};

export default CardList;
