"use client";
import styles from "./main.module.scss";
import Link from "next/link";

import jesus from "../../assets/jesus.jpg"
import Image from "next/image";
import { FaPlay } from "react-icons/fa6";
import Versiculos from "../versiculos";
import AntigoTestamento from "../antigoTestamento";

const MainComponent = () => {
  return (
    <main className={styles.container}>
      <Versiculos />
      <AntigoTestamento />
      <div className={styles.novotestamento}>
        <h1>O Novo testamento:</h1>
        <div>
          <Link href="/novo-testamento">
            <Image src={jesus} alt="img novo testamento" width={150} height={100} />
            <FaPlay size={50} />
          </Link>
        </div>
      </div>
    </main>
  );
}

export default MainComponent;