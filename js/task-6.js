
const numberElem = document.querySelector('#controls > input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxElem = document.querySelector('#boxes');

// numberElem.addEventListener('input', onNumberElemInput);
btnCreate.addEventListener('click', onBtnCreateClick);
btnDestroy.addEventListener('click', onBtnDestroy)

// function onNumberElemInput() {
//   return numberElem.value;
// }

function onBtnCreateClick() {
  boxElem.innerHTML = '';
  
  const number = numberElem.value;

  if (number < 1 || number > 100) {
    return;
  } else {
    createBoxes(number);
  } 
}

function createBoxes(amount) {
  const boxes = [];
  
  let boxSize = 30;
    
  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    const box = document.createElement('div');
    box.style.backgroundColor = color;
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    boxSize += 10;
    boxes.push(box);
}
  boxElem.append(...boxes); 
  numberElem.value = '';
}

function onBtnDestroy() {
  boxElem.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}






