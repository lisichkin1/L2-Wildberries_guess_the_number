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
function isEven(number) {
  return number % 2 === 0;
}
//функция проверки победы
export const checkWin = (
  number,
  userNumber,
  spanAttempts,
  attempts,
  spanNumber,
  message,
  message_second,
) => {
  attempts += 1;
  if (number == Number(userNumber)) {
    spanNumber.innerText = number;
    document.body.style.backgroundColor = '#60b347';
  } else {
    if (Number(userNumber) > number) {
      if (attempts > 2 && attempts % 3 === 0) {
        if (isEven(number)) {
          message_second.innerText = 'Четное число';
        } else {
          message_second.innerText = 'Нечетное число';
        }
      } else {
        message.innerText = 'Число меньше';
        message_second.innerText = '';
      }
    } else if (Number(userNumber) < number) {
      if (attempts > 2 && attempts % 3 === 0) {
        if (isEven(number)) {
          message_second.innerText = 'Четное число';
        } else {
          message_second.innerText = 'Нечетное число';
        }
      } else {
        message.innerText = 'Число больше';
        message_second.innerText = '';
      }
    }

    spanAttempts.innerText = attempts;
  }
  return attempts;
};
