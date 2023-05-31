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
