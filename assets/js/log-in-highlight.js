const triggerContainer = document.querySelector('section.forms-container');
const triggers = document.querySelectorAll(".options > li");
let activeLink = document.querySelector('.active-option');

// Event listeners for both btns
triggers.forEach(trigger => trigger.addEventListener("click", () => {

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
