import React from "react";
import PropTypes from "prop-types";

import styles from "./ReviewFooter.module.scss";
import defaultAvatar from "./../avatar-default.png";

const ReviewFooter = React.memo(({ user, tour, avatar }) => {
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
});

ReviewFooter.propTypes = {
  user: PropTypes.string.isRequired,
  tour: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

ReviewFooter.defaultProps = {
  avatar: defaultAvatar,
};

export default ReviewFooter;
