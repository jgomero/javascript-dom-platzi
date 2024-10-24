/* const container = document.querySelector(".container");

const button = document.querySelector("button");

container.addEventListener("mouseover", () => {
  container.style.backgroundColor = "blue";
});

container.addEventListener("mouseout", () => {
  container.style.backgroundColor = "red";
});

// button.addEventListener("click", () => {
//   alert("Button clicked!");
// });

const buttonClickCallback = () => {
  alert("Button Clicked!");
};

button.addEventListener("click", buttonClickCallback);

setTimeout(() => {
  button.removeEventListener("click", buttonClickCallback);
}, 2000);
 */

const container = document.querySelector('.container');
const button = document.querySelector('button');

//addeventlistener para oir cuando pasamos el mouse y cambie el color.
container.addEventListener('mouseover', () => {
  container.style.backgroundColor = 'blue';
});

// addeventlistener para oir cuando retiremos el mouse del container y regrese al color original
container.addEventListener('mouseout', () => {
  container.style.backgroundColor = 'red';
});

//Addeventlistener para oir el click del boton y lance una accion
/* button.addEventListener('click', () => {
  alert('Button Clicked');
}); */

//Addeventlistener usando funcion para oir el click del boton y lance una accion, sin embargo
//tambien se agrega el remover con el cual removemos el evento despues de su accion, sin depender de un timeout
const buttonClickCallBack = () => {
  alert('Button Clicked!!');
  button.removeEventListener('click', buttonClickCallBack);
};

button.addEventListener('click', buttonClickCallBack);

//Remover un eventlistener usando timeout, seleccionando buttonCLickCallBack que se creo

/* setTimeout(() => {
  button.removeEventListener('click', buttonClickCallBack);
}, 2000); */
