//! BOM --> Browser Object Model --> Nos permite manipular el navegador: su historial, su barra de navegación, la información del navegador, la cámara, el micrófono, los usbs conectados, la pantalla, entre otras.
//* Funciones de tiempo:

//? setInterval --> Ejecuta una tarea en un determinado lapso de tiempo

// function helloWorld() {
//   console.log("Hi everybody");
// }
//
// const idInvterval = setInterval(helloWorld, 1000); //--> te devulve un id
//
// const idInvterval2 = setInterval(() => {
//   console.log("Hola banda");
// }, 5000);

//1s --> 1000 ms
//10s --> 10000 ms

//? setTimeout --> Ejecuta una tarea una sola vez, pasado un determinado tiempo

//setTimeout(() => console.log("Hola, está lloviendo"), 7000);

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

function addSquare() {
  //CREAMO EL ELEMENTO
  const newSquare = document.createElement("div");
  //LE PONEMOS SU INFORMACIÓN
  newSquare.classList.add("square");
  newSquare.innerText = "Cuadrado";
  //UBICAMOS AL PADRE
  const newSquareContainer = document.querySelector(".squares-container");
  //EL PADRE ADOPTA AL HIJO
  newSquareContainer.appendChild(newSquare);
}

//ToDo MINI TWEETER
const publicar = (event) => {
  event.preventDefault(); // previene la actividad que viene por defecto
  /*
  * 1- Obtener lo que hay en el textarea
      1.1- Deberiamos identificar al textarea con un id
      1.2- Tenemos que seleccionar al textarea
      1.3- Obtener lo que tiene adentro ese elemento (innerText o innerHTML en un elemento común, pero en un input, hay una propiedad que se llama value)

  * 2- Crear un elemento nuevo que guarde lo que se escribió anteriormente
      2.1- Crear un elemento nuevo en el documento
      2.2- Le ponemos la información
      2.3- Buscamos al padre
      2.4- le decimos al padre que adopte al hijo
  */

  const tweet = document.getElementById("tweet");
  const tweetText = tweet.value;
  const newTweet = document.createElement("div");
  const id = new Date().getTime();
  newTweet.id = id;
  newTweet.innerHTML = `
<p>${tweetText}</p> 
<button class='btn btn-danger d-block ms-auto' onclick='deleteTweet(${id})'> Eliminar </button>`;
  newTweet.classList.add(
    "text-light",
    "bg-secondary",
    "p-3",
    "my-4",
    "tweets-styles"
  );
  const tweetsContainer = document.querySelector(".tweets-container");
  tweetsContainer.appendChild(newTweet);
  document.querySelector("form").reset();
};

const deleteTweet = (id) => {
  const tweetToDelete = document.getElementById(id);
  tweetToDelete.remove();
};