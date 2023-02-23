import React from "react";
import classNames from "classnames";
import Logo from "../../UI/logo/Logo";
import links from "./navLinks";
import Container from "./../../shared/container/Container";
import NavLink from "./NavLink/NavLink";

import styles from "./NavBar.module.scss";
import PhoneLink from "./PhoneLink/PhoneLink";

const Navbar = ({ fixed }) => {
  return (
    <div className={styles.wrapper}>
      <div className={fixed ? styles.fixed : ""}>
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
            <PhoneLink to={"tel:+79999999999"}>+7 999 999 99 99</PhoneLink>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
