import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import Header from "../Header/Header";
import Tours from "../Tours/Tours";
import Feedback from "../Feedback/Feedback";
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
      <main className={styles.content}>
        <Tours />
        <Form />
        <Feedback />
      </main>
      <Footer />
    </div>
  );
};

export default App;
