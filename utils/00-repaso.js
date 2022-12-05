//* VARIALES
var numero = 15; //! Es mala práctica y no tiene scope definido, se puede modificar en todo momento.
let numero2 = 3; //! si tiene scope definido, se puede modificar con el paso del tiempo.
const numero3 = 8; //! tiene scope, no se puede modificar con el paso del tiempo.

//* STRINGS --> una cadena de caracteres, que está encerrada entre comillas simples, dobles o invertidas
"Soy un string"
'Soy un string'
`Soy un string`

//* CONCATENACIÓN DE STRINGS
'12345' + '6789' --> '123456789'
'12345' + 6789 --> '123456789'
'12345' + 67 + 89 --> '123456789'
12 + 34 + '56789' --> '4656789'

//* TEMPLATE LITERALS
`Mi número favorito es ${numero}` --> 'Mi número favorito es 15'
`Mi número favorito es ${numero / 3}` --> 'Mi número favorito es 3'

//* PROPIEDAD LENGTH (la única)
"Hola soy diego".length --> 14

//* MÉTODOS TUPPERCASE
'Hola'.toUpperCase() --> 'HOLA'
/*
? para pasar a mayúcula - .toUpperCase()
? para pasar a minúscula - .toLowerCase()
? para saber si una cadena de caracteres se encuentra adrentro de otra - .incluide
? para sacar los espacios innecesarios del comienzo y del final - .trim()
? para saber que caracteres se encuentra en una determinada posición del string - charAt
*/

//* NUMBERS Y MATH

//! obtener un número random
Math.random() //* --> me devuelve un número aleatorio entre 0 y 1

/*
? para hacer potencias - 
? para hacer raices -
? para truncar números -
? para redondera números -
?
*/

//* OPERADORES:

//? Asignación --> = simplemente le asigna un valor a una variable
//? Aritméticos --> +, -, *, /, %
//? Relación --> Evaluan una condición  --> >, >=, <, <=, !=, !==, ==, === (el doble igual solo compara el valor, el triple igual compara valor y tipo de dato)
//? Condicional o Ternario -- Evalua una condición, y si era afirmatica, ejecutaba un código, y si era negativa ejecutaba otro código
5>4? 'Es mayor' : 'Es menor'
//? Logicos --> Evaluaban varias condiciones --> AND [&&] (todas las condicionales deben ser afirmativos), OR [||] (con ua sola condició afirmativa es suficiente), Not [!] (hace la contra, operador de nagación)

//* COMUNICACIÓN CON EL CLIENTE

//! PROMPT --> muestra una ventana con un mensaje y le permite al cliente responder con un mensaje
//! comfirm --> muestra una ventana con un mensaje y le permite al cliente responder con un confirmar o cancelar
//! ALERT --> Solo muestra un mensaje

//* ESTRUCTURAS CONDICIONALES

//? If 
if (5>4)
console.log('se ejecuta');
if (5<4)
console.log('no se ejecuta');

//? IF - ELSE
if (5>4){
  console.log('se ejecuta');
}else{
  console.log('no se ejecuta');
};

if (5<4){
  console.log('no se ejecuta');
}else{
  console.log('sí se ejecuta');
};

//? Switch
  switch(pais){
    case 'arg':
      console.log('Es arg');
      break;
    case 'bra':
      console.log('Es bra');
      break;
    case 'uru':
      console.log('Es uru');
      break;
  }

//* ESTRUCTURAS ITERATIVAS

//!WHILE --> Minetras la condición que le pogas sea verdadera el código se va a ejecutar hasta que la condición sea false

let x = 0;
while(x>4){
  console.log('Hola');
  x--
}

//! FOR --> Va a ejecutar un código una DETERMIADA cantidad de veces
for(let i=0; i<10; i++){
  console.log('hola');
}

//* ARRAYS --> Una lista de datos ordenada, encerradas entre corchetes, cada uno separado por comas

[
  'terminator',
  'gladiador',
  'titanic'
]
[
  'mozart',
  'bethoven',
  'vivaldi'
]

//! Para modificar el array tengo que llamar al array y ponerle entre corchetes la posición
//! Propiedad LENGHT --> nos dice la cantidad de datos que tengo en la lista
//! Métodos --> son los que se activan con paréntesis ()
/*
para agregar un dato al array --> push, unshift
para eliminar un dato del array --> pop, shift
ordenarlos --> sort
para saber si un elemento se encontraba adentro del array --> includes
para cortar el array --> slice, splice
Para ejecutar un determinado código con cada elemento del array --> forEach, map (el map te devuelve un array con la modificación que queres hacer)
para encontrar elementos o uno solo que cumpla con una determinada condición --> find (para encontrar un solo elemnto), filter ( para encontrar varios elementos que cumplan una condición)
*/

//* FUNCIÓN --> Porción de código reutilizable, recibe y devuelve datos
function suma(x, y){
  return x+y
}
const funcionParaSumar = function (x, y){
  return x+y
}
const funcionParaSumar2 = (x, y) => x+y

suma(4,5) --> 9
suma(6,7) --> 13

//* CALLBACK --> Es una función que se utiliza como argumento de otra función

//* OBJETOS --> Conjunto de características (propiedades) y funcionalidad (métodos), van encerrados en llaves, va separada de otra por coma

let movies = [
  {
  name: 'El Padrino',
  duration: 150,
  cast: ['Marlon Brando', 'Jackie Chan'],
  },
  {
  name: 'Terminator',
  duration: 120,
  cast: ['Marito Baracus', 'Piñon Fijo'],
  },
  {
  name: 'Caracortada',
  duration: 120,
  cast: ['Al Pacino', 'Gerardo Sofovich'],
  }
]

let moviesWithAl = movies.filter(movie=>movie.cast.includes('Al Pacino'));
moviesWithAl.forEach(movie=>console.log(movie.name));
