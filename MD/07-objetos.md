# Objetos

Un objeto es una colección de **propiedades** y **metodos**.

- Una **propiedad** es una asociación entre un nombre y un valor.
- Un **método** es una funcionalidad.

Los objetos van encerrados entre `llaves`, y cada propiedad es determinada con una clave separada de un valor `por dos puntos (:)`. Cada propiedad va separada una de la otra con `coma`.

`EJEMPLO:`

```javascript
let auto = {
  color: "verde",
  marca: "H Powell",
  modelo: 1997,
  valor: 1000000,
  puertaAbierta: false,
  // Clave  separador  propiedad
};

//Las funcionalidades (ahora llamadas métodos) suelen colocarse al final del objeto.

if (this.puertaAbierta === false) { ////this hace referencia a 'auto'
  console.log("Abriendo la puerta");
} else {
  console.log("Abriendo la puerta");
}
```
```javascript
// Para leer una propiedad específica de un elemento tenemos 2 maneras:

 notación por punto --> auto.color
 notación por corchetes --> auto['valor']

// De la misma manera pero con el operador de asignación puede cambiar el valor:

auto.color = 10;
auto['valor'] = 10;

//Para eliminar una propiedad
delete auto.modelo

// Acceder a los elementos:
let person = {
  nombre: 'Danisa',
  age: '21',
  location: 'Jujuy',
  hobbies: ['Jugar voley', 'Jugar rank', 'Dormir'],
  pet:[{
    name: 'Clara',
    type: 'cat'
  },{
  name: 'Homer',
  type: 'dog'
}],
  children: null,

  //Creamos función para saludar
  saludar: function(){ //? this se usa para acceder al elemento del objeto
    console.log(`Hola, yo soy ${this.nombre}`);
  }
}

// Accedemos a la segunda mascota para saber el nombre.
console.log(person.pet[1].name);
```

Así como dentro de los arrays podíamos color todo tipo de datos, dentro de los objetos `también`. Es la forma más utilizada para manejar datos.

```javascript
let products = {
  { id: 1, name: 'Leche', price: 120, categories: ['familiar', 'comida']},
  { id: 2, name: 'Arroz', price: 80, categories: ['familiar', 'comida']},
  { id: 3, name: 'Lavadora', price: 7800, categories: ['electrodomésticos']}
}
// Acceder a las categorías de la lavadora
  console.log(products[2].catergories);
```

* Podemos recorrer un objeto con for y la instrucción let x in objeto

```javascript
for (clave in objeto) {
  console.log(`${clave} = ${objeto[clave]}`);
}
```
>## Forma de crear objetos:
* `Notación lineal (la más común):`
```` javascript
let provincia ={
  nombre: 'Tucumán',
  clima:'Caluroso',
  habitantes: 1600000,
  ciudades: ['Capital', 'Concepción', 'Lules', 'Yerba Buena'],
  montañas: true
}
````
* `Función constructora:`
```` js
//El nombre de la función va en mayúscula porque nos ayudará a crear objetos a partir de este molde.

function Provincia (nombre,clima,habitantes,ciudades,montañas){
  this.nombre = nombre;
  this.clima = clima;
  this.habitantes = habitantes;
  this.ciudades = ciudades;
  this.montañas = montañas;
}
let tucuman = new Provincia ('Tucumán', 'Caluroso', 1600000, ['Capital', 'Concepción', 'Lules', 'Yerba Buena'], true);
````
* `Función constructora con clase:`
```` js
class Provincia {
  constructor (nombre,clima,habitantes,ciudades,montañas) {
  this.nombre = nombre;
  this.clima = clima;
  this.habitantes = habitantes;
  this.ciudades = ciudades;
  this.montañas = montañas;
  }
}
let tucuman = new Provincia ('Tucumán', 'Caluroso', 1600000, ['Capital', 'Concepción', 'Lules', 'Yerba Buena'], true);
````
* `El constructor Object (forma menos utilizada, pero posible):`
```` js
let tucuman = new Object(){
  tucuman.nombre = 'Tucumán';
  tucuman.clima = 'Caluroso';
  tucuman.habitantes = 1600000;
  tucuman.ciudades = ['Capital', 'Concepción', 'Lules', 'Yerba Buena'];
  tucuman.montañas = true;
}
````
Cuando se comparan dos objetos, se compara su referencia (donde está alojado), no su contenido. `con doble (==) o triple igual (===) siempre  dará false`. (EN SÍNTESIS, NO SE PUEDEN COMPARAR)