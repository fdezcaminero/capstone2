const modal = document.querySelector('.comment-modal')
//onclick="window.modal.close();

let displayModal = (movie) => {
    modal.innerHTML = ''
    modal.innerHTML += `
    <div class="modal-heading">
        <div class="heading">
            <img src="${movie.image}" alt="">
            <button class="close-modal" onclick="window.modal.close()"><i class="fa-solid fa-xmark"></i></button>
        </div>

        <h2>${movie.name}</h2>
    </div>
    <div class="modal-body">
        <div class="producer">Producer: ${movie.producer}</div>
        <div class="genres">Genres: ${movie.genres}</div>
        <div class="director">Languages: ${movie.languages}</div>
        <div class="actores">Actores: ${movie.actors} </div>
    </div>`
window.modal.showModal()
console.log('modal creado');
}

let createModal = async (cardId) => {
    
    let caption = await getData(cardId)
    let prodAPI = await getProducer(cardId)
    let actorsAPI = await getActors(cardId)

    // Create data card
    const card = {
        name: caption.name,
        image: caption.image.medium,
        genres: caption.genres,
        languages: caption.language,
        producer: prodAPI.person.name,
        actors: actorsAPI
    }
    //Create modal
    displayModal(card)
}


// API MANAGEMENT

const getData = async (id) => {
    const requestURL = `https://api.tvmaze.com/shows/${id}`
    const response = await fetch(requestURL);
    const json = await response.json()
    return json
}


const getProducer = async (id) => {
    const requestURL = `https://api.tvmaze.com/shows/${id}/crew`
    const response = await fetch(requestURL);
    const json = await response.json()
    return json[0]
}

const getActors = async (id) => {
    const requestURL = `https://api.tvmaze.com/shows/${id}/cast`
    const response = await fetch(requestURL);
    const json = await response.json()
    return [json[0].person.name, json[1].person.name, json[2].person.name]
}

export {displayModal, createModal}







