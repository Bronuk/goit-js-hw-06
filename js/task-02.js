const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');
// console.log(ingredientsEl);

const makeIngredientsList = elements => {
  return elements.map((element) => {

    const ingredientsRef = document.createElement('li');
    ingredientsRef.classList.add('item');
    ingredientsRef.textContent = element;
    
    return ingredientsRef;
  });
}

const ingredientsList = makeIngredientsList(ingredients);

ingredientsRef.append(...ingredientsList);

console.log(ingredientsRef);