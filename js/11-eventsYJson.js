//ToDo: CARRITO DE COMPRAS

class Product {
  constructor(nombre, codigo, precio, descripcion, imagen) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.precio = precio;
    this.descripcion = descripcion;
    this.imagen = imagen;
  }
}

let products = [
  new Product(
    "Netbook El Robles",
    "JR1",
    100000,
    "i5 - 8gb ram - gamer - 256gb ssd",
    "https://images.unsplash.com/photo-1629481317043-16b1343d77d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  ),
  new Product(
    "Disco HDD El Guille",
    "GA1",
    10000,
    "2Tb",
    "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
  ),
  new Product(
    "Monitor el diegote",
    "DF1",
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

let cart= [];

products.forEach(product => {
  //CREAR AL ELEMENTO
  const newProductCard = document.createElement("div");
  //AGREGARLE LA INFO
  newProductCard.id = product.uid;
  newProductCard.classList.add("card", "my-3");
  newProductCard.style.width = "300px";
  newProductCard.innerHTML = `
    <img src=${product.imagen}" class="card-img-top" alt= ${product.nombre}>
    <div class="card-body">
    <h5 class="card-title">${product.nombre}</h5>
    <p class="card-text">${product.descripcion}</p>
    <p><strong> Precio: $ ${product.precio}</strong></p>
    <button class="btn btn-primary" onclick="addProductToCart(${product.uid})">
      Agregar al carrito
    </button>
  </div>`;
  //BUSCAMOS AL PADRE
  const productsContainer = document.querySelector("main");
  //EL PADRE ADOPTA AL HIJO
  productsContainer.appendChild(newProductCard);
});

const addProductToCart = (domProduct) => {
  let product = products.find(product => product.uid == domProduct.id);
  cart.push(product);
  getCart();
};


const getCart = ()=> {
  products.forEach(product => {
    const newProductCard = document.createElement("div");
    //AGREGARLE LA INFO
    newProductCard.id = product.uid;
    newProductCard.classList.add("card", "my-3");
    newProductCard.style.width = "300px";
    console.log(product.uid);
    newProductCard.innerHTML = `
    <div class="card-body">
    <h5 class="card-title">${product.nombre}</h5>
    <p class="card-text">${product.descripcion}</p>
    <p><strong> Precio: $ ${product.precio}</strong></p>
    </div>`;
    //BUSCAMOS AL PADRE
    const productsContainer = document.querySelector('#cart-body');
    //EL PADRE ADOPTA AL HIJO
    productsContainer.appendChild(newProductCard);
  });
}

getCart();