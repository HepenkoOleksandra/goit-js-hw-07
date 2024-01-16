
const categoryList = document.querySelector('#categories');

const categoryItem = categoryList.children;
console.log(`Number of categories: ${categoryItem.length}`);

[...categoryItem].forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`);
})
