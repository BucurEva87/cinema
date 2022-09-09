import countMovies from '../modules/countMovies.js';

const cinema = {
  list: [
    {
      title: 'Dune',
    },
    {
      title: 'Where the eagles dare',
    },
    {
      title: 'Fear is the key',
    },
  ],
};

describe('countMovies', () => {
  test('Returns the proper number of movies', () => {
    expect(countMovies(cinema.list)).toBe(3);
  });
});
