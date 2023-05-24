const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const vegList = document.querySelector('#ingredients')

const vegArray = ingredients.map(vegetable => {
  const vegItem = document.createElement('li');
  vegItem.textContent = vegetable;
  vegItem.classList.add('item');

  return vegItem;
})

vegList.append(...vegArray);


