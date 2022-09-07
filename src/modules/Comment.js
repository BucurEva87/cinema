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

  static validate(username, comment) {
    username = username.trim();
    comment = comment.trim();

    const response = {
      type: 'success', fields: [], errors: [], values: [],
    };

    if (!username) {
      console.log(`username is [${username}]`);
      response.type = 'error';
      response.fields.push('username');
      response.errors.push('An username must be provided');
    }
    if (!comment) {
      console.log(`comment is [${comment}]`);
      response.type = 'error';
      response.fields.push('comment');
      response.errors.push('The comment can not be empty');
    }
    if (response.type === 'success') {
      response.values = [username, comment];
    }

    return response;
  }
}
