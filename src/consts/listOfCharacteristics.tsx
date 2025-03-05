interface IParamtersValue {
	name: string;
	value1: string | string[];
	value2: string;
	value3: string;
}

export interface ICharacteristics {
	characteristic: string;
	paramtersValue: IParamtersValue[];
}

const Characteristics: ICharacteristics[] = [
	{
		characteristic: "Параметры экрана",
		paramtersValue: [
			{ name: "Диагональ", value1: "65″", value2: "75″", value3: "86″" },
			{ name: "Тип подсветки", value1: "D-LED", value2: "D-LED", value3: "D-LED" },
			{ name: "Соотношение сторон", value1: "16:9", value2: "16:9", value3: "16:9" },
			{ name: "Разрешение", value1: "3840x2160(4K Ultra HD)", value2: "3840x2160(4K Ultra HD)", value3: "3840x2160(4K Ultra HD)" },
			{ name: "Яркость", value1: "350 кд/м²", value2: "350 кд/м²", value3: "350 кд/м²" },
			{ name: "Контрастность", value1: "3000:1", value2: "5000:1", value3: "5000:1" },
			{ name: "Угол обзора", value1: "178°(H)/178°(V)", value2: "178°(H)/178°(V)", value3: "178°(H)/178°(V)" },
			{ name: "Цветопередача", value1: "10 bit 1.07B (1.07 млрд)", value2: "10 bit 1.07B (1.07 млрд)", value3: "10 bit 1.07B (1.07 млрд)" },
			{ name: "Чипсет", value1: "CVTE T982.61 (4+32G)", value2: "CVTE T982.61 (4+32G)", value3: "CVTE T982.61 (4+32G)" },
			{ name: "Жизненный цикл", value1: "≥50,000 ч", value2: "≥50,000 ч", value3: "≥50,000 ч" },
		]
	},
	{
		characteristic: "Параметры панели",
		paramtersValue: [
			{ name: "Тип сенсора", value1: "Инфракрасный сенсорный экран", value2: "", value3: "" },
			{ name: "Время отклика касания", value1: "≤8сек", value2: "≤8сек", value3: "≤8сек" },
			{ name: "Толщина защитного стекла", value1: "4 мм", value2: "4 мм", value3: "4 мм" }
		]
	},
	{
		characteristic: "Операционная система",
		paramtersValue: [
			{ name: "Операционная система", value1: "Android 11/13/14", value2: "Android 11/13/14", value3: "Android 11/13/14" },
			{ name: "Объем оперативной памяти", value1: "4G/8G/16G", value2: "4G/8G/16G", value3: "4G/8G/16G" },
			{ name: "Объем внутренней памяти", value1: "32G/128G/256G", value2: "32G/128G/256G", value3: "32G/128G/256G" }
		]
	},
	{
		characteristic: "Интерфейсы",
		paramtersValue: [
			{ name: "На передней частии панели", value1: "Вкл/Выкл х1; Type-C х1; HDMI х1 (4K@60HZ, 2.3); USB 3.0 х2; Touch USBх1", value2: "", value3: "" },
			{ name: "На задней части панели", value1: "Вкл/Выкл х1; USB 3.0 х2; USB 2.0 х1;  HDMI х2 (4K@60HZ, 2.3); RS232 х1; LAN RJ45 х2 (100Mb); LINE OUT х1; AUDIO IN х1; Вход 220В х1; Wi-Fi (антенны х4)", value2: "", value3: "" },
			{ name: "Wi-Fi (6.0)", value1: "Wifi/AP 2.4G/5G 802.11ax/ac/a/b/g/n", value2: "Wifi/AP 2.4G/5G 802.11ax/ac/a/b/g/n", value3: "Wifi/AP 2.4G/5G 802.11ax/ac/a/b/g/n" },
			{ name: "Поддерживаемые стандарты защиты", value1: "802.11а/b/g/n/ac/ax", value2: "802.11а/b/g/n/ac/ax", value3: "802.11а/b/g/n/ac/ax" },
			{ name: "Тип сенсора", value1: "Инфракрасный, интерактивный", value2: "", value3: "" },
			{ name: "Количество касаний", value1: "Одновременно 20", value2: "Одновременно 20", value3: "Одновременно 20" },
			{ name: "Размер панели", value1: "1488x906x87 мм", value2: "1709x1038x90 мм", value3: "1709x1038x90 мм" },
		]
	},
	{
		characteristic: "Встраиваемый интегрируемый компьютер (OPS)",
		paramtersValue: [
			{ name: "Операционная система", value1: "Windows 11", value2: "Windows 11", value3: "Windows 11" },
			{ name: "Процессор", value1: ["- Intel Core i5-12450H (4.4 Ггц, 8 ядер 12 потоков)", "- Intel Core i7-13620H (4.9 Ггц, 10 ядер 16 потоков)"], value2: "", value3: "" },
			{ name: "Оперативная память", value1: "8Gb/16Gb/32Gb", value2: "8Gb/16Gb/32Gb", value3: "8Gb/16Gb/32Gb" },
			{ name: "Количество касаний", value1: "Одновременно 40", value2: "Одновременно 40", value3: "Одновременно 40" },
			{ name: "Точность касания", value1: "1 мм", value2: "1 мм", value3: "1 мм" },
			{ name: "Жесткий диск SSD", value1: "128Gb/256Gb/512Gb", value2: "128Gb/256Gb/512Gb", value3: "128Gb/256Gb/512Gb" },
			{ name: "Видеокарта", value1: "Intel HD", value2: "Intel HD", value3: "Intel HD" },
			{ name: "Сеть", value1: "Wi-Fi, WLAN, Bluetooth", value2: "Wi-Fi, WLAN, Bluetooth", value3: "Wi-Fi, WLAN, Bluetooth" },
			{ name: "OPS слот", value1: "JAE 80 pin", value2: "JAE 80 pin", value3: "JAE 80 pin" },
			{ name: "На задней части панели", value1: "HDMIх1 (4K@30HZ, 2.3); DP х1(4K@30HZ, 2.3); MIC IN x1; LINE OUT х1; SPDIF OUT х1, USB 3.0х6, Type-C х1; Touch USBх1, RS232 х1; LAN RJ45 х1(100Mb); Wi-Fi (антенны х2)", value2: "", value3: "" },
		]
	},
	{
		characteristic: "Дополнительно",
		paramtersValue: [
			{ name: "Встроенная WEB-камера с микрофоном", value1: "48MP, 8 микрофонов", value2: "48MP, 8 микрофонов", value3: "48MP, 8 микрофонов" },
			{ name: "Динамик", value1: "2*16W/+сабвуфер 2*16W", value2: "2*16W/+сабвуфер 2*16W", value3: "2*16W/+сабвуфер 2*16W" },
			{ name: "Дальность действия", value1: "8 м", value2: "8 м", value3: "8 м" },
		]
	},
	{
		characteristic: "Питание",
		paramtersValue: [
			{ name: "Напряжение", value1: "AC90-260V", value2: "AC90-260V", value3: "AC90-260V" },
			{ name: "Частота обновления", value1: "50/60 Hz", value2: "50/60 Hz", value3: "50/60 Hz" },
		]
	},
	{
		characteristic: "Дополнительно",
		paramtersValue: [
			{ name: "Тип крепления", value1: "Мобильная стойка, ножка манипулятор, настенное крепление", value2: "", value3: "" },
			{ name: "Цвет корпуса", value1: "Черный, серебро", value2: "Черный, серебро", value3: "Черный, серебро" },
			{ name: "Материал корпуса", value1: "Алюминиевый профиль, сталь 2 мм", value2: "Алюминиевый профиль, сталь 2 мм", value3: "Алюминиевый профиль, сталь 2 мм" },
			{ name: "Размеры упаковки", value1: "1628x208x1014 мм", value2: "1628x208x1014 мм", value3: "1628x208x1014 мм" },
			{ name: "Вес", value1: "37 кг", value2: "48 кг", value3: "64 кг" },
			{ name: "Вес с упаковкой", value1: "45 кг", value2: "63 кг", value3: "83 кг" },
		]
	},
	{
		characteristic: "Условия использования",
		paramtersValue: [
			{ name: "Температура эксплуатации", value1: "от -5 до +50°C", value2: "от -5 до +50°C", value3: "от -5 до +50°C" },
			{ name: "Температура хранения", value1: "от -20 до +60°C", value2: "от -20 до +60°C", value3: "от -20 до +60°C" },
			{ name: "Рабочая влажность", value1: "Не более 90°", value2: "Не более 90°", value3: "Не более 90°" },
			{ name: "Способы подключения", value1: "Проводное, беспроводное, при помощи устройства Dongle без установки дополнительных приложений", value2: "", value3: "" }
		]
	},
	

]

export default Characteristics
