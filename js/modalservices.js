//document.querySelectorAll(".open-modal").forEach(button => {
//    button.addEventListener("click", () => {
//      const modalId = button.getAttribute("data-modal");
//      const modal = document.getElementById(modalId);
//      modal.classList.remove("closing");
//      modal.style.display = "flex";
//    });
//  });
//  
//  document.querySelectorAll(".modal .close").forEach(close => {
//    close.addEventListener("click", () => {
//      const modal = close.parentElement.parentElement;
//      modal.classList.add("closing");
//      setTimeout(() => {
//        modal.style.display = "none";
//      }, 500); // Duración de la animación (en ms)
//    });
//  });
//  
//  window.addEventListener("click", (e) => {
//    if (e.target.classList.contains("modal")) {
//      const modal = e.target;
//      modal.classList.add("closing");
//      setTimeout(() => {
//        modal.style.display = "none";
//      }, 500); // Duración de la animación (en ms)
//    }
//  });

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
