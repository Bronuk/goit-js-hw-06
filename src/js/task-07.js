const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const handleInput = () => {
    textRef.style.fontSize = `${inputRef.value}px`;
};

inputRef.addEventListener('input', handleInput);


// ==================ALT=================


// const inputRef = document.getElementById('font-size-control');
// const textRef = document.getElementById('text');

// inputRef.addEventListener('input', handleInput);

// function handleInput(event) {

// textRef.style.fontSize = event.currentTarget.value + 'px';
// }

