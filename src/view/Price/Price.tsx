import Image from "next/image";
import Link from "next/link";
import Arrow from "../../../public/Arrow.svg";
import SizeBig from "../../../public/SizeBig.png";
import SizeMedium from "../../../public/SizeMedium.png";
import SizeMini from "../../../public/SizeMini.png";
import styles from "./Price.module.css";

const Price = () => {
  return (
    <div className={styles.section}>
      <div className={styles.title}>Стоимость</div>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr>
            <th>Размеры</th>
            <th>Рекомендации</th>
            <th>Модель</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          <tr>
            <td>
              <Image src={SizeMini} alt="mini size" className={styles.image} />
            </td>
            <td className={styles.recomendationBody}>
              Подходит для небольших помещений или офисов. Расстояние до зрителя 2-3 метра
            </td>
            <td>
              <div className={styles.modelContainer}>
                <div>RN-65HD-i5-256G</div>
                <div>RN-65HD-i7-512G</div>
              </div>
            </td>
            <td>
              <div className={styles.priceContainer}>
                <div>250 000 ₽</div>
                <div>300 000 ₽</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <Image src={SizeMedium} alt="medium size" className={styles.image} />
            </td>
            <td className={styles.recomendationBody}>
              Идеален для конференц-залов, учебных классов. Расстояние до зрителя 3-4 метра
            </td>
            <td>
              <div className={styles.modelContainer}>
                <div>RN-75HD-i5-256G</div>
                <div>RN-75HD-i7-512G</div>
              </div>
            </td>
            <td>
              <div className={styles.priceContainer}>
                <div>300 000 ₽</div>
                <div>350 000 ₽</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <Image src={SizeBig} alt="big size" className={styles.image} />
            </td>
            <td className={styles.recomendationBody}>
              Рекомендуется для больших помещений, презентационных зон. Расстояние до зрителя от 4
              метра
            </td>
            <td>
              <div className={styles.modelContainer}>
                <div>RN-86HD-i5-256G</div>
                <div>RN-86HD-i7-512G</div>
              </div>
            </td>
            <td>
              <div className={styles.priceContainer}>
                <div>350 000 ₽</div>
                <div>400 000 ₽</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className={styles.actionContainer}>
        <div></div>
        <button className={styles.button}>Оставить заявку</button>
        <div className={styles.linkContainer}>
          <Link href={"/"} className={styles.link}>
            Узнать больше
          </Link>
          <Image src={Arrow} alt="arrow" className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default Price;
