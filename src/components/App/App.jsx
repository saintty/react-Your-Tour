import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../NavBar";
import Home from "../Home";

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
