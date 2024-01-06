
const userName = document.querySelector('input#name-input');
const spanName = document.querySelector('span#name-output')

userName.addEventListener('input', onInputInput)

function onInputInput() {
    const name = userName.value.trim();
    // spanName.textContent = name || 'Anonymous';
   console.log(name);
    if (name === "") {
        spanName.textContent = 'Anonymous';
    } else {
       spanName.textContent = name; 
    }
    
    
    
}

console.log(userName.value);
console.log(spanName.textContent);