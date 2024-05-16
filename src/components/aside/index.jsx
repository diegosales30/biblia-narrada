"use client";
import { useState } from "react";
import styles from "./aside.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHandHoldingHeart, FaQuestion } from "react-icons/fa";
import { FaBook, FaPlay, FaMoon, FaSun } from "react-icons/fa6";
import { TbCircleLetterNFilled } from "react-icons/tb";

const Aside = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className={styles.container}>
      <ul className={isOpen ? styles.modalClose : styles.modalOpen}>
        <li>
          <GiHamburgerMenu className={styles.hamburger} onClick={toggleModal} />
        </li>
        <li>
          <FaSun />
          <p >Tela Escura</p>
        </li>
        <li>
          <FaPlay />
          <p>Ouvir a Palavra</p>
        </li>
        <li>
          <TbCircleLetterNFilled />
          <p>Explore</p>
        </li>
        <li>
          <FaQuestion />
          <p>Sobre o Projeto</p>
        </li>
        <li>
          <FaHandHoldingHeart />
          <p>Ajude o Projeto</p>
        </li>
        <li>
          <FaBook />
          <p>Livros</p>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;