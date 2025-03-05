import { IModelCards } from "@/consts/model-cards.consts";
import Image from "next/image";
import Link from "next/link";
import styles from "./ModelCard.module.css";

interface ModelCardProps {
  model: IModelCards;
}

const ModelCard = ({ model }: ModelCardProps) => {
  return (
    <Link href={"/models/" + model.id} className={styles.container}>
      <Image alt="" src={model.img} className={styles.img} />
      <div className={styles.name}>{model.name}</div>
      <div className={styles.priceContainer}>
        <div className={styles.price}>{model.price}</div>
        <div className={styles.noDiscount}>
          {model.noDiscount}
          <span className={styles.span} />
        </div>
      </div>
      <button className={styles.button}>Купить</button>
    </Link>
  );
};

export default ModelCard;
