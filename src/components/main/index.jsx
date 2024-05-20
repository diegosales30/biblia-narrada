"use client";
import styles from "./main.module.scss";
import Versiculos from "../versiculos";
import AntigoTestamento from "../antigoTestamento";
import NovoTestamento from "../novoTestamento";

const MainComponent = () => {
  return (
    <main className={styles.container}>
      <Versiculos />
      <AntigoTestamento />
      <NovoTestamento/>
    </main>
  );
}

export default MainComponent;