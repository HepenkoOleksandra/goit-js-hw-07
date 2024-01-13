
const userName = document.querySelector('#name-input');
const spanName = document.querySelector('#name-output')

userName.addEventListener('input', onUserNameInput)

function onUserNameInput() {
    const name = userName.value.trim();
    
    if (name === "") {
        spanName.textContent = 'Anonymous';
    } else {
        spanName.textContent = name; 
    }    
}

