let cargar_datos = async () => {
    const url = "https://upheld-radar-422702-h0-default-rtdb.firebaseio.com/colleccion.json"; // Reemplaza con la URL real de la API o recurso
    const respuesta = await fetch(url);
    if (!respuesta.ok) {
        console.error("Error:", respuesta.status);
        return;
    }
    debugger;
    const datos = await respuesta.json();
    update_datos(datos) // Procesar o mostrar los datos obtenidos
}

let update_datos = (datos) => {

    const tableBody = document.getElementById("contenido-dinamico");
    tableBody.innerHTML = ""; // Limpiar cualquier contenido existente

    // Mapa para contar las ocurrencias de cada valor específico
    const countMap = {};

    // Recorrer los datos y contar los valores específicos
    for (let key in datos) {
        if (datos.hasOwnProperty(key)) {
            const item = datos[key];
            const specificValue = item.favGroup; // Suponiendo que quieres contar las categorías

            if (countMap[specificValue]) {
                countMap[specificValue]++;
            } else {
                countMap[specificValue] = 1;
            }
        }
    }

    // Plantilla para las filas de la tabla
    let template = (categoria, conteo) => `
        <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
            <div class="card-header">KPOP-GROUP</div>
            <div class="card-body">
                <h5 class="card-title">${categoria}</h5>
                <p class="card-text">${conteo}</p>
            </div>
        </div>`;

    // Recorrer el mapa y agregar filas a la tabla
    for (let categoria in countMap) {
        if (countMap.hasOwnProperty(categoria)) {
            tableBody.innerHTML += template(categoria, countMap[categoria]);
        }
    }
}

let loaded = ( eventLoaded ) => {
    
    /*  Primera parte alerta    */
    window.alert("landing page loaded");
    console.log( eventLoaded );
    debugger;

    /*  Segunda parte - document API    */
    let myform = document.getElementById('formulario');
    debugger
    //actua como hanlder del evento submit
    myform.addEventListener('submit', (eventSubmit) => { 
        
        eventSubmit.preventDefault();
        // Elementos
        var elemento1 = document.getElementById('nombre-input')
        var elemento2 = document.getElementById('email-input')
        var elemento3 = document.getElementById('kpop-group')

        var nombre = elemento1.value.trim();
        var email = elemento2.value.trim();
        
        if(nombre.length == 0){
            elemento1.focus();
            alert('Por favor, ingrese un nombre.');
            return;
        }
        if (email.length === 0) {
            elemento2.focus();
            alert('Por favor, ingrese su correo electrónico.');
            return;
        }

        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            // Muestra un mensaje de alerta con la validación de correo electrónico
            elemento2.focus();
            alert('Por favor, ingrese un correo electrónico válido.');
            return;
        }

        alert('Formulario válido. Procediendo con el envío...');

        const datos = {
            favGroup : elemento3.value
        };
        
        fetch("https://upheld-radar-422702-h0-default-rtdb.firebaseio.com/colleccion.json",
            {
                method: 'POST',
                body: JSON.stringify(datos),
                headers: {'Content-Type': 'application/json'}
            }
            /*  con el then recibo la respuesta del fetch y con esa respuesta hago mi logica para mostrarla */
        ).then( (respuesta) => respuesta.json() )
        .then( (datos) => {
           console.log(datos);
        }).catch((error) => {
            console.error(error);
        })

        cargar_datos();

        debugger; 
    })

}

window.addEventListener("DOMContentLoaded", loaded);
