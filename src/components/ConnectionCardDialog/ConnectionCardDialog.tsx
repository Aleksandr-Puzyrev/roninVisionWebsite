import Image from "next/image";
import bear from "../../../public/bear.png";
import borderCard from "../../../public/borderCard.svg";
import formCard from "../../../public/formCard.png";
import plant from "../../../public/plant.svg";
import closeIcon from "../../../public/close.png";
import styles from "./ConnectionCardDialog.module.css";
import FeedbackCard from "@/view/Feedback/FeedbackCard/FeedbackCard";
import { Dispatch, SetStateAction } from "react";

interface ConnectionCardDialogProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
const ConnectionCardDialog = ({ isOpen, setIsOpen }: ConnectionCardDialogProps) => {
  return (
    <div className={`${isOpen ? styles.active : styles.close}`}>
      <div className={styles.container}>
        <Image src={formCard} alt="" className={styles.formCard} />
        <Image src={borderCard} alt="" className={styles.borderCard} />
        <Image src={bear} alt="" className={styles.bear} />
        <Image src={plant} alt="" className={styles.plant} />
        <button onClick={() => setIsOpen(false)}>
          <Image src={closeIcon} alt="" className={styles.closeIcon} />
        </button>
        <FeedbackCard isModal />
      </div>
    </div>
  );
};

export default ConnectionCardDialog;
