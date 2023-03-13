import React from "react";
import PropTypes from "prop-types";
import ReviewFooter from "../ReviewFooter";

import styles from "./Review.module.scss";

const Review = ({ review }) => {
  return (
    <article className={styles.item}>
      <p className={styles.text}>{review.text}</p>
      <ReviewFooter
        user={review.user}
        tour={review.tour}
        avatar={review.avatar}
      />
    </article>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    tour: PropTypes.string.isRequired,
    avatar: PropTypes.string,
  }),
};

export default Review;
