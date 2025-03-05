"use client";

import Image from "next/image";
import monitorSvg from "../../../public/Monitor.svg";
import cursorIcon from "../../../public/cursor.svg";
import previewBlurIcon from "../../../public/previewBlur.svg";
import previewBlurBigIcon from "../../../public/previewBlurBig.svg";
import previewSpiralIcon from "../../../public/previewSpiral.svg";
import styles from "./PreviewSection.module.css";

const PreviewSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <Image src={previewBlurIcon} alt="blur" className={styles.blur} />
        <Image src={previewBlurBigIcon} alt="blurBig" className={styles.blurBig} />
        <Image src={previewSpiralIcon} alt="spiral" className={styles.spiral} />
        <div className={styles.textContainer}>
          <div className={styles.textContainerMobile}>
            <div>
              <h1 className={styles.title}>Обучение и планерки на новой высоте</h1>
              <p className={styles.subtitle}>
                Умные интерактивные панели <br />
                для эффективных встреч и занятий
              </p>
            </div>
            <div style={{ width: "100%" }}>
              <div className={styles.price}>от 250 000 ₽</div>
              <button className={styles.button} onClick={() => console.log("click")}>
                Оформить заказ
                <Image src={cursorIcon} alt="monitor" className={styles.cursor} />
              </button>
            </div>
          </div>
          <Image src={monitorSvg} alt="monitor" className={styles.monitor} />
        </div>
      </div>
    </div>
  );
};

export default PreviewSection;
