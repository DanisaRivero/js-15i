//! Capturin vs Bubbling

let padre = document.getElementById('padre');
let hijo = document.getElementById('hijo');

padre.addEventListener('click',()=>console.log('Soy el padre'), true )
hijo.addEventListener('click',()=>console.log('Soy el hijo'), true)

const corral = document.querySelector('.corral')
const pet = document.querySelector('.pet')

window.addEventListener('keydown',(event)=>{
  event.preventDefault()
  let corralCoor = corral.getBoundingClientRect();
  let petCoor = corral.getBoundingClientRect();
  console.log(corralCoor);
  console.log(petCoor);
  switch(event.key){
    case 'ArrowDown':
    console.log('voy a mover el cuadrado hacia abajo');
    break;
    case 'ArrowLeft':
    console.log('voy a mover el cuadrado hacia la izquierda');
    break;
    case 'ArrowRight':
    console.log('voy a mover el cuadrado hacia la derecha');
    break;
    case 'ArrowUp':
    console.log('voy a mover el cuadrado hacia arriba');
    break;

  }
})