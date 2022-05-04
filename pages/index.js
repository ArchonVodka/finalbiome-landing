/* eslint-disable max-len */
import React from "react";

import Head from "next/head";
// import Image from "next/image";
// import ItemList from "../components/ItemList/ItemList";
// import HeaderBackGround from "../assets/HeaderBackground/HeaderBackground";
import Header from "./Header";
import styles from "../styles/Home.module.css";
import Solution from "./Solution";
import HowItWorks from "./HowItWorks";
import RoadMap from "./Roadmap";
import WhitePaper from "./WhitePaper";
import Contacts from "./Constcts";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Finalbiome</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Solution />
        <HowItWorks />
        <RoadMap />
        <WhitePaper />
        <Contacts />
      </main>
    </div>
  );
}
