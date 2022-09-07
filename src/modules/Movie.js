import utils from './utils.js';
import config from './config.js';
import Comment from './Comment.js';
import popup from './Popup.js';

const { INVOLVMENT_APP_ID, INVOLVMENT_BASE_URL, MOVIE_BASE_POSTER_PATH } = config;

const genres = {
  12: 'Adventure',
  14: 'Fantasy',
  16: 'Animation',
  27: 'Horror',
  28: 'Action',
  35: 'Comedy',
  36: 'History',
  37: 'Western',
  53: 'Thriller',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  878: 'Science Fiction',
  9648: 'Mistery',
  10402: 'Music',
  10749: 'Romance',
  10752: 'War',
  10770: 'TV Movie',
  17051: 'Family',
};

export default class Movie {
  constructor(show) {
    this.title = show.title;
    this.genres = show.genre_ids.map((g) => genres[g]);
    this.image = `${MOVIE_BASE_POSTER_PATH}${show.poster_path}`;
    this.overview = show.overview;
    this.likes = show.likes ?? 0;
    this.popularity = show.popularity;
    this.releaseDate = show.release_date;
    this.voteAverage = show.vote_average;
    this.voteCount = show.vote_count;
    this.comments = [];
  }

  async like() {
    const response = await fetch(
      `${INVOLVMENT_BASE_URL}/apps/${INVOLVMENT_APP_ID}/likes`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ item_id: this.title }),
      },
    );

    if (response.status === 201) {
      this.likes += 1;

      const card = utils.qs(`article[data-show="${this.title}"]`);

      utils.qs('span', card).dataset.likes = this.likes;
    }
  }

  async getComments() {
    try {
      const response = await fetch(`${INVOLVMENT_BASE_URL}/apps/${INVOLVMENT_APP_ID}/comments?item_id=${encodeURIComponent(this.title)}`);
      const result = await response.json();

      if (!('error' in result)) {
        this.comments = [];

        result.forEach((c) => this.comments.push(new Comment({
          username: c.username,
          comment: c.comment,
          creation_date: c.creation_date,
        })));
      }

      popup.populate(this);
    } catch (e) {
      popup.populate(this);
      throw new Error(e.message);
    }
  }

  async postComment({ username, comment }) {
    const response = await fetch(
      `${INVOLVMENT_BASE_URL}/apps/${INVOLVMENT_APP_ID}/comments`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: this.title,
          username,
          comment,
        }),
      },
    );

    if (response.status === 201) {
      const d = new Date();

      this.comments.push(new Comment({
        username,
        comment,
        creation_date: `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}-${String(d.getUTCDate()).padStart(2, '0')}`,
      }));
      this.comments[this.comments.length - 1].display(utils.qs('#popup ul'));
    }
  }
}
