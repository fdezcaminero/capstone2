import './styles.css';

const tvContainer = document.getElementById('tvContainer');
const tvArray = [5, 169, 1871, 73, 51, 156];

tvArray.forEach(logTV);

async function logTV(item) {
  const response = await fetch(`https://api.tvmaze.com/shows/${item}`);
  const movies = await response.json();
  console.log(movies);
  const image = document.createElement('img');
  const title = document.createElement('p');
  image.src = `${movies.image.medium}`;
  title.innerHTML = `${movies.name}`;
  tvContainer.appendChild(image);
  tvContainer.appendChild(title);
}
