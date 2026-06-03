//document.querySelectorAll(".open-modal").forEach(button => {
//    button.addEventListener("click", () => {
//      const modalId = button.getAttribute("data-modal");
//      document.getElementById(modalId).style.display = "flex";
//    });
//  });
//  
//  document.querySelectorAll(".modal-games .close").forEach(close => {
//    close.addEventListener("click", () => {
//      close.parentElement.parentElement.style.display = "none";
//    });
//  });
//
//
//  // Close modal on close button click
//closeButtons.forEach((button) => {
//    button.addEventListener("click", () => {
//      const modal = button.closest(".modal-games");
//      if (modal) {
//        modal.classList.add("fade-out");
//        setTimeout(() => {
//          modal.style.display = "none";
//          modal.classList.remove("fade-out");
//        }, 400); // Match animation duration
//      }
//    });
//  });
//  
//  // Close modal when clicking outside modal content
//  modals.forEach((modal) => {
//    modal.addEventListener("click", (event) => {
//      if (event.target === modal) {
//        modal.classList.add("fade-out");
//        setTimeout(() => {
//          modal.style.display = "none";
//          modal.classList.remove("fade-out");
//        }, 400); // Match animation duration
//      }
//    });
//  });

document.querySelectorAll(".open-modal").forEach(button => {
    button.addEventListener("click", () => {
      const modalId = button.getAttribute("data-modal");
      document.getElementById(modalId).style.display = "flex";
    });
  });
  
  document.querySelectorAll(".modal-games .closeg").forEach(close => {
    close.addEventListener("click", () => {
      close.parentElement.parentElement.style.display = "none";
    });
  });
  
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-games")) {
      e.target.style.display = "none";
    }
  }); 
  