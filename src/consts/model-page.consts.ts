import { StaticImageData } from "next/image";
import Model1 from "../../public/Model1.png";
import Model11 from "../../public/Model11.png";
import Model12 from "../../public/Model12.png";
import Model2 from "../../public/Model2.png";
import Model3 from "../../public//Model3.png";

interface ICharacteristics {
  title: string;
  body: string;
}

export interface IModels {
  id: string;
  img: { id: number; value: StaticImageData }[];
  name: string;
  price: string;
  noDiscount: string;
  discount: string;
  characteristics: ICharacteristics[];
  description: string;
  mainCharacteristics: ICharacteristics[];
  screenOptions: ICharacteristics[];
}

export const models: IModels[] = [
  {
    id: "1",
    img: [
      { id: 1, value: Model1 },
      { id: 2, value: Model11 },
      { id: 3, value: Model12 },
    ],
    name: "65″ Интерактивная панель RN-65HD-i5-256G, черный",
    price: "250 000",
    noDiscount: "300 000 ₽",
    discount: "-15%",
    characteristics: [
      { title: "Код производителя:", body: "RN-65HD-i5-256G" },
      { title: "Диагональ:", body: "65″" },
      { title: "Тип подсветки", body: "D-LED" },
      { title: "Соотношение сторон:", body: "16:9" },
      { title: "Разрешение:", body: "3840х2160 (4K Ultra HD)" },
    ],
    description:
      "65″ Интерактивная панель RN-65HD-i5-256G подходит для небольших помещений или офисов. Расстояние до зрителя 2-3 метра",
    mainCharacteristics: [
      { title: "Тип", body: "Интерактивная доска" },
      { title: "Бренд", body: "RONIN VISION" },
      { title: "Год релиза", body: "2025" },
    ],
    screenOptions: [
      { title: "Диагональ", body: "65″" },
      { title: "Тип подсветки", body: "D-LED" },
      { title: "Соотношение сторон", body: "16:9" },
    ],
  },
  {
    id: "2",
    img: [{ id: 1, value: Model2 }],
    name: "75″ Интерактивная панель RN-75HD-i5-256G, черный",
    price: "300 000",
    noDiscount: "350 000 ₽",
    discount: "-15%",
    characteristics: [
      { title: "Код производителя:", body: "RN-65HD-i5-256G" },
      { title: "Диагональ:", body: "65″" },
      { title: "Тип подсветки", body: "D-LED" },
      { title: "Соотношение сторон:", body: "16:9" },
      { title: "Разрешение:", body: "3840х2160 (4K Ultra HD)" },
    ],
    description:
      "65″ Интерактивная панель RN-65HD-i5-256G подходит для небольших помещений или офисов. Расстояние до зрителя 2-3 метра",
    mainCharacteristics: [
      { title: "Тип", body: "Интерактивная доска" },
      { title: "Бренд", body: "RONIN VISION" },
      { title: "Год релиза", body: "2025" },
    ],
    screenOptions: [
      { title: "Диагональ", body: "65″" },
      { title: "Тип подсветки", body: "D-LED" },
      { title: "Соотношение сторон", body: "16:9" },
    ],
  },
  {
    id: "3",
    img: [{ id: 1, value: Model3 }],
    name: "86″ Интерактивная панель RN-86HD-i5-256G, черный",
    price: "350 000",
    noDiscount: "400 000 ₽",
    discount: "-15%",
    characteristics: [
      { title: "Код производителя:", body: "RN-65HD-i5-256G" },
      { title: "Диагональ:", body: "65″" },
      { title: "Тип подсветки", body: "D-LED" },
      { title: "Соотношение сторон:", body: "16:9" },
      { title: "Разрешение:", body: "3840х2160 (4K Ultra HD)" },
    ],
    description:
      "65″ Интерактивная панель RN-65HD-i5-256G подходит для небольших помещений или офисов. Расстояние до зрителя 2-3 метра",
    mainCharacteristics: [
      { title: "Тип", body: "Интерактивная доска" },
      { title: "Бренд", body: "RONIN VISION" },
      { title: "Год релиза", body: "2025" },
    ],
    screenOptions: [
      { title: "Диагональ", body: "65″" },
      { title: "Тип подсветки", body: "D-LED" },
      { title: "Соотношение сторон", body: "16:9" },
    ],
  },
];
