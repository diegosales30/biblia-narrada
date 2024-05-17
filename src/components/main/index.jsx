"use client";
import styles from "./main.module.scss";
import Link from "next/link";

const MainComponent = () => {
  return (
    <main className={styles.container}>
      <h1>versiculo do dia</h1>
      <h1>O antigo testamento</h1>
      <h1>O novo testamento</h1>
      <p><Link href="/about">ABOUTEEEE</Link></p>
    </main>
  );
}

export default MainComponent;