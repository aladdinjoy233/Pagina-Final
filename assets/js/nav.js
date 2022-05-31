/* ========== Mobile nav toggle ========== */
const navToggle = document.querySelector('.mobile-nav-toggle');
const navMenu = document.querySelector('nav');
const navOptions = document.querySelector('.login-options');

navToggle.addEventListener("click", () => navMenu.classList.toggle("open"));

if (localStorage.getItem("isLoggedIn")) {
  navOptions.innerHTML = `
  <li class="user">
    ${localStorage.getItem("nombre")} ${localStorage.getItem("apellido")}
    <div class="user-options">
      <div class="log-out">Log-out</div>
      <div class="delete-acc">Borrar Cuenta</div>
    </div>
  </li>
  `;
} else {
  // navOptions.innerHTML = navBtns;
  console.log(localStorage.getItem("isLoggedIn"));
}
