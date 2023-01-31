const id = window.location.hash.slice(1)

const products = JSON.parse(localStorage.getItem('products'))

let product = products.find(products => products.id === id)

let productDetail = document.createElement('div')

productDetail.id = product.id;

productDetail.classList.add('row')
productDetail.innerHTML = `
<div class="col">
        <div class="col 12">
          <img src="${product.imagen}" alt="${product.nombre}">
        </div>
      </div>
    <div class="col">
      <div class="row">
        <div class="col">
          <h1 class="text-center">${product.nombre}</h1>
        </div>
      </div>
      </div>
      <div class="row">
        <h3 class="col">Precio: $${product.precio}</h3>
        <div class="col">Descripción del producto: ${product.descripcion}</div>
      </div>
      `
let productContainer = document.querySelector('#product-container')

productContainer.appendChild(productDetail);