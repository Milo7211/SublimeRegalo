const express = require('express'); // Importa el módulo express para crear el servidor
const bodyParser = require('body-parser'); // Importa body-parser para manejar los datos del formulario
const mysql = require('mysql2'); // Importa mysql para conectarse a la base de datos MySQL

const app = express(); // Crea una nueva aplicación Express
const port = 3001; // Define el puerto donde el servidor escuchará (cambiado a 3000)

// Configuración de body-parser para analizar el cuerpo de las solicitudes HTTP
app.use(bodyParser.urlencoded({ extended: true })); // Habilita el manejo de datos codificados en la URL
app.use(bodyParser.json()); // Habilita el manejo de datos en formato JSON

// Configuración de la conexión con la base de datos MySQL
const connection = mysql.createConnection({
    host: 'localhost', // Dirección del servidor de la base de datos (localhost si es local)
    user: 'root', // El nombre de usuario para acceder a MySQL
    password: '1234', // La contraseña para acceder a MySQL
    database: 'sublimeregalo' // El nombre de la base de datos donde se guardarán los datos
});

// Conexión a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err); // Muestra un error si la conexión falla
        return;
    }
    console.log('Conectado a la base de datos.'); // Muestra un mensaje de éxito si la conexión es correcta
});

// Middleware para servir archivos estáticos (CSS, JS)
    app.use(express.static(__dirname));

// Middleware para analizar el cuerpo de las solicitudes POST
    app.use(bodyParser.urlencoded({ extended: true }));


// Ruta POST para recibir los datos del formulario y guardarlos en la base de datos
app.post('/contacto', (req, res) => {
    // Extraer los datos del formulario enviados en el cuerpo de la solicitud
    const { name, email, whatsapp, subject, message } = req.body;
    
    // Consulta SQL para insertar los datos en la tabla 'contacto'
    const query = 'INSERT INTO contacto (nombreUsuario, correoUsuario, whatsappUsuario, asuntoUsuario, mensajeUsuario) VALUES (?, ?, ?, ?, ?)';

    // Ejecutar la consulta SQL con los datos recibidos
    connection.query(query, [name, email, whatsapp, subject, message], (err, results) => {
        if (err) {
            console.error('Error al insertar datos:', err); // Muestra un error si la consulta falla
            return res.status(500).send('Error al enviar el mensaje.'); // Envía una respuesta de error al cliente
        }
        res.send('Mensaje enviado correctamente.'); // Envía una respuesta de éxito al cliente
        console.error('Mensaje enviado correctamente', query); // Muestra un error si la consulta falla<
    });
});

// Inicia el servidor para escuchar en el puerto seleccionado
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`); // Muestra un mensaje cuando el servidor está listo
});
