document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let isValid = true;
  
    // Validación del nombre
    const name = document.getElementById('name');
    const nameError = document.getElementById('name-error');
    if (name.value.trim() === "") {
      nameError.style.display = "block";
      isValid = false;
    } else {
      nameError.style.display = "none";
    }
  
    // Validación del correo
    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email.value)) {
      emailError.style.display = "block";
      isValid = false;
    } else {
      emailError.style.display = "none";
    }
  
    // Validación del teléfono
    const phone = document.getElementById('phone');
    const phoneError = document.getElementById('phone-error');
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone.value)) {
      phoneError.style.display = "block";
      isValid = false;
    } else {
      phoneError.style.display = "none";
    }
  
    // Validación del motivo
    const reason = document.getElementById('reason');
    const reasonError = document.getElementById('reason-error');
    if (reason.value === "") {
      reasonError.style.display = "block";
      isValid = false;
    } else {
      reasonError.style.display = "none";
    }
  
    // Validación del asunto
    const subject = document.getElementById('subject');
    const subjectError = document.getElementById('subject-error');
    if (subject.value.trim() === "") {
      subjectError.style.display = "block";
      isValid = false;
    } else {
      subjectError.style.display = "none";
    }
  
    // Validación del captcha
    const captcha = document.getElementById('captcha');
    const captchaError = document.getElementById('captcha-error');
    if (captcha.value !== "8") {
      captchaError.style.display = "block";
      isValid = false;
    } else {
      captchaError.style.display = "none";
    }
  
    // Si el formulario es válido
    if (isValid) {
      // Mostrar mensaje de confirmación
      document.getElementById('confirmation').style.display = 'block';
      
      // Ocultar el formulario
      document.getElementById('contact-form').reset();
      document.getElementById('contact-form').style.display = 'none';
      
      setTimeout(function() {
        // Puedes agregar una redirección o limpiar la pantalla después de unos segundos.
        document.getElementById('contact-form').style.display = 'block';
        document.getElementById('confirmation').style.display = 'none';
      }, 5000);
    }
  });
  