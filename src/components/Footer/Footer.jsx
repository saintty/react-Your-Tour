import React from "react";
import Container from "./../../shared/container";
import Socials from "./Socials";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <p className={styles.label}>Наши социальные сети</p>
          <Socials />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
