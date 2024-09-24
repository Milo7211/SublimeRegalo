// Función para validar el correo electrónico
function validateEmail() {
    // Obtener el valor del campo de correo electrónico
    const email = document.getElementById('email').value;
    // Regex para validar formato de correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Comprobar si el correo electrónico es válido
    if (!emailPattern.test(email)) {
        // Si no es válido, mostrar el mensaje de error
        document.getElementById('error-message').style.display = 'block';
    } else {
        // Si es válido, ocultar el mensaje de error y proceder con el envío
        document.getElementById('error-message').style.display = 'none';
        // Aquí puedes agregar lógica para enviar el formulario
    }
}
