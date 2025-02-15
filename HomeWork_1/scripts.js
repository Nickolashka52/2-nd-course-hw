// Игра "Угадай число"
function guessTheNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let userNumber = 0;
    let attempts = 0;

    while (userNumber !== randomNumber) {
        userNumber = parseInt(prompt("Мы загадали число от 1 до 100. Попробуйте его отгадать."));
        attempts++;

        if (userNumber < randomNumber) {
            alert("Ваше число меньше загаданного. Попробуйте еще раз!");
        } else if (userNumber > randomNumber) {
            alert("Ваше число больше загаданного. Попробуйте еще раз!");
        } else {
            alert(`Поздравляем! Вы угадали число ${randomNumber} за ${attempts} попыток!`);
        }
    }
};

// Игра "Простая арифметика"
function simpleArithmetic() {

    function getRandomNumber(max) {
        return Math.floor(Math.random() * max) + 1;
    };

    function generateTask() {
        const operations = ['+', '-', '*', '/'];
        const num1 = getRandomNumber(10);
        const num2 = getRandomNumber(10);
        const operation = operations[getRandomNumber(operations.length) - 1];

        if (operation === '/' && num2 === 0) {
            return generateTask();
        };

        return {
            task: `${num1} ${operation} ${num2}`,
            operation: operation,
            num1: num1,
            num2: num2
        };
    };

    function calculateAnswer(num1, num2, operation) {
        switch (operation) {
            case "+":
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
            default:
                return null;
        }
    };

    const taskData = generateTask();
    const userAnswer = Number(prompt(`Решите задачу: ${taskData.task}`));

    if (userAnswer !== null) {
        const correctAnswer = Number(calculateAnswer(taskData.num1, taskData.num2, taskData.operation));

        if (userAnswer === correctAnswer) {
            alert("Правильно!");
        } else {
            alert(`Ошибка. Правильный ответ: ${correctAnswer}`);
        }
    };
};

// Игра "Переверни текст"
function turnTheTextOver() {

    let userInput = prompt("Введите текст, который нужно перевернуть:");

    if (userInput !== null) {

        const reversed = userInput.split('').reverse().join('');

        if (/[.!?]/.test(reversed)) {
            let firstChar = reversed.charAt(0);
            let reversedWithTransferredPunctuationMark = reversed.substring(1) + firstChar;
            alert("Перевёрнутый текст: " + reversedWithTransferredPunctuationMark);
        } else {
            alert("Перевёрнутый текст: " + reversed);
        }

    } else {
        alert("Вы не ввели текст.");
    }

}

// Игра "Викторина"
function simpleQuiz() {

    const quiz = [
        {
            question: "Какой цвет у неба?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let score = 0;

    for (let i = 0; i < quiz.length; i++) {
        const currentQuestion = quiz[i];
        let optionsText = currentQuestion.options.join('\n');
        let userAnswer = Number(prompt(currentQuestion.question + '\n' + optionsText));

        if (userAnswer === null) {
            alert("Вы вышли из викторины.");
            return;
        }

        if (userAnswer === currentQuestion.correctAnswer) {
            score++;
        }
    }

    alert("Вы ответили правильно на " + score + " из " + quiz.length + " вопросов.");
};

// Игра "Камень, ножницы, бумага"
function stoneScissorsPaper() {

    let userInput = prompt(`Сыграем в игру "камень, ножницы, бумага". Что выбирете?`);
    const options = ["камень", "ножницы", "бумага"];

    if (userInput !== null) {

        function getRandomChoice() {
            const randomIndex = Math.floor(Math.random() * options.length);
            return options[randomIndex];
        }
        const computerChoice = getRandomChoice();
        const lowerCaseUserInput = userInput.toLowerCase();

        function isValidChoice(userInput) {
            return options.includes(lowerCaseUserInput);
        }

        if (isValidChoice(lowerCaseUserInput)) {

            if (lowerCaseUserInput === computerChoice) {
                alert(`Ничья! Оба выбрали ${lowerCaseUserInput}.`);

            } else {

                if ((lowerCaseUserInput === options[0] && computerChoice === options[1]) || (lowerCaseUserInput === options[2] && computerChoice === options[0]) || (lowerCaseUserInput === options[1] && computerChoice === options[2])) {
                    alert("Поздравляю. Твоя победа!");

                } else {
                    alert("Ты проиграл в этот раз, попробуйте еще!")
                }
            }

        } else {
            alert("Неверный ввод! Пожалуйста, введите 'камень', 'ножницы' или 'бумага'.");
        }

    } else {
        alert("Ты вышел из игры.");
    }
}

// Игра "Генератор случацных цветов"
function randomColorGenerator() {

    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];
    const backgroundColorMiniGames = document.querySelector('.mini-games');
    const backgroundColorGamesDescriptions = document.querySelector('.games-discriptions');
    const backgroundColorMiniGamesMobile = document.querySelector('.mini-games-mobile');

    let randomColor = Math.floor(Math.random() * 6);
    backgroundColorMiniGames.style.backgroundColor = colors[randomColor];
    backgroundColorGamesDescriptions.style.backgroundColor = colors[randomColor];
    backgroundColorMiniGamesMobile.style.backgroundColor = colors[randomColor];
}

// Игры в мобильной версии
const buttonMobileGame1 = document.querySelector('#button-mobile-game1');
buttonMobileGame1.addEventListener('click', guessTheNumber);

const buttonMobileGame2 = document.querySelector('#button-mobile-game2');
buttonMobileGame2.addEventListener('click', simpleArithmetic);

const buttonMobileGame3 = document.querySelector('#button-mobile-game3');
buttonMobileGame3.addEventListener('click', turnTheTextOver);

const buttonMobileGame4 = document.querySelector('#button-mobile-game4');
buttonMobileGame4.addEventListener('click', simpleQuiz);

const buttonMobileGame5 = document.querySelector('#button-mobile-game5');
buttonMobileGame5.addEventListener('click', stoneScissorsPaper);

const buttonMobileGame6 = document.querySelector('#button-mobile-game6');
buttonMobileGame6.addEventListener('click', randomColorGenerator);

// Плавный скролл
const smoothScrolls = document.querySelectorAll('.smooth-scrolling');

for (const smoothScroll of smoothScrolls) {
    smoothScroll.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    })
};