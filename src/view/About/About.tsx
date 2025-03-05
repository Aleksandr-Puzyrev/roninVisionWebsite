import Image from "next/image";
import PhoneImage from "../../../public/phoneVideo.png";
import styles from "./About.module.css";
import AboutList from "./AboutList/AboutList";

const About = () => {
  return (
    <div className={styles.container} id="about">
      <h2 className={styles.h2}>
        <span className={styles.boldText}>Кто мы</span> и{" "}
        <span className={styles.boldText}>почему</span> нам доверяют?
      </h2>
      <div className={styles.contentContainer}>
        <div className={styles.info}>
          <div className={styles.textContent}>
            <p>
              Мы — настоящие профессионалы своего дела. С 2008г. поставляем и профессионально
              устанавливаем технику, обеспечивая полный цикл услуг. Контролируем весь процесс
              производства. Работаем без посредников, за счет чего вы получаете самую низкую
              стоимость.
            </p>
            <p>
              Нам доверяют, потому что мы{" "}
              <span className={styles.mediumText}>
                знаем продукт изнутри, гарантируем качество и предлагаем выгодные цены.
              </span>{" "}
              Выбирая нас, вы получаете надежного партнера, который сделает ваш бизнес или
              образовательный процесс эффективнее и безопаснее.
            </p>
          </div>
          <div className={styles.desktopAboutList}>
            <AboutList />
          </div>
        </div>
        <div className={styles.aboutVideoContainer}>
          <div className={styles.mobileAboutList}>
            <AboutList />
          </div>
          <div className={styles.videoContainer}>
            <Image src={PhoneImage} alt="phone frame" className={styles.phone} />
            <video className={styles.video} autoPlay muted controls loop playsInline preload="auto">
              <source src="/video.mp4" type="video/mp4" />
              Ваш браузер не поддерживает видео.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
