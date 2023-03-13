import React from "react";
import PropTypes from "prop-types";
import Benefits from "./../Benefits";

import styles from "./CardContent.module.scss";

const CardContent = React.memo(({ name, description, benefits }) => {
  return (
    <div className={styles.content}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
      {benefits && <Benefits benefits={benefits} />}
    </div>
  );
});

CardContent.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  benefits: PropTypes.arrayOf(PropTypes.string),
};

export default CardContent;
