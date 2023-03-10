import React from "react";
import Section from "../../UI/section/Section";
import Review from "./Review/Review";

import styles from "./Feedback.modules.scss";
import { data } from "./data";

const Feedback = () => {
  return (
    <Section id="feedback"
      title="Отзывы наших путешественников"
      subtitle="Идейные соображения высшего порядка, а также рамки и место обучения кадров"
    >
      <div className={styles.list}>
        {data.map((item) => (
          <Review review={item} key={item.avatar} />
        ))}
      </div>
      hello
    </Section>
  );
};

export default Feedback;
