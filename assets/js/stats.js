getData()
.then(() => {

    const mayorAsistencia = document.getElementById("mayor-asistencia");
    const menorAsistencia = document.getElementById("menor-asistencia");
    const mayorCapacidad = document.getElementById("mayor-capacidad");


    let eventoMayorAsistencia = '';
    let porcentajeMayor = 0;
    function mayorPorcentajeA() {
         data.events.forEach(event => {
            const porcentaje = (event.assistance * 100) / event.capacity;
            if (porcentajeMayor < porcentaje) {
                porcentajeMayor = porcentaje.toFixed(2)
                eventoMayorAsistencia = event.name
            }
        });

    }

    mayorPorcentajeA()

    mayorAsistencia.innerHTML = `${eventoMayorAsistencia} (${porcentajeMayor})`

    let eventoMenorAsistencia = '';
    let porcentajeMenor = 100;
    function menorPorcentajeA() {
         data.events.forEach(event => {
            const porcentaje = (event.assistance * 100) / event.capacity;
            if (porcentajeMenor > porcentaje) {
                porcentajeMenor = porcentaje.toFixed(2)
                eventoMenorAsistencia = event.name
            }
        });

    }

    menorPorcentajeA()

    menorAsistencia.innerHTML = `${eventoMenorAsistencia} (${porcentajeMenor})`


    let nombreEventoMayorC = '';
    let nMayorCapacidad = 0;
    function eventoMayorCapacidad() {
        data.events.forEach( evento =>  {
            if ( nMayorCapacidad < evento.capacity){
                nMayorCapacidad = evento.capacity;
                nombreEventoMayorC = evento.name;
            }
        }); 
        return nMayorCapacidad;
    }
    eventoMayorCapacidad()

    mayorCapacidad.innerHTML = `${nombreEventoMayorC} (${nMayorCapacidad})`




    const table2 = document.getElementById('table2')
    const table3 = document.getElementById('table3');
    let cadaCategoria = [];

    function getCategories() {
        data.events.map(evento => {
            if (!cadaCategoria.includes(evento.category)) {
                cadaCategoria.push(evento.category)
            }
        })
    }

    getCategories();

    function dibujarCategorias() {
        let fragmentForTable2 = document.createDocumentFragment()
        let fragmentForTable3 = document.createDocumentFragment();

        for (let tipo of cadaCategoria) {
            let tr = document.createElement('tr')
            tr.id = tipo + "Table2";
            tr.innerHTML += `
                <td>${tipo}</td>
            `;
            fragmentForTable2.appendChild(tr)

            let tr2 = document.createElement('tr')
            tr2.id = tipo + "Table3";
            tr2.innerHTML += `
                <td>${tipo}</td>
            `;
            fragmentForTable3.appendChild(tr2)
        }

        table2.appendChild(fragmentForTable2);
        table3.appendChild(fragmentForTable3);
    }

    dibujarCategorias();

    function getUpcomingRevenues() {
        cadaCategoria.forEach(categoria => {
            let revenue = 0;
            data.events.map(evento => {
                if (categoria.includes(evento.category) && new Date(evento.date) > new Date(data.currentDate)) {
                    revenue += Number((evento.assistance ? evento.assistance : evento.estimate)) * Number(evento.price);
                }
            });
            let tr = document.getElementById(categoria + "Table2");
            tr.innerHTML += `<td>$ ${revenue}</td>`;
        });
    }

    getUpcomingRevenues();

    function getUpcomingAttendance() {
        cadaCategoria.forEach(categoria => {
            let percentages = 0;
            let divs = 0;
            data.events.map(evento => {
                if (categoria.includes(evento.category) && new Date(evento.date) > new Date(data.currentDate)) {
                    percentages += ((evento.assitance ? evento.assistance : evento.estimate) * 100) / evento.capacity;
                    divs += 1;
                }
            });
            let tr = document.getElementById(categoria + "Table2");
            tr.innerHTML += `<td>% ${((percentages / divs) | 0).toFixed(2)}</td>`;
        });
    }

    getUpcomingAttendance();

    function getPastRevenues() {
        cadaCategoria.forEach(categoria => {
            let revenue = 0;
            data.events.map(evento => {
                if (categoria.includes(evento.category) && new Date(evento.date) < new Date(data.currentDate)) {
                    revenue += Number((evento.assistance ? evento.assistance : evento.estimate)) * Number(evento.price);
                }
            });
            let tr = document.getElementById(categoria + "Table3");
            tr.innerHTML += `<td>$ ${revenue}</td>`;
        });
    }

    getPastRevenues();

    function getPastAttendance() {
        cadaCategoria.forEach(categoria => {
            let percentages = 0;
            let divs = 0;
            data.events.map(evento => {
                if (categoria.includes(evento.category) && new Date(evento.date) < new Date(data.currentDate)) {
                    percentages += ((evento.assistance ? evento.assistance : evento.estimate) * 100) / evento.capacity;
                    divs += 1;
                }
            });
            let tr = document.getElementById(categoria + "Table3");
            tr.innerHTML += `<td>% ${((percentages / divs) | 0).toFixed(2)}</td>`;
        });
    }

    getPastAttendance();

});


