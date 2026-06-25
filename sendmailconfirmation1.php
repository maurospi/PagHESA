<?php
/**
 * ARCHIVO: sendmailconfirmation.php
 * VERSIÓN: PHPMailer SMTP Edition
 * DESCRIPCIÓN: Envío de correos mediante SMTP para máxima entregabilidad.
 */

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    header('Content-Type: text/html; charset=UTF-8');

    function sanitize_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
        return mb_convert_encoding($data, "UTF-8", "auto");
    }

    // Listas de bloqueos
    $correos_bloqueados = ["professionaledgelawncare@yahoo.com", "carpeyourdm@gmail.com", "tnunterbrink16@gmail.com", "fledderohnostemer@yahoo.com", "amandascielob@gmail.com", "johngardner6666@gmail.com", "todchadze@gmail.com", "xrumer23swilt@gmail.com", "ramirezbryklince@gmail.com"];
    $dominios_bloqueados = ["@yandex.com", "@yandex.ru", "@op.pl", "@yk.com", "@rambler.ru", "@hhciconst.com", "@mail.com", "@web.de", "@kodx.com", "@androsapp.ru", "@gmx.com", "@oonmail.com", "@xrevelxr.com", "@lockernyc.com", "@triol.site", "@googlemail.com", "@kwizzist.com", "@websticle.com", "@obesitystops.org", "@o4ko.space", "@1ti.ru", "@goshop1888.shop", "@dykaya.com", "@hello", "@scrap", "@puedemail.com", "@mail.ru", "@chromomail.com", "@ramenbyra.com", "@uniqueadvertising.pro", "@belcopackaging.com", "@aluminium", "@aluminium.ukraine", "@donrem.ru", "@green.tech", "@fleckens.hu", "@mailkv.com", "@liquor.automotive", "@btinternet.com", "@gmx.at", "@premierws.net", "@athenahealth.com", "@msn.com", "@libero.it", "@att.net", "@netcac.org", "@r1atl.com", "@drei.at", "@palmettosandsrealty.com", "@do-not-respond.me", "@aol.com", "@performancenapa.com", "@remsanteh-groupe.com.ua", "@alltechsupply.com", "@chimtapallilaw.com", "@fnbt.com", "@drivenhealthcare.com"];
    $extensiones_bloqueadas = [".ru", ".pl", ".shop", ".my", ".cn", ".store", ".online", ".de", ".site", ".space", ".tryperegrinate.click", ".tryperegrinate", ".click", ".campus", ".pro", ".ukraine", ".tech", ".hu", ".automotive", ".at", ".me", ".onet.eu", ".onet", ".eu", ".it", ".at", ".me", ".ua"];
    $nombres_bloqueados = ["Test", "Prueba", "Fake", "Admin", "Bot", "myname", "MyName", "Alice", "Hello", "TestUser"];
    $palabras_bloqueadas = ["spam", "fraude", "hack", "estafa", "publicidad", "MyName", "TestUser", "Hello", "¡Oye!", "https"];

    // Recoger datos
    $name    = isset($_POST['name'])    ? sanitize_input($_POST['name'])    : '';
    $email   = isset($_POST['email'])   ? sanitize_input($_POST['email'])   : '';
    $message = isset($_POST['message']) ? sanitize_input($_POST['message']) : '';
    $phone   = isset($_POST['phone'])   ? sanitize_input($_POST['phone'])   : '';
    $subject = isset($_POST['subject']) ? sanitize_input($_POST['subject']) : '';
    $reason  = isset($_POST['reason'])  ? sanitize_input($_POST['reason'])  : '';

    // Función Popup Animada y Responsive
    function show_popup($message, $redirect = 'index.html') {
        $escaped = addslashes($message);
        echo "<!DOCTYPE html>
<html lang='es'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Aviso envio</title>
    <style>
        .obody {
  background-image: url('./images/Logo/logoo.png');
  background-repeat: no-repeat;
  background-position: center;
}
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Arial, sans-serif; background: #f4f4f4; display: flex; align-items: center; justify-content: center; min-height: 100vh; overflow: hidden; }
        .overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.6); display: flex; align-items: center; justify-content: center; z-index: 9999; opacity: 0; animation: fadeIn 0.4s forwards; backdrop-filter: blur(3px); padding: 20px; }
        .popup { background: #fff; border-radius: 15px; box-shadow: 0 12px 40px rgba(0,0,0,0.25); max-width: 460px; width: 100%; padding: 40px 30px; text-align: center; transform: scale(0.7); opacity: 0; animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; animation-delay: 0.1s; }
        @keyframes fadeIn { to { opacity: 1; } }
        @keyframes popIn { to { transform: scale(1); opacity: 1; } }
        .popup-icon { font-size: 60px; margin-bottom: 20px; display: block; animation: bounce 2s infinite; }
        @keyframes bounce { 0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 40% {transform: translateY(-10px);} 60% {transform: translateY(-5px);} }
        .popup h2 { color: #a3c34c; margin-bottom: 15px; font-size: 1.5rem; font-weight: 700; }
        .popup p { color: #555; font-size: 1rem; line-height: 1.6; margin-bottom: 30px; white-space: pre-line; }
        .popup button { background-color: #a3c34c; color: #fff; border: none; border-radius: 8px; padding: 14px 45px; font-size: 1.1rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 15px #345c5c; width: 100%; }
        @media (min-width: 480px) { .popup button { width: auto; } }
        .popup button:hover { background-color: #82a032; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(163, 195, 76, 0.4); }
    </style>
</head>
<body>
    <div class='overlay'>
        <div class='popup'>
            <div class='popup-icon'><img src='./images/Logo/logoo.png'></div>
            <h2>Se Ha Enviado Tu Mensaje Correctamente</h2>
            <p>$escaped</p>
            <button onclick=\"window.location.href='$redirect'\">Cerrar</button>
        </div>
    </div>
</body>
</html>";
        exit;
    }

    // Validaciones
    if (!preg_match("/^[a-zA-ZÀ-ÿ\s]+$/u", $name) || in_array($name, $nombres_bloqueados)) {
        show_popup("Error: Nombre no válido.");
    }
    if (in_array(strtolower($email), array_map('strtolower', $correos_bloqueados))) {
        show_popup("Error: Correo no permitido.");
    }

    // ── CONFIGURACIÓN SMTP (EDITAR AQUÍ) ────────────────────────────────────
    $smtp_host = 'mail.hablandoensenas.com'; // Cambiar por tu servidor SMTP
    $smtp_user = 'info@hablandoensenas.com'; // Cambiar por tu correo
    $smtp_pass = 'KiaraPerro*';       // Cambiar por tu contraseña
    $smtp_port = 465;                        // 465 para SSL o 587 para TLS
    $smtp_secure = PHPMailer::ENCRYPTION_SMTPS; // Usar ENCRYPTION_STARTTLS si el puerto es 587

    // ── PROCESO DE ENVÍO ─────────────────────────────────────────────────────
    
    $mail = new PHPMailer(true);

    try {
        // Configuración del Servidor
        $mail->isSMTP();
        $mail->Host       = $smtp_host;
        $mail->SMTPAuth   = true;
        $mail->Username   = $smtp_user;
        $mail->Password   = $smtp_pass;
        $mail->SMTPSecure = $smtp_secure;
        $mail->Port       = $smtp_port;
        $mail->CharSet    = 'UTF-8';

        // 1. Enviar Correo al Administrador
        $mail->setFrom($smtp_user, 'Formulario Web Hablando EnSeñas');
        $mail->addAddress('maurospinarev@gmail.com');
        $mail->addAddress('info@hablandoensenas.com');
        $mail->addReplyTo($email, $name); // Para que el admin responda al usuario

        $mail->isHTML(false); // Texto plano para el admin
        $mail->Subject = "NUEVO MENSAJE: $subject";
        $mail->Body    = "Has recibido un nuevo contacto:\n\n" .
                         "Nombre: $name\n" .
                         "Email: $email\n" .
                         "Teléfono: $phone\n" .
                         "Motivo: $reason\n" .
                         "Mensaje:\n$message";

        $mail->send();

        // 2. Enviar Correo de Confirmación al Usuario (HTML)
        $mail->clearAddresses();
        $mail->addAddress($email, $name);
        $mail->isHTML(true);
        $mail->Subject = 'Confirmación de recepción - Hablando EnSeñas';
        $mail->Body    = "
        <div style='font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden;'>
            <div style='background: #a3c34c; padding: 20px; color: white; text-align: center;'>
                <h2 style='margin:0;'>¡Hola $name!</h2>
            </div>
            <div style='padding: 30px; color: #444; line-height: 1.6;'>
                <p>Gracias por contactarnos. Hemos recibido tu mensaje correctamente y nos pondremos en contacto contigo a la brevedad.</p>
                <div style='background: #f9f9f9; padding: 15px; border-left: 4px solid #a3c34c; margin: 20px 0;'>
                    <strong>Tu mensaje:</strong><br>
                    $message
                </div>
                <p>Saludos,<br>El equipo de <strong>Hablando EnSeñas</strong></p>
            </div>
            <div style='background: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; color: #888;'>
                Este es un mensaje automático, por favor no lo respondas.
            </div>
        </div>";

        $mail->send();

        show_popup("Tu mensaje ha sido enviado satisfactoriamente. ¡Muy pronto nos pondremos en contacto!");

    } catch (Exception $e) {
        // Si hay un error, lo mostramos para depuración (solo en desarrollo) o mensaje genérico
        show_popup("Error al enviar el mensaje. Por favor, contacta directamente a info@hablandoensenas.com\n\n(Detalle técnico: " . $mail->ErrorInfo . ")");
    }
}
?>
