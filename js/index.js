const button = document.querySelector(".btn");
const background = document.querySelector(".main");
const code = document.querySelector(".hex");

const colors = ["red", "green", "black", "#615e5e", "seagreen", "pink"];

button.addEventListener("click", () => {
  let random = Math.floor(Math.random() * 6);
  background.style.backgroundColor = colors[random];
  code.textContent = colors[random].toUpperCase();
});
