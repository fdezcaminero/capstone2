import './styles.css';

const tvContainer = document.getElementById('tvContainer');
const tvArray = [5, 169, 1871, 73, 51, 156];

tvArray.forEach(logTV);

async function logTV(item) {
  const response = await fetch(`https://api.tvmaze.com/shows/${item}`);
  const movies = await response.json();
  console.log(movies);
  const card = document.createElement('section');
  const image = document.createElement('img');
  const midDiv = document.createElement('div');
  const likeButton = document.createElement('div');
  const title = document.createElement('p');
  const buttonComments = document.createElement('button');
  const buttonReservations = document.createElement('button');
  buttonComments.innerHTML = 'Comments';
  buttonReservations.innerHTML = 'Reservations';
  image.src = `${movies.image.medium}`;
  image.alt = `${movies.name}`;
  // image.alt
  title.innerHTML = `${movies.name}`;
  likeButton.innerHTML = '<i class="fa-regular fa-heart"></i>';
  // likeButton.src = 'assets/heart-regular.svg';
  // const likeButton = new Image();
  // likeButton.src = Heartregular;
  midDiv.appendChild(title);
  midDiv.appendChild(likeButton);
  midDiv.className = 'flexdiv';
  card.appendChild(image);
  card.appendChild(midDiv);
  card.appendChild(likeButton);
  card.appendChild(buttonComments);
  card.appendChild(buttonReservations);
  tvContainer.appendChild(card);
}
