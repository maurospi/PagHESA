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
    $name = isset($_POST['name']) ? sanitize_input($_POST['name']) : '';
    $email = isset($_POST['email']) ? sanitize_input($_POST['email']) : '';
    $message = isset($_POST['message']) ? sanitize_input($_POST['message']) : '';
    $phone = isset($_POST['phone']) ? sanitize_input($_POST['phone']) : '';
    $subject = isset($_POST['subject']) ? sanitize_input($_POST['subject']) : '';
    $reason = isset($_POST['reason']) ? sanitize_input($_POST['reason']) : '';

    // **Validación del nombre**
    if (!preg_match("/^[a-zA-ZÀ-ÿ\s]+$/", $name) || in_array($name, $nombres_bloqueados)) {
        echo "<script>
                alert('Error: Nombre inválido o no permitido ($name). En caso de algun error comunicarse al correo hablandoensenas@gmail.com o info@hablandoensenas.com o maurospinarev@gmail.com');
                window.location.href = 'index.html';
              </script>";
        exit;
    }

    // **Validación del correo bloqueado**
    if (in_array($email, $correos_bloqueados)) {
        echo "<script>
                alert('Error: Este correo no está permitido ($email). En caso de algun error comunicarse al correo hablandoensenas@gmail.com o info@hablandoensenas.com o maurospinarev@gmail.com');
                window.location.href = 'index.html';
              </script>";
        exit;
    }

    // **Extraer dominio y extensión del correo**
    $dominio_email = strtolower(strrchr($email, "@")); // Extrae el dominio
    $extension_email = strtolower(strrchr($email, ".")); // Extrae la extensión

    // **Verificar si el correo tiene un dominio o extensión bloqueada**
    if (in_array($dominio_email, $dominios_bloqueados) || in_array($extension_email, $extensiones_bloqueadas)) {
        echo "<script>
                alert('Error: No se permiten correos con este dominio o extensión ($email). En caso de algun error comunicarse al correo hablandoensenas@gmail.com o info@hablandoensenas.com o maurospinarev@gmail.com');
                window.location.href = 'index.html';
              </script>";
        exit;
    }

    // **Validación del título**
    if (empty($subject) || preg_match("/" . implode("|", $palabras_bloqueadas) . "/i", $subject)) {
        echo "<script>
                alert('Error: El título no es válido ($subject).');
                window.location.href = 'index.html';
              </script>";
        exit;
    }

    // **Validación del motivo**
    if (empty($reason) || preg_match("/" . implode("|", $palabras_bloqueadas) . "/i", $reason)) {
        echo "<script>
                alert('Error: El motivo no es válido ($reason).');
                window.location.href = 'index.html';
              </script>";
        exit;
    }

    // **Validación del mensaje**
    if (empty($message) || preg_match("/" . implode("|", $palabras_bloqueadas) . "/i", $message)) {
        echo "<script>
                alert('Error: El mensaje no es válido ($message).');
                window.location.href = 'index.html';
              </script>";
        exit;
    }
    

    // **Configurar correo de confirmación**
    $to = $email;
    $subjectc = "Confirmación de recepción de tu mensaje";

    $body = "<html lang='es'>
    <head>
        <meta charset='utf-8'>
        <style>
            body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
            .container { width: 100%; max-width: 600px; margin: 20px auto; padding: 20px; background-color: #ffffff; box-shadow: 0px 4px 12px rgba(0,0,0,0.1); }
            .header { background-color: rgba(163, 195, 76, 0.57); color: white; padding: 10px 0; text-align: center; }
            .content { padding: 20px; color: #333; }
            .footer { font-size: 12px; color: #999; text-align: center; margin-top: 20px; }
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
                <p style='background-color: #f9f9f9; padding: 10px; border-left: 3px solid rgba(163, 195, 76, 0.57);'>$message</p>
                <p>Este es un correo de confirmación, por favor no respondas a este mensaje.</p>
            </div>
            <div class='footer'>
                <p>Gracias por confiar en nosotros.</p>
                <p>El equipo de Soporte</p>
                <p><a href='https://hablandoensenas.com/'>Hablando EnSeñas S.A.S</a></p>
            </div>
        </div>
    </body>
    </html>";

    // **Headers para el correo**
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "Content-Transfer-Encoding: 8bit\r\n";
    $headers .= "From: no-reply@hablandoensenas.com\r\n";
    $headers .= "Reply-To: no-reply@hablandoensenas.com\r\n";

    // Enviar correo de confirmación
    if (mail($to, mb_encode_mimeheader($subjectc, "UTF-8"), $body, $headers)) {
        echo "<script>
                alert('Tu mensaje ha sido enviado satisfactoriamente. Muy pronto nos pondremos en contacto! En caso de algun error comunicarse al correo hablandoensenas@gmail.com o info@hablandoensenas.com o maurospinarev@gmail.com'');
                window.location.href = 'index.html';
              </script>";
    } else {
        echo "<script>
                alert('Hubo un error al enviar el correo de confirmación. En caso de algun error comunicarse al correo hablandoensenas@gmail.com o info@hablandoensenas.com o maurospinarev@gmail.com'');
                window.location.href = 'index.html';
              </script>";
    }

    // **Correo al administrador**
    $body_admin = "Nombre: $name\n"; 
    $body_admin .= "Correo Electrónico: $email\n";  
    $body_admin .= "Teléfono: $phone\n"; 
    $body_admin .= "Título: $subject\n";
    $body_admin .= "Motivo: $reason\n";
    $body_admin .= "Mensaje:\n$message\n";  

    $admin_headers = "From: no-reply@hablandoensenas.com\r\n";
    $admin_headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $admin_headers .= "Content-Transfer-Encoding: 8bit\r\n";

    if (mail("maurospinarev@gmail.com, info@hablandoensenas.com", "Mensaje Formulario Página", $body_admin, $admin_headers)) {
        echo "<script>
                alert('Mensaje enviado al administrador, muy pronto nos pondremos en contacto. En caso de algun error comunicarse al correo hablandoensenas@gmail.com o info@hablandoensenas.com o maurospinarev@gmail.com'');
                window.location.href = 'index.html';
              </script>";
    } else {
        echo "<script>
                alert('Hubo un error al enviar el mensaje al administrador. En caso de algun error comunicarse al correo hablandoensenas@gmail.com o info@hablandoensenas.com o maurospinarev@gmail.com'');
                window.location.href = 'index.html';
              </script>";
    }
}
?>


<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <script>
        alert("Tu mensaje ha sido enviado satisfactoriamente, muy pronto nos pondremos en contacto! En caso de algun error comunicarse al correo hablandoensenas@gmail.com o info@hablandoensenas.com o maurospinarev@gmail.com"
        );
    </script>
    <meta http-equiv="refresh" content="0; url=index.html"> 
</head>
</html>
