// Validar formulario Sign-In
const form = document.querySelector('form.sign-in');
const formInputs = [form.nombre, form.apellido, form.email, form.contrasenia];
const submitGroup = document.querySelector('.submit-group');

function validarSign() {
  
  formInputs.forEach(input => input.classList.remove("error-input"));
  const errorDiv = document.querySelector('.error-msg');
  if (errorDiv) submitGroup.removeChild(errorDiv);

  // Ver si los campos estan vacios
  if (formInputs.some(input => input.value === "")) {
    formInputs.forEach(input => input.value === "" ? input.classList.add("error-input") : null);
    addEror("No puede ver campos vacíos");
    return false;
  }

  return false;
}

function addEror(message) {
  let errorIcon = '<i class="fa-solid fa-circle-exclamation">'
  
  let error = document.createElement("div");
  error.classList.add("error-msg");
  error.innerHTML += errorIcon;
  error.innerHTML += message;

  submitGroup.appendChild(error);
}

// Ver contraseña
const showPass = document.querySelectorAll('.show-pass');

showPass.forEach(btn => btn.addEventListener('click', () => {

  const eyeIcon = btn.querySelector(".fa-solid");

  let passInput = btn.parentElement.querySelector("input");

  if (passInput.type === "password") {
    passInput.type = "text";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    passInput.type = "password";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }

}))

