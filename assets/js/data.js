const urlApi = "https://mindhub-xj03.onrender.com/api/amazing";
let data = [];

async function getData() {
    try {
        const response = await fetch(urlApi);
        dataFromBackend = await response.json();
        return data = dataFromBackend;
    } catch (error) {
        console.log(error);
    }
}
