import React from "react";

import styles from "./Socials.module.scss";

const Socials = ({ socials }) => {
  return (
    <ul className={styles.list}>
      {socials.map((item) => (
        <li className={styles.item}>
          <object>
            <a
              className={styles.link}
              href={item.link}
              target="_blank"
              key={item.label}
            >
              {item.label}
            </a>
          </object>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
