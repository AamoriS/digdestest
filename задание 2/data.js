function getDayInfo(data) {
    let split = data.split(".");
    let dataFromSplit = new Date(Number(split[2]), Number(split[1]) - 1, Number(split[0]));

    let months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
        "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    let monthNumber = dataFromSplit.getMonth();

    let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    let dayNumber = dataFromSplit.getDay();

    let firstDayOfMonth = new Date(dataFromSplit.getFullYear(), monthNumber, 1);
    let pastDaysOfMonth = (dataFromSplit - firstDayOfMonth) / 86400000;
    let weekNumber = Math.ceil((pastDaysOfMonth + firstDayOfMonth.getDay() + 1) / 7);

    return `${days[dayNumber]}, ${weekNumber} неделя ${months[monthNumber]} ${dataFromSplit.getFullYear()} года`
}
