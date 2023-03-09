const queryString = location.search

const params = new URLSearchParams(queryString);

const id = params.get("id")

const identificador = data.events.find(event => event._id == id);
console.log(identificador);






function mostrarDetalle() {
    const contenedorDetalle = document.getElementById("carta");
    let cajaCarta = document.createElement('div');
    cajaCarta.className = 'carta-detalle w-75 d-flex mx-auto border border-dark rounded-5  my-5 p-5 gap-1 bg-light bg-gradient border-2 shadow-lg'
    cajaCarta.innerHTML = `
                        <div class="imagen w-50">
                            <img class="imagen-party w-100 h-100 border border-dark rounded-5 rounded-end shadow-lg " src="${identificador.image}">
                        </div>

                        <div class="descripcion w-50 p-4 border border-dark rounded-start rounded-5">
                            <h3 class="titulo text-center mb-4 text-decoration-underline">${identificador.name}</h3>
                            <p class="text-center text-decoration-underline">${identificador.date}</p>
                            <p>${identificador.description}</p>
                            <p class="text-center"><span class="fw-bold">Place:</span> ${identificador.place}</p>
                            
                            <p class="text-center"><span class="fw-bold">Price:</span> $${identificador.price}</p>
                            
                            <input class="btn btn-secondary" type="button" value="Back" onClick="history.go(-1);">
                        </div>  
    
    `
    contenedorDetalle.appendChild(cajaCarta)

}


mostrarDetalle()