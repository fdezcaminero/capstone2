/**
 * @jest-environment jsdom
*/
import commentCounter from './commentCounter.js';

document.body.innerHTML = `
      <ul id="container"></ul>`;
const container = document.querySelector('#container');

describe('comments counter', () => {
  test('The count should be 0', () => {
    const ul = document.createElement('ul');
    const count = commentCounter(ul);
    expect(count).toBe(0);
  });

  test('Test if the count is 5', () => {
    for (let i = 0; i < 5; i += 1) {
      const liComment = document.createElement('li');
      container.appendChild(liComment);
    }
    const count = commentCounter(container);

    expect(count).toBe(5);
  });
});