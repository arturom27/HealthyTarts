const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Servir archivos estáticos
app.use(express.static(path.join(__dirname)));

// Ruta para servir el archivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// Configuración de Nodemailer
const transporter = nodemailer.createTransport({
    service: 'Gmail', // Puedes usar cualquier servicio de correo
    auth: {
        user: 'tu_correo@gmail.com', // Cambia esto a tu dirección de correo
        pass: 'tu_contraseña' // Cambia esto a tu contraseña
    }
});

// Ruta para manejar el envío de correos
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'tu_correo@dominio.com', // Cambia esto a tu dirección de correo
        subject: 'Nuevo mensaje del formulario de contacto',
        text: `Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error al enviar el correo');
        } else {
            console.log('Correo enviado: ' + info.response);
            res.status(200).send('Mensaje enviado con éxito');
        }
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});
