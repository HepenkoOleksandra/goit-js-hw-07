
const numberElem = document.querySelector('#controls > input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxElem = document.querySelector('#boxes');

numberElem.addEventListener('input', onNumberElemInput);
btnCreate.addEventListener('click', onBtnCreateClick);
btnDestroy.addEventListener('click', onBtnDestroy)

function onNumberElemInput() {
  return numberElem.value;
}

function onBtnCreateClick() {
  boxElem.innerHTML = '';
  const number = numberElem.value;
  if (number < 0 || number > 100) {
    return;
}
createBoxes(onNumberElemInput())
  function createBoxes(amount) {
    const boxes = [];
    let boxWidth = 30;
    let boxHeight = 30;
    for (let i = 0; i < amount; i++) {
      const color = getRandomHexColor();
      const boxElem = document.createElement('div');
      boxElem.style.backgroundColor = color;
      boxElem.style.width = `${boxWidth}px`;
      boxElem.style.height = `${boxHeight}px`;
      boxWidth += 10;
      boxHeight += 10;
      boxes.push(boxElem);
}
    boxElem.append(...boxes); 
  }
  numberElem.value = '';
}

function onBtnDestroy() {
boxElem.innerHTML = '';
// function destroyBoxes() {
  
// }

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}






// console.log(numberElem);
// console.log(btnCreate);
// console.log(btnDestroy);
// console.log(boxElem);