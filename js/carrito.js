let productosEnCarrito = localStorage.getItem("Productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoacciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const botonComprar = document.querySelector("#carrito-acciones-comprar");
const contenedorTotal = document.querySelector("#total");

function cargarProductosAlCarrito() {
  if (productosEnCarrito && productosEnCarrito.length > 0) {
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.remove("disabled");
    contenedorCarritoacciones.classList.remove("disabled");
    contenedorCarritoComprado.classList.add("disabled");

    contenedorCarritoProductos.innerHTML = "";

    productosEnCarrito.forEach((producto) => {
      const div = document.createElement("div");
      div.classList.add("carrito-producto");

      div.innerHTML = `
          <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${
        producto.titulo
      }">
              <div class="carrito-producto-titulo">
                  <small>Titulo</small>
                  <h3>${producto.titulo}</h3>
              </div>
              <div class="carrito-producto-cantidad">
                  <small>Cantidad</small>
                  <p>${producto.cantidad}</p>
              </div>
              <div class="carrito-producto-precio">
                  <small>Precio</small>
                  <p>$${producto.precio}</p>
              </div>
              <div class="carrito-producto-subtotal"><small>Subtotal</small>
              <p>$${producto.precio * producto.cantidad}</p></div>
              <button id="${
                producto.id
              }" class="carrito-producto-eliminar"><i class="bi bi-trash-fill"></i>
              </button>
              `;

      contenedorCarritoProductos.append(div);
    });
  } else {
    contenedorCarritoVacio.classList.remove("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoacciones.classList.add("disabled");
    contenedorCarritoComprado.classList.add("disabled");
  }

  actualizarBotonesAEliminar();
  actualizarTotal();
}

cargarProductosAlCarrito();

const precioTotalCompra = productosEnCarrito.reduce(
  (acc, producto) => acc + producto.cantidad * producto.precio,
  0
);

function actualizarBotonesAEliminar() {
  botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

  botonesEliminar.forEach((e) => {
    e.addEventListener("click", eliminarDelCarrito);
  });
}

function eliminarDelCarrito(e) {
  const idBoton = e.currentTarget.id;

  const index = productosEnCarrito.findIndex(
    (producto) => producto.id === idBoton
  );

  //eliminar el producto
  productosEnCarrito.splice(index, 1);

  localStorage.setItem(
    "Productos-en-carrito",
    JSON.stringify(productosEnCarrito)
  );

  cargarProductosAlCarrito();
}

botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {
  productosEnCarrito.length = 0;

  localStorage.setItem(
    "Productos-en-carrito",
    JSON.stringify(productosEnCarrito)
  );
  cargarProductosAlCarrito();
}

function actualizarTotal() {
  const totalCalulado = productosEnCarrito.reduce(
    (acc, producto) => acc + producto.precio * producto.cantidad,
    0
  );

  contenedorTotal.innerText = `$${totalCalulado}`;
}

botonComprar.addEventListener("click", comprarCarrito);
function comprarCarrito() {
  productosEnCarrito.length = 0;

  localStorage.setItem(
    "Productos-en-carrito",
    JSON.stringify(productosEnCarrito)
  );

  contenedorCarritoVacio.classList.add("disabled");
  contenedorCarritoProductos.classList.add("disabled");
  contenedorCarritoacciones.classList.add("disabled");
  contenedorCarritoComprado.classList.remove("disabled");
}
