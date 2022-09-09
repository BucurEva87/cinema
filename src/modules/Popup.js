import utils from './utils.js';
import closeIcon from '../assets/img/close.svg';
import countComments from './countComments.js';

class Popup {
  constructor() {
    this.container = utils.qs('#popup');
  }

  populate(movie) {
    const img = utils.qs('img', this.container);
    img.src = movie.image;
    img.alt = movie.title;

    const closeBtn = utils.qs('#closeBtnWrapper', this.container);

    if (!closeBtn) {
      const div = utils.createElement({ id: 'closeBtnWrapper' });
      div.appendChild(utils.createElement({
        tagName: 'object',
        data: closeIcon,
      }));
      img.parentNode.insertBefore(div, img);
    }

    utils.qs('h2', this.container).textContent = movie.title;
    utils.qs('p', this.container).textContent = movie.overview;

    const infoContainer = utils.qs('.info-container', this.container);
    utils.qsa('span', infoContainer).forEach((span) => span.remove());
    infoContainer.appendChild(utils.createElement({
      tagName: 'span',
      id: 'spanGenres',
      textContent: `Genres: ${[...movie.genres.filter((g) => g)].join(', ')}`,
    }));
    infoContainer.appendChild(utils.createElement({
      tagName: 'span',
      id: 'spanAired',
      textContent: `Aired on: ${movie.releaseDate}`,
    }));
    infoContainer.appendChild(utils.createElement({
      tagName: 'span',
      id: 'spanPopularity',
      textContent: `Popularity: ${movie.popularity}`,
    }));
    infoContainer.appendChild(utils.createElement({
      tagName: 'span',
      id: 'spanRating',
      textContent: `Rating: ${movie.voteAverage} / ${movie.voteCount}`,
    }));

    const h2 = utils.qsa('h2', this.container)[1];
    h2.textContent = `Comments (${countComments(movie)})`;

    const ul = utils.qs('ul', this.container);
    utils.qsa('li', ul).forEach((li) => li.remove());
    movie.comments.forEach((c) => c.display(ul));

    this.container.classList.remove('hidden');

    document.body.classList.add('darkened');
    utils.qs('header').classList.add('hidden');
    utils.qs('footer').classList.add('hidden');
  }

  close() {
    this.container.classList.add('hidden');
    document.body.classList.remove('darkened');
    utils.qs('header').classList.remove('hidden');
    utils.qs('footer').classList.remove('hidden');
  }
}

export default new Popup();
