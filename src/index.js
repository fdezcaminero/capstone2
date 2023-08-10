import './styles.css';
import createModal from './scripts/popup.js';

const tvContainer = document.getElementById('tvContainer');
const tvArray = [5, 169, 1871, 73, 51, 156];

async function logTV(item, index) {
  const response = await fetch(`https://api.tvmaze.com/shows/${item}`);
  const movies = await response.json();
  const card = document.createElement('section');
  const image = document.createElement('img');
  const midDiv = document.createElement('section');
  const likeButton = document.createElement('section');
  const title = document.createElement('p');
  const buttonComments = document.createElement('button');
  const buttonReservations = document.createElement('button');

  buttonComments.innerHTML = 'Comments';
  buttonReservations.innerHTML = 'Reservations';
  buttonComments.id = `${index}`;
  buttonReservations.id = `buttonReservations${index}`;

  image.src = `${movies.image.medium}`;
  image.alt = `${movies.name}`;
  title.innerHTML = `${movies.name}`;
  likeButton.innerHTML = '<i class="fa-regular fa-heart"></i>';
  midDiv.classList.add('flexdiv');
  card.appendChild(image);
  card.appendChild(midDiv);

  midDiv.innerHTML = title.innerHTML + likeButton.innerHTML;

  // midDiv.appendChild(title);
  // midDiv.appendChild(likeButton);

  card.appendChild(buttonComments);
  card.appendChild(buttonReservations);
  tvContainer.appendChild(card);

  document.getElementById(`${index}`).addEventListener('click', async () => {
    console.log('button working');
    const showId = tvArray[buttonComments.id];
    createModal(showId);
  });
  document.getElementById(`buttonReservations${index}`).addEventListener('click', () => {
    console.log('reservations button');
  });
}

tvArray.forEach(logTV);

// async function logLikes() {
//   const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     }
//   });
//   // const likes = response;

//   console.log(response);
//   Ql2WzJr90DiP5KlSpxzA
// RMJ8NTvaiiWTSWP5xo3h
// }

// logLikes();

// document.getElementById('buttonComments1').addEventListener('click', () => {
//   console.log('button working');
// });

async function newLike() {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ql2WzJr90DiP5KlSpxzA/likes/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: 'tv1',
    }),
  });
}

// console.log(newLike());

async function readLikes() {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ql2WzJr90DiP5KlSpxzA/likes/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

console.log(readLikes());
