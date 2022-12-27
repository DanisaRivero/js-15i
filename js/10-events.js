//! Capturin vs Bubbling

let padre = document.getElementById("padre");
let hijo = document.getElementById("hijo");

padre.addEventListener("click", () => console.log("Soy el padre"), true);
hijo.addEventListener("click", () => console.log("Soy el hijo"), true);

const corral = document.querySelector(".corral");
const pet = document.querySelector(".pet");
let x = 0;
let y = 0;

window.addEventListener("keydown", (event) => {
  event.preventDefault();
  let corralCoor = corral.getBoundingClientRect();
  let petCoor = pet.getBoundingClientRect();
  console.log(corralCoor);
  console.log(petCoor);
  switch (event.key) {
    case "ArrowDown":
      if (petCoor.bottom < corralCoor.bottom) {
        console.log("voy a mover el cuadrado hacia abajo");
        y++;
      }
      break;
    case "ArrowLeft":
      if (petCoor.left > corralCoor.left) {
        console.log("voy a mover el cuadrado hacia la izquierda");
        x--;
      }
      break;
    case "ArrowRight":
      if (petCoor.right < corralCoor.right) {
        console.log("voy a mover el cuadrado hacia la derecha");
        x++;
      }
      break;
    case "ArrowUp":
      if (petCoor.top > corralCoor.top) {
        console.log("voy a mover el cuadrado hacia arriba");
        y--;
      }
      break;
  }
  pet.style.transform = `translate(${x * 10}px,${y * 10}px)`;
  /* Al mover las teclas, estas suman o restan 10
  origen (0,0)
  --> abajo Y
  (0, 10)
  --> arriba Y
  (0, -10)
  --> derecha X
  (10, 0)
  --> izquierda X
  (-10, 0)
  */
});
