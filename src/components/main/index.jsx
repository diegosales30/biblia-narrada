"use client";
import styles from "./main.module.scss";
import Link from "next/link";
import moses from "../../assets/moses.jpg"
import jesus from "../../assets/jesus.jpg"
import Image from "next/image";
import { FaPlay } from "react-icons/fa6";
import Versiculos from "../versiculos";

const MainComponent = () => {
  return (
    <main className={styles.container}>
      <Versiculos />
      <div className={styles.antigotestamento}>
        <h1>O Antigo testamento:</h1>
        <div>
          <Link href="/antigo-testamento">
            <Image src={moses} alt="img antigo testamento" width={150} height={100} />
            <FaPlay size={50} />
          </Link>
        </div>
      </div>
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