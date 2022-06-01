// Validar formulario Sign-In
const form = document.querySelector('form.sign-in');
const formInputs = [form.nombre, form.apellido, form.email, form.contrasenia];
const submitGroupSign = document.querySelector('.submit-group.sign');

function validarSign() {
  
  formInputs.forEach(input => input.classList.remove("error-input"));
  const errorDiv = submitGroupSign.querySelector('.error-msg');
  if (errorDiv) submitGroupSign.removeChild(errorDiv);

  if (localStorage.getItem("email") && localStorage.getItem("contrasenia")) {
    addEror(submitGroupSign, "Ya tenes una cuenta en esta pagina")
    return false;
  }

  // Ver si los campos estan vacios
  if (formInputs.some(input => input.value === "")) {
    formInputs.forEach(input => input.value === "" ? input.classList.add("error-input") : null);
    addEror(submitGroupSign, "No puede ver campos vacíos");
    return false;
  }

  // Ver si el nombre y apellido son todos letras
  if (hasNumbers(form.nombre.value.trim()) || hasNumbers(form.apellido.value.trim())) {
    [form.nombre, form.apellido].forEach(input => hasNumbers(input.value.trim()) ? input.classList.add("error-input") : null);
    addEror(submitGroupSign, "Campo no puede tener numeros");
    return false;
  }

  // Ver si email es valido
  let emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!emailReg.test(form.email.value.trim())) {
    form.email.classList.add("error-input");
    addEror(submitGroupSign, "Email no es valido");
    return false;
  }

  // Ver si email es valido
  let passReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passReg.test(form.contrasenia.value.trim())) {
    form.contrasenia.classList.add("error-input");
    addEror(submitGroupSign, "La contraseña debe tener como minimo 8 characteres, una letra y un numero");
    return false;
  }

  signIn();

  return false;
}

function hasNumbers(string) {
  return /\d/.test(string);
}

function signIn() {
  localStorage.setItem("nombre", form.nombre.value.trim());
  localStorage.setItem("apellido", form.apellido.value.trim());
  localStorage.setItem("email", form.email.value.trim());
  localStorage.setItem("contrasenia", form.contrasenia.value.trim());
  localStorage.setItem("isLoggedIn", true);
  window.location.href = "../index.html";
}

// Validar formulario log in
const logForm = document.querySelector('form.log-in');
const submitGroupLog = document.querySelector('.submit-group.log');

function validarLog() {

  logForm.querySelectorAll("input").forEach(i => i.classList.remove("error-input"));

  const errorDiv = submitGroupLog.querySelector('.error-msg');
  if (errorDiv) submitGroupLog.removeChild(errorDiv);

  if (localStorage.getItem("nombre") === null) {
    addEror(submitGroupLog, "Tiene que crear una cuenta en la pagina");
    return false;
  }

  if (logForm.email.value != localStorage.getItem("email")) {
    logForm.email.classList.add("error-input");
    addEror(submitGroupLog, "Email no es correcto");
    return false;
  }

  if (logForm.contrasenia.value != localStorage.getItem("contrasenia")) {
    logForm.contrasenia.classList.add("error-input");
    addEror(submitGroupLog, "Contraseña no es correcto");
    return false;
  }

  logIn();

  return false;
}

function logIn() {
  localStorage.setItem("isLoggedIn", true);
  window.location.href = "../index.html";
}

// Agregar error
function addEror(elem, message) {
  let errorIcon = '<i class="fa-solid fa-circle-exclamation">'
  
  let error = document.createElement("div");
  error.classList.add("error-msg");
  error.innerHTML += errorIcon;
  error.innerHTML += message;

  elem.appendChild(error);
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

