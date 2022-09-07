import countComments from '../modules/countComments.js';

const cinema = {
  list: [
    {
      title: 'Dune',
      comments: [
        {
          username: "D'Artagnan",
          comment: 'One for all and all for one!',
        },
        {
          username: 'Porthos',
          comment: 'I would like another bottle of wine from the castel cellar',
        },
        {
          username: 'Athos',
          comment: 'I want to fight again',
        },
        {
          username: 'Aramis',
          comment: 'The order of the Jezuits will prevail',
        },
      ],
    },
  ],
};

describe('countComments', () => {
  test('Returns the proper number of comments for a movie', () => {
    expect(countComments(cinema.list[0])).toBe(4);
  });
});
