let stockProductos = [
    {
        id: 1,
        nombre: "Oversize I",
        talle: "S, M, L, XL, XXL",
        precio: 8500,
        imagen: "./imagenes/remera1.jpg",
    },
    {
        id: 2,
        nombre: "Oversize II",
        talle: "S, M, L, XL, XXL",
        precio: 8000,
        imagen: "./imagenes/remera2.jpg",
    },
    {
        id: 3,
        nombre: "Oversize III",
        talle: "S, M, L, XL, XXL",
        precio: 8799,
        imagen: "./imagenes/remera3.jpg",
    },
    {
        id: 4,
        nombre: "Ajustada I",
        talle: "S, M, L, XL, XXL",
        precio: 7000,
        imagen: "./imagenes/ajustada1.jpg",
    },
    {
        id: 5,
        nombre: "Ajustada II",
        talle: "S, M, L, XL, XXL",
        precio: 7000,
        imagen: "./imagenes/ajustada2.jpg",
    },
    {
        id: 6,
        nombre: "Ajustada III",
        talle: "S, M, L, XL, XXL",
        precio: 7000,
        imagen: "./imagenes/ajustada3.jpg",
    },
    {
        id: 7,
        nombre: "Chomba I",
        talle: "S, M, L, XL, XXL",
        precio: 12100,
        imagen: "./imagenes/chomba1.jpg",
    },
    {
        id: 8,
        nombre: "Chomba II",
        talle: "S, M, L, XL, XXL",
        precio: 12500,
        imagen: "./imagenes/chomba2.jpg",
    },
    {
        id: 9,
        nombre: "Chomba III",
        talle: "S, M, L, XL, XXL",
        precio: 12900,
        imagen: "./imagenes/chomba3.jpg",
    },
    {
        id: 10,
        nombre: "Remeron I",
        talle: "S, M, L, XL, XXL",
        precio: 11000,
        imagen: "./imagenes/remeron4.jpg",
    },
    {
        id: 11,
        nombre: "Remeron II",
        talle: "S, M, L, XL, XXL",
        precio: 11100,
        imagen: "./imagenes/remeron5.jpg",
    },
    {
        id: 12,
        nombre: "Remeron III",
        talle: "S, M, L, XL, XXL",
        precio: 11200,
        imagen: "./imagenes/remeron6.jpg",
    }
];

let carrito = [];

if (localStorage.getItem("carrito de compras")){
    carrito = JSON.parse(localStorage.getItem("carrito de compras"))
    dibujarCarrito();
}

const contenedor = document.getElementById("container");
stockProductos.forEach((productos, indice) =>{ 
    let card = document.createElement("div");
    card.classList.add("card", "col-sm-12", "col-lg-3");
    card.innerHTML = `<img src="${productos.imagen}" class="card-img-top" alt="remera">
    <div class="card-body">
        <h5 class="card-title">${productos.nombre}</h5>
        <p class="card-text">${productos.precio}</p>
        <a href="#cart" class="btn btn-info" onClick="agregarAlCarrito(${indice})">Añadir al carrito</a>
    </div>
        `;
    contenedor.appendChild(card);
})
const agregarAlCarrito = () =>{
    const productoClick = carrito.findIndex((elemento)=>{
        return elemento.id === stockProductos[indice].id;
    })
    if (productoClick === -1){
        const productoAgregado = stockProductos[indice].id;
        productoAgregado.cantidad = 1
        carrito.push(productoAgregado);
        actualizarStorage(carrito)
        dibujarCarrito(indice);
    } else {
        carrito[productoClick].cantidad += 1;
        actualizarStorage(carrito)
        dibujarCarrito(indice);
    }
}

const actualizarStorage = (carrito) =>{
    localStorage.setItem("carrito de compras", JSON.stringify(carrito))
}

const eliminarProducto = (indice) => {
    carrito.splice(indice, 1)
    actualizarStorage()
}













/* const funcCarrito = () => {
  const contCarrito = document.getElementById('contenedor-carrito');
  if (contCarrito) {
    contCarrito.innerHTML = "";
    carrito.forEach((producto) => {
      const div = document.createElement('div');
      div.className = "prodAlCarrito";
      div.innerHTML = `
        <div>
          <img src="${producto.imagen}" class="card-img-top" alt="...">
          <h5>Elección: ${producto.nombre}</h5>
          <p>Precio: ${producto.precio}</p>
          <button data-id="${producto.id}" class="btn-eliminar">Eliminar</button>
        </div>
        `;
      contCarrito.appendChild(div);
    });
  }
}

const contenedorProductos = document.getElementById('contenedor-productos');
stockProductos.forEach((producto, indice) => {
  let card = document.createElement('div');
  card.classList.add("card", "col-sm-12", "col-lg-3");
  card.innerHTML = ` 
    <img src="${producto.imagen}" class= "card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-tittle">${producto.nombre}</h5>
      <p class="card-text">Precio:$ ${producto.precio}</p>
      <p class="card-text2">Talles: "${producto.talle}"</p>
      <button id="agregarAlCarrito onClick="AgregarAlCarrito(${indice})" class="btn-agregar">Comprar</button>
    </div>
  `;
  contenedorProductos.appendChild(card);
});

if (localStorage.getItem("carrito")) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
  funcCarrito(indice);
}

const AgregarAlCarrito = (indice) => {
  const prodClick = carrito.findIndex((elemento) => {
    return elemento.id === stockProductos[indice].id;
  });
  if (prodClick === -1) {
    const agregarProd = stockProductos[indice];
    agregarProd.cantidad = 1;
    carrito.push(agregarProd);
    actualizarCarrito(carrito);
    funcCarrito(indice);
  } else {
    carrito[prodClick].cantidad += 1;
    actualizarCarrito(carrito);
    funcCarrito(indice);
  }
}

const actualizarCarrito = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

const eliminarProdCarrito = (event) => {
  const productId = event.target.dataset.id;
  const prodIndex = carrito.findIndex((producto) => {
    return producto.id === productId;
  });
  if (prodIndex !== -1) {
    carrito.splice(prodIndex, 1);
    actualizarCarrito(indice);
    funcCarrito(indice);
  }
} */




