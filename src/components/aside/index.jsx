"use client";
import { useContext } from "react";
import { usePathname } from "next/navigation";
import styles from "./aside.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHandHoldingHeart, FaQuestion } from "react-icons/fa";
import { FaBook, FaPlay, FaMoon, FaSun } from "react-icons/fa6";
import { TbCircleLetterNFilled } from "react-icons/tb";
import { ModalContext } from "@/context/modal-context";
import { NightContext } from "@/context/night-mode";
import Link from "next/link";

const Aside = () => {
  const { toggleModal, open, modalRef } = useContext(ModalContext);
  const { toggleNightMode, nightMode } = useContext(NightContext);
  const currentPathName = usePathname();

  console.log(currentPathName);

  return (
    <aside className={styles.container}>
      <ul
        ref={modalRef}
        className={open ? styles.modalClose : styles.modalOpen}
      >
        <li>
          <GiHamburgerMenu className={styles.hamburger} onClick={toggleModal} />
        </li>
        {!nightMode ? (
          <li>
            <FaSun onClick={toggleNightMode} />
            <p>Tela Clara</p>
          </li>
        ) : (
          <li>
            <FaMoon onClick={toggleNightMode} />
            <p>Tela Escura</p>
          </li>
        )}
        <li>
          <Link href="/" className={currentPathName === "/" ? styles.activeIcon : ""}>
            <FaPlay  />  
            <p>Ouvir a Palavra</p>
          </Link>
        </li>
        <li>
          <Link href="/explore" className={currentPathName === "/explore" ? styles.activeIcon : ""}>
            <TbCircleLetterNFilled />
            <p>Explore</p>
          </Link>
        </li>
        <li>
          <Link href="/about" className={currentPathName === "/about" ? styles.activeIcon : ""}>
            <FaQuestion />
            <p>Sobre o Projeto</p>
          </Link>
        </li>
        <li>
          <Link href="/donation" className={currentPathName === "/donation" ? styles.activeIcon : ""}>
            <FaHandHoldingHeart />
            <p>Ajude o Projeto</p>
          </Link>
        </li>
        <li>
          <Link href="/books" className={currentPathName === "/books" ? styles.activeIcon : ""}>
            <FaBook />
            <p>Livros</p>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
