import React from 'react'
import styles from './BlockDocumentation.module.css'
import Image from 'next/image';

const BlockDocumentation = () => {
	return (
		<div className={styles.container} id="documentation">
			<h2 className={styles.h2}>Подготовим всю необходимую документацию<br></br>для участия в гос закупках</h2>
			<div className={styles.secondaryContainer}>
			<Image src={"/MagazinPokypok.png"}  alt='' width={535.79} height={102} />
			<Image src={"/EUCzakypki.png"}  alt='' width={370.14} height={102} />
			<Image src={"/TekTorg.png"} alt='' width={102} height={102} />
			</div>
		</div>
	)
}

export default BlockDocumentation;