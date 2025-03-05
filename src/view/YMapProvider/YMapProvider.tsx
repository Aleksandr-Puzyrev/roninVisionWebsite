"use client";

import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import Link from "next/link";
import styles from "./YMapProvider.module.css";

export default function YMapProvider() {
  return (
    <div className={styles.section} id="ymap">
      <div className={styles.yMapContainer}>
        <div className={styles.title}>
          У вас остались вопросы?
          <br />
          <span className={styles.bold}>Приезжайте к нам в офис</span>
        </div>
        <div className={styles.contacts}>
          <div>
            <div className={styles.contactsTitle}>Адрес:</div>
            <div className={styles.contactsBody}>г. Чебоксары, Московский проспект, 29</div>
          </div>
          <div className={styles.PhoneEmailContainer}>
            <div>
              <div className={styles.contactsTitle}>Телефон:</div>
              <div className={styles.contactsBody}>+7(927) 844-20-40</div>
            </div>
            <div>
              <div className={styles.contactsTitle}>Почта:</div>
              <div className={styles.contactsBody}>sprintxxx@mail.ru</div>
            </div>
          </div>
        </div>
        <div className={styles.privacyPolicy}>
          <Link href={"/"} className={styles.privacyPolicyTitle}>
            Политика конфиденциальности
          </Link>
          <div className={styles.privacyPolicyBody}>2024-2025. Все права защищены</div>
        </div>
        <YMaps query={{ apikey: process.env.NEXT_PUBLIC_YMAP_APIKEY }}>
          <Map
            defaultState={{
              center: [56.143689, 47.209594],
              zoom: 16,
            }}
            width="100%"
            height="408px"
          >
            <Placemark defaultGeometry={[56.143689, 47.209594]} />
          </Map>
        </YMaps>
      </div>
    </div>
  );
}
