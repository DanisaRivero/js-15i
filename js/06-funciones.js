//? FUNCIONES 3 tipos ==>

//? DECLARATIVAS --> 'se presenta como función' y tiene hoisting que lo lee primero
//function hello1() {
//  console.log("Hola al Mundo");
//}
//
////? FUNCIONES ANÓNIMAS --> 'se esconden en una variable'
//const hello2 = function () {
//  console.log("Jelou a todos");
//};
//
////? ARROW FUNCTIONS --> (lo más usado);
//const hello3 = () => {
//  console.log("Ciao");
//};
//
//hello1();
//hello2();
//hello3();

//const suma = (x, y) => {
//  const suma = x + y;
//  return suma
//}

//const suma = (x, y) => x + y  //! la flecha equivale al RETURN por eso no es necesario colocar las llaves

//const power = x => x * x;
//console.log(power);

//const resuma = suma (4, 7);
//console.log(resuma);

//const winner = (team1, team2) => console.log(`El equipo ${team1} le ganó al ${team2}`);

//ToDo EJERCICIO BASE DE DATOS

//const dataBase = ["javier", "martin", "agos", "danisa", "luis"];

//const getDataBase = () => alert(dataBase.join(", "));

//const deleteUser = () => {
//  const name = prompt("¿Qué usuario querés borrar?").toLowerCase();
//  if (dataBase.includes(name)) {
//    const position = dataBase.indexOf(name);
//    dataBase.splice(position, 1);
//    alert("Usuario eliminado");
//  } else {
//    alert("Usuario no encontrado");
//  }
//};

//const updateUser = function () {
//  const name = prompt("¿Qué usuario querés modificar?").toLowerCase();
//  const update = prompt("Como es la modificacion?").toLowerCase();
//  if (dataBase.includes(name)) {
//    const position = dataBase.indexOf(name);
//    // dataBase[position]=update //! es otra manera igual de hacerlo que la linea de abajo
//    dataBase.splice(position, 1, update);
//    alert("Se ha actualizado");
//  } else {
//    alert("Usuario no encontrado");
//  }
//};

/*
? FUNCIONES CALLBACK ==> Es una función que se pasa de argumento a otra función
function hello (nombre) {
  alert('Hola' + nombre);
}
 function ingreso (function) {
  let nombre = prompt('Ingrese su nombre');
  function (nombre);
}
ingreso(hello); //! Este hello es la funcion callback porque entró desde otra funcion
*/

//const hi = (nombre) => alert("Hola " + nombre);
//const bye = (nombre) => alert("Chau " + nombre);
//
//function userRegister(saludo) {
//  const name = prompt("Como es su nombre?");
//  saludo(name);
//}
//userRegister(hi)
//userRegister(bye)

//* FILTER AND FIND
//const ageDataBase = [32, 26, 30, 29, 22];

//function mayoresDe25(edad){
//  if(edad>=25){
//    return edad
//  }
//}

//const olderThan25 = ageDataBase.filter(mayoresDe25)
//? USO DEL .filter(x => condición) Devuelve una lista quee cumplan cierta condición, si no coincide devuelve el array VACÍO
//const olderThan25 = ageDataBase.filter((edad) => edad >= 25); //* Arrow function

//? USO DEL .find(x => condición) devuelve el primer elemento del array que cumple la condición y también arrays únicos, si no coincide solo devuelve un UNDEFINED
//const mayor25 = ageDataBase.find((edad) => edad >= 25);

//* FOREACH AND MAP
//ageDataBase.forEach(edad =>console.log(edad + 20)); //! NO DEVUELVE NADA, NI TAMPOCO MODIFICA AL ARRAY ORIGINAL, PERO TE PERMITE EJECUTAR UNA ACCIÓN CON CADA ITEM DEL ARRAY
//const en20años = ageDataBase.map((edad) => edad + 20); //! TE PERMITE EJECUTAR UNA DETERMINADA ACCIÓN CON CADA ITEM DEL ARRAY Y GUARDARLO EN UN ARRAY NUEVO

