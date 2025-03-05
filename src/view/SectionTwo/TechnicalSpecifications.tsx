import AccordionList from '../AccordionList/AccordionList';
import styles from './TechnicalSpecifications.module.css';
import Image from 'next/image';

const TechnicalSpecifications = () => {
	return (
		<div className={styles.container}>
			<Image src={"/elipse1.svg"} className={styles.elipse1} alt='' width={401} height={401} />
			<Image src={"/elipse2.svg"} className={styles.elipse2} alt='' width={110} height={110} />
			<div className={styles.h2} >Технические характеристики</div>
			<div className={styles.secondaryContainer}>
				<div className={styles.models}>
					<div className={styles.modelName}>RN-65HD-i5-256G<br></br>RN-65HD-i7-512G</div>
					<div className={styles.modelName}>RN-75HD-i5-256G<br></br>RN-75HD-i7-512G</div>
					<div className={styles.modelName}>RN-86HD-i5-256G<br></br>RN-86HD-i7-512G</div>
				</div>
				<div className={styles.divLine}>
					<div className={styles.line}></div>
				</div>
				<div>
					<AccordionList />
				</div>
			</div>
		</div>
	)
}

export default TechnicalSpecifications

