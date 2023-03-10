import React from "react";
import WideContainer from "../../shared/wideContainer/WideContainer";
import SectionSubTitle from "../sectionSubTitle/SectionSubTitle";
import SectionTitle from "../sectionTitle/SectionTitle";

import cx from "classnames";
import styles from "./WideSection.module.scss";

const WideSection = ({ title, subtitle, order, id, children }) => {
  return (
    <section
      id={id}
      className={cx(
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

WideSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  order: PropTypes.string,
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
};

WideSection.defaultProps = {
  order: "",
  id: String(Date.now()),
};

export default WideSection;
