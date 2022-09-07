import utils from './utils.js';

export default class Comment {
  constructor(comment) {
    this.username = comment.username;
    this.comment = comment.comment;
    this.creationDate = comment.creation_date;
  }

  display(container) {
    container.appendChild(utils.createElement({
      tagName: 'li',
      textContent: `[${this.creationDate}] ${this.username}: ${this.comment}`,
    }));
  }
}
