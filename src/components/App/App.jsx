import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/NavBar";
import Home from "../Home/Home";

import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
        <Home />
      <Footer />
    </div>
  );
};

export default App;
