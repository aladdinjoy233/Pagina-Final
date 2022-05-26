/* Crear un span que mueva con la opcion seleccionada */

const triggers = document.querySelectorAll(".options > li");

const highlight = document.createElement("span");
highlight.classList.add("highlight");

document.body.append(highlight);

function highlightLink() {
  const linkCoords = this.getBoundingClientRect();

  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top - window.scrollY,
    left: linkCoords.left - window.scrollX
  }

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

const activeLink = document.querySelector('.active-option');

highlightLink()

triggers.forEach(trigger => trigger.addEventListener("click", highlightLink));