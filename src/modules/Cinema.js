import Movie from './Movie.js';
import config from './config.js';
import Card from './Card.js';
import utils from './utils.js';

const {
  INVOLVMENT_APP_ID, INVOLVMENT_BASE_URL, MOVIE_API_KEY, MOVIE_SEARCH_URL, MOVIE_POPULAR,
} = config;

class Cinema {
  list = []

  constructor(shows) {
    if (shows) { shows.forEach((show) => this.getMovieData(show)); } else this.getPopularMovies();
  }

  async getMovieData(show) {
    const response = await fetch(`${MOVIE_SEARCH_URL}${MOVIE_API_KEY}&query=${encodeURIComponent(show)}`);
    const result = await response.json();
    const data = result?.results[0];

    if (!data) return;

    const movie = new Movie(data);
    const card = new Card(movie.title, movie.image, 8, 0);

    this.list.push(movie);
    card.display();
  }

  async getPopularMovies() {
    const response = await fetch(`${MOVIE_POPULAR}${MOVIE_API_KEY}`);
    const result = await response.json();

    result.results.slice(0, 7).forEach((r) => {
      const movie = new Movie(r);
      const card = new Card(movie.title, movie.image, 8, 0);

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
