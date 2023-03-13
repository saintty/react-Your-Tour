import React from "react";
import PropTypes from "prop-types";

import styles from "./Socials.module.scss";

const Socials = ({ socials }) => {
  return (
    <ul className={styles.list}>
      {socials.map((item) => (
        <li className={styles.item} key={item.label}>
          <object>
            <a className={styles.link} href={item.link} target="_blank">
              {item.label}
            </a>
          </object>
        </li>
      ))}
    </ul>
  );
};

Socials.propTypes = {
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

export default Socials;
