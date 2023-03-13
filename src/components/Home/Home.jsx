import React from "react";
import Form from "../Form";
import Header from "../Header";
import Tours from "../Tours";
import Feedback from "../Feedback";
import Gallery from "../Gallery";
import History from "../History";
import Invite from "../Invite";

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
