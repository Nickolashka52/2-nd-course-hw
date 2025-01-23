//Задание №1
let salam = Number(1);
while (salam < 3) {
    salam++;
    console.log('Привет');
}

//Задание №2
let j = Number(1);
while (j < 6) {
    console.log(j);
    j++;
}

//Задание №3
let h = Number(7);
while (h < 23) {
    console.log(h);
    h++;
}

//Задание №4
let obj = {
    Коля: 200,
    Вася: 300,
    Петя: 400
}
for (let key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов.`);
}

//Задание №5
let n = 1000;
let num = 0;
while (n >= 50) {
    n /= 2;
    num++;
}
console.log(n, num);

//Задание №6
let firstFriday = 3;
for (let day = 1; day <= 31; day++) {
    if (day === firstFriday) {
        console.log('Сегодня пятница,', day, '- е число. Необходимо подготовить отчет.')
    } else if (day === firstFriday + 7) {
        console.log('Сегодня пятница,', day, '- е число. Необходимо подготовить отчет.')
    } else if (day === firstFriday + 14) {
        console.log('Сегодня пятница,', day, '- е число. Необходимо подготовить отчет.')
    } else if (day === firstFriday + 21) {
        console.log('Сегодня пятница,', day, '- е число. Необходимо подготовить отчет.')
    } else if (day === firstFriday + 28) {
        console.log('Сегодня пятница,', day, '- е число. Необходимо подготовить отчет.')
    }
}

//Дополнительное задание №1
let k = Number(100);
let iterations = Number(0);
while (k >= 0) {
    k -= 7;
    iterations++;
}
console.log(k, iterations);

//Дополнительное задание №2
let year = {
    январь: 1,
    февраль: 2,
    март: 3,
    апрель: 4,
    май: 5,
    июнь: 6,
    июль: 7,
    август: 8,
    сентябрь: 9,
    октябрь: 10,
    ноябрь: 11,
    декабрь: 12
};
for (let key in year) {
    console.log(`${key}: ${year[key]}`);
};

//Дополнительное задание №3
let book = {
    название: "Бхагават Гита",
    автор: "Шри Кришна",
    "год издания": "Заря творения",
    жанр: "Ведическая литература"
};
for (let key in book) {
    console.log(`${key}: ${book[key]}`);
};

//Дополнительное задание №4

//Не знаю как делать это задание, если можно, давайте его пропустим :-) Спасибо.
