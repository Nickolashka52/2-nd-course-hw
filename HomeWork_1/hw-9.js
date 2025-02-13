//Задание №1

const titleTask1El = document.querySelector('.title_task1');
const buttonTask1El = document.querySelector('.button_task1');
let isHeaderVisible = true;

buttonTask1El.addEventListener('click', function () {
    if (isHeaderVisible) {
        header.style.display = 'none';
    } else {
        header.style.display = 'block';
    }

    isHeaderVisible = !isHeaderVisible;
});

//Задание №2

const textTask2El = document.querySelector('.text_task2');
const buttonTask2El = document.querySelector('.button_task2');

buttonTask2El.addEventListener('click', function () {
    textTask2El.style.color = 'red';
});

//Задание №3

const titleTask3El = document.querySelector('.title_task3');
const buttonTask3El = document.querySelector('.button_task3');

buttonTask3El.addEventListener('click', function () {
    titleTask3El.textContent = 'Привет, мир!';
});

//Задание №4

const allDescriptionsTask4 = document.querySelectorAll('.description_task4');
const buttonTask4El = document.querySelector('.button_task4');

buttonTask4El.addEventListener('click', function () {
    allDescriptionsTask4.forEach(description => {
        description.textContent = 'Измененный текст';
    });
});

//Задание №5

const allDescriptionsTask5 = document.querySelectorAll('.description_task5');
const buttonTask5El = document.querySelector('.button_task5');

buttonTask5El.addEventListener('click', function () {
    allDescriptionsTask5.forEach(description => {
        description.textContent = 'Измененный текст';
    });
});

//Задание №6

const buttonTask6El = document.querySelector('.button_task6');

buttonTask6El.addEventListener('click', function () {
    const newParagraph = document.createElement('div');
    newParagraph.textContent = 'Новый параграф';
    document.body.append(newParagraph);
});

//Задание №7

const descriptionTask7El = document.querySelector('.description_task7');
const buttonTask7El = document.querySelector('.button_task7');

buttonTask7El.addEventListener('click', function () {
    if (descriptionTask7El) {
        descriptionTask7El.remove();
    }

    else {
        console.log("Элемент не найден.")
    }
});