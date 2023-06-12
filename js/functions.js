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

const ANOTHER_STRING = 'за мо к           о ма з';

function isStringPolydrom(string) {
  let comparingString = '';

  string = string.replaceAll(' ', '');

  for (let i = string.length - 1 ; i >= 0 ; i--) {
    comparingString += string.at(i);
  }

  if (comparingString === string) {
    return true;
  }

  return false;
}

isStringPolydrom(ANOTHER_STRING);
