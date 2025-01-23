//Задание №1
let password = 'джаганнатх';
let passwordUser = prompt("Введите пароль");
if (password == passwordUser) {
    console.log("Пароль введен верно");
} else {
    console.log("Пароль введен неверно");
}

//Задание №2
let c = 2;
if (c > 0 && c < 10) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

//Задание №3
let d = 145;
let e = 26;
if (d > 100 || e > 100) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

//Задание №4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

//Задание №5
let monthNumber = Number(prompt("Введите номер месяца"));
switch (monthNumber) {
    case 1:
    case 2:
    case 3:
        console.log('Зима, зимушка, зима.');
        break;
    case 4:
    case 5:
    case 6:
        console.log('Весна на дворе.');
        break;
    case 7:
    case 8:
    case 9:
        console.log('Так это ж лето красное.');
        break;
    case 10:
    case 11:
    case 12:
        console.log('Осень. Немного сыро, хлеба, колбасы.');
        break;
    default:
        console.log('В году только 12 месяцев.');
}

//Дополнительное задание №1
let numberEnter = Number(prompt("Пожалуйста, введите любое число"));
if (isNaN(numberEnter)) {
    console.log('Пожалуйста, ведите корректное число.');
} else {
    if (numberEnter % 2 === 0) {
        console.log('Число четное');
    } else {
        console.log('Число нечетное');
    }
}

//Дополнительное задание №2
let clientOS = 0;
if (clientOS === 0) {
    console.log('Установите версию приложения для iOS по ссылке');
} else if (clientOS === 1) {
    console.log('Установите версию приложения для Android по ссылке');
} else {
    console.log('Некорректное значение операционной системы');
}

//Дополнительное задание №3
clientOS = 0;
let clientDeviceYear = 2015;
if (clientOS === 0) {
    if (clientDeviceYear >= 2015) {
        console.log('Установите версию приложения для iOS по ссылке');
    } else {
        console.log('Установите облегченную версию приложения для iOS по ссылке');
    }
} else if (clientOS === 1) {
    if (clientDeviceYear >= 2015) {
        console.log('Установите версию приложения для Android по ссылке');
    } else {
        console.log('Установите облегченную версию приложения для Android по ссылке');
    }
} else {
    console.log('Некорректное значение операционной системы');
}