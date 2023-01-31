# Eventos
La manera "tradicional" de agregar un escuchador de eventos en la `etiqueta HTML` es el famoso 'onclick':
```` html
<button onclick="funcionDeRespuesta()"> Botón </button>
````

La otra manera de hacerlo es más avanzada y que sucede en nuestro código de javascript. Para ellos, necesitamos seleccionar el elemento al cual engancharemos el escuchador de eventos. La forma es la siguiente:

```` js
elementoSeleccionado.addEventListener('click', funcionDeRespuesta)
//Ejemplo          (Agregar escuchador de evento)
document.body.addEventListener('copy',()=>console.log('Copiaron texto'));
````
* Para eliminar el valor que viene por defecto en las páginas, cómo el scrool que se genera cuando manipulamos la página mediante las teclas con flechas "arriba, abajo, izquierda, derecha"

````  
  event.preventDefault();
````

## Capturing vs Bubbling
<hr>
addEventListener tiene un tercer argumento booleano, que especifica si se hará bubbling (false, viene por defecto) o capturing (true). Especifica el orden en el cual se van a escuchar los eventos:

* Capturing: Desde el document hacias sus childs.
* Bubbling: Desde un child hacia el document
```` js
elementoSeleccionado.addEventListener('click',funcionDeRespuesta, false)
elementoSeleccionado.addEventListener('click',funcionDeRespuesta, true)
````