// Игра угадай число
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

// Игра простая арифметика
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