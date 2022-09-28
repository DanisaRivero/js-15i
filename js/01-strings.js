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

console.log(randomString.length); //* propiedad
console.log(randomString.toUpperCase()); //* métodos
console.log(randomString.toLowerCase());
console.log(randomString.includes('clavito'));
console.log(name.charAt(2));
console.log(randomString.substring(0,7));
console.log(claveDeInicio.substring(0,8));
console.log(lastname.trim());
console.log(randomString.substring(25).replace('-', ' ')); //NO ME SALE, SE PRACTICA DESPUES
