<?php



$destino="santi900520@gmail.com";

$name=$_POST['nameFormulario'];
$Email=$_POST['emailFormulario'];
$message=$_POST['celularFormulario'];
$horario=$_POST['gender'];
$horarioDos=$_POST['genderDos'];
$sugerencia=$_POST['sugerenciaHorario'];

$contenido = "Nombre:". $name ."\n". "Correo:" . $Email ."\n". "Celular: " . $message  ."\n"."horario1:" .$horario. "\n"."horario2: " . $horarioDos  ."\n". "sugerencia: " . $sugerencia ;

mail($destino,"Contacto",$contenido);

        $name;$Email;$sugerencia;$captcha;
		if(isset($_POST['nameFormulario'])){
          $name=$_POST['nameFormulario'];
        if(isset($_POST['emailFormulario'])){
          $Email=$_POST['emailFormulario'];
        }if(isset($_POST['sugerenciaHorario'])){
          $sugerencia=$_POST['sugerenciaHorario'];
        }if(isset($_POST['g-recaptcha-response'])){
          $captcha=$_POST['g-recaptcha-response'];
        }
        if(!$captcha){
print '<script language="JavaScript">'; 
print 'alert("Lo sentimos al parecer no has confirmado nuestro CAPTCHA");'; 
print '</script>'; 
          echo"<script  language='javascript'>window.location='Contacto.html'</script>";
        }
        $response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=6Lf_DI4UAAAAAFQDk7bevQwuvWnyEZ4YbykSjJ0G&response=".$captcha."&remoteip=".$_SERVER['REMOTE_ADDR']);
        if($response.success==true)
        {

print '<script language="JavaScript">'; 
print 'alert("Mensaje Enviado con Exito pronto nos comunicaremos con usted");'; 
print '</script>'; 

echo"<script  language='javascript'>window.location='Contacto.html'</script>"; 

       }else{
			}
			}


?>