import { DateType } from "@/interfaces/common";

type ParseDate = (date: DateType) => string;

const parseDate: ParseDate = (date) => {
	const temp = new Date(date);

	function convertingDate(date: string) {
		return date.toString().length > 1 ? date.toString() : "0" + date;
	}

	const hours = convertingDate(temp.getHours().toString());
	const minutes = convertingDate(temp.getMinutes().toString());

	const year = convertingDate(temp.getFullYear().toString());
	const month = convertingDate((temp.getMonth() + 1).toString()); //Чтобы компенсировать начало счета месяцев с 0
	const day = convertingDate(temp.getDate().toString());

	return `${hours}:${minutes} ${day}.${month}.${year}`;
};

export { parseDate };
