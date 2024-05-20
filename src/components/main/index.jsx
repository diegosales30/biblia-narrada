"use client";
import styles from "./main.module.scss";
import Link from "next/link";

import jesus from "../../assets/jesus.jpg"
import Image from "next/image";
import { FaPlay } from "react-icons/fa6";
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