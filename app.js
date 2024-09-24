// Función para agregar productos al carrito
function agregarAlCarrito(nombreProducto) {
    // Obtener la cantidad seleccionada por el usuario del input con id 'cantidad'
    let cantidad = parseInt(document.getElementById('cantidad').value);
    
    // Contar el número total de productos en el carrito
    let totalProductos = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    document.getElementById('cartCount').innerText = totalProductos; // Actualizar el contador en el HTML

    // Notificar al usuario que el producto ha sido añadido al carrito
    alert(`${nombreProducto} (x${cantidad}) ha sido añadido al carrito por un total de $${precioTotal}.`);

    // Verificar si la cantidad es válida (es decir, que sea un número mayor que 0)
    if (isNaN(cantidad) || cantidad < 1) {
        alert('Por favor, ingrese una cantidad válida.');
        return; // Si no es válida, detener la ejecución de la función
    }

    // Determinar el precio según la cantidad seleccionada
    let precioProducto = 25000; // Precio base (1-5 unidades)
    if (cantidad >= 6 && cantidad <= 11) {
        precioProducto = 20000; // Precio para 6-11 unidades
    } else if (cantidad >= 12 && cantidad <= 23) {
        precioProducto = 19000; // Precio para 12-23 unidades
    } else if (cantidad >= 24) {
        precioProducto = 18000; // Precio para 24 o más unidades
    }

    // Calcular el precio total multiplicando el precio por unidad por la cantidad seleccionada
    let precioTotal = precioProducto * cantidad;

    // Obtener el carrito actual (si existe) desde localStorage, o inicializarlo como un array vacío
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Crear un objeto que representa el producto a añadir al carrito
    const producto = {
        nombre: nombreProducto,  // Nombre del producto
        cantidad: cantidad,      // Cantidad seleccionada por el usuario
        precioUnitario: precioProducto, // Precio unitario basado en la cantidad
        precioTotal: precioTotal // Precio total (cantidad x precio unitario)
    };

    // Añadir el objeto del producto al carrito
    carrito.push(producto);

    // Guardar el carrito actualizado en localStorage (convertir el array a JSON)
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Notificar al usuario que el producto ha sido añadido al carrito con la cantidad y precio total
    alert(`${nombreProducto} (x${cantidad}) ha sido añadido al carrito por un total de $${precioTotal}.`);

    // Actualizar el contador visual del carrito
    actualizarContadorCarrito();
}

// Función para mostrar los productos en el carrito
function mostrarCarrito() {
    // Obtener el carrito del localStorage (si no existe, usar un array vacío)
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Variable para almacenar el HTML que mostrará los productos en el carrito
    let carritoHTML = '';

    // Si el carrito está vacío, mostrar un mensaje de que no hay productos
    if (carrito.length === 0) {
        carritoHTML = '<p>El carrito está vacío.</p>';
    } else {
        // Si hay productos, recorrer el carrito y generar HTML con los detalles
        carrito.forEach(producto => {
            carritoHTML += `<p>${producto.nombre} (x${producto.cantidad}) - $${producto.precioUnitario} c/u - Total: $${producto.precioTotal}</p>`;
        });
    }

    // Insertar el HTML generado en el elemento con id 'carrito'
    document.getElementById('carrito').innerHTML = carritoHTML;
}

// Función para vaciar el carrito (opcional)
function vaciarCarrito() {
    // Eliminar los productos del localStorage
    localStorage.removeItem('carrito');
    
    // Limpiar el contenido del carrito mostrado en la página
    document.getElementById('carrito').innerHTML = '<p>El carrito está vacío.</p>';

    // Actualizar el contador visual del carrito a cero
    actualizarContadorCarrito();

    // Notificar al usuario que el carrito ha sido vaciado
    alert('El carrito ha sido vaciado.');
}

// Función para actualizar el contador visual del carrito
function actualizarContadorCarrito() {
    // Obtener el carrito del localStorage (si no existe, usar un array vacío)
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Calcular el número total de productos en el carrito sumando las cantidades
    let totalProductos = carrito.reduce((total, producto) => total + producto.cantidad, 0);

    // Actualizar el contenido del elemento con id 'cartCount' para mostrar el total de productos
    document.getElementById('cartCount').textContent = totalProductos;
}

// Llamar a la función de actualizar el contador del carrito al cargar la página
document.addEventListener('DOMContentLoaded', actualizarContadorCarrito);
