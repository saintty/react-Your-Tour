import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "./../sectionTitle/SectionTitle";
import SectionSubTitle from "./../sectionSubTitle/SectionSubTitle";
import Container from "../../shared/container/Container";

import cx from "classnames";
import styles from "./Section.module.scss";

const Section = ({ title, subtitle, order, id, children }) => {
  return (
    <section
      id={id}
      className={cx(
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

Section.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  order: PropTypes.oneOf(["first", "last", ""]),
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Section.defaultProps = {
  order: "",
  id: String(Date.now()),
};

export default Section;
