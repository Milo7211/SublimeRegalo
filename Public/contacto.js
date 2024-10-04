// Función para manejar el envío del formulario
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario para manejarlo manualmente

        // Obtener los valores de los campos del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const whatsapp = document.getElementById('whatsapp').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Mensaje de error
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "none"; // Ocultar el mensaje de error al inicio

        // Validar datos email
        if (!validateEmail(email)) {
            errorMessage.textContent = "Por favor, ingrese un correo electrónico válido."; // Personaliza el mensaje
            errorMessage.style.display = "block"; // Muestra el mensaje
            return; // Detener la ejecución si hay un error
        }

        // Crear un objeto con los datos del formulario
        const formData = { name, email, whatsapp, subject, message };

        // Enviar los datos al servidor utilizando fetch
        fetch('/contacto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Enviar los datos como JSON
            },
            body: JSON.stringify(formData), // Convertir los datos a JSON
        })
        .then(response => {
            if (response.ok) {
                return response.text(); // Obtener el mensaje de respuesta del servidor
            } else {
                throw new Error('Error en el envío del formulario.');
            }
        })
        .then(message => {
            alert(message); // Mostrar el mensaje de éxito del servidor
            form.reset(); // Limpiar el formulario
        })
        .catch(error => {
            errorMessage.textContent = error.message; // Mostrar el error en el frontend
            errorMessage.style.display = "block";
        });
    });
});

// Función de validación simple para el email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar email
    return regex.test(email);
}
