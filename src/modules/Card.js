import utils from './utils.js';
import heart from '../assets/img/heart.svg';

export default class Card {
  constructor(movie) {
    this.movie = movie;
  }

  display() {
    const article = utils.createElement({
      tagName: 'article',
      info: { show: this.movie.title },
    });

    article.appendChild(
      utils.createElement({
        tagName: 'img',
        src: this.movie.image,
        alt: this.movie.title,
      }),
    );

    const div = utils.createElement({});

    div.appendChild(
      utils.createElement({
        tagName: 'h2',
        textContent: this.movie.title,
      }),
    );

    const divLikes = utils.createElement({
      class: 'div-likes',
    });

    divLikes.appendChild(utils.createElement({
      tagName: 'span',
      info: { likes: this.movie.likes },
    }));
    const parentDiv = utils.createElement({
      class: 'heart',
    });
    parentDiv.appendChild(utils.createElement({
      tagName: 'object',
      data: heart,
    }));
    divLikes.appendChild(parentDiv);

    div.appendChild(divLikes);
    article.appendChild(div);
    article.appendChild(
      utils.createElement({
        tagName: 'button',
        textContent: 'Comment',
      }),
    );
    article.appendChild(
      utils.createElement({
        tagName: 'button',
        textContent: 'Reservation',
      }),
    );

    utils.qs('#movie-container').appendChild(article);
  }
}
