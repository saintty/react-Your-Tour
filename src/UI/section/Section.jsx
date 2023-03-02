import React from "react";
import SectionTitle from "./../sectionTitle/SectionTitle";
import SectionSubTitle from "./../sectionSubTitle/SectionSubTitle";
import classNames from "classnames";
import Container from "../../shared/container/Container";

import styles from "./Section.module.scss";

const Section = ({ title, subtitle, order, id, children }) => {
  return (
    <section
      id={id}
      className={classNames(
        styles.section,
        order === "first" && styles.first,
        order === "last" && styles.last
      )}
    >
      <Container>
        {title && <SectionTitle title={title} />}
        {subtitle && <SectionSubTitle subtitle={subtitle} />}
        {children}
      </Container>
    </section>
  );
};

export default Section;
