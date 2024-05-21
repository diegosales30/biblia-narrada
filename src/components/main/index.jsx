"use client";
import styles from "./main.module.scss";
import Versiculos from "../versiculos";
import AntigoTestamento from "../antigoTestamento";
import NovoTestamento from "../novoTestamento";
import Footer from "../footer";

const MainComponent = () => {
  return (
    <main className={styles.container}>
      <Versiculos />
      <AntigoTestamento />
      <NovoTestamento/>
      <Footer />
    </main>
  );
}

export default MainComponent;