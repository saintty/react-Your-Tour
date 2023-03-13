import React, { useEffect, useState } from "react";
import Logo from "./../../UI/logo";
import Container from "./../../shared/container";
import NavLink from "./NavLink";
import Button from "./Button";

import cx from "classnames";
import styles from "./NavBar.module.scss";
import links from "./navLinks";

const Navbar = () => {
  const [fixed, setFixed] = useState(false);
  const [open, setOpen] = useState(false);

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
    <div className={cx(styles.wrapper, fixed && styles.fixed)}>
      <Container>
        <div className={styles.inner}>
          <Logo />
          <nav className={cx(styles.nav, open && styles.open)}>
            <ul className={styles.list}>
              {links.map((link) => (
                <NavLink to={link.to} label={link.label} key={link.to} />
              ))}
            </ul>
          </nav>
          <Button open={open} setOpen={() => setOpen(!open)} />
          <a className={styles.phone} href="tel:+79999999999">
            +7 999 999 99 99
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
