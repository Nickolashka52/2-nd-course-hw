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
}
