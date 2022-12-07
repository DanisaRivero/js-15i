//! BOM --> Browser Object Model --> Nos permite manipular el navegador: su historial, su barra de navegación, la información del navegador, la cámara, el micrófono, los usbs conectados, la pantalla, entre otras.
//* Funciones de tiempo:

//? setInterval --> Ejecuta una tarea en un determinado lapso de tiempo

function helloWorld() {
  console.log("Hi everybody");
}

const idInvterval = setInterval(helloWorld, 1000); //--> te devulve un id

const idInvterval2 = setInterval(() => {
  console.log("Hola banda");
}, 5000);

//1s --> 1000 ms
//10s --> 10000 ms

//? setTimeout --> Ejecuta una tarea una sola vez, pasado un determinado tiempo

setTimeout(() => console.log("Hola, está lloviendo"), 7000);

//! CUENTA REGRESIVA

let countdown = 10;

const coutdownInvterval = setInterval(() => {
  //Setinterval me devuelve Id y por eso lo guardamos en una variable
  console.log("Despegue en " + countdown);
  countdown--;
}, 1000);

setTimeout(() => {
  clearInterval(coutdownInvterval);
  console.log("Despegueeeeeee");
}, 11000);

//! DOM --> Document Object Model --> Nos va a permitir  manipular los elementos de mi documento HTML

// window.document === document

//? SELECTORES
//* POR ID
// document.getElementById(id) --> trae uno solo
//* POR CLASE
// document.getElementsByClassName(class) --> trae varios
//*POR NOMBRE DE LA ETIQUETA
// document.getElementsByTagName(input) --> trae varios
//*POR SELECTORES DE CSS
// document.querySelector(.class) o (#) -->

function changeText() {
  const h2ToChange = document.getElementById("h2-to-change");
  h2ToChange.classList.add("special-effects");
}

function changeTheme() {
  const elementToChange = document.querySelector(".testing-theme");
  if (elementToChange.classList.contains("light")) {
    elementToChange.classList.add("dark");
    elementToChange.classList.remove("light");
  } else {
    elementToChange.classList.add("light");
    elementToChange.classList.remove("dark");
  }
}

function addSquare(){
  //CREAMO EL ELEMENTO
  const newSquare = document.createElement('div')
  //LE PONEMOS SU INFORMACIÓN
  newSquare.classList.add('square')
  newSquare.innerText='Cuadrado'
  //UBICAMOS AL PADRE
  const newSquareContainer = document.querySelector('.squares-container')
  //EL PADRE ADOPTA AL HIJO
  newSquareContainer.appendChild (newSquare)
}