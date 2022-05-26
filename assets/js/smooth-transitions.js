/* === Smooth page transitions ===*/
let links = document.querySelectorAll('a');


if (links) {
  links.forEach(link => {
    link.onclick = (e) => {
      let body = document.querySelector('body');
      e.preventDefault;

      setTimeout(() => {
        
        if (body.classList.contains('fade-out')) {
          console.log("navigating...");

          if (!e.srcElement.parentElement.href) {
            window.location = e.srcElement.href;
          } else {
            window.location = e.srcElement.parentElement.href;
          }

        } else {

          console.log("whoops", e.srcElement);
        }

      }, 500);
      body.classList.add('fade-out');
    }
  })
}