/* let carrito = [];

const contenedorCarrito = () => {
    const contenedorCarrito = document.getElementById('contenedor-carrito');
    if (contenedorCarrito) {
      contenedorCarrito.innerHTML = "";
      carrito.forEach((producto, indice) => {
        const div = document.createElement('div');
        div.className = "prodAlCarrito";
        div.innerHTML = `
          <div>
            <img src="${producto.imagen}" class="card-img-top" alt="...">
            <h5>Elección: ${producto.nombre}</h5>
            <p>Precio: ${producto.precio}</p>
            <button id="eliminar-${indice}" class="btn-eliminar">Eliminar</button>
          </div>
          `;
        contenedorCarrito.appendChild(div);
    })
    }
}

const contenedorProductos = document.getElementById('contenedor-productos')
stockProductos.forEach((producto, indice) => {
    let card = document.createElement('div');
    card.classList.add("card", "col-sm-12", "col-lg-3");
    card.innerHTML = ` 
    <img src="${producto.imagen}" class= "card-img-top" alt="...">
    <div class="card-body">
     <h5 class="card-tittle">${producto.nombre}</h5>
     <p class="card-text">Precio:$ ${producto.precio}</p>
     <p class="card-text2">Talles: "${producto.talle}"</p>
     <button id="agregar${(indice)}" class="btn-agregar">Comprar</button>
    </div>
    `;
    contenedorProductos.appendChild(card)
});

if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"))
    contenedorCarrito();
}


const AgregarAlCarrito = (indice) => {
    const prodClick = carrito.findIndex((elemento)=>{
        return elemento.id === stockProductos[indice].id
    })
    if(prodClick === -1){
        const agregarProd = stockProductos[indice];
        agregarProd.cantidad = 1
        carrito.push(agregarProd);
        actualizarCarrito();
        contenedorCarrito();
    } else{
        carrito[prodClick].cantidad += 1;
        actualizarCarrito();
        contenedorCarrito();
    }
}

const actualizarCarrito = (carrito) => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    
}

const eliminarProdCarrito = (indice) => {
    carrito.splice(indice, 1)
    actualizarCarrito();
    contenedorCarrito();
} 

 */

































/*
function saludar(){
    let usuario;
    usuario = prompt("Ingresar su nombre");
    alert("Bienvenido/a, " + usuario + " a la tienda de remeras");
}

class Producto {
    constructor (estilo, precio, talle){
        this.estilo = estilo;
        this.precio = Number(precio);
        this.talle = talle;
    }
}

let remeras = [
    {estilo: "oversize", precio: "8000" },
    {estilo: "ajustada", precio: "7000" },
    {estilo: "remeron", precio: "11000"},
    {estilo: "chomba", precio: "12000"},
]

let tallesPermitidos = ["S", "M", "L", "XL", "XXL"];

function agregarProducto(){
    let estilo = prompt("Ingrese el estilo que desee: oversize , ajustada , remeron o chomba")
    let talle = prompt("Ingrese su talle: S, M, L, XL, XXL");
    if(!tallesPermitidos.includes(talle)){
        alert("El talle elegido no se encuentra disponible.");
        return;
    }
    let productoEncontrado = remeras.find(producto => producto.estilo === estilo);

    if(productoEncontrado){
        const nuevaRemera = new Producto (estilo, productoEncontrado.precio, talle);
        arrayCarrito.push(nuevaRemera);
        alert("Su producto fue añadido al carrito");
    } else{
        alert("Su producto elegido no se encuentra disponible");
    }

}

function verCarrito(){
    arrayCarrito.forEach((producto)=>{
    alert (`eligió el estilo de remera ${producto.estilo}, por un precio de ${producto.precio}, y el talle ${producto.talle} `)
    });
}

function VerCatalogo() {
    remeras.forEach((producto) => {
        alert(`Producto: ${producto.estilo} - Precio: ${producto.precio}`);
    });
}

function finalizarCompra(){
    let total = arrayCarrito.reduce((acc, pr) => acc + pr.precio, 0);
    alert ("El total a pagar es de: " + total);
    let decision = prompt("Desea confirmar la compra? \n 1: Si \n 2:No")
    if (decision === "2"){
        let opcion = prompt("Elija una opción: \n 1: Ver catalogo  \n 2: Comprar remera \n 3: Ver su carrito \n 4: Finalizar la compra \n 5: Salir")
    } else if (decision === "1"){
        alert ("Gracias por su compra.");
    } else {
        alert ("Opción invalida");
    }
}
let arrayCarrito = [];
saludar();
let opcion = prompt("Elija una opción: \n 1: Ver catalogo  \n 2: Comprar remera \n 3: Ver su carrito \n 4: Finalizar la compra \n 5: Salir")

while (opcion !== "5"){
     if (opcion === "1"){
        VerCatalogo();
    }
    if (opcion === "2"){
        agregarProducto(arrayCarrito);
    }
    if (opcion === "3"){
        verCarrito();
    }
    if (opcion === "4"){
        finalizarCompra();
    }
    else if (opcion > 5){
        alert("Opción no valida");
    }
    opcion = prompt ("Ingrese una opción \n 1: Ver catalogo  \n 2: Comprar remera \n 3: Ver su carrito \n 4: Finalizar la compra \n 5: Salir");
}

alert ("Gracias por su compra " + usuario)
*/