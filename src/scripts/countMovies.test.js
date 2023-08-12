import countMovies from './countMovies.js';
const { JSDOM } = require('jsdom');
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.document = dom.window.document;

const movie1 = document.createElement('div');
const movie2 = document.createElement('div');
const movie3 = document.createElement('div');

movie1.classList.add('howManyMovies');
movie2.classList.add('howManyMovies');
movie3.classList.add('howManyMovies');

document.body.appendChild(movie1);
document.body.appendChild(movie2);
document.body.appendChild(movie3);

describe('Test counter function', () => {
  test('Count movies', () => {
    expect(countMovies('.howManyMovies')).toBe(3);
  });
  test('Add a movie and count again', () => {
    const movie4 = document.createElement('div');
    movie4.classList.add('howManyMovies');
    document.body.appendChild(movie4);

    expect(countMovies('.howManyMovies')).toBe(4);
  });
});
