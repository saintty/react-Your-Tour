import React from "react";
import Section from "./../../UI/section/Section";
import Row from "./Row/Row";

import styles from "./Gallery.module.scss";
import { rows } from "./picture";

const Gallery = () => {
  console.log(rows);
  return (
    <Section
      title="Фотографии путешествий"
      subtitle="Идейные соображения высшего порядка, а также рамки и место обучения кадров"
    >
      <div>
        {rows.map((row) => (
          <Row pictures={row} key={row} />
        ))}
      </div>
    </Section>
  );
};

export default Gallery;
