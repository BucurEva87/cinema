import './index.css';
import utils from './modules/utils.js';
import cinema from './modules/Cinema.js';
import logo from './assets/img/logo.png';
import popup from './modules/Popup.js';

const theater = utils.qs('#movie-container');
const popupModal = utils.qs('#popup');

// Insert the logo
utils.qs('#logo a').appendChild(utils.createElement({
  tagName: 'img',
  src: logo,
}));

// Like a movie
theater.addEventListener('click', (e) => {
  const { target } = e;

  if (!target.classList.contains('heart')) return;

  const title = target.closest('article').dataset.show;
  const movie = cinema.list.find((m) => m.title === title);

  movie.like();
});

// Listen for popup call on button click
theater.addEventListener('click', (e) => {
  const { target } = e;

  if (target.tagName !== 'BUTTON' || target.textContent !== 'Comment') return;

  const movie = cinema.list.find((m) => m.title === target.closest('article').dataset.show);

  movie.getComments();
});

// Listen for popup close on closeBtn click
popupModal.addEventListener('click', (e) => {
  const { target } = e;

  if (target.id !== 'closeBtnWrapper') return;

  popup.close();
});

// Submit a comment
utils.qs('button', popupModal).addEventListener('click', () => {
  console.log('Button was clicked');

  const username = utils.qs('#username');
  const comment = utils.qs('#comment');
  const usernameError = utils.qs('#usernameError');
  const commentError = utils.qs('#commentError');

  usernameError.textContent = '';
  commentError.textContent = '';
  usernameError.classList.add('hidden');
  commentError.classList.add('hidden');

  // Validation
  if (!username.value.trim()) {
    usernameError.textContent = 'An username must be provided';
    usernameError.classList.remove('hidden');
    return;
  }
  if (!comment.value.trim()) {
    commentError.textContent = 'The comment can not be empty';
    commentError.classList.remove('hidden');
    return;
  }

  const movie = cinema.list.find((m) => m.title === utils.qs('h2', popupModal).textContent);

  movie.postComment({
    username: username.value.trim(),
    comment: comment.value.trim(),
  });

  username.value = '';
  comment.value = '';
});
