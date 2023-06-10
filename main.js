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


const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorCarrito = document.getElementById('carrito-contenedor')

const btnVaciar = document.getElementById('vaciar-carrito')

let carrito = [];

if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"))
}

btnVaciar.addEventListener('click', ()=>{
    carrito.length = 0
    actualizarCarrito();
})

stockProductos.forEach((producto) => {
    let div = document.createElement('div');
    div.classList.add('producto');
    div.innerHTML = ` 
    <img src="${producto.imagen}" class= "card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-tittle">${producto.nombre}</h5>
    <p class="card-text">Precio:$ ${producto.precio}</p>
    <p class="card-text2">Talles: "${producto.talle}"</p>
    <button id="agregar${producto.id}" class="btn-agregar">Comprar</button>`

    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener('click', () => {
        agregarCarrito(producto.id)
    })

})

const agregarCarrito = (prodId) => {
    const existe = carrito.some (prod => prod.id === prodId)
    if (existe){
        const prod = carrito.map( prod =>{
            if (prod.id === prodId){
                prod.cantidad++;
            }
        })
    }else{
        const item = stockProductos.find((prod) => prod.id === prodId)
        carrito.push({id: item.id, cantidad: 1})
    }
    actualizarCarrito();
}

const eliminarDelCarrito = (prodId) =>{
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito();
}

const actualizarCarrito = () => {
  contenedorCarrito.innerHTML = "";

  carrito.forEach((prod) => {
    const producto = stockProductos.find((item) => item.id === prod.id);
    const div = document.createElement("div");
    div.className = "productoEnCarrito";
    div.innerHTML = `
      <p>Objeto: ${producto.nombre}</p>
      <p>Precio: ${producto.precio}</p>
      <p>Cantidad: <span id="cantidad">${producto.cantidad}</span></p>
      <button onclick="eliminarDelCarrito(${producto.id})" class="boton-eliminar"></button>
    `;
    contenedorCarrito.appendChild(div);
  });

  localStorage.setItem("carrito", JSON.stringify(carrito));
};







































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