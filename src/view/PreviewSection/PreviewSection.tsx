import Image from "next/image";
import previewBlurIcon from "../../../public/previewBlur.svg";
import previewBlurBig from "../../../public/previewBlurBig.svg";
import previewSpiral from "../../../public/previewSpiral.svg";
import styles from "./PreviewSection.module.css";

const PreviewSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <Image src={previewBlurIcon} alt="blur" className={styles.blur} />
        <Image src={previewBlurBig} alt="blurBig" className={styles.blurBig} />
        <Image src={previewSpiral} alt="spiral" className={styles.spiral} />
        <div className={styles.textContainer}>
          <div>
            <h1 className={styles.title}>Обучение и планерки на новой высоте</h1>
            <p className={styles.subtitle}>
              Умные интерактивные панели для эффективных встреч и занятий
            </p>
            <span className={styles.price}>от 250 000 ₽</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewSection;
