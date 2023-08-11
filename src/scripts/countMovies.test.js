import countMovies from './countMovies';

let movieArray = [1, 3, 5, 7];

describe('Test counter function', () => {
  test('Count movies', () => {
    expect(countMovies(movieArray)).toEqual(4);
  });
});
