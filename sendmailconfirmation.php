<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    header('Content-Type: text/html; charset=UTF-8');

    function sanitize_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
        return mb_convert_encoding($data, "UTF-8", "auto");
    }

    // **Listas de correos bloqueados**
    $correos_bloqueados = ["professionaledgelawncare@yahoo.com", "carpeyourdm@gmail.com", "tnunterbrink16@gmail.com", "fledderohnostemer@yahoo.com", "amandascielob@gmail.com", "johngardner6666@gmail.com", "todchadze@gmail.com", "xrumer23swilt@gmail.com", "ramirezbryklince@gmail.com"];
    $dominios_bloqueados = ["@yandex.com", "@yandex.ru", "@op.pl", "@yk.com", "@rambler.ru", "@hhciconst.com", "@mail.com", "@web.de", "@kodx.com", "@androsapp.ru", "@gmx.com", "@oonmail.com", "@xrevelxr.com", "@lockernyc.com", "@triol.site", "@googlemail.com", "@kwizzist.com", "@websticle.com", "@obesitystops.org", "@o4ko.space", "@1ti.ru", "@goshop1888.shop", "@dykaya.com", "@hello", "@scrap", "@puedemail.com", "@mail.ru", "@chromomail.com", "@ramenbyra.com", "@uniqueadvertising.pro", "@belcopackaging.com", "@aluminium", "@aluminium.ukraine", "@donrem.ru", "@green.tech", "@fleckens.hu", "@mailkv.com", "@liquor.automotive", "@btinternet.com", "@gmx.at", "@premierws.net", "@athenahealth.com", "@msn.com", "@libero.it", "@att.net", "@netcac.org", "@r1atl.com", "@drei.at", "@palmettosandsrealty.com", "@do-not-respond.me", "@aol.com", "@performancenapa.com", "@remsanteh-groupe.com.ua", "@alltechsupply.com", "@chimtapallilaw.com", "@fnbt.com", "@drivenhealthcare.com"];
    $extensiones_bloqueadas = [".ru", ".pl", ".shop", ".my", ".cn", ".store", ".online", ".de", ".site", ".space", ".tryperegrinate.click", ".tryperegrinate", ".click", ".campus", ".pro", ".ukraine", ".tech", ".hu", ".automotive", ".at", ".me", ".onet.eu", ".onet", ".eu", ".it", ".at", ".me", ".ua"];

    // **Lista de nombres bloqueados**
    $nombres_bloqueados = ["Test", "Prueba", "Fake", "Admin", "Bot", "myname", "MyName", "Alice", "Hello", "TestUser"];

    // **Palabras bloqueadas en título, motivo y mensaje**
    $palabras_bloqueadas = ["spam", "fraude", "hack", "estafa", "publicidad", "MyName", "TestUser", "Hello", "¡Oye!", "https"];

    // **Recoger datos del formulario**
    $name    = isset($_POST['name'])    ? sanitize_input($_POST['name'])    : '';
    $email   = isset($_POST['email'])   ? sanitize_input($_POST['email'])   : '';
    $message = isset($_POST['message']) ? sanitize_input($_POST['message']) : '';
    $phone   = isset($_POST['phone'])   ? sanitize_input($_POST['phone'])   : '';
    $subject = isset($_POST['subject']) ? sanitize_input($_POST['subject']) : '';
    $reason  = isset($_POST['reason'])  ? sanitize_input($_POST['reason'])  : '';

    // Helper: muestra popup modal y redirige
    function show_popup($message, $redirect = 'index.html') {
        $escaped = addslashes($message);
        echo "<!DOCTYPE html>
<html lang='es'>
<head>
    <meta charset='UTF-8'>
    <title>Aviso</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial, sans-serif; background: #f4f4f4; display: flex; align-items: center; justify-content: center; min-height: 100vh; }
        .overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.45); display: flex; align-items: center; justify-content: center; z-index: 9999; }
        .popup { background: #fff; border-radius: 10px; box-shadow: 0 8px 32px rgba(0,0,0,0.18); max-width: 460px; width: 90%; padding: 36px 32px 28px; text-align: center; }
        .popup-icon { font-size: 48px; margin-bottom: 12px; }
        .popup h2 { color: #4a7c10; margin-bottom: 12px; font-size: 1.3rem; }
        .popup p { color: #444; font-size: 0.97rem; line-height: 1.6; margin-bottom: 24px; }
        .popup button {
            background-color: rgba(163, 195, 76, 0.85);
            color: #fff;
            border: none;
            border-radius: 6px;
            padding: 11px 38px;
            font-size: 1rem;
            cursor: pointer;
            transition: background 0.2s;
        }
        .popup button:hover { background-color: rgba(130, 160, 50, 1); }
    </style>
</head>
<body>
    <div class='overlay' id='overlay'>
        <div class='popup'>
            <div class='popup-icon'>✉️</div>
            <h2>Hablando EnSeñas</h2>
            <p>$escaped</p>
            <button onclick=\"window.location.href='$redirect'\">Cerrar</button>
        </div>
    </div>
</body>
</html>";
        exit;
    }

    // **Validación del nombre**
    if (!preg_match("/^[a-zA-ZÀ-ÿ\s]+$/u", $name) || in_array($name, $nombres_bloqueados)) {
        show_popup("Error: Nombre inválido o no permitido ($name).\n\nEn caso de algún error comunícate al correo hablandoensenas@gmail.com, info@hablandoensenas.com o maurospinarev@gmail.com");
    }

    // **Validación del correo bloqueado (lista exacta)**
    if (in_array(strtolower($email), array_map('strtolower', $correos_bloqueados))) {
        show_popup("Error: Este correo no está permitido ($email).\n\nEn caso de algún error comunícate al correo hablandoensenas@gmail.com, info@hablandoensenas.com o maurospinarev@gmail.com");
    }

    // **Extraer dominio y extensión del correo**
    $dominio_email   = strtolower(strrchr($email, "@"));
    $extension_email = strtolower(strrchr($email, "."));

    // **Verificar dominio o extensión bloqueada**
    if (in_array($dominio_email, $dominios_bloqueados) || in_array($extension_email, $extensiones_bloqueadas)) {
        show_popup("Error: No se permiten correos con este dominio o extensión ($email).\n\nEn caso de algún error comunícate al correo hablandoensenas@gmail.com, info@hablandoensenas.com o maurospinarev@gmail.com");
    }

    // **Validación del título**
    if (empty($subject) || preg_match("/" . implode("|", $palabras_bloqueadas) . "/i", $subject)) {
        show_popup("Error: El título no es válido.\n\nEn caso de algún error comunícate al correo hablandoensenas@gmail.com, info@hablandoensenas.com o maurospinarev@gmail.com");
    }

    // **Validación del motivo**
    if (empty($reason) || preg_match("/" . implode("|", $palabras_bloqueadas) . "/i", $reason)) {
        show_popup("Error: El motivo no es válido.\n\nEn caso de algún error comunícate al correo hablandoensenas@gmail.com, info@hablandoensenas.com o maurospinarev@gmail.com");
    }

    // **Validación del mensaje**
    if (empty($message) || preg_match("/" . implode("|", $palabras_bloqueadas) . "/i", $message)) {
        show_popup("Error: El mensaje no es válido.\n\nEn caso de algún error comunícate al correo hablandoensenas@gmail.com, info@hablandoensenas.com o maurospinarev@gmail.com");
    }

    // ── CORREO DE CONFIRMACIÓN AL USUARIO ───────────────────────────────────
    $subjectc = "Confirmación de recepción de tu mensaje";

    $body_user = "<!DOCTYPE html>
<html lang='es'>
<head>
    <meta charset='utf-8'>
    <style>
        body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
        .container { width: 100%; max-width: 600px; margin: 20px auto; padding: 20px; background-color: #ffffff; box-shadow: 0px 4px 12px rgba(0,0,0,0.1); }
        .header { background-color: rgba(163, 195, 76, 0.57); padding: 10px 0; text-align: center; }
        .header h2 { color: #3d5c08; margin: 0; }
        .content { padding: 20px; color: #333; }
        .highlight { background-color: #f9f9f9; padding: 10px; border-left: 3px solid rgba(163, 195, 76, 0.8); }
        .footer { font-size: 12px; color: #999; text-align: center; margin-top: 20px; }
        .footer a { color: rgba(130, 160, 50, 1); }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'><h2>Confirmación de Recepción</h2></div>
        <div class='content'>
            <h3>Hola $name,</h3>
            <p>Gracias por ponerte en contacto con nosotros. Hemos recibido tu mensaje y nos pondremos en contacto contigo a la brevedad.</p>
            <p><strong>Detalles de tu mensaje:</strong></p>
            <ul>
                <li><strong>Asunto:</strong> $subject</li>
                <li><strong>Motivo:</strong> $reason</li>
                <li><strong>Teléfono:</strong> $phone</li>
            </ul>
            <h4>Tu mensaje:</h4>
            <div class='highlight'>$message</div>
            <p style='margin-top:16px;'>Este es un correo de confirmación, por favor no respondas a este mensaje.</p>
        </div>
        <div class='footer'>
            <p>Gracias por confiar en nosotros.</p>
            <p>El equipo de Soporte</p>
            <p><a href='https://hablandoensenas.com/'>Hablando EnSeñas S.A.S</a></p>
        </div>
    </div>
</body>
</html>";

    $headers_user  = "MIME-Version: 1.0\r\n";
    $headers_user .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers_user .= "Content-Transfer-Encoding: 8bit\r\n";
    $headers_user .= "From: no-reply@hablandoensenas.com\r\n";
    $headers_user .= "Reply-To: no-reply@hablandoensenas.com\r\n";

    $mail_user_ok = mail($email, mb_encode_mimeheader($subjectc, "UTF-8"), $body_user, $headers_user);

    // ── CORREO AL ADMINISTRADOR ──────────────────────────────────────────────
    // Destinatarios: agrega o comenta el tercero según necesidad
    $admin_emails = [
        "maurospinarev@gmail.com",
        "info@hablandoensenas.com",
        // "tercero@ejemplo.com",   // <-- descomenta y edita para agregar un tercero
    ];
    $admin_to = implode(", ", $admin_emails);

    $body_admin  = "Nombre: $name\r\n";
    $body_admin .= "Correo Electrónico: $email\r\n";
    $body_admin .= "Teléfono: $phone\r\n";
    $body_admin .= "Título: $subject\r\n";
    $body_admin .= "Motivo: $reason\r\n";
    $body_admin .= "Mensaje:\r\n$message\r\n";

    $headers_admin  = "From: no-reply@hablandoensenas.com\r\n";
    $headers_admin .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers_admin .= "Content-Transfer-Encoding: 8bit\r\n";

    $mail_admin_ok = mail($admin_to, mb_encode_mimeheader("Mensaje Formulario Página", "UTF-8"), $body_admin, $headers_admin);

    // ── RESPUESTA FINAL ──────────────────────────────────────────────────────
    if ($mail_user_ok && $mail_admin_ok) {
        show_popup("Tu mensaje ha sido enviado satisfactoriamente. ¡Muy pronto nos pondremos en contacto!\n\nEn caso de algún error comunícate al correo hablandoensenas@gmail.com, info@hablandoensenas.com o maurospinarev@gmail.com");
    } else {
        show_popup("Hubo un error al enviar el mensaje. Por favor comunícate directamente al correo hablandoensenas@gmail.com, info@hablandoensenas.com o maurospinarev@gmail.com");
    }
}
?>