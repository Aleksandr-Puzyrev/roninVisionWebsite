import React from 'react';
import styles from "./Advantage.module.css"
import Image from 'next/image';


const Advantage = () => {
	return (
		<div className={styles.container} id="advantage">
			<h2 className={styles.h2}>Преимущества</h2>
			<div className={styles.secondaryContainer} >
				<div className={styles.leftSideContainer}>
					<div className={styles.quickConnection}>
						<div className={styles.image}>
							<Image src={"/wind.svg"} alt='' width={99.9} height={34} />
							<Image src={"/android.svg"} alt='' width={87} height={34} />
						</div>
						<h5 className={styles.h5}>Быстрое переключение</h5>
						<p className={styles.text}> Поддерживает 2 операционные системы, которые быстро переключаются </p>
					</div>
					<div className={styles.camera}>
						<div className={styles.smallGapLeft}>
							<Image src={"/camera.svg"} alt='' width={47} height={47} />
							<h5 className={styles.h5}>Камера 48 Mp</h5>
						</div>
						<p className={styles.text}>Автоматически распознает объекта</p>
					</div>
					<div className={styles.microphone}>
						<Image src={"/microphone.svg"} alt='' width={47} height={47} />
						<h5 className={styles.h5}>8 встроенных микрофонов</h5>
						<p className={styles.text}>Устраняет посторонний шум, дальность приема звуков - 10м</p>
					</div>
				</div>
				<div className={styles.rightSideContainer}>
					<div className={styles.softSpelling}>
						<div className={styles.smallGapRight}>
							<Image src={"/pen.svg"} alt='' width={47} height={47} />
							<h5 className={styles.h5}>Мягкое<br></br>написание</h5>
						</div>
						<p className={styles.text}>Высокоточное инфракрасное касание толщиной 1мм создает ощущение письма на бумаге</p>
					</div>
					<div className={styles.fileTransfer}>
						<div className={styles.smallGapRight}>
							<Image src={"/folder.svg"} alt='' width={47} height={47} />
							<h5 className={styles.h5}>Передача файлов</h5>
						</div>
						<p className={styles.text}>Передает файлы<br></br>через QR-код</p>
					</div>
					<div className={styles.fourK}>
						<Image src={"/4k.svg"} alt='' width={47} height={47} />
						<h5 className={styles.h5}>Дисплей 4K HD</h5>
						<p className={styles.text}>Четкое и качественное изображение. Высокое разрешение (2340*2160)</p>
					</div>
				</div>
			</div>
			<div className={styles.bottom}>
				<div className={styles.projectingPhone}>
					<div>
						<Image src={"/WIFI.svg"} alt='' width={"47"} height={"47"}></Image>
						<h2 className={styles.h5}>Проецирование экрана телефона</h2>
					</div>
					<p className={styles.text}>Демонстрация информации с телефона на большом экране</p>
				</div>
			</div>
		</div >

	)
}

export default Advantage;
