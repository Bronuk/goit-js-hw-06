let counterValue = 0;

const refs = {
    decrementRef: document.querySelector('[data-action="decrement"]'),
    incrementRef: document.querySelector('[data-action="increment"]'),
    valueRef: document.querySelector('#value'),
};

// console.log(refs.incrementRef);
// console.log(refs.decrementRef);
// console.log(refs.valueRef);

const pressBtn = numbValue => {
    counterValue += numbValue;
    refs.valueRef.textContent = counterValue;
}

refs.decrementRef.addEventListener('click', () => pressBtn(-1));
refs.incrementRef.addEventListener('click', () => pressBtn(+1));