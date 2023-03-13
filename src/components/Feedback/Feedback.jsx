import React from "react";
import Section from "../../UI/section";
import Review from "./Review";

import styles from "./Feedback.modules.scss";
import { data } from "./data";

const Feedback = () => {
  return (
    <Section
      id="feedback"
      title="Отзывы наших путешественников"
      subtitle="Идейные соображения высшего порядка, а также рамки и место обучения кадров"
    >
      <div className={styles.list}>
        {data.map((item) => (
          <Review review={item} key={item.text.slice(0, 40)} />
        ))}
      </div>
    </Section>
  );
};

export default Feedback;
