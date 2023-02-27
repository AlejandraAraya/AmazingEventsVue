const cardsContainer = document.getElementById("cards-container");
const currentDate = new Date(data.currentDate);

for (const event of data.events) {
    if (currentDate < new Date(event.date)) {
        agregarHijo(event.image, event.name, event.description, event.price);
    }
}

function agregarHijo(img, name, description, price) {
    const card = document.createElement("div");
    card.style = "width: 19rem;";
    card.classList.add("card", "p-2", "shadow-lg", "m-5");
    card.innerHTML = `
        <img src=${img} class="card-img-top" height="200" alt="img-food">
        <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${description}</p>
        <div class="byp d-flex justify-content-between align-items-baseline mt-4">
            <a href="./details.html" class="btn btn-dark">Details</a>
            <p class="precio">Price: $${price}</p>
        </div>
        </div>
    `;
    cardsContainer.appendChild(card);
}