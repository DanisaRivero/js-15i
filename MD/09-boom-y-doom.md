# BOM & DOM

### * `Browser Object Model (BOM)` 
NO es un standard (los navegadores no lo respetan).
Está conformado por objetos que nos permiten acceder a todas las herramientas del navegador a través del objeto window (acceder a herramientas del navegador, info de la pestaña, pantalla memoria, entre otras).

Desde consola podemos manipular el navegador con : window.location, window.history, window.navigator y window.screen

>Funciones para manejar el tiempo: setInterval() clearInterval() setTimeout()

* setInterval(): Este método es utilizado para ejecutar repetidamente una función en un intervalo establecido. El formato de este método es:
```` javascript
window.setInterval(functionName(),tiempo);

//EJEMPLO
function reFresh(){
  location.reload(true)
}
window.setInterval(reFresh(),60000)
// Repite la función cada 1 segundo hasta que aplicamos clearInterval() que lo corta hasta cierto tiempo
````

* setTimeout(): ejecuta una función de js despues de una determiada cantidad de tiempo y se ejecuta una sola vez. El formato es:
```` js
window.setTimeout(functionName(),tiempo);
// Básicamente es un temporizador para ejecutar una función
````

### * `Document Object Model (DOM)` 
Básicamente es un objeto que va a representar todo lo que tengas en el HTML y se puede manipular con javascript.

El árbol del DOM
* los elementos HTML se convierten e nodos interrelacionados en el árbol.
* Los nodos pueden tener nodos hijos `(child)`.
* Los nodos del mismo nivel son hermanos `(sibling)`

### El objeto 'document'
Se puede usar para acceder a todos los elementos del DOM. Por lo tanto si quieres acceder a objetos de una página HTML, usamos el document.

```` js
//Lo interpreta como texto
document.body.innerText = 'Ejemplo';

//Nos devuelve con etiqueta
document.body.innerHTML = 'Ejemplo';
````

### Seleccionando elementos
* Todos los elementos HTML son `son objetos`, entonces tienen `propiedades` y `métodos`.
* El objeto 'document' tiene métodos que te permiten seleccionar el elemento HTML deseado.
* Los (3) métodos más comunes son:
```` js
document.getElementById('id');
document.querySelector('#id');
document.getElementsByClassName('.classname');
document.querySelector('.classname');
document.getElementsByTagName('tag');
````