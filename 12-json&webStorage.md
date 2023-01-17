# JSON

Javascript Object Notation (JSON) es un objeto ligero para intercambio de datos. Es un objeto hecho string.

La clave está entre las comillas dobles, igual podemos agregar arrays, objetos, números, booleanos, null y strings.
```` js
{
  "nombre": "danisa",
  "edad": 21,
  "deporte": ["voley", "caminar"],
  "mascotas": true,
};
````

* Para convertir un objeto a JSON = JSON.stringify(objeto)

* Para covertir un JSON a un objeto = JSON.parse(JSON)

Ejemplo:
```` js
// OBJETO COMÚN
let objectTest = {
  name : 'Danisa',
  value : true
};
{name: 'Danisa', value: true};

let ObjetoQueVaAUnBackend = JSON.stringify(objectTest)
{'name':"Danisa", "value": "true"};

let objetoQueVoyAUsar = JSON.parse(ObjetoQueVaAUnBackend)
{name: 'Danisa', value: true};
````

> Propidades y métodos de string
* No puedo acceder a una propiedad del objeto, por ejemplo al nombre

> Propidades y métodos del objeto
* Puedo acceder al nombre, a la edad, etc.


# Web storage (herramienta del dom)

Almacena datos en nuestro navegador. Se almacenan de manera local y se guardan en formatos `clave - valor`

> ### EXISTEN 2 TIPOS DE WEB STORAGE:
* LOCAL STORAGE: Almacenamiento "permanentemente" hasta que el usuario decida eliminarlos o la memoria caché.

* SESSION STORAGE: Los datos se almacenan de manera volatil en cada sesión. Una vez finalizada la sesión (cerrar el navegador), se eliminan.

> ¿Cómo guardamos las cosas?
* localStorage.setItem('clave','valor')
> ¿Cómo obtenemos las cosas?
* localStorage.getItem('clave')
> ¿Y CÓMO BORRAMOS LAS COSAS?
* localStorage.removeItem('clave')
> PARA BORRAR TODO:
* localStorage.clear()
