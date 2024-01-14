export default function validacionCampos(formLogin){
    const form = document.querySelector(formLogin);
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    if (!form.username.trim()) {
        // errors.username = "El campo Email es requerido.";
        console.log("Campo Email vacio!")
    } else if (!regexEmail.test(form.username.trim())) {
        // errors.username = "Inserte un Email valido.";
    }

    if (!form.password.trim()) {
        // errors.password = "Ingrese su contraseña";
    }
}