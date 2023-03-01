import React from "react";
import Form from "../Form/Form";
import Header from "../Header/Header";
import Tours from "../Tours/Tours";
import Feedback from "../Feedback/Feedback";
import Gallery from "../Gallery/Gallery";
import History from "../History/History";
import Invite from "../Invite/Invite";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <Header />
      <main className={styles.content}>
        <Tours />
        <Form />
        <Feedback />
        <Gallery />
        <History />
        <Invite />
      </main>
    </>
  );
};

export default Home;
