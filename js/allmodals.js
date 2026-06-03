// Seleccionar todos los botones y modales
//const buttons = document.querySelectorAll(".open-modal");
//const modals = document.querySelectorAll(".modal");
//const closes = document.querySelectorAll(".close");
//
//// Abrir el modal correspondiente
//buttons.forEach(button => {
//  button.addEventListener("click", () => {
//    const modalId = button.getAttribute("data-modal");
//    const modal = document.getElementById(modalId);
//    modal.style.display = "flex";
//  });
//});
//
//// Cerrar el modal al hacer clic en la 'X'
//closes.forEach(close => {
//  close.addEventListener("click", () => {
//    close.parentElement.parentElement.style.display = "none";
//  });
//});
//
//// Cerrar el modal al hacer clic fuera del contenido
//window.addEventListener("click", (event) => {
//  modals.forEach(modal => {
//    if (event.target === modal) {
//      modal.style.display = "none";
//    }
//  });
//});
//

//// Open modal on button click
//document.querySelectorAll(".service-button").forEach(button => {
//    button.addEventListener("click", () => {
//      const modalId = button.getAttribute("data-modal");
//      document.getElementById(modalId).style.display = "flex";
//    });
//  });
//  
//  // Close modal on clicking close button
//  document.querySelectorAll(".service-modal .close").forEach(close => {
//    close.addEventListener("click", () => {
//      close.parentElement.parentElement.style.display = "none";
//    });
//  });
//  
//  // Close modal on clicking outside the modal content
//  window.addEventListener("click", (event) => {
//    if (event.target.classList.contains("service-modal")) {
//      event.target.style.display = "none";
//    }
//  });
//  

//document.querySelectorAll(".open-modal").forEach(button => {
//  button.addEventListener("click", () => {
//    const modalId = button.getAttribute("data-modal");
//    const modal = document.getElementById(modalId);
//    modal.classList.remove("closing");
//    modal.style.display = "flex";
//  });
//});
//
//document.querySelectorAll(".modal .close").forEach(close => {
//  close.addEventListener("click", () => {
//    const modal = close.parentElement.parentElement;
//    modal.classList.add("closing");
//    setTimeout(() => {
//      modal.style.display = "none";
//    }, 500); // Duración de la animación (en ms)
//  });
//});
//
//window.addEventListener("click", (e) => {
//  if (e.target.classList.contains("modal")) {
//    const modal = e.target;
//    modal.classList.add("closing");
//    setTimeout(() => {
//      modal.style.display = "none";
//    }, 500); // Duración de la animación (en ms)
//  }
//});

document.querySelectorAll(".open-modal").forEach(button => {
  button.addEventListener("click", () => {
      const modalId = button.getAttribute("data-modal");
      const modal = document.getElementById(modalId);

      modal.style.display = "flex"; // Mostrar el modal
      modal.classList.remove("fade-out");

      requestAnimationFrame(() => {
          modal.classList.add("fade-in");
      });
  });
});

document.querySelectorAll(".modal .close").forEach(close => {
  close.addEventListener("click", () => {
      const modal = close.closest(".modal");

      modal.classList.remove("fade-in");
      modal.classList.add("fade-out");

      setTimeout(() => {
          modal.style.display = "none";
          modal.classList.remove("fade-out");
      }, 500);
  });
});

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
      const modal = e.target;

      modal.classList.remove("fade-in");
      modal.classList.add("fade-out");

      setTimeout(() => {
          modal.style.display = "none";
          modal.classList.remove("fade-out");
      }, 500);
  }
});
