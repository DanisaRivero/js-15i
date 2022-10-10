"Es igual a simple comilla"
'Es igual a doble comilla'
' Mesi dijo: "La comision 15i es la mejor" '

' Mesi dijo: "La soupl\'onion es la mejor" '; //? Escapapando a el comportamiento de string de la comilla

//? CONCATENACIÓN DE STRINGS

console.log('HOLA, SOY' + " DANISA");

console.log("15" + "15"); //1515

console.log("15" + 15); //1515

console.log("15" + 15 + 15); // 151515

console.log(15 + 15 + "15"); //3015

//? TEMPLATE LITERALS
let edad = 21;
let bebida = 'Cerveza Roja';
let provincia = "Jujuy";
console.log(`Danisa tiene ${edad}`); //las comillas raras y el signo de peso, pueden leer la variable sin contarla como string
console.log(`Danisa tiene ${edad}, vive en ${provincia} y le gusta la ${bebida} `);
console.log("Danisa tiene " + edad);
console.log('Danisa tiene ' + edad + ' vive en ' + provincia + " y toma " + bebida);

//? METODOS Y PROPIEDADES DE LOS STRINGS
let randomString = 'Pablito clavó un clavito';
let name = "Danisa";
let claveDeInicio = '27092015684551548475414';
let lastname = '                    Rivero               ';
let url = 'https://www.instagram.com/?=danisa-rivero/'

//* .length --> Te devuelve la cantidad de caracteres que tiene el string y es una propiedad
console.log(randomString.length);

//* .toUpperCase() --> pasaba todo el string a mayuscula
console.log(randomString.toUpperCase());

//* .toLowerCase() --> pasa todo el string a minuscula 
console.log(randomString.toLowerCase());

//* .incluides(string) --> Prueba si el string que está adentro de los parentesis existe en el string analizado. Te devuelve un booleano
console.log(randomString.includes('clavito'));

//* .charAt(string) --> Analiza el string, escoje una letra y te devuleve en que posición se escuentra con una numero y comienza en 0
console.log(name.charAt(2));

//* .substring() --> Te devuelve un string contanto la posición de cada letra hasta finalizar la palabra a encontrar
console.log(randomString.substring(0,7));
console.log(claveDeInicio.substring(0,8));

//* .trim() --> elimina espacios al principio y final del string
console.log(lastname.trim());

//* .resplace (<cadena a reemplazar>, <cadena de reemplazo>) --> Reemplaza una parte de la cadena por otra que se le especifica
console.log(randomString.substring(25).replace('-', ' ')); //NO ME SALE, SE PRACTICA DESPUES


//ToDo EJERCICIO DEL APELLIDO
const respuestaUsuario = prompt('¿Cuál es tu apellido?');
const ultimaLetra = respuestaUsuario.substring(respuestaUsuario.length - 1);
console.log(`La ultima letra de tu apellido es ${ultimaLetra}`);

//ToDo EJERCICIO DE LA PRIMERA LETRA
const nombreUsuario = prompt('Ingresa tu nombre, por favor');
const primeraLetra = nombreUsuario.charAt(0);
const primeraLetraMayus = primeraLetra.toLocaleUpperCase();
const resto = nombreUsuario.substring(1);
console.log(primeraLetraMayus + resto);