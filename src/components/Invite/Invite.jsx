import React from "react";
import Section from "../../UI/section/Section";
import Info from "./Info/Info";

import styles from "./Invite.module.scss";
import picture from "./footer-photo.jpg";

const Invite = ({}) => {
  return (
    <Section id="invite" order="last">
      <div className={styles.wrapper}>
        <img
          className={styles.picture}
          src={picture}
          alt="Маленькая картинка, сопровождаемая приглашением"
        />
        <Info />
      </div>
    </Section>
  );
};

export default Invite;
