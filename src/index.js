import './styles.css';

const tvContainer = document.getElementById('tvContainer');
const tvArray = [5, 169, 1871, 73, 51, 156];

tvArray.forEach(logTV);

async function logTV(item) {
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
}
