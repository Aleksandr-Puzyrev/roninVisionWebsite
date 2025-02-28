import Image from "next/image";
import bestPriceIcon from "../../../../public/bestPrice.svg";
import qualityIcon from "../../../../public/quality.svg";
import styles from "./AboutList.module.css";

const AboutList = () => {
  return (
    <div className={styles.aboutList}>
      <div className={styles.aboutItem}>
        <h3 className={styles.h3}>15 лет</h3>
        <div>Опыта в сфере умных технологий</div>
      </div>
      <div className={styles.aboutItem}>
        <Image src={qualityIcon} alt="качество" className={styles.qualityIcon} />
        <div>Гарантируем качество</div>
      </div>
      <div className={styles.aboutItem}>
        <Image src={bestPriceIcon} alt="Лучшая цена" className={styles.bestPriceIcon} />
        <div>Работаем без посредников</div>
      </div>
    </div>
  );
};

export default AboutList;
