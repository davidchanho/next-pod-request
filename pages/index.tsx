import React from "react";
import Footer from "../components/footer";
import Form from "../components/form";
import Head from "../components/head";
import Header from "../components/header";
import Logo from "../components/logo";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head />
      <main className={styles.main}>
        <Logo />
        <section className={styles.section}>
          <Header />
          <Form />
          <Footer />
        </section>
      </main>
      <img className={styles.pattern} src="/desktop/bg-pattern-dots.svg" />{" "}
    </div>
  );
}
