import  { countMovies } from './countMovies.js';

let movieArray = [1, 3, 5, 7];

describe('Test counter function', () => {
  test('Count movies', () => {
    expect(countMovies(movieArray)).toEqual(4);
  });

  // test('Remove task', () => {
  //   const secondObj = testArray[1];
  //   removeTask(0, testArray);
  //   expect(testArray[0]).toEqual(secondObj);
  // });
});
