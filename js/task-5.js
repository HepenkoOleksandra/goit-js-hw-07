
const body = document.querySelector('body');
const btn = body.querySelector('.js-change-color');
const span = body.querySelector('.js-color');

btn.addEventListener('click', onBtnClick);

function onBtnClick() {
  const color = getRandomHexColor();
  span.textContent = color;
  body.style.backgroundColor = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
