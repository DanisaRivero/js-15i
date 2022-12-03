// ToDo crear un algoritmo por el cual se simule el lanzamiento de dos datos
/*
Tirar los dados --> Pulsar un botón
El dado arroja un número aleatorio
El número tiene que estar entre 1 y 6
*/
function lanzarDados (){
  let dado1 = Math.ceil(Math.random()*6);
  let dado2 = Math.ceil(Math.random()*6);
  //? La función Math.ceil() --> devuelve el entero mayor o igual más próximo a un número dado.
  alert(`DADO 1: ${dado1} - DADO2 ${dado2}`)
}
