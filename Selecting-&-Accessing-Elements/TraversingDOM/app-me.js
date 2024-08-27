//Obtener el elemento padre
const parent = document.getElementById('parent');
console.log(parent);

//Obtener los hijos
const children = parent.children;
console.log(children);

//Obtener el primer hijo
const firstChild = parent.firstElementChild;
console.log(firstChild);

//Obtener el ultimo hijo
const lastChild = parent.lastElementChild;
console.log(lastChild);

//Obtener el anterior cercano al parent al mismo nivel
const previousSibling = parent.previousElementSibling;
console.log(previousSibling);

//Obtener el proximo cercano hermano al parent en el mismo nivel
const nextSibling = parent.nextElementSibling;
console.log(nextSibling);

//Navegando desde el hijo hacia los padres
const children2 = document.querySelector('li');
console.log(children2);

//Obtener el parent de un hijo
const parent2 = children2.parentNode;
console.log(parent2);

//Obtener el parent de un hijo en forma elemento
const grandParent = children2.parentElement;
console.log(grandParent);

//Obtener un elemento desde el Hijo
const grandGrandParent = children2.closest('menu'); // este último es el más utilizado
console.log(grandGrandParent);
