"use client";

import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import styles from "./YMapProvider.module.css";

export default function YMapProvider() {
  return (
    <div className={styles.section}>
      <div className={styles.yMapContainer}>
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