// ToDo: Armamos una calculadora
//const calculator = () => {
//  const num1 = Number(prompt("Decime el primer número"));
//  const num2 = Number(prompt("Decime el segundo número"));
//  const operation = prompt("¿Qué operación deseas realizar? (+,-,/,*\) ");
//  if (isNaN(num1) || isNaN(num2)) {
//   return alert("Ingrese números válidos"); //Corta la ejecución del código (el Return)
//  }
//  switch (operation) {
//    case "+":
//      alert(num1 + num2);
//      break;
//    case "-":
//      alert(num1 - num2);
//      break;
//    case "/":
//      alert(num1 / num2);
//      break;
//    case "*":
//      alert(num1 * num2);
//      break;
//    default:
//      alert("Ingresa una operación válida");
//  }
//};
//* Segunda manera de realizar la función, solamente a través de la consola
// const innerCalculator = (num1, num2, operation) => {
//   if (isNaN(num1) || isNaN(num2)) {
//     return alert("Ingrese números válidos"); //Corta la ejecución del código (el Return)
//   }
//   switch (operation) {
//     case "+":
//       return num1 + num2;
//     case "-":
//       return num1 - num2;
//     case "/":
//       return num1 / num2;
//     case "*":
//       return num1 * num2;
//     default:
//       return "Ingresa una operación válida";
//   }
// };
//
// const outcome = innerCalculator(8, 3, "*");
// console.log(outcome);

// ToDo Carrito de compras

let products = [
  "agua",
  "cerveza",
  "vino",
  "fernet",
  "gatorade",
  "fanta",
  "ron",
  "vodka",
  "tequila",
];
let trolley = [];

//? Agregar productos
const addProduct = () => {
  const productToAdd = prompt("¿Qué producto querés agregar?").toLowerCase();
  if (products.includes(productToAdd)) {
    trolley.push(productToAdd);
  } else {
    alert("No vendemos ese producto, volvé mañana");
  }
};

//? Ver los productos del carrito
const getTrolley = () => {
  alert("Los productos de su carrito son: \n- " + trolley.join("\n- ")); //! '\n' esto significa un salto de línea
};

//? Buscar el producto del carrito
function getProductFromTrolley() {
  const productsToFind = prompt(
    "¿Qué producto deseas ver de tu carrito?"
  ).toLowerCase();
  if (trolley.includes(productsToFind)) {
    const products = trolley.find((drink) => drink == productsToFind);
    alert(products);
  } else {
    alert("No vendemos ese producto en tu carrito");
  }
}

//? Busqueda de productos por letra y palabras cortadas
const findProducts = function () {
  const search = prompt("Buscar bebidas...").toLowerCase();
  const results = products.filter((products) => products.includes(search));
  alert(results);
};

//? Eliminar un producto del carrito
const removeProductFromTrolley = () => {
  const productToRemove = prompt(
    "¿Qué bebida deseas eliminar de tu carrito?"
  ).toLowerCase();
  checkIfIsInTrolley(productToRemove);
  trolley = trolley.filter((products) => products != productToRemove);
  alert("Producto eliminado");
};

function checkIfIsInTrolley(products) {
  if (!trolley.includes(products)) {
    return alert("No tenes ese producto en tu carrito");
  }
}

// ToDo: piedra, papel, tijeras.

const opciones = ["piedra", "papel", "tijera"];

function playerMove() {
  let play = prompt("piedra, papel o tijera").toLowerCase().trim();
  //  if(play != 'piedra' || play != 'papel' || play != 'tijera'){
  //    alert('Juga bien gil');}
  return play;
}
function botMove() {
  let play = Math.floor(Math.random() * 2.99);

  return opciones[move];
}

function game (player){
  const bot = botMove();
  const player = playerMove();
  switch (true) {
    case player() === bot():
      alert(`El bot jugó ${bot()}. Empate`);
      break;
    case player === "piedra" && bot === "papel":
      alert("El bot jugó papel. Gana el bot");
      break;
    case player === "piedra" && bot === "tijera":
      alert("El bot jugó tijera. Ganaste vos");
      break;
    case player === "papel" && bot === "piedra":
      alert("El bot jugó piedra. Ganaste vos");
      break;
    case player === "papel" && bot === "tijera":
      alert("El bot jugó tijera. Gana el bot");
      break;
    case player === "tijera" && bot === "piedra":
      alert("El bot jugó piedra. Gana el bot");
      break;
    case player === "tijera" && bot === "papel":
      alert("El bot jugó papel. Ganaste vos");
      break;
  }
};