//Описания фото
const PHOTO_DESCRIPTIONS = ['Фото семейного пикника на пляже, с улыбающимися лицами и морскими волнами', 'Солнечные лучи, проникающие сквозь листву деревьев', 'Парящий воздушный шар над городскими крышами', 'Воздушные шары, взлетающие в небо на фоне рассвета', 'Чашка горячего кофе на окне, с видом на зимний пейзаж', 'Взгляд льва, полный силы и грации', 'Живописный водопад, окруженный зеленью', 'Цветочное поле, россыпью украшенное маками', 'Переплетение дорожек в красивом парке', 'Силуэт человека, стоящего на вершине горы', 'Морская волна, разбивающаяся о скалы', 'Архитектурный памятник, окутанный туманом', 'Полное затмение луны в звездном небе', 'Фотография с высоты птичьего полета над городом в ночном свете', 'Красивая женщина в цветущем поле под ярким солнцем','Цветущие вишневые деревья весной', 'Детская рука, держащая цветочный букет', 'Две влюбленные руки, сжимающие друг друга', 'Морская ракушка на песчаном пляже', 'Щенок играет с мячом на зеленом газоне', 'Раскрытая книга на старом деревянном столе', 'Макро снимок пышного цветка розы', 'Фото заката над горизонтом, окрашивающего небо в оранжевые оттенки', 'Панорамный вид на горы и озеро', 'Золотистые листья осени на тропинке',];

//Имена комментаторов
const COMMENTATORS = ['Бублик Морковкин', 'Кексик Шаловлин', 'Шурупчик Шалтай-Болтай', 'Пельмешка Прыголапа', 'Шоколадка Фантикова', 'Брынзик Флопик', 'Карамелька Хихикалкина', 'Котлетка Скачкина', 'Пышка Шалунчикова', 'Булочка Ржавчикова'];

//Комментарии
const PHOTO_COMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

//Создание массива цифр от 1 до 25
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
  url: getRandomId(PHOTO_URLS),
  description: getRandomPhotoDescription(PHOTO_DESCRIPTIONS),
  likes: getRandomInteger(15, 300),
  comment: Array.from({length: getRandomInteger(0, 30)}, createComment),
});

//Вывод массива объектов 25 фотографий

const photoCatalog = Array.from({length: 25}, createPhoto);
