import config from './config.js';

const { MOVIE_BASE_POSTER_PATH } = config;

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
  constructor(show, likes, comments) {
    this.title = show.title;
    this.genres = show.genre_ids.map((g) => genres[g]);
    this.image = `${MOVIE_BASE_POSTER_PATH}${show.poster_path}`;
    this.overview = show.overview;
    this.likes = likes;
    this.comments = comments;
  }
}
