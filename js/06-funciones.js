//? FUNCIONES 3 tipos ==>

//? DECLARATIVAS --> 'se presenta como función' y tiene hoisting que lo lee primero
function hello1() {
  console.log("Hola al Mundo");
}

//? FUNCIONES ANÓNIMAS --> 'se esconden en una variable'
const hello2 = function () {
  console.log("Jelou a todos");
};

//? ARROW FUNCTIONS --> (lo más usado);
const hello3 = () => {
  console.log("Ciao");
};

hello1();
hello2();
hello3();

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

const dataBase = ["javier", "martin", "agos", "danisa", "luis"];

const deleteUser = () => {
  const name = prompt("¿Qué usuario querés borrar?").toLowerCase();
  if (dataBase.includes(name)) {
    const position = dataBase.indexOf(name);
    dataBase.splice(position, 1);
    alert("Usuario eliminado");
  } else {
    alert("Usuario no encontrado");
  }
};

const updateUser = function () {
  const name = prompt("¿Qué usuario querés modificar?").toLowerCase();
  const update = prompt("Como es la modificacion?").toLowerCase();
  if (dataBase.includes(name)) {
    const position = dataBase.indexOf(name);
    // dataBase[position]=update //! es otra manera igual de hacerlo que la linea de abajo
    dataBase.splice(position, 1, update);
    alert("Se ha actualizado");
  } else {
    alert("Usuario no encontrado");
  }
};
