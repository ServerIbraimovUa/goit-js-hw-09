const bodyEl = document.querySelector('body');
const buttonStartEl = document.querySelector('[data-start]');
const buttonStopEl = document.querySelector('[data-stop]');

let timerId;
buttonStopEl.disabled = true;

buttonStartEl.addEventListener('click', onStartClick);
buttonStopEl.addEventListener('click', onStopClick);

function onStartClick() {
  buttonStartEl.disabled = true;
  buttonStopEl.disabled = false;
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopClick() {
  buttonStopEl.disabled = true;
  buttonStartEl.disabled = false;

  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)

    .padStart(6, 0)}`;
}
