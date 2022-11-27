# ARRAYS
Son una lista de datos ordenada, encerrada entre corchetes y separados por comas, los datos pueden ser de cualquier tipo.

` Ejemplo:`
```` javascript
[1, 'true', 'hola', [true, false]]
 0    2       3        4     5     //posición
````
> Propiedades y métodos:
>
```` javascript
array.push(x) --> Agrega un elemento 'x' al final del array.
array.pop() --> Elimina el elemento del final del array. (lo devuelve).
array.unShift(x) --> Agrega un elemento 'x' al inicio del array.
array.shift() --> Elimina el elemento del inicio del array. (lo devuelve).
array.indexOf(x) --> Devuelve la posición o índice del elemento 'x'.
array.reverse() --> Invierte el orden del array.
array.incluides(x) --> Devuelve true si el array contiene a 'x'.
array.join(', ') --> Devuelve todos los elementos en un string especificando el separador.
array.sort(x) --> Ordena el array alfabeticamente.
array.splice(x) --> Desde la posicón 'x', corta los elementos y los reemplaza con 'z'. (lo devuelve).
array.slice(x,y) --> Hace lo mismo que splice, pero no modifica el array original.
````
