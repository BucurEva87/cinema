import './index.css';
import utils from './modules/utils.js';
import cinema from './modules/Cinema.js';
import logo from './assets/img/logo.png';
import popup from './modules/Popup.js';
import Comment from './modules/Comment.js';

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

  if (target.tagName !== 'OBJECT') return;

  const title = target.closest('article').dataset.show;
  const movie = cinema.list.find((m) => m.title === title);

  movie.like();
});

// Listen for popup call on button click
theater.addEventListener('click', (e) => {
  const { target } = e;

  if (target.tagName !== 'BUTTON' || target.textContent !== 'Comment') return;

  const movie = cinema.list.find((m) => m.title === target.closest('article').dataset.show);

  popup.populate(movie);
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

  // Validation
  const response = Comment.validate(username.value, comment.value);

  if (response.type !== 'success') {
    const [usernameErr, commentErr] = response.errors;
    if (response.fields.includes('username')) {
      usernameError.textContent = usernameErr;
    }
    if (response.fields.includes('comment')) {
      commentError.textContent = commentErr;
    }
    return;
  }

  username.value = '';
  comment.value = '';

  const movie = cinema.list.find((m) => m.title === utils.qs('h2', popupModal).textContent);

  movie.postComment(response.values[0], response.values[1]);
});
