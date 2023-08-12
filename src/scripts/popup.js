const modal = document.querySelector('.comment-modal');
// onclick="window.modal.close();

// BASE API MANAGEMENT

const getData = async (id) => {
  const requestURL = `https://api.tvmaze.com/shows/${id}`;
  const response = await fetch(requestURL);
  const json = await response.json();
  return json;
};

const getProducer = async (id) => {
  const requestURL = `https://api.tvmaze.com/shows/${id}/crew`;
  const response = await fetch(requestURL);
  const json = await response.json();
  return json[0];
};

const getActors = async (id) => {
  const requestURL = `https://api.tvmaze.com/shows/${id}/cast`;
  const response = await fetch(requestURL);
  const json = await response.json();
  return [json[0].person.name, json[1].person.name, json[2].person.name];
};

// API INVOLVEMENT
// API involvement key: Ql2WzJr90DiP5KlSpxzA
const API_INVOLVEMENT = 'Ql2WzJr90DiP5KlSpxzA';

/* eslint-disable */
const postComments = async () => {
  const dataComment = {
    item_id: '5',
    username: 'Richard',
    comment: 'The best!',
  };
  const requestURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${API_INVOLVEMENT}/comments`;
  fetch(requestURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataComment),
  })
    .then((response) => {
      if (response.status === 201) {
        console.log('Comment created succesfully');
      } else {
        console.log('Error to create comment. Status code: ', response.status);
      }
    })
    .catch((error) => {
      console.log('Request error: ', error);
    });
};
/* eslint-enable */
const getCommets = async (id) => {
  const total = [];
  const requestURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${API_INVOLVEMENT}/comments?item_id=${id}`;
  const response = await fetch(requestURL);
  if (response.status === 400) {
    return total;
  }
  const json = await response.json();
  json.forEach((element) => {
    total.push(element);
  });
  return total;
};
// Postear comentario
// postComments();

// const comment1 = await getCommets(2);

// console.log(comment1);

// Modal functions

const displayModal = (movie) => {
  modal.innerHTML = '';
  modal.innerHTML += `
    <div class="modal-heading">
        <div class="heading">
            <img src="${movie.image}" alt="">
            <button class="close-modal" onclick="window.modal.close()"><i class="fa-solid fa-xmark"></i></button>
        </div>

        <h2>${movie.name}</h2>
    </div>
    <div class="modal-body">
      <div class="modal-info">
        <div class="producer">Producer: ${movie.producer}</div>
        <div class="genres">Genres: ${movie.genres}</div>
        <div class="director">Languages: ${movie.languages}</div>
        <div class="actores">Actores: ${movie.actors} </div> 
      </div>
      <div class="comments-section">
        <h2>Comments (${movie.comments.length})</h2>
        <ul class="comment">
        </ul>
      </div>
    </div>`;

  // Comment list
  const commentList = document.querySelector('.comment');
  movie.comments.forEach((element) => {
    commentList.innerHTML += `<li class="comment-item">${element.creation_date} - ${element.username}: ${element.comment}</li> `;
  });

  window.modal.showModal();
};

const createModal = async (cardId) => {
  const caption = await getData(cardId);
  const prodAPI = await getProducer(cardId);
  const actorsAPI = await getActors(cardId);

  // Comments
  const commentsAPI = await getCommets(cardId);

  // Create data card
  const card = {
    name: caption.name,
    image: caption.image.original,
    genres: caption.genres,
    languages: caption.language,
    producer: prodAPI.person.name,
    actors: actorsAPI,
    comments: commentsAPI,
  };
  // Create modal
  displayModal(card);
};

export default createModal;
