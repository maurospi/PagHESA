// Obtener todas las tarjetas y modales
const cards = document.querySelectorAll(".card");
const modals = document.querySelectorAll(".modalo");
const closeButtons = document.querySelectorAll(".modalo .close");

// Abrir el modal al hacer clic en la tarjeta
cards.forEach((card) => {
  card.addEventListener("click", () => {
    const modalId = card.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove("fade-out");
      modal.classList.add("fade-in");
      modal.style.display = "flex";
    }
  });
});

// Cerrar el modal al hacer clic en el botón de cerrar
closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modalo");
    if (modal) {
      modal.classList.remove("fade-in");
      modal.classList.add("fade-out");
      setTimeout(() => {
        modal.style.display = "none";
        modal.classList.remove("fade-out");
      }, 500); // Duración de la animación
    }
  });
});

// Cerrar el modal al hacer clic fuera del contenido
modals.forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("fade-in");
      modal.classList.add("fade-out");
      setTimeout(() => {
        modal.style.display = "none";
        modal.classList.remove("fade-out");
      }, 500); // Duración de la animación
    }
  });
});
