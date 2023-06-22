
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');


document.addEventListener('click', changeBgColor);

function changeBgColor() {
  
    document.body.style.backgroundColor = getRandomHexColor();

};