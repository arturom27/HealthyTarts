<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Dirección de correo a la que quieres recibir los mensajes
    $to = 'healthy.tarts@gmail.com';

    // Asunto del correo
    $subject = 'Nuevo mensaje de contacto';

    // Encabezados del correo
    $headers = "From: $name <$email>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";

    // Contenido del correo
    $body = "<p><strong>De:</strong> $name</p>";
    $body .= "<p><strong>Correo electrónico:</strong> $email</p>";
    $body .= "<p><strong>Mensaje:</strong></p><p>$message</p>";

    // Enviar el correo
    if (mail($to, $subject, $body, $headers)) {
        echo "¡Mensaje enviado correctamente!";
    } else {
        echo "¡Error al enviar el mensaje!";
    }
} else {
    echo "Acceso denegado";
}
?>
