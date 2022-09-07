import Movie from './Movie.js';
import config from './config.js';
import Card from './Card.js';
import utils from './utils.js';
import Comment from './Comment.js';

const {
  INVOLVMENT_APP_ID, INVOLVMENT_BASE_URL, MOVIE_API_KEY, MOVIE_POPULAR,
} = config;

class Cinema {
  list = []

  constructor() {
    this.getPopularMovies();
  }

  async getPopularMovies() {
    let response = await fetch(`${INVOLVMENT_BASE_URL}/apps/${INVOLVMENT_APP_ID}/likes`);
    this.likes = await response.json();

    response = await fetch(`${MOVIE_POPULAR}${MOVIE_API_KEY}`);
    const result = await response.json();

    result.results.slice(0, 7).forEach(async (r) => {
      const likes = this.likes.find((l) => l.item_id === r.title);

      const comments = [];

      try {
        const response = await fetch(`${INVOLVMENT_BASE_URL}/apps/${INVOLVMENT_APP_ID}/comments?item_id=${encodeURIComponent(r.title)}`);
        const result = await response.json();

        if (!('error' in result)) {
          result.forEach((c) => comments.push(new Comment({
            username: c.username,
            comment: c.comment,
            creation_date: c.creation_date,
          })));
        }
      } catch (e) {
        throw new Error(e.message);
      }

      if (likes) r = { ...r, likes: likes.likes };
      if (comments.length) r = { ...r, comments };

      const movie = new Movie(r);
      const card = new Card(movie);

      this.list.push(movie);
      card.display();
    });

    this.sortGenres();
  }

  sortGenres() {
    const top = [];

    this.list.forEach((m) => {
      m.genres.forEach((g) => {
        const genre = top.find((p) => p.genre === g);

        if (genre) genre.movies += 1;
        else top.push({ genre: g, movies: 1 });
      });
    });

    top.sort((a, b) => b.movies - a.movies).slice(0, 3).forEach((p, i) => {
      utils.qsa('li')[i + 1].innerText = `${p.genre} (${p.movies})`;
    });
  }
}

export default new Cinema();
