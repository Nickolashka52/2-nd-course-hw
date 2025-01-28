//Задание №1

const arrayTask1 = [1, 5, 4, 10, 0, 3];
for (let iTask1 = 0; iTask1 < arrayTask1.length; iTask1++) {
    if (arrayTask1[iTask1] == 10) break;
    console.log(arrayTask1[iTask1]);
};

//Задание №2

const arrayTask2 = [1, 5, 4, 10, 0, 3];
for (let iTask2 = 0; iTask2 < arrayTask2.length; iTask2++) {
    if (arrayTask2[iTask2] == 4) {
        console.log(iTask2);
        break;
    };
};


const arrayTask2Version2 = [1, 5, 4, 10, 0, 3];
const arrayTask2Version2Index = arrayTask2Version2.indexOf(4);
console.log(arrayTask2Version2Index);


const arrayTask2Version3 = [1, 5, 4, 10, 0, 3];
const valueToFind = 4;
const index = arrayTask2Version3.findIndex(element => element === valueToFind);
console.log(index);

//Задание №3

const arrayTask3 = [1, 3, 5, 10, 20];
const arrayTask3Joined = arrayTask3.join(" ");
console.log(arrayTask3Joined);

//Задание №4

const arrayTask4 = [];
for (let iTask4 = 0; iTask4 < 3; iTask4++) {
    const innerArrayTask4 = [];
    for (let jTask4 = 0; jTask4 < 3; jTask4++) {
        innerArrayTask4.push(1);
    }
    arrayTask4.push(innerArrayTask4);
}
console.log(arrayTask4);

//Задание №5

const arrayTask5 = [1, 1, 1];
arrayTask5.push(2, 2, 2);
console.log(arrayTask5);

//Задание №6

const arrayTask6 = [9, 8, 7, 'a', 6, 5];
arrayTask6.sort();
arrayTask6.pop();
console.log(arrayTask6);

//Задание №7

const arrayTask7 = [9, 8, 7, 6, 5];
let userNumberTask7 = Number(prompt("Я загадал 5 чисел до 10. Попробуй отгадать любое из них."));
if (arrayTask7.includes(userNumberTask7)) {
    alert("Угадал!");
}
else {
    alert("Не угадал!");
};

//Задание №8

const arrayTask8 = 'abcdef';
let splitArrayTask8 = arrayTask8.split("");
splitArrayTask8.reverse();
let joinArrayTask8 = splitArrayTask8.join("")
console.log(joinArrayTask8);

const arrayTask8Version2 = 'abcdef';
let joinArrayTask8Version2 = arrayTask8Version2.split("").reverse().join("");
console.log(joinArrayTask8Version2);

//Задание №9

const arrayTask9 = [[1, 2, 3], [4, 5, 6]];
const flatArrayTask9 = [].concat(...arrayTask9);
console.log(flatArrayTask9);

const arrayTask9Version2 = [[1, 2, 3], [4, 5, 6]];
console.log(arrayTask9Version2.flat());

//Задание №10

const arrayTask10 = [1, 3, 5, 7, 9];
for (let iTask10 = 0; iTask10 < arrayTask10.length; iTask10++) {
    if (iTask10 < arrayTask10.length - 1) {
        console.log(arrayTask10[iTask10] + arrayTask10[iTask10 + 1]);
    }
}

//Задание №11

const arrayTask11 = [1, 3, 4, 6, 7, 8, 13, 17];
let arrayTask11Squared = arrayTask11.map(function (el) {
    return el ** 2;
});
console.log(arrayTask11Squared);

//Задание №12

function getStringLengths(strings) {
    return strings.map(function (str) {
        return str.length;
    });
}

const arrayTask12 = ["miracle", "branch", "light", "mute"];
const lengths = getStringLengths(arrayTask12);
console.log(lengths);

//Задание №13

const arrayTask13 = [3, -2, 7, 3445, -222, -35, 114];
const filteredArrayTask13 = arrayTask13.filter(numbTask13 => numbTask13 < 0);
console.log(filteredArrayTask13);

//Задание №14

const arrayTask14 = [];

for (let iTask14 = 0; iTask14 < 10; iTask14++) {
    const randomValue = Math.floor(Math.random() * 11);
    arrayTask14.push(randomValue);
}
const filteredArrayTask14 = arrayTask14.filter(numbTask14 => numbTask14 % 2 === 0);

console.log(arrayTask14);
console.log(filteredArrayTask14);

//Задание №15

const arrayTask15 = [];

for (let iTask15 = 0; iTask15 < 6; iTask15++) {
    const randomValue = Math.floor(Math.random() * 11);
    arrayTask15.push(randomValue);
}
const mean = arrayTask15.reduce((total, number) => total + number, 0) / 2;

console.log(arrayTask15);
console.log(mean);