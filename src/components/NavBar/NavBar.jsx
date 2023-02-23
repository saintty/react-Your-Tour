import React from "react";
import Logo from "../../UI/logo/Logo";
import links from "./navLinks";
import Container from "./../../shared/container/Container";
import NavLink from "./NavLink/NavLink";

import styles from "./NavBar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <Container>
          <div className={styles.inner}>
            <Logo />
            <nav className={styles.nav}>
              <ul className={styles.list}>
                {links.map((link) => (
                  <NavLink to={link.to} label={link.label} key={link.to} />
                ))}
              </ul>
            </nav>
            <a href="tel:+79999999999" className={styles.phone}>
              +7 999 999 99 99
            </a>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
