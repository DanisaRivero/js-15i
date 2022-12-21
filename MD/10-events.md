# Eventos
La manera "tradicional" de agregar un esuchcador de eventos es en la `etiqueta HTML` que es el famoso 'onclick':
```` js
<button onclick="funcionDeRespuesta()"> Botón </button>
````

La otra manera de hacerlo es más avanzada y que sucede en nuestro código de javascript. Para ellos, ecesitamos seleccionar el elemento al cual engancharemos el escuchador de eventos. La forma es la siguiente:

```` js
elementoSeleccionado.addEventListener('click', funcionDeRespuesta)
//Ejemplo          (Agregar escuchador de evento)
document.body.addEventListener('copy',()=>console.log('Copiaron texto'));
````

## Capturing vs Bubbling
<hr>
addEventListener tiee un tercer argumento booleano, que especifica si se hará bubbling (false, viene por defecto) o capturing (true). Especifica el orden en el cual se van a escuchar los eventos:

* Capturing: Desde el document hacias sus childs.
* Bubbling: Desde un child hacia el document
```` js
elementoSeleccionado.addEventListener('click',funcionDeRespuesta, false)
elementoSeleccionado.addEventListener('click',funcionDeRespuesta, true)
````