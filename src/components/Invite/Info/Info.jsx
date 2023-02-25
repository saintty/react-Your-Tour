import React from "react";

import styles from "./Info.module.scss";

const Info = () => {
  return (
    <div>
      <h3 className={styles.title}>Пора в путешествие вместе с нами!</h3>
      <p className={styles.text}>
        Напиши на почту и узнай подробности на
        <a className={styles.email} href="mailto:yourtour@gmail.com">
          yourtour@gmail.com
        </a>
      </p>
    </div>
  );
};

export default Info;
