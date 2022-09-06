import './index.css';
import utils from './modules/utils.js';
import cinema from './modules/Cinema.js';
import logo from './assets/img/logo.png';

// Insert the logo
utils.qs('#logo a').appendChild(utils.createElement({
  tagName: 'img',
  src: logo,
}));
