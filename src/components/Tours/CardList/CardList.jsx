import React from "react";
import PropTypes from "prop-types";
import Card from "../Card";

import styles from "./CardList.module.scss";

const CardList = React.memo(({ cards }) => {
  return (
    <ul className={styles.list}>
      {cards.map((item) => (
        <Card card={item} key={`${item.price}_${item.link}`} />
      ))}
    </ul>
  );
});

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
};

export default CardList;
