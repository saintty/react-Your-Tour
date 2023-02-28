import React from "react";

import styles from "./Socials.module.scss";
import links from "./links";

const Socials = () => {
  return (
    <ul className={styles.list}>
      {links.map((link) => {
        return (
          <li className={styles.item} key={link.label}>
            <a className={styles.link} href={link.ref}>
              <img className={styles.icon} src={link.icon} alt={link.alt} />
              {link.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
