
const numberElem = document.querySelector('#controls > input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxElem = document.querySelector('#boxes');

numberElem.addEventListener('input', onNumberElemInput);
btnCreate.addEventListener('click', onBtnCreateClick);
btnDestroy.addEventListener('click', onBtnDestroy)

function onNumberElemInput() {
  
}

function onBtnCreateClick() {

}

function onBtnDestroy() {

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {

}

function destroyBoxes() {
  
}


console.log(numberElem);
console.log(btnCreate);
console.log(btnDestroy);
console.log(boxElem);