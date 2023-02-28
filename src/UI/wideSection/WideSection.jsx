import React from "react";
import WideContainer from "../../shared/wideContainer/WideContainer";
import SectionSubTitle from "../sectionSubTitle/SectionSubTitle";
import SectionTitle from "../sectionTitle/SectionTitle";
import classNames from "classnames";
import styles from "./WideSection.module.scss";

const WideSection = ({ title, subtitle, order, children }) => {
  return (
    <section
      className={classNames(
        styles.section,
        order === "first" && styles.first,
        order === "last" && styles.last
      )}
    >
      <WideContainer>
        <SectionTitle title={title} />
        <SectionSubTitle subtitle={subtitle} />
        {children}
      </WideContainer>
    </section>
  );
};

export default WideSection;
