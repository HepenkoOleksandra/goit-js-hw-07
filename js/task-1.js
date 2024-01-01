
const luElem = document.querySelector('#categories');

const liElem = luElem.children;
console.log(`Number of categories: ${[...liElem].length}`);

// const liElem = luElem.querySelectorAll('.item');
// console.log(`Number of categories: ${[...liElem].length}`);
// const liElemArr = [...liElem];
// console.log(liElemArr);

const elemTitleList = [...liElem].forEach((elem, index, array) => {
    console.log(`Category: ${elem.firstElementChild.textContent}`);
    console.log(`Elements: ${elem.lastElementChild.children.length}`);
})

// const h2 = luElem.firstElementChild.firstElementChild;
// console.log(h2.textContent);

// const lu = luElem.firstElementChild.lastElementChild.children;
// console.log([...lu].length);

// const title = document.querySelectorAll('h2');
// const titleArr = [...title];
// const x = titleArr.forEach((elem, index, arr) => {
//     console.log(`Category: ${elem.textContent}`);
// });






// console.log(liElem.firstElementChildren);
// const x = liArr.forEach((elem, index, array) => {
//     console.log(`Category: ${elem.textContent}`);
//     console.log(`Elements: ${elem.length}`);
// });
// console.log(luElem.textContent);


// const liElem = document.querySelector('.item');
// console.log(liElem);



// const liElem = luElem.querySelectorAll('.item');
// console.log(liElem[1]);
// console.log(liElem[1].textContent);

// const liInElem = liElem[1].querySelectorAll('li');
// console.log(liInElem);
// console.log(liInElem[1].textContent);
