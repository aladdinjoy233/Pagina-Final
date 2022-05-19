/* ========== Mobile nav toggle ========== */
const navToggle = document.querySelector('.mobile-nav-toggle');
const navMenu = document.querySelector('nav');

navToggle.addEventListener("click", () => navMenu.classList.toggle("open"));

/* ========== Testimonial Carousel ========== */
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const carouselContainer = document.querySelector(".carousel-container");

btnLeft.addEventListener("click", moveLeft);

btnRight.addEventListener("click", moveRight);

function moveLeft() {
  const testimonialCards = [...carouselContainer.querySelectorAll(".carousel-card")];

  const leftCard = carouselContainer.querySelector(".left");
  const midCard = carouselContainer.querySelector(".middle");
  const rightCard = carouselContainer.querySelector(".right");

  let nextCard = testimonialCards.indexOf(leftCard) - 1;

  nextCard = nextCard < 0 ? testimonialCards.length - 1 : nextCard;

  leftCard.classList.remove("left");
  leftCard.classList.add("middle");

  midCard.classList.remove("middle");
  midCard.classList.add("right");

  rightCard.classList.remove("right");

  testimonialCards[nextCard].classList.add("left");
}

function moveRight() {
  const testimonialCards = [...carouselContainer.querySelectorAll(".carousel-card")];

  const leftCard = carouselContainer.querySelector(".left");
  const midCard = carouselContainer.querySelector(".middle");
  const rightCard = carouselContainer.querySelector(".right");

  let nextCard = testimonialCards.indexOf(rightCard) + 1;

  nextCard = nextCard > testimonialCards.length - 1 ? 0 : nextCard;

  leftCard.classList.remove("left");

  midCard.classList.remove("middle");
  midCard.classList.add("left");

  rightCard.classList.remove("right");
  rightCard.classList.add("middle");

  testimonialCards[nextCard].classList.add("right");
}
