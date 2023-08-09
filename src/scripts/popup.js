const modal = document.querySelector('.comment-modal')
const btnModal = document.querySelector('.btn-comment')



const tvArray = [5, 169, 1871, 73, 51, 156];


let createModal = () => {
    modal.innerHTML = ''
    modal.innerHTML += `
    <div class="modal-heading">
        <button onclick="window.modal.close();">Cerrar</button>
        <img src="${tvArray[2].image}" alt="">
        <h2>Title</h2>
    </div>
    <div class="modal-body">
        <p class="year">Year: yearDate</p>
        <div class="duration">Duration: hs-min</div>
        <div class="director">Director: direccion</div>
        <div class="actores">Actores: act1, act2, act3 </div>
    </div>`
window.modal.showModal()
console.log('imagen: ',data.image);
}

btnModal.addEventListener('click', async () => {
    console.log('Boton funcionando');
    let caption = await getData(tvArray[2])
    console.log(caption);
    const card = {
        name: caption.name,
        genres: caption.genres,
        languajes: caption.language,
        producer: caption,
        actors: 'actors'
    }
    createModal()
    
})



const getData = async (id) => {
    const requestURL = `https://api.tvmaze.com/shows/${id}`
    const response = await fetch(requestURL);
    const json = await response.json()
    return json
}






export default crearModal

