import utils from './utils.js';
import heart from '../assets/img/heart.svg';

export default class Card {
  constructor(title, image, likes, comments) {
    this.title = title;
    this.image = image;
    this.likes = likes;
    this.comments = comments;
  }

  display() {
    const article = utils.createElement({ tagName: 'article' });

    article.appendChild(
      utils.createElement({
        tagName: 'img',
        src: this.image,
        alt: this.title,
      }),
    );

    const div = utils.createElement({});

    div.appendChild(
      utils.createElement({
        tagName: 'h2',
        textContent: this.title,
      }),
    );

    const divLikes = utils.createElement({
      class: 'div-likes',
    });

    divLikes.appendChild(utils.createElement({
      tagName: 'span',
      info: { likes: this.likes },
    }));
    divLikes.appendChild(
      utils.createElement({
        tagName: 'object',
        data: heart,
      }),
    );

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
