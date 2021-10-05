function parseDate(date) {
	const temp = new Date(date);

	function convertingDate(date) {
		return date.toString().length > 1 ? date.toString() : "0" + date;
	}

	const hours = convertingDate(temp.getHours());
	const minutes = convertingDate(temp.getMinutes());

	const year = convertingDate(temp.getFullYear());
	const month = convertingDate(temp.getMonth() + 1); //Чтобы компенсировать начало счета месяцев с 0
	const day = convertingDate(temp.getDate());

	return `${hours}:${minutes} ${day}.${month}.${year}`;
}

export { parseDate };
