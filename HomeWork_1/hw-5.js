//Задание №1

function min(number1, number2) {
    if (number1 <= number2) {
        return number1;
    } else {
        return number2;
    }
}

console.log(min(4, 7));
console.log(min(7, 7));
console.log(min(10, 2));

//Задание №2

function parityСheck() {
    let userNumber = Number(prompt("Введите число"));
    if (userNumber % 2 == 0) {
        return "Число четное";
    } else {
        return "Число нечетное";
    }
}

console.log(parityСheck());

//Задание №3

function printSquare(num1) {
    let square = num1 * num1;
    console.log(square);
}

function getSquare(num2) {
    return num2 * num2;
}

printSquare(4);
let result = getSquare(3);

//Задание №4

function checkAge() {
    let userAge = Number(prompt("Сколько вам лет?"));

    if (userAge < 0) {
        console.log("Вы ввели неправильное значение");
    }

    if (userAge >= 0 && userAge <= 12) {
        console.log("Привет, друг!");
    }

    if (userAge > 12) {
        console.log("Добро пожаловать!");
    }
};

checkAge();

//Задание №5

function checkingMultiplying(numb1, numb2) {
    if (isNaN(numb1) || isNaN(numb2)) {
        return "Одно или оба значения не являются числом";
    } else {
        return numb1 * numb2;
    }
};

console.log(checkingMultiplying(4, 3));
console.log(checkingMultiplying(4, "abc"));
console.log(checkingMultiplying("dfg", -3));

//Задание №6

function checkingCubing(n) {
    let userEntered = prompt("Введите число");
    if (isNaN(userEntered)) {
        return 'Переданный параметр не является числом';
    } else {
        let userEnteredCub = userEntered ** 3;
        return `${userEntered} в кубе равняется ${userEnteredCub}`;
    }
};

console.log(checkingCubing());

//Задание №7

const circle1 = {
    radius1: 3,
    getArea() {
        return Math.PI * this.radius1 * this.radius1;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius1;
    }
};

const circle2 = {
    radius2: 7,
    getArea() {
        return Math.PI * this.radius2 * this.radius2;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius2;
    }
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());
