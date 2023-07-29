const bigPicture = document.querySelector('.big-picture');
const socialComments = document.querySelector('.social__comments');
const socialComment = document.querySelector('.social__comment');
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const buttonClose = document.querySelector('.big-picture__cancel');
const bigImage = document.querySelector('.big-picture__img img');
const likesCount = document.querySelector('.likes-count');
const socialCaption = document.querySelector('.social__caption');
const COMMENT_COUNTER = 5;

let showingComments = 0;
let comments;

const fillCommentsCounter = () => (commentCount.innerHTML = `${showingComments} из <span class="comments-count">${comments.length}</span> комментариев</div>`);

const setButtonState = () => {
  if (showingComments >= comments.length) {
    commentsLoader.classList.add('hidden');
    return;
  }
  commentsLoader.classList.remove('hidden');
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const openModal = () => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  buttonClose.addEventListener('click', buttonCloseClickHandler);
  document.addEventListener('keydown', documentKeydownHandler);
  commentsLoader.addEventListener('click', commentsLoaderClickHandler);
};

const hideModal = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  buttonClose.removeEventListener('click', buttonCloseClickHandler);
  document.removeEventListener('keydown', documentKeydownHandler);
  commentsLoader.removeEventListener('click', commentsLoaderClickHandler);
  showingComments = 0;
};

function buttonCloseClickHandler (evt) {
  evt.preventDefault();
  hideModal();
}

function documentKeydownHandler (evt) {
  if (isEscapeKey(evt) && !evt.target.closest('.social__footer-text')) {
    hideModal();
  }
}

const createComment = (item) => {
  const comment = socialComment.cloneNode(true);
  const socialPicture = comment.querySelector('.social__picture');
  const socialText = comment.querySelector('.social__text');
  socialPicture.src = item.avatar;
  socialPicture.alt = item.name;
  socialText.textContent = item.message;
  return comment;
};

const fillCommentsList = () => {
  const fragment = document.createDocumentFragment();
  const currentComments = comments.slice(showingComments, showingComments + COMMENT_COUNTER);
  showingComments = Math.min(showingComments + COMMENT_COUNTER, comments.length);
  currentComments.forEach((comment) => fragment.append(createComment(comment)));
  socialComments.append(fragment);
  setButtonState();
  fillCommentsCounter();
};

function commentsLoaderClickHandler (evt) {
  evt.preventDefault();
  fillCommentsList();
}

const fillBigPicture = (data) => {
  bigImage.src = data.url;
  bigImage.alt = data.description;
  likesCount.textContent = data.likes;
  socialCaption.textContent = data.description;
  fillCommentsList();
};

const showBigPicture = (data) => {
  comments = data.comments;
  socialComments.innerHTML = '';
  openModal();
  fillBigPicture(data);
};

export { showBigPicture };
