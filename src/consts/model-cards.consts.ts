import { StaticImageData } from "next/image";
import Model1 from "../../public/Model1.png";
import Model2 from "../../public/Model2.png";
import Model3 from "../../public//Model3.png";

export interface IModelCards {
  id: string;
  img: StaticImageData;
  name: string;
  price: string;
  noDiscount: string;
}

export const modelCards: IModelCards[] = [
  {
    id: "1",
    img: Model1,
    name: "65″ Интерактивная панель RN-65HD-i5-256G, черный",
    price: "250 000 ₽",
    noDiscount: "300 000 ₽",
  },
  {
    id: "2",
    img: Model2,
    name: "75″ Интерактивная панель RN-75HD-i5-256G, черный",
    price: "300 000 ₽",
    noDiscount: "350 000 ₽",
  },
  {
    id: "3",
    img: Model3,
    name: "86″ Интерактивная панель RN-86HD-i5-256G, черный",
    price: "350 000 ₽",
    noDiscount: "400 000 ₽",
  },
];
