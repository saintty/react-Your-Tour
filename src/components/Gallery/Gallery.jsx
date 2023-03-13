import React from "react";
import WideSection from "../../UI/wideSection";
import Row from "./Row";

import { rows } from "./photos";

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
