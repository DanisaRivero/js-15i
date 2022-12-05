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

  saludar: function(){
    console.log('Hola, soy Danisa');
  }
}
//* Para acceder al nombre de la segunda mascota escribimos esto:
console.log(person.pet[1].name);

delete person.children
console.log(person);

// ToDo: Crear u objeto llamado persona que contenga los siguientes atributos.
let persona = {
  nombre: 'Bartolo',
  edad: 24,
  dni: 43269713,
  domicilio: 'Calle Belgrano 218',
  hijos: 2,
  profesión: 'Programador',

  saludar: function(){ //? this se usa para acceder al elemento del objeto
    console.log(`Hola, yo soy ${this.nombre}`);
  },
  listar: function(){
   for (property in this){
    console.log(`${property} = ${this[property]}`);
   }
  }

}
//? CRREANDO OBJETOS CON LA FUNCIÓN CONSTRUCTORAS

function Team (name, colors, people){
  this.name = name;
  this.colors = colors;
  this.people = people;
}

let sanMartin = new Team('San Martín de Tucumán', ['Rojo', 'Blanco'], 1000000);
let atletico = new Team('Atlético Tucumán', ['Celeste', 'Blanco'], 200);
console.log(sanMartin);
console.log(atletico);

//? CREANDO OBJETOS CON CLASES
class Country{
  constructor(name, people){
    this.name=name;
    this.people;
  }
}
const arg = new Country ('Argentina', 40000000);
const brasil = new Country ('Brasil', 100000000);

const cadena = new String('hola, soy una cadena')
console.log(cadena);

// ToDo Un mini repaso.
const series = [
  {
    nombre: 'Friends',
    season: 10,
    origin: 'EEUU',
    description: '6 amigos que realizan aventuras',
    showDescription: function(){
      console.log(`La serie se llama ${this.name}, un breve resumen es el siguiente: \n ${this.description}`)
    }
  },{
    nombre: 'GOT',
    season: 8,
    origin: 'Irland',
    description: 'Una lucha interminable por el trono de hierro',
    showDescription: function(){
      console.log(`La serie se llama ${this.name}, un breve resumen es el siguiente: \n ${this.description}`)
    }
  },{
    nombre: 'Breaking Bad',
    season: 5,
    origin: 'EEUU',
    description: 'Un profesor de química que descubre su lado malvado',
    showDescription: function(){
      console.log(`La serie se llama ${this.name}, un breve resumen es el siguiente: \n ${this.description}`)
    }
  }
]

series.forEach(serie=>serie.showDescription) //forEach --> sirve para mostrar algo, no cambia el array original