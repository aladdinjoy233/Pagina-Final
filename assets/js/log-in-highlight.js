/* Crear un span que mueva con la opcion seleccionada */
const triggerContainer = document.querySelector('section.forms-container');
const triggers = document.querySelectorAll(".options > li");
let activeLink = document.querySelector('.active-option');

const highlight = document.createElement("span");
highlight.classList.add("highlight");

highlightLink(activeLink);
document.body.append(highlight);

// Event listeners for both btns
triggers.forEach(trigger => trigger.addEventListener("click", () => {

  highlightLink(trigger);

  if (!trigger.classList.contains("active-option")) {
    triggers.forEach(elem => elem.classList.toggle("active-option"));
    activeLink = document.querySelector('.active-option')

    if (triggerContainer.classList.contains("sign-in-active")) {
      triggerContainer.classList.remove("sign-in-active");
      triggerContainer.classList.add("log-in-active");
      document.title = "log-in";
    } else {
      triggerContainer.classList.remove("log-in-active");
      triggerContainer.classList.add("sign-in-active");
      document.title = "sign-in";
    }
    
  }

}));

window.addEventListener("resize", () => highlightLink(activeLink));

// Highlight link function
function highlightLink(elem) {
  const linkCoords = elem.getBoundingClientRect();

  coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top - window.scrollY,
    left: linkCoords.left - window.scrollX
  }

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}
