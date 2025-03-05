import Accordion from '@/components/Accordion/Accordion'
import Characteristics from '@/consts/listOfCharacteristics'
import styles from './AccordionList.module.css'
import React from 'react'

export default function AccordionList() {
	return (
		<div className={styles.accGap}>
			{Characteristics.map((item, index) =>
				<Accordion key={index} item={item} />
				
			)}
		</div>
	)
}
