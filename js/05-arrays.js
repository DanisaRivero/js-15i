let day = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Sábado', 'Domingo']
console.log(day[0]);
console.log(day[1]);
console.log(day[2]);
console.log(day[3]);
console.log(day[4]);
console.log(day[5]);
console.log(day[6]);

//! DRY
//! NO REPITAS TU PROPIO CÓDIGO

for(let i=0; i<day.length; i++){ //! la letra I es el iniciador
  console.log(day[i]);
}

day.push('Feriadol')
console.log(day);

day.pop()
console.log(day);

day.unshift('Feriadol')
console.log(day);

day.shift()
console.log(day);

console.log(day.indexOf('Lunes')); //Devuelve -1 cuando el elemento no se encuentra en el array

day.reverse()
console.log(day);

console.log(day.includes('Feriadol'));
console.log(day.includes('Martes'));

console.log('Los días de la semana son:\n- ' + day.join('\n- '));

day.sort();
console.log(day);

let equipos = ['Boca', 'River', 'Talleres de Perico'];

let dk= equipos.slice(1,2);
console.log(dk);
console.log(equipos);

equipos.splice(1,1,'Racing');

console.log(dk);
console.log(equipos);