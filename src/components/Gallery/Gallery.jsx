import React from "react";
import Row from "./Row/Row";

import styles from "./Gallery.module.scss";
import { rows } from "./picture";
import WideSection from "../../UI/wideSection/WideSection";

const Gallery = () => {
  console.log(rows);
  return (
    <WideSection
      title="Фотографии путешествий"
      subtitle="Идейные соображения высшего порядка, а также рамки и место обучения кадров"
    >
      <div>
        {rows.map((row) => (
          <Row pictures={row} key={row} />
        ))}
      </div>
    </WideSection>
  );
};

export default Gallery;
