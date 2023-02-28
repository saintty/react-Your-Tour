import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import Header from "../Header/Header";
import Tours from "../Tours/Tours";
import Feedback from "../Feedback/Feedback";
import Gallery from "../Gallery/Gallery";
import History from "../History/History";
import Invite from "../Invite/Invite";
import Navbar from "../NavBar/NavBar";

import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <Header />
      <main className={styles.content}>
        <Tours />
        <Form />
        <Feedback />
        <Gallery />
        <History />
        <Invite />
      </main>
      <Footer />
    </div>
  );
};

export default App;
