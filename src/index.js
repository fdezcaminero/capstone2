import './styles.css';
import createModal from './scripts/popup.js';
import countMovies from './scripts/countMovies.js';

const tvContainer = document.getElementById('tvContainer');
const tvArray = [5, 169, 1871, 73, 51, 109, 156, 576];

let responseArray = [];

const readLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ql2WzJr90DiP5KlSpxzA/likes/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const likes = await response.json();
  responseArray = likes;
};

const newLike = async (itemnumber) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ql2WzJr90DiP5KlSpxzA/likes/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: `tv${itemnumber}`,
    }),
  });
  return response; // Added this to avoid linter error
};

const logTV = async (item, index) => {
  const response = await fetch(`https://api.tvmaze.com/shows/${item}`);
  const movies = await response.json();
  const card = document.createElement('section');
  const image = document.createElement('img');
  const midDiv = document.createElement('section');
  const likeButton = document.createElement('section');
  const title = document.createElement('p');
  const likesCounter = document.createElement('p');
  const buttonComments = document.createElement('button');
  const buttonReservations = document.createElement('button');

  buttonComments.innerHTML = 'Comments';
  buttonReservations.innerHTML = 'Reservations';
  buttonComments.id = `${index}`;
  buttonReservations.id = `buttonReservations${index}`;

  image.src = `${movies.image.medium}`;
  image.alt = `${movies.name}`;
  title.innerHTML = `${movies.name}`;

  await readLikes();
  const tvLikes = responseArray.find((item) => item.item_id === `tv${index + 1}`);
  likesCounter.innerHTML = tvLikes ? tvLikes.likes : 0;

  likeButton.innerHTML = '<i class="fa-solid fa-heart"></i>';
  midDiv.classList.add('flexdiv');
  card.classList.add('cardClass');
  card.appendChild(image);
  card.appendChild(midDiv);

  midDiv.appendChild(title);
  midDiv.appendChild(likeButton);
  midDiv.appendChild(likesCounter);
  title.classList.add('margin-div');
  likeButton.classList.add('margin-likes');
  likesCounter.classList.add('margin-div');

  likeButton.id = `likeButton${index}`;

  card.appendChild(buttonComments);
  card.appendChild(buttonReservations);
  tvContainer.appendChild(card);

  document.getElementById(`likeButton${index}`).addEventListener('click', async () => {
    await newLike(index + 1);
    await readLikes();
    const updatedtvLikes = responseArray.find((item) => item.item_id === `tv${index + 1}`);
    likesCounter.innerHTML = updatedtvLikes ? updatedtvLikes.likes : 0;
  });

  document.getElementById(`${index}`).addEventListener('click', async () => {
    // console.log('button working');
    const showId = tvArray[buttonComments.id];
    createModal(showId);
  });
  document.getElementById(`buttonReservations${index}`).addEventListener('click', () => {
    // console.log('reservations button');
  });
};

document.addEventListener('DOMContentLoaded', async () => {
  const promises = tvArray.map(async (item, index) => {
    await logTV(item, index);
  });

  await Promise.all(promises);
  const moviesCount = countMovies('.cardClass');
  document.getElementById('Counter').innerHTML = `(${moviesCount})` ;
});

//
// API keys:
// Ql2WzJr90DiP5KlSpxzA
// RMJ8NTvaiiWTSWP5xo3h (optional)
//
