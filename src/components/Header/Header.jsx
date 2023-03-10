import React from "react";
import Container from "../../shared/container/Container";
import CenterButton from "../../UI/centerButton/CenterButton";
import PageCaption from "../../UI/pageCaption/PageCaption";
import PageSubCaption from "../../UI/pageSubCaption/PageSubCaption";
import Background from "./Background/Background";

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
