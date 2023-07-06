import {photoCatalog} from './main-functions.js';

const PICTURE_TEMPLATE = document.querySelector('#picture').content;
const PICTURES_SECTION = document.querySelector('.pictures');
const RANDOM_PICTURES = photoCatalog();
const POST_FRAGMENT = document.createDocumentFragment();

RANDOM_PICTURES.forEach(({url, description, likes, comment}) => {
  const PICTURE_ELEMENT = PICTURE_TEMPLATE.cloneNode(true);
  PICTURE_ELEMENT.querySelector('.picture__img').src = url;
  PICTURE_ELEMENT.querySelector('.picture__img').alt = description;
  PICTURE_ELEMENT.querySelector('.picture__likes').textContent = likes;
  PICTURE_ELEMENT.querySelector('.picture__comments').textContent = comment.length;
  POST_FRAGMENT.appendChild(PICTURE_ELEMENT);
});

PICTURES_SECTION.append(POST_FRAGMENT);
