<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener datos del formulario
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    // Validar que los campos no estén vacíos
    if (!empty($name) && !empty($email) && !empty($message)) {
        // Destinatario y asunto del correo
        $to = "arturom32official@gmail.com"; // Cambia esto a tu dirección de correo
        $subject = "Nuevo mensaje del formulario de contacto";
        
        // Construir el cuerpo del correo
        $body = "Nombre: $name\n";
        $body .= "Correo: $email\n\n";
        $body .= "Mensaje:\n$message";
        
        // Encabezados del correo
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        
        // Enviar el correo
        if (mail($to, $subject, $body, $headers)) {
            echo "Mensaje enviado con éxito.";
        } else {
            echo "Error al enviar el mensaje.";
        }
    } else {
        echo "Por favor, completa todos los campos.";
    }
} else {
    echo "Método de solicitud no válido.";
}
?>
