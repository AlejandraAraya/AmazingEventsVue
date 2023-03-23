// getData()
//     .then(() => {
//         const cardsContainer = document.getElementById("cards-container");
//         const currentDate = new Date(data.currentDate);
//         let fragmentCard = document.createDocumentFragment();
//         let busqueda = "";
//         const category = document.getElementById('category');
//         let cadaCategoria = [];
//         document.getElementById("searchButton").addEventListener("click", (e) => cardsFilter(e));

//         function printCards() {
//             for (const event of data.events) {
//                 if (currentDate < new Date(event.date)) {
//                     fragmentCard.appendChild(agregarHijo(event._id, event.image, event.name, event.description, event.price));
//                 }
//             }

//             cardsContainer.appendChild(fragmentCard);
//         }

//         printCards();

//         function agregarHijo(id, img, name, description, price) {
//             const card = document.createElement("div");
//             card.style = "width: 19rem;";
//             card.classList.add("card", "p-2", "shadow-lg", "m-5");
//             card.innerHTML = `
//                 <img src=${img} class="card-img-top" height="200" alt="img-food">
//                 <div class="card-body">
//                 <h5 class="card-title">${name}</h5>
//                 <p class="card-text">${description}</p>
//                 <div class="byp d-flex justify-content-between align-items-baseline mt-4">
//                     <a href="./details.html?id=${id}" class="btn btn-dark">Details</a>
//                     <p class="precio">Price: $${price}</p>
//                 </div>
//                 </div>
//             `;
//             return card;
//         }

//         function printCheckboxes() {
//             data.events.map(categoria => {
//                 if (!cadaCategoria.includes(categoria.category)) {
//                     cadaCategoria.push(categoria.category)
//                 }
//             })

//             let fragment = document.createDocumentFragment()

//             for (let tipo of cadaCategoria) {
//                 let div = document.createElement('div')
//                 // category.classList.add("")
//                 div.innerHTML = `
//                     <div class="my-1">
//                         <label class= "ps-4"> ${tipo}
//                             <input class="m-1"  type="checkbox" id="${tipo}"></input>
//                         </label>
//                     </div>
//                 `
//                 fragment.appendChild(div)
//             }

//             category.appendChild(fragment);
//         }

//         printCheckboxes();

//         let checkboxes = document.querySelectorAll('input[type=checkbox]');

//         function addEventListenersForCheckboxes() {
//             checkboxes.forEach(checkbox => {
//                 checkbox.addEventListener('change', verificarSeleccion)
//             })
//         }

//         addEventListenersForCheckboxes();

//         function verificarSeleccion() {
//             let inputsChequeados = Array.from(checkboxes).filter(checkbox => checkbox.checked);
//             cardsContainer.innerHTML = '';
//             if (inputsChequeados.length > 0) {
//                 for (const checked of inputsChequeados) {
//                     for (const event of data.events) {
//                         if (event.category === checked.id && event.name.toLowerCase().includes(busqueda.toLowerCase())) {
//                             if (currentDate < new Date(event.date)) {
//                                 fragmentCard.appendChild(agregarHijo(event._id, event.image, event.name, event.description, event.price));
//                             }
//                         }
//                     }
//                 }
//             } else {
//                 for (const event of data.events) {
//                     if (event.name.toLowerCase().includes(busqueda.toLowerCase())) {
//                         if (currentDate < new Date(event.date)) {
//                             fragmentCard.appendChild(agregarHijo(event._id, event.image, event.name, event.description, event.price));
//                         }
//                     }
//                 }
//             }

//             cardsContainer.appendChild(fragmentCard);

//             if (cardsContainer.innerHTML === '') {
//                 const noResults = document.createElement("div");
//                 noResults.innerHTML = `
//                     <p>⚠ There's no results</p>
//                 `;
//                 fragmentCard.appendChild(noResults);
//             }

//             cardsContainer.appendChild(fragmentCard);
//         }

//         function searchBox() {
//             let searchBox = document.getElementById("searchBox");
//             searchBox.addEventListener("change", (event) => {
//                 busqueda = event.target.value;
//             });
//         }

//         function cardsFilter(e) {
//             e.preventDefault();
//             verificarSeleccion();
//         }

//         searchBox();
//     })