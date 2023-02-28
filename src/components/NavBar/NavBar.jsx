import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Logo from "../../UI/logo/Logo";
import links from "./navLinks";
import Container from "./../../shared/container/Container";
import NavLink from "./NavLink/NavLink";
import Button from "./Button/Button";
import PhoneLink from "./PhoneLink/PhoneLink";

import styles from "./NavBar.module.scss";

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
    <div className={classNames(styles.wrapper, fixed && styles.fixed)}>
      <Container>
        <div className={styles.inner}>
          <Logo />
          <nav className={classNames(styles.nav, open && styles.open)}>
            <ul className={styles.list}>
              {links.map((link) => (
                <NavLink to={link.to} label={link.label} key={link.to} />
              ))}
            </ul>
          </nav>
          <Button open={open} setOpen={() => setOpen(!open)} />
          <PhoneLink to={"tel:+79999999999"}>+7 999 999 99 99</PhoneLink>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
