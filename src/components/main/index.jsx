"use client";
import styles from "./main.module.scss";
import Link from "next/link";
import moses from "../../assets/moses.jpg"
import jesus from "../../assets/jesus.jpg"
import Image from "next/image";
import { FaPlay } from "react-icons/fa6";

const MainComponent = () => {
  return (
    <main className={styles.container}>
      <div>
        <h2>Versículo do dia:</h2>
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            In porro ad soluta alias minus. Recusandae quis ut praesentium eos corporis quam, 
            cum quia rem. At expedita beatae quibusdam debitis distinction
          </p>
          <p>
            Lorem 5:16
          </p>
        </div>
      </div>
      <div>
        <h1>O Antigo testamento:</h1>
        <div>
          <Link href="/antigo-testamento">
            <Image src={moses} alt="img antigo testamento" width={150} height={100} />
            <FaPlay size={50} />
          </Link>
        </div>
      </div>
      <div>
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