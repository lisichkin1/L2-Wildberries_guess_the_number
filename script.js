import { adjustWidth, checkWin, newGame } from './utils.js';
let randomNumber = 0;
let attempts = 0;
//достаем все нужные элементы
const minInput = document.querySelector('.header__input__min');
const maxInput = document.querySelector('.header__input__max');
const gameInput = document.querySelector('.game__input');
const spanNumber = document.querySelector('.game__number');
const spanAttempts = document.querySelector('.container__right__attempts');
const gameButton = document.querySelector('.game__button');
const newGameButton = document.querySelector('.header__button');
const optionsButton = document.querySelector('.header__options__button');

//функция, которая обновляет рандомное число и вызывает новую игру
const updateRandomNumber = () => {
  randomNumber = newGame(minInput.value, maxInput.value, spanNumber, gameInput, spanAttempts);
};

//вешаем слушатели на ввод минимального и максимального значения
minInput.addEventListener('input', () => {
  adjustWidth(minInput);
});
maxInput.addEventListener('input', () => {
  adjustWidth(maxInput);
});

//вешаем слушатель на кнопку "Применить" и валидируем ввденённые значения min max
optionsButton.addEventListener('click', () => {
  const userInputMin = minInput.value.trim();
  const userInputMax = maxInput.value.trim();
  if (
    /^\d+$/.test(userInputMin) &&
    /^\d+$/.test(userInputMax) &&
    Number(userInputMin) < Number(userInputMax)
  ) {
    updateRandomNumber();
  } else {
    alert('Введите корректное числовое значение');
  }
});

//вешаем слушатель на кнопку "Проверить" и валидируем ввденённое значения
gameButton.addEventListener('click', () => {
  const userInput = gameInput.value.trim();
  if (/^\d+$/.test(userInput)) {
    attempts = checkWin(randomNumber, Number(userInput), spanAttempts, attempts, spanNumber);
  } else {
    alert('Введите корректное числовое значение');
  }
});

//слушатель кнопки новой игры
newGameButton.addEventListener('click', () => {
  updateRandomNumber();
});

//начинаем новую игру и расчитываем ширину инпутов
updateRandomNumber();
adjustWidth(minInput);
adjustWidth(maxInput);
