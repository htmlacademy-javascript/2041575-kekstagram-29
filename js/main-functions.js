import {PHOTO_DESCRIPTIONS, COMMENTATORS, PHOTO_COMMENTS} from './data.js';

const getArray = () => {
  const ARRAY = [];
  for (let i = 1; i <= 25 ; i++) {
    ARRAY.push(i);
  }
  return ARRAY;
};

const PHOTO_IDS = getArray();
const PHOTO_URLS = getArray();

//Функция для получения рандомного числа из промежутка
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//Функция для получения рандомного id фото
const getRandomId = (array) => {
  const RANDOM_NUMBER = getRandomInteger(0, array.length - 1);
  const NUMBER_FROM_ARRAY = array[RANDOM_NUMBER];
  array.splice(RANDOM_NUMBER, 1);

  return NUMBER_FROM_ARRAY;
};

//Функция для получения рандомного описания фото
const getRandomPhotoDescription = (array) => {
  const RANDOM_NUMBER = getRandomInteger(0, array.length - 1);
  const NUMBER_FROM_ARRAY = array[RANDOM_NUMBER];
  array.splice(RANDOM_NUMBER, 1);

  return NUMBER_FROM_ARRAY;
};

const getRandomComment = (array) => (
  array[getRandomInteger(0, array.length - 1)]
);

//Создание комментария
const createComment = () => ({
  id: getRandomInteger(1, 10000),
  avatar: `img/avatar-${ getRandomInteger(1, 6) }.svg`,
  message: getRandomComment(PHOTO_COMMENTS),
  name: `${ COMMENTATORS[getRandomInteger(0, COMMENTATORS.length)] }`
});

//Функция для получения фотографий
const createPhoto = () => ({
  id: getRandomId(PHOTO_IDS),
  url: `photos/${ getRandomId(PHOTO_URLS) }.jpg`,
  description: getRandomPhotoDescription(PHOTO_DESCRIPTIONS),
  likes: getRandomInteger(15, 300),
  comment: Array.from({length: getRandomInteger(0, 30)}, createComment),
});

//Вывод массива объектов 25 фотографий

const photoCatalog = () => Array.from({length: 25}, createPhoto);

export {photoCatalog};
