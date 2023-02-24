import React from "react";
import Container from "../../shared/container/Container";
import CenteredButton from "../../UI/centeredButton/CenteredButton";
import PageCaption from "../../UI/PageCaption/PageCaption";
import PageSubCaption from "../../UI/PageSubCaption/PageSubCaption";
import Navbar from "../Navbar/Navbar";
import Background from "./Background/Background";

import styles from "./Header.module.scss";
import background from "./headerBackground.jpg";

const Header = ({ fixed }) => {
  return (
    <header className={styles.header}>
      <Background background={background} />
      <div className={styles.content}>
        <Navbar fixed={fixed} />
        <Container>
          <PageCaption>Идеальные путешествия существуют</PageCaption>
          <PageSubCaption>
            Идейные соображения высшего порядка, а также рамки и место обучения
            кадров
          </PageSubCaption>
          <CenteredButton to={"#"} label="Найти тур" />
        </Container>
      </div>
    </header>
  );
};

export default Header;
