"use client";
import { useContext } from "react";
import styles from "./aside.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHandHoldingHeart, FaQuestion } from "react-icons/fa";
import { FaBook, FaPlay, FaMoon, FaSun } from "react-icons/fa6";
import { TbCircleLetterNFilled } from "react-icons/tb";
import { ModalContext } from "@/context/modal-context";
import { NightContext } from "@/context/night-mode";

const Aside = () => {
  const { toggleModal, open,modalRef } = useContext(ModalContext);
  const { toggleNightMode, nightMode } = useContext(NightContext);
  return (
    <aside className={styles.container}>
      <ul ref={modalRef} className={open ? styles.modalClose : styles.modalOpen}>
        <li>
          <GiHamburgerMenu className={styles.hamburger} onClick={toggleModal} />
        </li>
        {
          !nightMode ? 
          <li>
            <FaSun onClick={toggleNightMode}/>
            <p >Tela Clara</p>
           </li>
          :
          <li>
            <FaMoon onClick={toggleNightMode}/>
            <p >Tela Escura</p>
           </li>
        }
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