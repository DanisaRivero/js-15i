//ToDo: CARRITO DE COMPRAS

class Product {
  constructor(nombre, uid, precio, descripcion, imagen) {
    this.nombre = nombre;
    this.uid = uid;
    this.precio = precio;
    this.descripcion = descripcion;
    this.imagen = imagen;
  }
}

let products = [
  new Product(
    "Netbook El Robles",
    "JR",
    100000,
    "i5 - 8gb ram - gamer - 256gb ssd",
    "https://images.unsplash.com/photo-1629481317043-16b1343d77d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  ),
  new Product(
    "Disco HDD El Guille",
    "GA",
    10000,
    "2Tb",
    "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
  ),
  new Product(
    "Monitor el diegote",
    "DF",
    90000,
    "IPS 27' UHD4K",
    "https://images.unsplash.com/photo-1527443060795-0402a18106c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
  ),
  new Product(
    "WebCam Valentinius",
    "MF",
    25000,
    "1000 Full HD",
    "https://images.unsplash.com/photo-1623949556303-b0d17d198863?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  ),
  new Product(
    "Celular Gabius",
    "GR",
    50000,
    "Full HD - 6gb ram - 256gb",
    "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
  ),
];

//let cart;
//let favs;
//const setFromLS = (key,variable)=>{
//  const elementFromLS = JSON.parse(localStorage.getItem(key));
//  if (elementFromLS) {
//    variable = JSON.parse(localStorage.getItem(key));
//  } else {
//    variable = [];
//  }
//}
//setFromLS('cart',cart)
//setFromLS('favs', favs)

let cart;
let favs;
const favsFromLS = JSON.parse(localStorage.getItem("favs"));
const cartFromLS = JSON.parse(localStorage.getItem("cart"));
if (favsFromLS) {
  favs = JSON.parse(localStorage.getItem("favs"));
} else {
  favs = [];
}
if (cartFromLS) {
  cart = JSON.parse(localStorage.getItem("cart"));
} else {
  cart = [];
}

//setFromLS('cart',cart)
//setFromLS('favs', favs)

products.forEach((product) => {
  //CREAR AL ELEMENTO
  const newProductCard = document.createElement("div"); // <div> </div>
  //AGREGARLE LA INFO
  newProductCard.id = product.uid; // <div id="JR"> </div>
  newProductCard.classList.add("card", "my-3"); // <div id="JR" class="card my-3"> </div>
  newProductCard.style.width = "300px"; // <div id="JR" class="card my-3" style="width:300px;"> </div>
  newProductCard.innerHTML = `
    <img src=${product.imagen}" class="card-img-top img-fluid" alt= ${product.nombre}>
    <div class="card-body">
    <h5 class="card-title">${product.nombre}</h5>
    <p class="card-text">${product.descripcion}</p>
    <p><strong> Precio: $ ${product.precio}</strong></p>
    <button class="btn btn-primary" onclick="addProductToCart(${product.uid})">
      Agregar al carrito
    </button>
    <button class="btn btn-primary" onclick="addProductToCart(${product.uid})">
      🤍
    </button>
  </div>`;
  //BUSCAMOS AL PADRE
  const productsContainer = document.querySelector("main");
  //EL PADRE ADOPTA AL HIJO
  productsContainer.appendChild(newProductCard);
});

//? AGREGAR PRODUCTOS AL CARRITO
const addProductToCart = (domProduct) => {
  let product = products.find((product) => product.uid == domProduct.id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  const newProductCard = document.createElement("div");
  //AGREGARLE LA INFO
  newProductCard.id = product.uid + "-cart";
  newProductCard.classList.add("card", "my-3");
  newProductCard.style.width = "300px";
  newProductCard.innerHTML = `
    <div class="card-body">
    <h5 class="card-title">${product.nombre}</h5>
    <p class="card-text">${product.descripcion}</p>
    <p><strong> Precio: $ ${product.precio}</strong></p>
    <button class="btn btn-warning" onclick="removeProduct('${product.uid}-cart')">❌</button>
    </div>`;
  //BUSCAMOS AL PADRE
  const productsContainer = document.querySelector("#cart-body");
  //EL PADRE ADOPTA AL HIJO
  productsContainer.appendChild(newProductCard);
};

const getCart = () => {
  cart.forEach((product) => {
    //CREAR AL ELEMENTO
    const newProductCard = document.createElement("div");
    //AGREGARLE LA INFO
    newProductCard.id = product.uid + "-cart";
    newProductCard.classList.add("card", "my-3");
    newProductCard.style.width = "300px";
    console.log(product.uid);
    newProductCard.innerHTML = `
    <div class="card-body">
    <h5 class="card-title">${product.nombre}</h5>
    <p class="card-text">${product.descripcion}</p>
    <p><strong> Precio: $ ${product.precio}</strong></p>
    <button class="btn btn-warning" onclick="removeProduct('${product.uid}-cart')">❌</button>
    </div>`;
    //BUSCAMOS AL PADRE
    const productsContainer = document.querySelector("#cart-body");
    //EL PADRE ADOPTA AL HIJO
    productsContainer.appendChild(newProductCard);
  });
};

//* AGREGAR A FAVORITOS
const addProductToFavs = (domProduct) => {
  let productToSave = products.find((product) => product.uid === domProduct.id);
  favs.push(productToSave);
  localStorage.setItem("favs", JSON.stringify(favs));
};

const removeProduct = (id) => {
  let productToRemove = products.find(
    (product => product.uid === id.slice(0, 2)
  ));
  cart = cart.filter((product) => product.id != productToRemove.uid);
  localStorage.setItem("cart", JSON.stringify(cart));
  document.getElementById(id).remove()
};


getCart();

// OPTIONAL CHAINING

//! array.filter() // que pasa si el array no existe o no es un elemnto array? SE ROMPE
//* array?.filter() // la solución es poner el signo de pregunta y de esa manera solo si es u elemento array va a hacer el filter
