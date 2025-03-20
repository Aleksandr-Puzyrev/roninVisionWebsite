"use client";

import { Routes } from "@/consts/routes.consts";
import Image from "next/image";
import Link from "next/link";
import roninLogoIcon from "../../../public/roninLogo.svg";
import styles from "./NavBar.module.css";
import { useState } from "react";
import ConnectionCardDialog from "../ConnectionCardDialog/ConnectionCardDialog";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className={styles.navbarSection}>
        <div className={styles.navBarContainer}>
          <Link href="/">
            <Image src={roninLogoIcon} alt="logo" style={{ marginRight: "14px" }} />
          </Link>
          <button className={styles.burger} onClick={() => setIsOpen(!isOpen)}>
            <span className={isOpen ? styles.burgerLineOpen : styles.burgerLine}></span>
            <span className={isOpen ? styles.burgerLineOpen : styles.burgerLine}></span>
            <span className={isOpen ? styles.burgerLineOpen : styles.burgerLine}></span>
          </button>
          <nav className={`${styles.menu} ${isOpen ? styles.menuOpen : ""}`}>
            {Routes.map((item) => (
              <Link key={item.label} href={item.path} className={styles.link}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className={styles.contactsContainer}>
            <div className={styles.workTimeText}>Работаем ежедневно с 8:00 до 20:00</div>
            <div className={styles.phone}>+7 927 844 20 40</div>
            <button className={styles.feedback} onClick={() => setIsModalOpen(true)}>
              Вам перезвонить?
            </button>
          </div>
        </div>
      </div>
      <ConnectionCardDialog isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  );
};

export default NavBar;
