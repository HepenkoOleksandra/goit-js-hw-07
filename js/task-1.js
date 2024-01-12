
const ulElem = document.querySelector('.js-categories');

const liElem = ulElem.children;
console.log(`Number of categories: ${liElem.length}`);

const elemTitleList = [...liElem].forEach(elem => {
    console.log(`Category: ${elem.firstElementChild.textContent}`);
    console.log(`Elements: ${elem.lastElementChild.children.length}`);
})
