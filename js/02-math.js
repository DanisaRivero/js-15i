//? REDONDEDO Y TRUNCAMIENTO
let numero = 35.75;

//Redondeo --> 36
console.log('numero redondeado', Math.round(numero));
//Truncamiento --> 35
console.log('numero truncado', Math.floor(numero));

//? ENCONTRAR MÁXIMOS Y MÍNIMOS

let maximo = Math.max(1,15,2,35,8,112,4,9);
console.log('Numero mayor', maximo);
let minimo = Math.min(1,15,2,35,8,112,4,9);
console.log('Numero menor', minimo);

//? POTENCIAS Y RAÍCES
console.log('3 al cuadrado es:', Math.pow(3,2));
console.log('3 al cubo es:', Math.pow(3,3));

console.log('La raiz cuadrada de 9 es: ', Math.sqrt(9));
console.log('La raiz cubica de 27 es: ', Math.cbrt(27));

//? OBTENER UN NÚMERO ALEATORIO que está entre 0 y 1
let aleatorio = Math.random();
console.log(aleatorio);

//*Obtener un número aleatorio que esté entre 0 y 10 --> se multiplica * 10 
let aleatorio2 = Math.round(Math.random() * 10);
console.log(aleatorio2);

//? PARSEAR CADENAS
let string = '15';
console.log(string);
 
console.log(Number(string)); //solo sirve con numeros y no con letras incluidas
console.log(parseInt(string)); //lo convierte en numero entero
console.log(parseFloat(string)); //lo convierte a numero ya sea entero o decimales

//? LIMITAR LA CANTIDAD DE DECIMALES
let numero2 = Math.random();
console.log(numero2.toFixed(2)); // toFixed = Te convierte el número a un string