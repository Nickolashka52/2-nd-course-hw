//Задание №1

const stringTask1 = 'js';
console.log(stringTask1.toUpperCase());

//Задание №2

const arrStringsTask2 = ['Барбарисовый маринад', 'Фиолетовый домкрат', 'Железная доска'];
const stringTask2 = 'фиолетовый';

const filteredResults = arrStringsTask2.filter((element) =>
    element.toLowerCase().startsWith(stringTask2.toLowerCase())
);

console.log(filteredResults);

//Задание №3

const numberTask3 = 32.58884;
console.log(Math.floor(numberTask3));
console.log(Math.ceil(numberTask3));
console.log(Math.round(numberTask3));

//Задание №4

const arrTask4 = [52, 53, 49, 77, 21, 32];
console.log(Math.max(...arrTask4));
console.log(Math.min(...arrTask4));

//Либо так:

console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));

//Задание №5

const numberTask5 = Math.ceil(Math.random() * 10);
console.log(numberTask5);

//Задание №6

function generateRandomArray(num) {
    let length = Math.floor(num / 2);
    const randomArray = [];
    for (let i = 0; i < length; i++) {
        let randomNum = Math.floor(Math.random() * (num + 1));
        randomArray.push(randomNum);
    }
    return randomArray;
}
console.log(generateRandomArray(14));

//Задание №7

function getRandomNumberInRange(min, max) {

    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
}
console.log(getRandomNumberInRange(3, 19));
console.log(getRandomNumberInRange(-3, 8));

//Задание №8

let currentDateTask8 = new Date();
console.log(currentDateTask8);

//Задание №9

let currentDateTask9 = new Date();
console.log("Текущая дата: " + currentDateTask9.toLocaleDateString());

let currentDayTask9 = currentDateTask9.getDate();
currentDateTask9.setDate(currentDayTask9 + 73);

console.log("Дата через 73 дня: " + currentDateTask9.toLocaleDateString());

//Задание №10

function formatDateTime(date) {

    const months = [
        "января", "февраля", "марта", "апреля",
        "мая", "июня", "июля", "августа",
        "сентября", "октября", "ноября", "декабря"
    ];

    const daysOfWeek = [
        "воскресенье", "понедельник", "вторник",
        "среда", "четверг", "пятница", "суббота"
    ];

    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let dayOfWeek = daysOfWeek[date.getDay()];

    let hours = String(date.getHours());
    let minutes = String(date.getMinutes());
    let seconds = String(date.getSeconds());

    let datePart = `Дата: ${day} ${month} ${year} — это ${dayOfWeek}.`;
    let timePart = `Время: ${hours}:${minutes}:${seconds}`;

    return `${datePart}\n${timePart}`;
}

let currentDate = new Date();
console.log(formatDateTime(currentDate));
