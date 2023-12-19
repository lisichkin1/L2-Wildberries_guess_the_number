//функция расчёта ширины инпутов
export const adjustWidth = (input) => {
  var inputLength = input.value.length;
  input.style.width = inputLength + 2 + 'ch';
};

//функция загадывает рандомное число
export const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (Number(max) - Number(min) + 1) + Number(min));
};

//функция новой игры
export const newGame = (min, max, spanNumber, gameInput, spanAttempts) => {
  const minValue = min;
  const maxValue = max;
  spanNumber.innerText = '?';
  document.body.style.backgroundColor = '#222222';
  gameInput.value = '';
  spanAttempts.innerText = 0;
  return randomNumber(minValue, maxValue);
};

//функция проверки победы
export const checkWin = (number, userNumber, spanAttempts, attempts, spanNumber) => {
  if (number == Number(userNumber)) {
    spanNumber.innerText = number;
    document.body.style.backgroundColor = '#60b347';
  } else {
    attempts += 1;
    spanAttempts.innerText = attempts;
  }
  return attempts;
};
