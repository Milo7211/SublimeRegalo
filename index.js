const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Bienvenido a Sublimeregalo');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
