//Функция для проверки длины строки

const SOME_STRING = 'asdf';
const EQUAL_VALUE = 10;

function compareStringLength(string, value) {
  if (string.length > value) {
    return true;
  }

  return false;
}

compareStringLength(SOME_STRING, EQUAL_VALUE);

//Функция для проверки, является ли строка палиндромом

const ANOTHER_STRING = 'за мо к           о ма З';

function isStringPolydrom(string) {
  let comparingString = '';
  string = string.replaceAll(' ', '').toLowerCase();

  for (let i = string.length - 1 ; i >= 0 ; i--) {
    comparingString += string.at(i);
  }

  if (comparingString === string) {
    return true;
  }

  return false;
}

isStringPolydrom(ANOTHER_STRING);


// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
// Если в строке нет ни одной цифры, функция должна вернуть NaN:
// Если хотите усложнить задание, предусмотрите случай, когда вместо строки приходит число.
// Обратите внимание, что возвращать функция по-прежнему должна только целые положительные числа:

const NEW_STRING = '354657';

function getIntNumber(value) {
  let resultString = '';

  for (let i = 0 ; i < value.length ; i++) {
    if (isNaN(parseInt(value[i], 10))) {
      for(let j = 0 ; j < value.length ; j++) {
        value[j] = parseInt(value[j], 10);
        if (!isNaN(value[j])) {
          resultString += value[j];
        }
      }

      if (isNaN(parseInt(resultString, 10))) {
        return NaN;
      }
      return parseInt(resultString, 10);

    } else {
      resultString += value[i];
    }
  }
  return parseInt(resultString, 10);
}

getIntNumber(NEW_STRING);
