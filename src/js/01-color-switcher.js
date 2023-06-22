
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerId = null;


startBtn.addEventListener('click', changeBgColor);

// const periodChangingBgColor = () => 

function changeBgColor() {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.disabled = true;
};

stopBtn.addEventListener('click', stopChangingBgColor);

function stopChangingBgColor() {
  clearInterval(timerId);
  startBtn.disabled = false;
};