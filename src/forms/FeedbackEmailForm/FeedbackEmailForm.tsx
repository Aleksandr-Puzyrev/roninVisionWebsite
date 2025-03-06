"use client";

import styles from "./FeedbackEmailForm.module.css";

const FeedbackEmailForm = () => {
  return (
    <form action="https://formspree.io/f/meoajqol" method="POST" className={styles.form}>
      <p className={styles.inputLabel}>ВВЕДИТЕ ПОЧТУ</p>
      <input type="email" name="email" className={styles.input} placeholder="example@mail.ru" />
      <p className={styles.description}>После отправки почты, мы свяжемся с вами</p>
      <button className={styles.submitButton} type="submit">
        ЗАПИСАТЬСЯ НА ТЕСТ-ДРАЙВ <br />
        <span>И ВЫБРАТЬ МОДЕЛЬ</span>
      </button>
    </form>
  );
};

export default FeedbackEmailForm;
