"use client";

import MyLayoutContainer from "@/components/MyLayoutContainer/MyLayoutContainer";
import { models } from "@/consts/model-page.consts";
import ModelPageMainInfo from "@/view/ModelPage/ModelPageMainInfo";
import { useParams } from "next/navigation";
import styles from "./model.module.css";

const Model = () => {
  const { id } = useParams<{ id: string }>();
  const modelValue = models.filter((item) => item.id === id)[0];
  return (
    <MyLayoutContainer>
      <div className={styles.container}>
        <ModelPageMainInfo modelValue={modelValue} />
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionTitle}>Описание</div>
          <div className={styles.descriptionBody}>{modelValue.description}</div>
        </div>
        <div className={styles.equipmentContainer}>
          <div className={styles.equipmentTitle}>Комплектация</div>
          <div className={styles.equipmentBody}></div>
        </div>
        <div className={styles.characteristicsContainer}>
          <div className={styles.characteristicsTitle}>Характеристики</div>
          <div className={styles.characteristicsBody}>
            <div className={styles.basicCharacteristics}>Основные характеристики</div>
            {modelValue.mainCharacteristics.map((item) => (
              <div key={item.title} className={styles.basicCharacteristicsContainer}>
                <div className={styles.basicCharacteristicTitle}>{item.title}</div>
                <div className={styles.basicCharacteristicBody}>{item.body}</div>
              </div>
            ))}
            <div className={styles.screenOptions}>Параметры экрана</div>
            {modelValue.mainCharacteristics.map((item) => (
              <div key={item.title} className={styles.screenOptionsContainer}>
                <div className={styles.screenOptionsTitle}>{item.title}</div>
                <div className={styles.screenOptionsBody}>{item.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MyLayoutContainer>
  );
};

export default Model;
