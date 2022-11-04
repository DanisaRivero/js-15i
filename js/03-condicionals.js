//* ESTRUCTURA CONDICIONAL SIMPLE
//let edad = prompt('¿Cuál es tu edad?');
//if(edad >= 18){
  //* código a ejecutar
//console.log('Machate tranquilo');
//}else{
  //* codigo a ejecutar si la condicion del if dio falso
//} console.log('Vaya a tomar agua');

// ToDo  CEMENTERIO INDIO
//const tieneAnteojos = prompt('¿Trajiste tus anteojos?');
//if (tieneAnteojos.toLowerCase() === 'si'){
//  alert('Corre wachin')
//}else{
//  if (tieneAnteojos.toLowerCase() === 'no')
//    alert('compra tranquilo')
//  else{
//    alert('Por favor solo respuesta de si y no')
//  }
//}

// pares o impares
//const numero = prompt('Ingrersa un número para ver si es par o impar'); //! prompt solo devuelve string?
//if (numero%2 === 0){
//  console.log('Es par');
//}else{
//  console.log('Es impar');
//}

// ToDo2  CEMENTERIO INDIO CON CONDICIONALES MÚLTIPLES
//const tieneAnteojos = prompt('¿Trajiste tus anteojos?');
//if (tieneAnteojos.toLowerCase() === 'si'){
//  alert('Corre wachin')
//}else if (tieneAnteojos.toLowerCase() === 'no')
//    alert('compra tranquilo')
//  else{
//    alert('Por favor solo respuesta de si y no')
//  }

// ToDo PATOVICA DE FIESTA
//let edad = prompt('¿Cuantos años tenes?');
//if (edad >= 18){
//  alert('Disfruta la fiesta')
//}else if (prompt('Trajiste tutor').toLowerCase()=== 'si'){
//  alert('Disfruten la fiesta')
//}else{
//  alert('Vaya a la casa')
//}

//ToDo3 PROVINCIAS COPADAS
//let provincia = prompt('Che, de dónde sos?')
//if(provincia.toLowerCase()==='tucuman'){
//  console.log('Que buen sanguche de milanga, gil');
//}else if (provincia.toLowerCase()==='cordoba'){
//  console.log('Está loco esos cuartetazos');
//}else if (provincia.toLowerCase()==='jujuy'){
//  console.log('Que hermosos cerros hay');
//}else if (provincia.toLowerCase()==='buenos aires'){
//  console.log('Porteño ura');
//}else{
//  alert('¿Quién te conoce gil?');
//}

//* Switch similar a varios if/else
//switch(provincia.toLowerCase()){
//  case 'tucuman':
//    console.log('Que buen sanguche de milanga, gil');
//    break;
//  case 'jujuy':
//    console.log('Que hermosos cerros hay');
//    break;
//  case 'cordoba':
//    console.log('Está loco esos cuartetazos');
//    break;
//  case 'buenos aires':
//    console.log('Porteño ura');
//    break;
//  default:
//    alert('¿Quién te conoce gil?');
//}

//! EJERCICIO DE REPASO DE CONDICIONALES

//const num1 = Number(prompt('Ingrese un número'));
//const num2 = Number(prompt('Ingrese un segundo número'));
//
//if(num1 > num2){
//  console.log(num1 + num2, 'suma');
//}else if(num1<num2){
//  console.log(num2-num1, 'resta');
//}else{
//  console.log(num1*num2, 'multiplicacion')
//}

//! EJERCICIO DE REPASO DE CONDICIONALES

//const age = prompt('¿Cuantos años tenés?')
//
//switch(true){ //? Al no darnos la respuesta esperada, hay que buscar un verdadero en el código, así colocamos true en vez de la variable
//  case age>0 && age<=10:
//    console.log('La granja de zenón');
//    break;
//  case age>10 && age<=20:
//    console.log('Tini, La triple T');
//    break;
//  case age>20 && age<=30:
//    console.log('La konga, llamame');
//    break;
//  case age>30 && age<=40:
//    console.log('Amar azul, yo tomo licor');
//    break;
//  case age>40 && age<=50:
//    console.log('Ricardo Montaner, ');
//    break;
//  case age>50 && age<=60:
//    console.log('Luis Miguel, si no supiste amar');
//    break;
//  default:
//    console.log('Amargo');
//    break;
//  }
  //! EJERCICIO DE REPASO DE CONDICIONALES
  const day = new Date().getDay(); //? Objeto date es buscar el día actual en la consola

  switch(day){
    case 1:
      console.log('Hoy es lunes');
      break;
    case 2:
      console.log('Hoy es martes');
      break;
    case 3:
      console.log('Hoy es miercoles');
      break;
    case 4:
      console.log('Hoy es jueves');
      break;
    case 5:
      console.log('Hoy es viernes');
      break;
    case 6:
      console.log('Hoy es sabado');
      break;
    case 7:
      console.log('Hoy es domingo');
  }