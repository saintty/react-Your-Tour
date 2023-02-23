import React, { useState, useEffect } from "react";
import Section from "../../UI/section/Section";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import styles from "./App.module.scss";

const App = () => {
  const [fixedHeader, setFixedHeader] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY >= 450) setFixedHeader(true);
      else setFixedHeader(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <Header fixed={fixedHeader} />
      <main className={styles.content}></main>
      <Footer />
    </div>
  );
};

export default App;
