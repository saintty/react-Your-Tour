import React from "react";
import SectionTitle from "./../sectionTitle/SectionTitle";
import SectionSubTitle from "./../sectionSubTitle/SectionSubTitle";

import styles from "./Section.module.scss";
import Container from "../../shared/container/Container";

const Section = ({ title, subtitle, children }) => {
  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle title={title} />
        {subtitle && <SectionSubTitle subtitle={subtitle} />}
        {children}
      </Container>
    </section>
  );
};

export default Section;
