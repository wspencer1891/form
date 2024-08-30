const submitFunction = (event) => {
    if (!validarFormulario()) {
        event.preventDefault(); // Evita la actualización de la página si la validación falla
    } else {
        alert(
            'Los datos enviados fueron:\n' +
            'Nombre: ' + document.getElementById('nombre').value + '\n' +
            'Apellido: ' + document.getElementById('apellido').value + '\n' +
            'Documento: ' + document.getElementById('documento').value + '\n' +
            'Email: ' + document.getElementById('email').value + '\n' +
            'Edad: ' + document.getElementById('edad').value + '\n' +
            'Actividad: ' + document.getElementById('actividad').value + '\n' +
            'Nivel de Estudio: ' + document.getElementById('nivelEstudio').value
        );
    }
}

document.getElementById('formulario').addEventListener('submit', submitFunction);

function validarFormulario() {
    const camposTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true;

    camposTexto.forEach(campo => {
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1));

        if (campo.value === '') {
            mostrarError(errorCampo, 'Este campo es requerido');
            validacionCorrecta = false;
        } else if (campo.value.length < 3) {
            mostrarError(errorCampo, 'Este campo debe tener al menos tres caracteres');
            validacionCorrecta = false;
        } else {
            ocultarError(errorCampo);
        }
    });

    const email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail');

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        ocultarError(errorEmail);
    } else {
        mostrarError(errorEmail, 'Ingrese un correo electrónico válido');
        validacionCorrecta = false;
    }

    const edad = document.getElementById('edad');
    const errorEdad = document.getElementById('errorEdad');
    
    if (edad.value < 18) {
        mostrarError(errorEdad, 'Debes ser mayor a 18 años');
        validacionCorrecta = false;
    } else {
        ocultarError(errorEdad);
    }

    const actividad = document.getElementById('actividad');
    const errorActividad = document.getElementById('errorActividad');

    if (actividad.value === '') {
        mostrarError(errorActividad, 'Por favor selecciona una actividad');
        validacionCorrecta = false;
    } else {
        ocultarError(errorActividad);
    }

    const nivelEstudio = document.getElementById('nivelEstudio');
    const errorNivelEstudio = document.getElementById('errorNivelEstudio');

    if (nivelEstudio.value === '') {
        mostrarError(errorNivelEstudio, 'Indica tu nivel de estudio');
        validacionCorrecta = false;
    } else {
        ocultarError(errorNivelEstudio);
    }

    const aceptoTerminos = document.getElementById('aceptoTerminos');
    const errorAceptoTerminos = document.getElementById('errorAceptoTerminos');

    if (!aceptoTerminos.checked) {
        mostrarError(errorAceptoTerminos, 'Debes aceptar los términos y condiciones');
        validacionCorrecta = false;
    } else {
        ocultarError(errorAceptoTerminos);
    }

    return validacionCorrecta;
}

const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = 'block';
}

const ocultarError = (elemento) => {
    elemento.textContent = '';
    elemento.style.display = 'none';
}
