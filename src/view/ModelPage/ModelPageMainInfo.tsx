"use client";

import { IModels } from "@/consts/model-page.consts";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ArrowRed from "../../../public/ArrowRed.svg";
import styles from "./ModelPageMainInfo.module.css";

interface ModelPageMainInfoProps {
  modelValue: IModels;
}

const ModelPageMainInfo = ({ modelValue }: ModelPageMainInfoProps) => {
  const [tabImage, setTabImage] = useState<number>(1);

  return (
    <>
      <div className={styles.name}>{modelValue.name}</div>
      <div className={styles.modelInfoContainer}>
        <div className={styles.imageContainer}>
          {modelValue.img.length > 0 && (
            <div className={styles.tabImagesContainer}>
              {modelValue.img
                .filter((item) => item.id !== tabImage)
                .map((value) => (
                  <button
                    key={value.id}
                    onClick={() => setTabImage(value.id)}
                    style={{ width: "max-content" }}
                  >
                    <Image src={value.value} alt="" width={99} height={99} />
                  </button>
                ))}
            </div>
          )}
          <div>
            <Image src={modelValue.img.filter((item) => item.id === tabImage)[0].value} alt="" />
          </div>
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionList}>
            {modelValue.characteristics.map((item) => (
              <div key={item.title} className={styles.characteristics}>
                <div>{item.title}</div>
                <div className={styles.characteristicsBody}>{item.body}</div>
              </div>
            ))}
          </div>
          <div className={styles.descriptionLinks}>
            <Link href={"/"} className={styles.descriptionLink}>
              <div>Все характеристики</div>
              <Image src={ArrowRed} alt="arrow" />
            </Link>
            <Link href={"/"} className={styles.descriptionLink}>
              <div>Инструкции и документы</div>
              <Image src={ArrowRed} alt="arrow" />
            </Link>
          </div>
        </div>
        <div className={styles.priceContainer}>
          <div className={styles.noDiscountContainer}>
            <div className={styles.noDiscount}>
              {modelValue.noDiscount}
              <span className={styles.span} />
            </div>
            <div className={styles.discount}>{modelValue.discount}</div>
          </div>
          <div className={styles.price}>
            {modelValue.price} <span className={styles.priceRed}>₽</span>
          </div>
          <button className={styles.priceButton}>Заказать</button>
        </div>
      </div>
    </>
  );
};

export default ModelPageMainInfo;
