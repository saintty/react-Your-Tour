import React from "react";
import Container from "../../shared/container";
import CenterButton from "../../UI/centerButton";
import PageCaption from "../../UI/pageCaption";
import PageSubCaption from "../../UI/pageSubCaption";
import Background from "./Background";

import styles from "./Header.module.scss";
import background from "./headerBackground.jpg";

const Header = () => {
  return (
    <header className={styles.header}>
      <Background background={background} />
      <div className={styles.content}>
        <Container>
          <PageCaption text="Идеальные путешествия существуют" />
          <PageSubCaption
            text="Идейные соображения высшего порядка, а также рамки и место обучения
            кадров"
          />
          <CenterButton to={"#"} label="Найти тур" />
        </Container>
      </div>
    </header>
  );
};

export default Header;
