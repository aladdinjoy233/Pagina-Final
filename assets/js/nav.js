/* ========== Mobile nav toggle ========== */
const navToggle = document.querySelector('.mobile-nav-toggle');
const navMenu = document.querySelector('nav');

navToggle.addEventListener("click", () => navMenu.classList.toggle("open"));
