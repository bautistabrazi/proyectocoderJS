let stockProductos = [
    {
        id: 1,
        nombre: "Oversize I",
        talle: "S, M, L, XL, XXL",
        precio: 8500,
        precioEnPantalla: "$8.500",
        imagen: "./imagenes/remera1.jpg",
    },
    {
        id: 2,
        nombre: "Oversize II",
        talle: "S, M, L, XL, XXL",
        precio: 8000,
        precioEnPantalla: "$8.000",
        imagen: "./imagenes/remera2.jpg",
    },
    {
        id: 3,
        nombre: "Oversize III",
        talle: "S, M, L, XL, XXL",
        precio: 8799,
        precioEnPantalla: "$8.799",
        imagen: "./imagenes/remera3.jpg",
    },
    {
        id: 4,
        nombre: "Ajustada I",
        talle: "S, M, L, XL, XXL",
        precio: 7000,
        precioEnPantalla: "$7.000",
        imagen: "./imagenes/ajustada1.jpg",
    },
    {
        id: 5,
        nombre: "Ajustada II",
        talle: "S, M, L, XL, XXL",
        precio: 7000,
        precioEnPantalla: "$7.000",
        imagen: "./imagenes/ajustada2.jpg",
    },
    {
        id: 6,
        nombre: "Ajustada III",
        talle: "S, M, L, XL, XXL",
        precio: 7000,
        precioEnPantalla: "$7.000",
        imagen: "./imagenes/ajustada3.jpg",
    },
    {
        id: 7,
        nombre: "Chomba I",
        talle: "S, M, L, XL, XXL",
        precio: 12100,
        precioEnPantalla: "$12.100",
        imagen: "./imagenes/chomba1.jpg",
    },
    {
        id: 8,
        nombre: "Chomba II",
        talle: "S, M, L, XL, XXL",
        precio: 12500,
        precioEnPantalla: "$12.500",
        imagen: "./imagenes/chomba2.jpg",
    },
    {
        id: 9,
        nombre: "Chomba III",
        talle: "S, M, L, XL, XXL",
        precio: 12900,
        precioEnPantalla: "$12.900",
        imagen: "./imagenes/chomba3.jpg",
    },
    {
        id: 10,
        nombre: "Remeron I",
        talle: "S, M, L, XL, XXL",
        precio: 11000,
        precioEnPantalla: "$11.000",
        imagen: "./imagenes/remeron4.jpg",
    },
    {
        id: 11,
        nombre: "Remeron II",
        talle: "S, M, L, XL, XXL",
        precio: 11100,
        precioEnPantalla: "$11.100",
        imagen: "./imagenes/remeron5.jpg",
    },
    {
        id: 12,
        nombre: "Remeron III",
        talle: "S, M, L, XL, XXL",
        precio: 11200,
        precioEnPantalla: "$11.200",
        imagen: "./imagenes/remeron6.jpg",
    }
];

let carrito = [];

const productosContenedor = document.getElementById("productos-container");

const carritoContenedor = document.getElementById("carrito-container");
const totalMontoElement = document.getElementById("total-monto");

const vaciarCarrito = () => {
    carrito = [];
    dibujarCarrito();
};

const finalizarCompra = () => {
    carritoContenedor.innerHTML = `
    <form id="form-finalizar-compra" class="row g-3">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Email</label>
          <input type="email" class="form-control" id="inputEmail4" required>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Contraseña</label>
          <input type="password" class="form-control" id="inputPassword4" required>
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">Calle</label>
          <input type="text" class="form-control" id="inputAddress" placeholder="Ingrese su dirección" required>
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">Depto/Casa/Piso</label>
          <input type="text" class="form-control" id="inputAddress2" placeholder="Depto, Estudio, Piso" required>
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">Ciudad</label>
          <input type="text" class="form-control" id="inputCity" required>
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">Provincia</label>
          <select id="inputState" class="form-select">
            <option selected>Buenos Aires</option>
            <option>Ciudad Autónoma de Buenos Aires</option>
            <option>Catamarca</option>
            <option>Chaco</option>
            <option>Chubut</option>
            <option>Córdoba</option>
            <option>Corrientes</option>
            <option>Entre Ríos</option>
            <option>Formosa</option>
            <option>Jujuy</option>
            <option>La Pampa</option>
            <option>La Rioja</option>
            <option>Mendoza</option>
            <option>Misiones</option>
            <option>Neuquén</option>
            <option>Río Negro</option>
            <option>Salta</option>
            <option>San Juan</option>
            <option>San Luis</option>
            <option>Santa Cruz</option>
            <option>Santa Fe</option>
            <option>Santiago del Estero</option>
            <option>Tierra del Fuego, Antártida e Islas del Atlántico Sur</option>
            <option>Tucumán</option>
          </select>
        </div>
        <div class="col-md-2">
          <label for="inputZip" class="form-label">Codigo Postal</label>
          <input type="text" class="form-control" id="inputZip" required>
        </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" >
            <label class="form-check-label" for="gridCheck">
              Guardar datos
            </label>
          </div>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary" onClick="">Finalizar</button>
        </div>
    </form>
        `
    const formulario = document.getElementById("form-finalizar-compra")
    formulario.addEventListener("submit", datosForm);
    Swal.fire(
        '¡Comprada realizada con éxito!',
        'Para continuar complete el formulario.',
        'success',
    )
};

