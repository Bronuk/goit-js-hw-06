
const refs = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
};

console.log(refs.nameInput);
console.log(refs.nameOutput);


refs.nameInput.addEventListener('input', (event) => {

refs.nameInput.value === '' ? refs.nameOutput.textContent = "Anonymous" : refs.nameOutput.textContent = event.currentTarget.value;

console.log(event.currentTarget.value);

});


// ----------------ALT-----------------


// refs.nameInput.addEventListener('input', inputChange);

// function inputChange(event) {

//     if (refs.nameInput.value === ''){
//         refs.nameOutput.textContent = "Anonymous";
//     }

//     else {
//         refs.nameOutput.textContent = event.currentTarget.value;
//     };

//     console.log(event.currentTarget.value);
// };
