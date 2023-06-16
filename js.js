// Obtener los elementos necesarios
const productos = document.getElementById("productos");
const carrito = document.getElementById("carrito");
const cantidadCarrito = document.getElementById("cantidad-carrito");

// Obtener los productos y convertirlos en un array
const productosArray = Array.from(productos.children);

// Ordenar los productos alfabéticamente por su nombre
productosArray.sort((a, b) => {
  const nombreA = a.querySelector("h3").textContent;
  const nombreB = b.querySelector("h3").textContent;
  return nombreA.localeCompare(nombreB);
});

// Agregar los productos ordenados de vuelta a la sección de productos
productosArray.forEach((producto) => {
  productos.appendChild(producto);
});

// Agregar un evento al hacer clic en un botón "Añadir al carrito"
productos.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    agregarAlCarrito(event.target.parentNode);
  }
});

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
  // Crear un elemento de lista para el producto en el carrito
  const productoEnCarrito = document.createElement("li");
  productoEnCarrito.textContent = producto.querySelector("h3").textContent;

  // Agregar el producto al carrito y actualizar la cantidad en el botón del carrito
  carrito.appendChild(productoEnCarrito);
  cantidadCarrito.textContent = carrito.children.length;
}