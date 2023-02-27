import React from "react";
import Section from "../../UI/section/Section";
import Card from "./Card/Card";

import styles from "./History.module.scss";
import { histories } from "./histories";

const History = () => {
  return (
    <Section
      title="Истории путешествий"
      subtitle="Идейные соображения высшего порядка, а также рамки и место обучения кадров"
    >
      <ul>
        {histories.map((item) => (
          <Card card={item} key={item.name} />
        ))}
      </ul>
    </Section>
  );
};

export default History;
