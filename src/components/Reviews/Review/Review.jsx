import React from "react";
import ReviewFooter from "../ReviewFooter/ReviewFooter";

import styles from "./Review.module.scss";

const Review = () => {
  return (
    <article classNameName="feedback__item">
      <p classNameName="feedback__text">
        Идейные соображения высшего порядка, а также рамки и место обучения
        кадров обеспечивает широкому кругу (специалистов) участие в формировании
        новых предложений. Идейные соображения высшего порядка, а также начало
        повседневной работы по формированию позиции позволяет оценить значение
        модели развития.
      </p>
      <ReviewFooter />
    </article>
  );
};

export default Review;
