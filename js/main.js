const productos = [
  // Abrigos
  {
    id: "abrigo-01",
    titulo: "Abrigo 01",
    imagen:
      "https://www.laguiadelvaron.com/wp-content/uploads/2016/02/single.jpg",
    categoria: {
      nombre: "Abrigos",
      id: "abrigos",
    },
    precio: 1000,
  },
  {
    id: "abrigo-02",
    titulo: "Abrigo 02",
    imagen:
      "https://i.pinimg.com/736x/a9/42/33/a94233365c44d03ce027de2f030703dc--fall-winter-.jpg",
    categoria: {
      nombre: "Abrigos",
      id: "abrigos",
    },
    precio: 1000,
  },
  {
    id: "abrigo-03",
    titulo: "Abrigo 03",
    imagen: "https://modon.pl/data/gfx/pictures/medium/7/8/4887_1.jpg",
    categoria: {
      nombre: "Abrigos",
      id: "abrigos",
    },
    precio: 1000,
  },
  //
  // Camisetas
  {
    id: "camiseta-01",
    titulo: "Camiseta 01",
    imagen:
      "https://th.bing.com/th/id/OIP.TQE2pgwhDQvfyGu8c0qUYwHaI9?rs=1&pid=ImgDetMain",
    categoria: {
      nombre: "Camisetas",
      id: "camisetas",
    },
    precio: 1000,
  },
  {
    id: "camiseta-02",
    titulo: "Camiseta 02",
    imagen:
      "https://th.bing.com/th/id/OIP.0G71HPsisU_9SRB80qxy5wHaJ4?rs=1&pid=ImgDetMain",
    categoria: {
      nombre: "Camisetas",
      id: "camisetas",
    },
    precio: 1000,
  },
  // Pantalones
  {
    id: "pantalon-01",
    titulo: "Pantalón 01",
    imagen:
      "https://www.bolf.es/spa_pl_Pantalon-regular-fit-de-mezclilla-para-hombre-color-negro-Denley-K8862-82406_10.jpg",
    categoria: {
      nombre: "Pantalones",
      id: "pantalones",
    },
    precio: 1000,
  },
  {
    id: "pantalon-02",
    titulo: "Pantalón 02",
    imagen:
      "https://www.bolf.es/spa_pl_Pantalon-jogger-cargo-para-hombre-negro-Bolf-CT6703-79850_8.jpg2",
    categoria: {
      nombre: "Pantalones",
      id: "pantalones",
    },
    precio: 1000,
  },
  // Continúa con el resto de los productos
];

const contenedorProductos = document.querySelector("#contenedor-productos");

function cargarProductos() {
  productos.forEach((p) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `<div class="productos">
        <img class="producto-imagen" src="${p.imagen}">
        <div class="producto-detalles">
            <h3 class="${p.titulo}">${p.categoria.nombre}</h3>
            <p class="producto-precio">${p.precio}</p>
            <button class="btn-producto-agregar">Agregar</button>
        </div>
        </div>`;
  });
}

/*

<div class="productos">
<img class="producto-imagen" src="./imagenes/camperas/campera3.png">
<div class="producto-detalles">
    <h3 class="producto-titulo">Campera negra</h3>
    <p class="producto-precio">$1000</p>
    <button class="btn-producto-agregar">Agregar</button>
</div>
</div>
*/
