

<?php


$response = $post['g-recaptcha-response'];
 
$verify = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret=6Lfmv1oaAAAAANx4hSs27BrZbb0xZcNvPLrcGO0c&response=
='.$response.'&remoteip='.$_SERVER['REMOTE_ADDR'], false);
$captcha_success=json_decode($verify);
if ($captcha_success->success==false) {
    $error = true;
}



$name=$_POST['name'];
$Email=$_POST['email'];
$message=$_POST['message'];


    
    $body .= "Nombre: " . $name . "\n"; 
    $body .= "Correo Electrónico: " . $Email . "\n\n";  
    $body .= "Mensaje: " . $message . "\n"; 

    //replace with your email
    mail("info@hablandoensenas.com","Solicitud Contáctenos",$body); 

  
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<script>alert("Tu mensaje ha sido enviado satisfactoriamente, muy pronto nos pondremos en contacto!!");</script>
<meta HTTP-EQUIV="REFRESH" content="0; url=index.html"> 

</head>