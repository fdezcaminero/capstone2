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
  const title = document.createElement('p');
  const buttonComments = document.createElement('button');
  const buttonReservations = document.createElement('button');
  buttonComments.innerHTML = 'Comments';
  buttonReservations.innerHTML = 'Reservations';
  image.src = `${movies.image.medium}`;
  // image.alt
  title.innerHTML = `${movies.name}`;
  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(buttonComments);
  card.appendChild(buttonReservations);
  tvContainer.appendChild(card);
}
