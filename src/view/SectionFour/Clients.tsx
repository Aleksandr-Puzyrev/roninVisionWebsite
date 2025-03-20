import React from 'react'
import styles from './Clients.module.css'
import Image from 'next/image';
import Ivanov from "../../../public/Ivanov.png"
import Tishinkoff from "../../../public/Tishinkoff.png"
import BiznessInkybator from "../../../public/BiznessInkybator.png"

const Clients = () => {
	return (
		<div className={styles.container} id="clients">
			<h2 className={styles.h2}>Наши клиенты</h2>
			<div className={styles.secondaryContainer}>
				<div className={styles.divImage}>
					<Image src={Ivanov} alt='' />
					<p className={styles.text}>Детский сад №</p>
				</div>
				<div className={styles.divImage}>
					<Image src={Tishinkoff} alt='' />
				</div>
				<div className={styles.divImage}>
					<Image src={BiznessInkybator} alt='' />
				</div>
			</div>
		</div>
	)
}

export default Clients;