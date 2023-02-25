import React from "react";

import styles from "./ReviewFooter.module.scss";

const ReviewFooter = ({ user, tour, avatar }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <h3 className={styles.user}>{user}</h3>
        <p className={styles.tour}>{tour}</p>
      </div>
      <img
        className={styles.avatar}
        src={avatar}
        alt="Аватар пользователя, оставившего отзыв"
      />
    </footer>
  );
};

export default ReviewFooter;
