import React from "react";
import PropTypes from "prop-types";

import styles from "./CardHeader.module.scss";

const CardHeader = ({ name, price }) => {
  return (
    <div>
      <h3 className={styles.name}>{name}</h3>
      <span className={styles.price}>{price}</span>
    </div>
  );
};

CardHeader.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default CardHeader;
