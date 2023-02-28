import React from 'react';
import Card from '../card/Card';

import styles from "./CardList.module.scss";

const CardList = ({cards}) => {
  return (
    <ul className={styles.list}>
      {cards.map((item) => <Card card={item} key={`${item.price}_${item.link}`}/>)}
    </ul>
  );
};

export default CardList;
