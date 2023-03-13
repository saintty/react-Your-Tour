import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/NavBar";
import Home from "../Home/Home";

import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
