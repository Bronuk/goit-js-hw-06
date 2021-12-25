function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const selectColorRef = document.querySelector('.change-color');
const nameColorRef = document.querySelector('.color');

const selectColor = () => {
  document.body.style.backgroundColor = getRandomHexColor();
};

const nameColor = () => {
  nameColorRef.textContent = getRandomHexColor();
}

selectColorRef.addEventListener('click', selectColor);
selectColorRef.addEventListener('click', nameColor);