import './styles.css';
import createModal from './scripts/popup.js';

const tvContainer = document.getElementById('tvContainer');
const tvArray = [5, 169, 1871, 73, 51, 156];

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
  return response;
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

  readLikes()
    .then(() => {
      for (let i = 0; i < responseArray.length; i += 1) {
        if (responseArray[i].item_id === `tv${index + 1}`) {
          likesCounter.innerHTML = responseArray[i].likes;
        }
      }
    });

  likeButton.innerHTML = '<i class="fa-regular fa-heart"></i>';
  midDiv.classList.add('flexdiv');
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

  document.getElementById(`likeButton${index}`).addEventListener('click', () => {
    newLike(index + 1);
    readLikes()
      .then(() => {
        likesCounter.innerHTML = responseArray[index].likes;
      });
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

// console.log(newLike(1));
// console.log(newLike(2));
// console.log(newLike(3));
// console.log(newLike(4));
// console.log(newLike(5));
// console.log(newLike(6));
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

// newLike(1);
// newLike(2);
// newLike(3);
// newLike(4);
// newLike(5);
// newLike(6);
// console.log(newLike());


