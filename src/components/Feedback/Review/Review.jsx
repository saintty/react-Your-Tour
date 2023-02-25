import React from "react";
import ReviewFooter from "../ReviewFooter/ReviewFooter";

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

export default Review;
