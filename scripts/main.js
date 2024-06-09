

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


        debugger; 
    })
    
}

window.addEventListener("DOMContentLoaded", loaded);
/*
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
*/

  