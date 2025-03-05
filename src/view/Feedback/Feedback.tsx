import Image from "next/image";
import bear from "../../../public/bear.png";
import borderCard from "../../../public/borderCard.svg";
import formCard from "../../../public/formCard.png";
import plant from "../../../public/plant.svg";
import styles from "./Feedback.module.css";
import FeedbackCard from "./FeedbackCard/FeedbackCard";

const Feedback = () => {
  return (
    <div className={styles.section} id="feedback">
      <h2 className={styles.h2}>
        Записаться <br className={styles.mobileBr} />
        на бесплатный <br />
        тест-драйв
      </h2>
      <div className={styles.container}>
        <Image src={formCard} alt="" className={styles.formCard} />
        <Image src={borderCard} alt="" className={styles.borderCard} />
        <Image src={bear} alt="" className={styles.bear} />
        <Image src={plant} alt="" className={styles.plant} />
        <FeedbackCard />
      </div>
    </div>
  );
};

export default Feedback;
