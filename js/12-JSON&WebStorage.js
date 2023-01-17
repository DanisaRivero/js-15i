//* JSON: JAVASCRIPT OBJECT NOTATION

let objeto ={  //Objeto que necesita ir a un backend
  propiedad: 'valor1',
  numero: 15
}
console.log(objeto);
const objetoJson = JSON.stringify(objeto) //Objeto que ha sido traducido para que pueda ir a un backend o puede ser una respuesta de un backend
console.log(objeto);
let objetoTradudido= JSON.parse(objetoJson)  //De objeto JSON a objeto común

//* WEB STORAGE: Almacenamiento del navegador. Se guarda en `clave valor`

//? localStorage : Almacenamiento permanente
//? sessionStorage: Almacenamiento volatil, que dura todo lo que dure la sesión.

//GUARDADO
localStorage.setItem('elemento1',33);
localStorage.setItem('elemento2','hola');
localStorage.setItem('elemento3',true);
localStorage.setItem('elemento3',false);
localStorage.setItem('elemento3', objetoJson);



localStorage.getItem('elemento1')