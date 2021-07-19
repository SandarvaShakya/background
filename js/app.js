const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav__bar");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("nav__bar--toggle");
});
