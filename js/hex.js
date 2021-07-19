const button = document.querySelector(".btn");
const background = document.querySelector(".main");
const code = document.querySelector(".hex");

const colors = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

button.addEventListener("click", () => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * colors.length);
    color += colors[random];
  }
  background.style.backgroundColor = color;
  code.textContent = color.toUpperCase();
});
