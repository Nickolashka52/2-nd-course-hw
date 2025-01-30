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
        const reversed = userInput.split('').reverse().join('').toLowerCase();

        if (/[.!?]/.test(reversed)) {
            let firstChar = reversed.charAt(0);
            let reversedWithTransferredPunctuationMark = reversed.substring(1) + firstChar;
            let reversedWithTransferredPunctuationMarkCapitalized = reversedWithTransferredPunctuationMark.charAt(0).toUpperCase() + reversedWithTransferredPunctuationMark.slice(1);
            alert("Перевёрнутый текст: " + reversedWithTransferredPunctuationMarkCapitalized);

        } else {

            let reversedCapitalized = reversed.charAt(0).toUpperCase() + reversed.slice(1);
            alert("Перевёрнутый текст: " + reversedCapitalized);

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