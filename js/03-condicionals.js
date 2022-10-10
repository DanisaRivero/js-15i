//* ESTRUCTURA CONDICIONAL SIMPLE
let edad = prompt('¿Cuál es tu edad?');
if(edad >= 18){
  //* código a ejecutar
console.log('Machate tranquilo');
}else{
  //* codigo a ejecutar si la condicion del if dio falso
} console.log('Vaya a tomar agua');

// ToDo  CEMENTERIO INDIO
const tieneAnteojos = prompt('¿Trajiste tus anteojos?');
if (tieneAnteojos.toLowerCase() === 'si'){
  alert('Corre wachin')
}else{
  if (tieneAnteojos.toLowerCase() === 'no')
    alert('compra tranquilo')
  else{
    alert('Por favor solo respuesta de si y no')
  }
}

// pares o impares
const numero = prompt('Ingrersa un número para ver si es par o impar'); //! prompt solo devuelve string?
if (numero%2 === 0){
  console.log('Es par');
}else{
  console.log('Es impar');
}

// ToDo2  CEMENTERIO INDIO CON CONDICIONALES MÚLTIPLES
const tieneAnteojos = prompt('¿Trajiste tus anteojos?');
if (tieneAnteojos.toLowerCase() === 'si'){
  alert('Corre wachin')
}else if (tieneAnteojos.toLowerCase() === 'no')
    alert('compra tranquilo')
  else{
    alert('Por favor solo respuesta de si y no')
  }

// ToDo PATOVICA DE FIESTA
let edad = prompt('¿Cuantos años tenes?');
if (edad >= 18){
  alert('Disfruta la fiesta')
}else if (prompt('Trajiste tutor').toLowerCase()=== 'si'){
  alert('Disfruten la fiesta')
}else{
  alert('Vaya a la casa')
}

//ToDo3 PROVINCIAS COPADAS
let provincia = prompt('Che, de dónde sos?')
if(provincia.toLowerCase()==='tucuman'){
  console.log('Que buen sanguche de milanga, gil');
}else if (provincia.toLowerCase()==='cordoba'){
  console.log('Está loco esos cuartetazos');
}else if (provincia.toLowerCase()==='jujuy'){
  console.log('Que hermosos cerros hay');
}else if (provincia.toLowerCase()==='buenos aires'){
  console.log('Porteño ura');
}else{
  alert('¿Quién te conoce gil?');
}

//* Switch similar a varios 
switch(provincia.toLowerCase()){
  case 'tucuman':
    console.log('Que buen sanguche de milanga, gil');
    break;
  case 'jujuy':
    console.log('Que hermosos cerros hay');
    break;
  case 'cordoba':
    console.log('Está loco esos cuartetazos');
    break;
  case 'buenos aires':
    console.log('Porteño ura');
    break;
  default:
    alert('¿Quién te conoce gil?');
}