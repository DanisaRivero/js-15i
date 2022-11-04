/*
* WHILE: MIENTRAS LA CONDICIÓN SE CUMPLA, SE EJECUTA EL CÓDIGO DE ADENTRO
let numero = 15;

while(numero==15){
  console.log('Estoy dentro del while'); //! esta función así sola hace que se cree un bucle y me haga aka la laptop
  numero++; //! Al usar este operador salimos del while
}
console.log('Salí del while);
*/
// ToDo EJERCICIO

//let numero = prompt('Ingresa un numero');
//let contador = 0;
//
//while (contador<numero) {
//  console.log(contador);
//  contador++;
//}

//const numero = prompt('Ingresa un número');
//const contador = numero;
//while(contador>=0){
//  console.log(numero);
//  numero--;
//}


// ToDo EJERCICIO 2
//let risposta = prompt ('¿Por qué la luna es mayor que el sol?');
//let intentos =1;
//let surrender= false;
//
//while (risposta.toLowerCase()!='porque sale de noche' && surrender === false) { //!Se lee: Mientras la respuesta sea incorrecta a la respuesta correcta y ademas no se haya rendido
//  risposta = prompt('Intenta nuevamente');
//  intentos++;
//  if(intentos===3){
//    alert('pensá en batman');
//  }
//  if(intentos===5){
//    surrender= true;
//  }
//}
//
//if(surrender!=true){
//  alert('Llegó el risas');
//}else{
//  alert('Amargo')
//}

//* FOR:
//let numero = prompt('Ingresa un número');
//
//for(let contador = 0; contador < numero; contador++){
//  console.log(contador);
//}

//ToDo Machete de tablas

let number = prompt('¿Qué tablas querés saber?')

for(let contador = 0; contador <= 10; contador++){
  console.log(`${number}x${contador}=${number*contador}`);
}