function ParseDate(date) {
  if (date === "") {
    return date;
  }

  let temp = new Date(date);

  function convertingDate(date) {
    return date.toString().length > 1 ? date.toString() : "0" + date;
  }

  let hours = convertingDate(temp.getHours());
  let minutes = convertingDate(temp.getMinutes());

  let year = convertingDate(temp.getFullYear());
  let month = temp.getMonth() + 1; //Чтобы компенсировать начало счета месяцев с 0
  month = convertingDate(month);
  let day = convertingDate(temp.getDate());

  return `${hours}:${minutes} ${day}.${month}.${year}`;
}

export default ParseDate;
