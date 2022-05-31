// Validar formulario Sign-In
const form = document.querySelector('form.sign-in');
const formInputs = [form.nombre, form.apellido, form.email, form.contrasenia];
const submitGroup = document.querySelector('.submit-group');

function validarSign() {
  
  formInputs.forEach(input => input.classList.remove("error-input"));
  const errorDiv = document.querySelector('.error-msg');
  if (errorDiv) submitGroup.removeChild(errorDiv);

  if (localStorage.getItem("email") && localStorage.getItem("contrasenia")) {
    addEror("Ye tenes una cuenta en esta pagina")
    return false;
  }

  // Ver si los campos estan vacios
  if (formInputs.some(input => input.value === "")) {
    formInputs.forEach(input => input.value === "" ? input.classList.add("error-input") : null);
    addEror("No puede ver campos vacíos");
    return false;
  }

  // Ver si el nombre y apellido son todos letras
  if (hasNumbers(form.nombre.value.trim()) || hasNumbers(form.apellido.value.trim())) {
    [form.nombre, form.apellido].forEach(input => hasNumbers(input.value.trim()) ? input.classList.add("error-input") : null);
    addEror("Campo no puede tener numeros");
    return false;
  }

  // Ver si email es valido
  let emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!emailReg.test(form.email.value.trim())) {
    form.email.classList.add("error-input");
    addEror("Email no es valido");
    return false;
  }

  // Ver si email es valido
  let passReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passReg.test(form.contrasenia.value.trim())) {
    form.contrasenia.classList.add("error-input");
    addEror("La contraseña debe tener como minimo 8 characteres, una letra y un numero");
    return false;
  }

  signIn();

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

function hasNumbers(string) {
  return /\d/.test(string);
}

function signIn() {
  localStorage.setItem("nombre", form.nombre.value.trim());
  localStorage.setItem("apellido", form.apellido.value.trim());
  localStorage.setItem("email", form.email.value.trim());
  localStorage.setItem("contrasenia", form.contrasenia.value.trim());
  window.location.href = "../index.html";
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

