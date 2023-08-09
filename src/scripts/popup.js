const modal = document.querySelector('.comment-modal')
const btnModal = document.querySelector('.btn-comment')

const data = [
    {
        image: 'https://static.tvmaze.com/uploads/images/original_untouched/10/27412.jpg'
    }
]

let crearModal = () => {
    modal.innerHTML = ''
    modal.innerHTML += `
    <div class="modal-heading">
        <button onclick="window.modal.close();">Cerrar</button>
        <img src="${data[0].image}" alt="">
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

btnModal.addEventListener('click',() => {
    console.log('Boton funcionando');
    crearModal()
})



const getData = async (id) => {
    const requestURL = `https://api.tvmaze.com/shows/${id}`
    const response = await fetch(requestURL);
    const json = await response.json()
    return json
}

getData(id)



export default crearModal

