import React from "react";
import Row from "./Row/Row";

import styles from "./Gallery.module.scss";
import { rows } from "./picture";
import WideSection from "../../UI/wideSection/WideSection";

const Gallery = () => {
  return (
    <WideSection
      title="Фотографии путешествий"
      subtitle="Идейные соображения высшего порядка, а также рамки и место обучения кадров"
    >
      <div>
        {rows.map((row) => (
          <Row
            pictures={row.pictures}
            smallGap={row.smallGap}
            key={row.pictures[0].picture}
          />
        ))}
      </div>
    </WideSection>
  );
};

export default Gallery;
