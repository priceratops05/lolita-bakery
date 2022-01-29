const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");

const validate = () => {
    let name = nameInput.value;
    let email = emailInput.value;
    let phone = phoneInput.value;
    let error = false;
    let regExpSoloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚ]+$/;
    let regExpCorreo = /^[a-z0-9._]+@[a-z]+.com$/gmi;
    let camposRequeridos = document.querySelectorAll(':required');
    let regExpTelefono = /[0-9]{4}-[0-9]{4}/;
    camposRequeridos.forEach(campo => {
        if (campo.value == '') {
            error = true;
            campo.classList.add('error-input');
        } else {
            campo.classList.remove('error-input');
        }
    })
    if (!regExpSoloLetras.test(name)) {
        error = true;
        nameInput.classList.add('error-input');
    } else {
        nameInput.classList.remove('error-input');
    }
    if (!regExpCorreo.test(email)) {
        error = true;
        emailInput.classList.add('error-input');
    } else {
        emailInput.classList.remove('error-input');
    }
    if (!regExpTelefono.test(phone)) {
        error = true;
        phoneInput.classList.add('error-input');
    } else {
        phoneInput.classList.remove('error-input');
    }
    if (error == false) {
        Swal.fire({
            background: "var(--pink-light)",
            confirmButtonColor: "var(--pink-dark)",
            confirmButtonText: "Aceptar",
            imageUrl: "./images/nav/logo-lolita-bakery.jpeg",
            title: "Gracias por contactarnos",
            html: "Su mensaje ha sido enviado, pronto le estaremos contactando.",
            width: 600,
            padding: 20,
        });
    } else {
        Swal.fire({
            background: "var(--pink-light)",
            confirmButtonColor: "var(--pink-dark)",
            confirmButtonText: "Aceptar",
            icon: 'error',
            title: "Error",
            html: "Revise y complete los campos resaltados.",
            width: 400,
            padding: 20,
        });
    }

}