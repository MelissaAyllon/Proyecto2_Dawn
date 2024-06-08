

let loaded = ( eventLoaded ) => {
  
    window.alert("landing page loaded");
    console.log( eventLoaded );
    debugger;

    let myform = document.getElementById('formulario');

    //actua como hanlder del evento submit
    myform.addEventListener('submit', ( eventSubmit ) => { 
        

        debugger;
    
    })
}

window.addEventListener("DOMContentLoaded", loaded);

document.addEventListener('DOMContentLoaded', function () {
    var formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function (event) {
        
        event.preventDefault();

        var nombre = document.getElementById('nombre-input').value.trim();
        var email = document.getElementById('email-input').value.trim();

        // Validar que los campos no estén vacíos
        if (nombre === '') {
            alert('Por favor, ingrese su nombre.');
            return;
        }

        if (email === '') {
            alert('Por favor, ingrese su correo electrónico.');
            return;
        }

        // Validar formato del correo electrónico
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, ingrese un correo electrónico válido.');
            return;
        }

        alert('Formulario válido. Procediendo con el envío...');
        
        const datos = {
            nombre: nombre,
            email: email
        };
            fetch('https://upheld-radar-422702-h0-default-rtdb.firebaseio.com/colleccion.json', {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
            'Content-Type': 'application/json'
            }
            })
            .then(respuesta => respuesta.json())
            .then(datos => {
            console.log(datos); // Imprimir la respuesta del
            servidor
            })
            .catch(error => console.error(error));

    });
});


  