import React from "react";
import PropTypes from "prop-types";
import InfoButton from "../../../UI/infoButton/InfoButton";
import Socials from "../Socials/Socials";

import styles from "./CardFooter.module.scss";

const CardFooter = ({ links }) => {
  return (
    <footer className={styles.footer}>
      <InfoButton label="Подробнее" />
      <Socials socials={links} />
    </footer>
  );
};

CardFooter.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};
export default CardFooter;
