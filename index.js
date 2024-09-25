// Importar los módulos necesarios
const express = require('express');
const path = require('path');

// Crear una aplicación de Express
const app = express();

// Configurar el puerto
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Configurar la ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Reemplaza 'index.html' con el nombre correcto de tu archivo de inicio
});

// Configurar la ruta para el contacto
app.get('/contacto', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contacto.html')); // Asegúrate de que este archivo esté en la carpeta 'public'
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