const datosForm = (evento) => {
    evento.preventDefault();

    const email = document.getElementById("inputEmail4").value;
    const contraseña = document.getElementById("inputPassword4").value;
    const calle = document.getElementById("inputAddress").value;
    const depto = document.getElementById("inputAddress2").value;
    const ciudad = document.getElementById("inputCity").value;
    const provincia = document.getElementById("inputState").value;
    const codigoPostal = document.getElementById("inputZip").value;
    
    const datosCompra = {
        email: email,
        contraseña: contraseña,
        calle: calle,
        depto: depto,
        ciudad: ciudad,
        provincia: provincia,
        codigoPostal: codigoPostal
    };
    const datosCompraJSON = JSON.stringify(datosCompra);
    localStorage.setItem("datosCompra", datosCompraJSON);
    
    carrito = [];
    actualizarStorage();

    carritoContenedor.innerHTML = `
    <div class="alert" "alert-success">
        <h2>¡Compra realizada con éxito!</h2>
    </div>
    <div>
        <button class="btn btn-success" onClick="dibujarCarrito()">Volver al carrito</button>
    </div>
     `;
}

const dibujarCarrito = () => {
    carritoContenedor.innerHTML = "";
    let totalMonto = 0;

    if (carrito.length === 0) {
        let carritoVacio = document.createElement("div");
        carritoVacio.classList.add("card2", "col-sm-12");
        carritoVacio.innerHTML = `
            <div class="card-body2">
                <h3 class="card-title2">El carrito está vacío</h3>
            </div>
        `;
        carritoContenedor.appendChild(carritoVacio);
        totalMontoElement.textContent = "Total: $0.00";

    } else {
        carrito.forEach((producto, indice) => {
            let borrar = document.createElement("div");
            borrar.classList.add("card2", "col-sm-12");
            borrar.innerHTML = `
                <div class="card-body2">
                    <img src="${producto.imagen}" class="card-img-top" alt="remera">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">$${producto.precio}</p>
                    <p class="card-text">Cantidad: ${producto.cantidad}</p>
                    <button class="btn btn-danger" onClick="eliminarProducto(${indice})">Eliminar</button>
                </div>
            `;
            carritoContenedor.appendChild(borrar);
            totalMonto += producto.precio * producto.cantidad;
            totalMontoElement.textContent = `Total: $${totalMonto.toFixed(2)}`
        });
    } 
    if (carrito.length > 0){
        let botonVaciar = document.createElement("button");
        botonVaciar.classList.add("btn", "btn-danger", "ml-auto");
        botonVaciar.setAttribute("id", "idButtonV")
        botonVaciar.textContent = "Vaciar Carrito";
        botonVaciar.addEventListener("click", vaciarCarrito);
        carritoContenedor.appendChild(botonVaciar);
    }

    if (carrito.length > 0){
        let botonFinalizar = document.createElement("button");
        botonFinalizar.classList.add("btn", "btn-success", "ml-auto");
        botonFinalizar.setAttribute("id", "idButtonF")
        botonFinalizar.textContent = "Finalizar Compra";
        botonFinalizar.addEventListener("click", finalizarCompra);
        carritoContenedor.appendChild(botonFinalizar);
    }

};

const datosGuardados = localStorage.getItem("datosCompra");
if (datosGuardados){
    const datosCompra = JSON.parse(datosGuardados);
    document.getElementById("inputEmail4").value = datosCompra.email;
    document.getElementById("inputPassword4").value = datosCompra.contraseña;
    document.getElementById("inputAddress").value = datosCompra.calle;
    document.getElementById("inputAddress2").value = datosCompra.depto;
    document.getElementById("inputCity").value = datosCompra.ciudad;
    document.getElementById("inputState").value = datosCompra.provincia;
    document.getElementById("inputZip").value = datosCompra.codigoPostal;
}





if (localStorage.getItem("carrito de compras")){
    carrito = JSON.parse(localStorage.getItem("carrito de compras"));
    dibujarCarrito();
}

stockProductos.forEach((producto, indice) =>{ 
    let card = document.createElement("div");
    card.classList.add("card", "col-sm-12", "col-lg-3");
    card.innerHTML = `<img src="${producto.imagen}" class="card-img-top" alt="remera">
    <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.talle}</p>
        <p class="card-text">${producto.precioEnPantalla}</p>
        <a href="#cart" class="btn btn-info" onClick="agregarAlCarrito(${indice})">Añadir al carrito</a>
    </div>
        `;
    productosContenedor.appendChild(card);
});

const agregarAlCarrito = (indice) => {
    const productoClick = carrito.findIndex((elemento) => {
        return elemento.id === stockProductos[indice].id;
    });
    if (productoClick === -1) {
        const productoAgregado = Object.assign({}, stockProductos[indice]);
        productoAgregado.cantidad = 1;
        carrito.push(productoAgregado);
    } else {
        carrito[productoClick].cantidad += 1;
    }
    actualizarStorage(carrito);
    dibujarCarrito();
};


const actualizarStorage = () => {
    localStorage.setItem("carrito de compras", JSON.stringify(carrito));
};

const eliminarProducto = (indice) => {
    carrito.splice(indice, 1);
    actualizarStorage(carrito);
    carritoContenedor.innerHTML = "";
    dibujarCarrito(indice);
};


const boton = document.querySelector ('#gen-user');
const foto = document.getElementById('foto');
const nameUser = document.getElementById('nombre-user');
const correo = document.getElementById('correo-user');

const generarUsuario = async () => {
    try {
        const url = 'https://randomuser.me/api/';
        const respuesta = await fetch(url);
        const { results } = await respuesta.json();
        const datos = results [0];

        console.log (datos);
        foto.src = datos.picture.medium;
        nameUser.textContent = datos.name.first;
        correo.textContent = datos.email;

    } catch (error) {
        console.log (error);
    }

}
boton.addEventListener('click', generarUsuario);
document.addEventListener('DOMContentLoaded', generarUsuario);
