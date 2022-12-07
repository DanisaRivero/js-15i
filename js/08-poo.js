class Song {
  constructor(name, duration, album, writer) {
    this.name = name;
    this.duration = duration;
    this.album = album;
    this.writer = writer;
  }
  showSong() {
    console.log(`La cación se llama ${this.name}`);
  }
}

let songs = [
  new Song("Torero", 180, "Chayanne", "Chayanne"),
  new Song("Jumpsuit", 180, "Jumpsuit", "Twenty One Pilots"),
  new Song("Whetever It Takes", 200, "Evolve", "Imagine Dragons"),
];

//* HERENCIA
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  saludar() {
    console.log("Hola a todos, mi nombre es " + this.name);
  }
}

class Student extends Person {
  constructor(name, age, group) {
    super(name, age);
    this.group = group;
  }
}

const danisa = new Student("Danisa", 21, "15i");

//* SETTERS y GETTERS

class SuperHero extends Person {
  constructor(name, power, age) {
    super(name, power, age);
    this.power = power;
  }

  get getPower() {
    return [this.power, this.age];
  }
  set setPower(power) {
    this.power = power;
  }
}

const iroman = new SuperHero("Tony Stark", "Traje Inteligente", 40);


//ToDo CUENTA BANCARIA

class Cuenta {
  constructor(titular) {
    this.id = Math.floor(Math.random() * 1000000);
    this.titular = titular;
    this.saldo = 0;
  }

  ingresar(monto) {
    if (monto >= 0) {
      this.saldo = this.saldo + monto;
      console.log("Su nuevo saldo es " + this.saldo);
    } else {
      console.log("Ingresa un monto válido");
    }
  }

  extraer(monto) {
    //  if(monto >= 0){
    //  if(monto <=this.saldo){
    //    this.saldo = saldo - monto
    //    console.log('Su nuevo saldo es ' + this.saldo);
    //  }else{
    //    console.log('Saldo insuficiente');
    //  }
    // }else{
    //    console.log('Ingresa un monto válido');
    //  }
    //}
    if (monto <= 0) {
      console.log("Ingresa un valor válido");
    } else if (this.saldo >= monto) {
      this.saldo = this.saldo - monto;
      console.log("Su nuevo saldo es " + this.saldo);
    } else {
      console.log("Saldo insuficiente");
    }
  }

  informar() {
    console.log(
      `La cuenta nro ${this.id}, a nombre de ${this.titular}, tiene un saldo disponible de ${this.saldo}`
    );
  }
}
const cuentaDanisa = new Cuenta("Danisa");


//ToDo Lista de libros

class ListaLibros {
  constructor(dueño) {
    this.dueño = dueño;
    this.libros = [];
    this.librosYaLeidos = [];
    this.librosNoLeidos = [];
    this.libroActual = null;
    this.ultimoLibro = null;
    this.siguienteLibro = null;
  }
  agregarLibro(libro) {
    this.libros.push(libro);
    if (libro.leido === true) {
      this.librosYaLeidos.push(libro);
    } else {
      this.librosNoLeidos.push(libro);
    }
  }
  empezarLibro(nombreLibro){
    const libroEncontrado = this.libros.find(libro=>libro.titulo==nombreLibro);
    if(libroEncontrado){
      this.libroActual = libroEncontrado;
    }else{
      console.log('No tenés ese libro');
    }
  }
  finalizarLibro(){
    this.ultimoLibro = this.libroActual;
    if(this.libroActual.leido===false){
      this.librosYaLeidos.push(this.libroActual);
      this.librosNoLeidos = this.librosNoLeidos.filter(libro0=> libro.titulo != this.libroActual.titulo)
    }
    this.libroActual = null;
  }
}


class Libro {
  constructor(titulo, genero, autor, leido) {
    this.titulo = titulo;
    this.genero = genero;
    this.autor = autor;
    this.leido = leido;
  }
}

const harryPoter = new Libro("Harry Potter", "Fantasía", "J.K. Rowling", false);
const elPrincipito = new Libro("El Principito", "Aventura", "St Exupery", true);
const amorColera = new Libro(
  "El amor en los tiempos del cólera",
  "Novela",
  "Gabriel García",
  false
);
const muerteDentista = new Libro(
  "La muerte visita al dentista",
  "Suspenso",
  "Agatha Christie",
  true
);

const listaDanisa = new ListaLibros('Danisa');