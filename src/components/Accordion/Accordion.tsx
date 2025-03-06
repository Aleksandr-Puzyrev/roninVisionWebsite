"use client"

import { ICharacteristics } from '@/consts/listOfCharacteristics'
import React, { useState } from 'react'
import styles from "./Accordion.module.css"
import Image from 'next/image';

interface AccordionProps {
	item: ICharacteristics
}
const Accordion = ({ item }: AccordionProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<div className={styles.accordion}>
			<button className={styles.btn} onClick={() => setIsOpen(!isOpen)}>
				<div className={styles.strelkaDiv}>
					{item.characteristic}
					<Image src={"/strelka.svg"} alt='' width={33.94} height={16} className={isOpen ? "" : styles.strelkaReverse} />
				</div>
			</button>

			<div className={isOpen ? styles.open : styles.collapse}>
				{item.paramtersValue.map((item, index) => (<div className={styles.collapseBody} key={index}>
					<h5 className={styles.h5}>{item.name}</h5>
					<div className={styles.collapseItem}>
						{Array.isArray(item.value1) && !item.value2 && !item.value3
							?
							<div
								className={styles.itemName}><p>{item.value1[0]}</p><p>{item.value1[1]}</p>
							</div>
							:
							!item.value2 && !item.value3
								?
								<div
									className={styles.itemName}><p>{item.value1}</p>
								</div>
								:
								<><div className={styles.itemName}><p>{item.value1}</p></div>
									<div className={styles.itemName}><p>{item.value2}</p></div>
									<div className={styles.itemName}><p>{item.value3}</p></div>
								</>
						}
					</div>
					<div className={styles.divLine}>
						<div className={styles.line}></div>
					</div>
				</div>
				))}
			</div>
		</div>
	)
}

export default Accordion

