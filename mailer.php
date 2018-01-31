<?php
/* Set*/
$myemail = "tebeckford@gmail.com";
$destinatario = "hornobar";
$marca = "hornobar";
$redirige = "http://hornobar.com.ar";

/* Check all form inputs using check_input function */
$name = check_input($_POST['inputName'], "Your Name");
$email = check_input($_POST['inputEmail'], "Your E-mail Address");
$subject = check_input($_POST['inputSubject'], "Message Subject");
$message = check_input($_POST['inputMessage'], "Your Message");
$header = "From: $destinatario" . "\r\n";

/* If e-mail is not valid show error message */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
show_error("Invalid e-mail address");
}
/* Let's prepare the message for the e-mail */

$subject = "Alguien te escribio un mensaje";

$message = "

Nuevo mensaje para $marca:

Nombre: $name
Email: $email

Mensaje:
$message

";

/* Send the message using mail() function */

if (mail($myemail, $subject, $message, $header)) {
echo "Mensaje enviado con exito";
header('Location: $redirige');
exit();
} else echo 'Hubo un error en el envío de email';

