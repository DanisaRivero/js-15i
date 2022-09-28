//comentario de una linea

/* 
?un
*comentario
!multilinea
*/

// clave que me dio facebook

const claveDeFacebook1 = 'kajdhjahfsJAJAJAJAJh.jadhjafjsfh20' //LO GUARDO UNA VEZ Y NO LO MODIFICO MAS (BUENA PRACTICA)
let claveDeFacebook2 = 'kajdhjahfsJAJAJAJAJh.jadhjafjsfh20' //SE LO CONOCE EN POCOS LUGARES (BUENA PRACTICA)
var claveDeFacebook3 = 'kajdhjahfsJAJAJAJAJh.jadhjafjsfh20' //SE CONOCE EN MUCHOS LUGARES

//claveDeFacebook1 = 'asdasdasdasd.asdasdasd'

if(true/*condition*/){
  var test = 'hola'
  let test2 = 'hello'
  //codigo
  console.log(test2);
}
console.log(test);

//!  TIPOS DE DATOS

let string = 'texto123._* |';
console.log(string);

let number = 3;
console.log(number);

let array = ['dani', 14, [] ];
console.log(array)

let bolean = true
let bolean2 = false
console.log(bolean, bolean2);

let objectCar = {
  color: 'blue',
  model: 2007,
  local: false,
  brand: {
    name: 'Renault'
  },
  andar(){

  },
  chocar(){

  }
}
console.log(objectCar)
let vacio = null;

let indefinido;
console.log(vacio)
console.log(indefinido)


//? OPERADORES ARITMETICOS 
console.log(15+15); //30
console.log(15-15); //0
console.log(15*15); //225
console.log(15/15); //1
console.log(15%15); //0


//?OPERADORES UNITARIOS
let numero = 5;
numero++;
console.log(numero); //6
numero--;
console.log(numero); //5
console.log(!numero); //false 


//?OPERADORES RELACIONALES (el valor es tipo booleano)
console.log(15 > 20, '15 es mayor que 20?');
console.log(15 > 10, '15 es mayor que 10?');

console.log(15 < 20, '15 es menor que 20?');
console.log(15 < 10, '15 es menor que 10?');
console.log(15 < 15, "15 es menor que 15?");

console.log(15==15, '15 es igual a 15?'); //true
console.log(15===15, '15 es igual a 15?'); //true
console.log(15=="15"); //Compara contenido --> true
console.log(15==="15"); //Compara contenido y tipo de dato --> false

console.log(15!=15, '15 es distinto que 15'); //false
console.log(15!=='15', '15 es estrictamente distinto que 15'); //true

//?OPERADOR CONDICIONAL (ternarios) 
20==='20'? console.log('condicion verdadera') : console.log('condicion falsa');



//?OPERADORES LÓGICOS
//* AND

console.log(20>10 && 25>10); // --> true
//true    true
console.log(20>10 && 25<10); //false
//true    false
console.log(20>10 && 25<10 && 30>10 && 20==20 && 10<12); //--> false
//true   false    true     true      true

/* 
*OR (se conforma con un solo verdadero para tener el valor "true",
*si todas son falsas el valor es "false")
*/
console.log(20>10 || 25>10); // --> true
console.log(20>10 || 25<20); //--> true
console.log(20>10 || 25<20 || 20<12 || 25<1 || 1<2); //--> true
//true   false    false    false   false
console.log(20>22 || 25<20 || 20<12 || 25<1 || 1<2); //--> false
//false  false    false    false   false


//ToDo EJERCICIO 1
const number1 = 56;
const number2 = 47;
let number3;

let suma = number1+number2;
console.log(number1 + number2);

let resta = number1-number2;
console.log(number1 - number2);

let producto = number1*number2;
console.log(producto);

console.log(number1%2==0? 'es par' : 'es impar' );
number2%2==0? console.log('es impar') : console.log('es par')

//ToDo Ejercicio 2
number3 = 5;
suma = number3 + suma;
number3 = number3 * producto;
resta = resta - number3;
console.log(suma, number3, resta);

//HERRAMIENTAS DE JS EN EL NAVEGADOR
alert('HOLA SOY UNA ALERTA');
let respuesta = prompt('¿Cuantos años tenes?');
alert(respuesta);
document.write('Hola estoy escribiedo en la página');