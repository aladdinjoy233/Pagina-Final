/* ========== Mobile nav toggle ========== */
const navToggle = document.querySelector('.mobile-nav-toggle');
const navMenu = document.querySelector('nav');
const navOptions = document.querySelector('.login-options');

navToggle.addEventListener("click", () => navMenu.classList.toggle("open"));

if (localStorage.getItem("isLoggedIn") == "true") {
  navOptions.innerHTML = `
  <li class="user">
    ${localStorage.getItem("nombre")} ${localStorage.getItem("apellido")}
    <div class="user-options">
      <div class="log-out">Log-out</div>
      <div class="delete-acc">Borrar Cuenta</div>
    </div>
  </li>
  `;
}

if (document.querySelector('.user-options') != null) {
  const logOutBtn = document.querySelector(".log-out");
  const deleteAccountBtn = document.querySelector(".delete-acc");

  logOutBtn.addEventListener("click", () => {
    localStorage.setItem("isLoggedIn", false);
    document.location.reload();
  })

  deleteAccountBtn.addEventListener("click", () => {
    localStorage.clear();
    document.location.reload();
  })
}
