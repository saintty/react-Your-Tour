import React from "react";
import WideContainer from "../../shared/wideContainer/WideContainer";
import SectionSubTitle from "../sectionSubTitle/SectionSubTitle";
import SectionTitle from "../sectionTitle/SectionTitle";

import styles from "./WideSection.module.scss";

const WideSection = ({ title, subtitle, children }) => {
  return (
    <section className={styles.section}>
      <WideContainer>
        <SectionTitle title={title} />
        <SectionSubTitle subtitle={subtitle} />
        {children}
      </WideContainer>
    </section>
  );
};

export default WideSection;
