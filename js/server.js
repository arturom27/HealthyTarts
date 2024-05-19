const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const phpExpress = require('php-express')();

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuración de PHP Express
app.engine('php', phpExpress.engine);
app.set('view engine', 'php');
app.set('views', path.join(__dirname, 'views'));
app.use(phpExpress.router);

// Servir el archivo HTML en la ruta raíz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para manejar el envío de correos
app.post('./php/send-email', (req, res) => {
    // Tu código para enviar correos aquí
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});
