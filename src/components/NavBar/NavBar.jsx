import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Logo from "../../UI/logo/Logo";
import links from "./navLinks";
import Container from "./../../shared/container/Container";
import NavLink from "./NavLink/NavLink";

import styles from "./NavBar.module.scss";
import PhoneLink from "./PhoneLink/PhoneLink";

const Navbar = () => {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY >= 450) setFixed(true);
      else setFixed(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={classNames(styles.wrapper, fixed && styles.fixed)}>
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
  );
};

export default Navbar;
