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

        // Validar datos
        if (!validateEmail(email)) {
            errorMessage.textContent = "Por favor, ingrese un correo electrónico válido."; // Personaliza el mensaje
            errorMessage.style.display = "block"; // Muestra el mensaje
            return; // Detener la ejecución si hay un error
        }

        // Aquí puedes agregar lógica para procesar el formulario (enviarlo a un servidor, etc.)
        console.log({ name, email, whatsapp, subject, message });
        alert('Mensaje enviado. ¡Gracias por contactarnos!');

        // Limpiar el formulario
        form.reset();
    });
});

// Función de validación simple para el email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar email
    return regex.test(email);
}
// Al enviar el formulario, se pueden mostrar mensajes de error así:
if (!isValid) {
    document.getElementById('error-message').textContent = 'Por favor, complete todos los campos obligatorios.';
    document.getElementById('error-message').style.display = 'block'; // Muestra el mensaje de error
} else {
    document.getElementById('error-message').style.display = 'none'; // Oculta el mensaje de error
    // Procesar el formulario
}
