import React from "react";
import styles from "./models.module.css";
import MyLayoutContainer from "@/components/MyLayoutContainer/MyLayoutContainer";
import { modelCards } from "@/consts/model-cards.consts";
import ModelCard from "@/components/ModelCard/ModelCard";

const Models = () => {
  return (
    <MyLayoutContainer>
      <div className={styles.container}>
        {modelCards.map((item) => (
          <ModelCard key={item.id} model={item} />
        ))}
      </div>
    </MyLayoutContainer>
  );
};

export default Models;
