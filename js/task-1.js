
// const ulElem = document.querySelector('#categories');

// const liElem = ulElem.children;
// console.log(`Number of categories: ${[...liElem].length}`);

// const elemTitleList = [...liElem].forEach((elem, index, array) => {
//     console.log(`Category: ${elem.firstElementChild.textContent}`);
//     console.log(`Elements: ${elem.lastElementChild.children.length}`);
// })


const ulElem = document.querySelector('#categories');
ulElem.type = 'all';
const y = ulElem.removeAttribute('id');
console.log(y);

const p = document.createElement('p');
p.classList.add('text');
p.textContent = 'Hello world';
ulElem.before(p);
p.remove();
console.log(p);

const liElem = ulElem.querySelector('.item');
liElem.classList.add('text', 'cat', 'hours');
liElem.classList.remove('cat');
liElem.classList.replace('hours', 'cat');
console.log(liElem);

const ulChildElem = ulElem.children;
console.log(ulChildElem[2]);

const parentLiElem = ulChildElem[2].parentElement;
console.log(parentLiElem);

const ulChildElemAll = ulElem.childNodes;
console.log(ulChildElemAll);

// const liFirstChildElem = liElem[1].lastElementChild;
// console.log(liFirstChildElem);

const h2 = ulElem.querySelector('h2');
h2.style.fontSize = '70px';
console.log(h2.textContent);
const h2Sibling = h2.nextElementSibling;
console.log(h2.innerHTML);

const x = ulElem.children[1].children[1].children[1];
x.textContent = "Fox";
console.log(x.textContent);