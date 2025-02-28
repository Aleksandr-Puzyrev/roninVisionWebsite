import Image from "next/image";
import boardImage from "../../../public/board.png";
import computerImage from "../../../public/computer.png";
import projectorImage from "../../../public/projector.png";
import styles from "./Multifunctionality.module.css";

const Multifunctionality = () => {
  return (
    <div className={styles.section}>
      <div className={styles.title}>Одно устройство для всех задач</div>
      <div className={styles.deviceImageList}>
        <Image src={boardImage} alt="Школьная доска" className={styles.deviceImage} />
        <Image src={projectorImage} alt="Пректор" className={styles.deviceImage} />
        <Image src={computerImage} alt="Компьютер" className={styles.deviceImage} />
      </div>
      <div className={styles.deviceListContainer}>
        <div className={styles.deviceList}>
          <div className={styles.deviceListItem}>Школьная доска</div>
          <div className={styles.deviceListItem}>Проектор</div>
          <div className={styles.deviceListItem}>Компьютер</div>
        </div>
      </div>
    </div>
  );
};

export default Multifunctionality;
