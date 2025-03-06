"use client";

import FeedbackEmailForm from "@/forms/FeedbackEmailForm/FeedbackEmailForm";
import FeedbackPhoneForm from "@/forms/FeedbackPhoneForm/FeedbackPhoneForm";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import email from "../../../../public/email.svg";
import telegram from "../../../../public/telegram.svg";
import whatsApp from "../../../../public/whatsApp.svg";
import styles from "./FeedbackCard.module.css";

const FeedbackCard = () => {
  const [tab, setTab] = useState<"whatsApp" | "email" | "telegram">("whatsApp");

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Записаться /<br />
        <span className={styles.boldText}>и подобрать модель</span>
      </h2>
      <p className={styles.subtitle}>ГДЕ С ВАМИ СВЯЗАТЬСЯ?</p>
      <div className={styles.contactMethods}>
        <button className={styles.contactButton} onClick={() => setTab("whatsApp")}>
          <Image src={whatsApp} alt="WhatsApp" />
        </button>
        <button className={styles.contactButton} onClick={() => setTab("email")}>
          <Image src={email} alt="Почта" />
        </button>
        <button className={styles.contactButton} onClick={() => setTab("telegram")}>
          <Image src={telegram} alt="Telegram" />
        </button>
      </div>
      {tab === "telegram" || tab === "whatsApp" ? (
        <FeedbackPhoneForm tab={tab} />
      ) : (
        <FeedbackEmailForm />
      )}

      <p className={styles.terms}>
        Нажимая на кнопку, вы соглашаетесь <br />с условиями{" "}
        <Link href={"/"} className={styles.linkData}>
          передачи данных
        </Link>
      </p>
    </div>
  );
};

export default FeedbackCard;
