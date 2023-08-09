const modal = document.querySelector('.comment-modal')
const btnModal = document.querySelector('.btn-comment')



const tvArray = [5, 169, 1871, 73, 51, 156];


let createModal = (movie) => {
    modal.innerHTML = ''
    modal.innerHTML += `
    <div class="modal-heading">
        <button onclick="window.modal.close();">Cerrar</button>
        <img src="${movie.image}" alt="">
        <h2>${movie.name}</h2>
    </div>
    <div class="modal-body">
        <p class="producer">Producer: ${movie.producer}</p>
        <div class="duration">Duration: hs-min</div>
        <div class="director">Director: direccion</div>
        <div class="actores">Actores: act1, act2, act3 </div>
    </div>`
window.modal.showModal()
console.log('modal creado');
}

btnModal.addEventListener('click', async () => {
    console.log('Boton funcionando');
    let movieId = tvArray[2]
    let caption = await getData(movieId)
    let prodAPI = await getProducer(movieId)
    console.log(caption);
    const card = {
        name: caption.name,
        genres: caption.genres,
        languajes: caption.language,
        producer: prodAPI.name,
        actors: 'actors'
    }
    createModal(card)
    
    console.log(prodAPI.person);
})



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

// const getActors = async

export default createModal







