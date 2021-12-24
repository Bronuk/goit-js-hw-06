const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', (event) => {
    const inputLength = event.currentTarget.value;
    
    if (inputLength.length == inputRef.dataset.length) {
        inputRef.classList.add('valid')
        inputRef.classList.remove('invalid')
    }
    
    else {
        inputRef.classList.remove('valid')
        inputRef.classList.add('invalid')
    }
});


// ================ALT==============


// const inputRef = document.getElementById('validation-input');
// console.log(inputRef);

// const inputLength = inputRef.dataset.length;
// console.log(inputLength);

// inputRef.addEventListener('blur', inputColor);

// function inputColor(event) {
//    if(event.currentTarget.value.length == inputLength){
//       event.currentTarget.classList.remove('invalid');
//       event.currentTarget.classList.add('valid');
//    } else {
//       event.currentTarget.classList.remove('valid');
//       event.currentTarget.classList.add('invalid');
//    }
// }