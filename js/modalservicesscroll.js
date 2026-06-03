//document.addEventListener("DOMContentLoaded", function () {
//	const modalContent = document.getElementById("modal-content");
//	const scrollbar = document.getElementById("ascrail2000");
//	const scrollThumb = document.getElementById("scroll-thumb");
//
//	function updateScroll() {
//		const contentHeight = modalContent.scrollHeight; // Altura total del contenido
//		const visibleHeight = modalContent.clientHeight; // Altura visible del modal
//		const scrollHeight = contentHeight - visibleHeight;
//
//		if (scrollHeight > 0) {
//			scrollbar.style.opacity = "1"; // Muestra el scrollbar si hay contenido extra
//			const thumbHeight = Math.max((visibleHeight / contentHeight) * visibleHeight, 30); // Calcula la altura del thumb
//			scrollThumb.style.height = `${thumbHeight}px`;
//		} else {
//			scrollbar.style.opacity = "0"; // Oculta el scrollbar si no es necesario
//		}
//	}
//
//	// Sincronizar el scroll del modal con el scrollbar personalizado
//	modalContent.addEventListener("scroll", function () {
//		const scrollTop = modalContent.scrollTop;
//		const contentHeight = modalContent.scrollHeight;
//		const visibleHeight = modalContent.clientHeight;
//		const maxScroll = contentHeight - visibleHeight;
//		const scrollPercent = scrollTop / maxScroll;
//
//		const thumbMaxMove = visibleHeight - scrollThumb.clientHeight;
//		scrollThumb.style.top = `${scrollPercent * thumbMaxMove}px`;
//	});
//
//	// Llamar a la función al abrir el modal
//	updateScroll();
//});
//

//document.addEventListener("DOMContentLoaded", function () {
//	const modalContent = document.getElementById("modal-content");
//	const scrollbar = document.getElementById("scrollbar");
//	const scrollThumb = document.getElementById("scroll-thumb");
//
//	// Función para actualizar el tamaño del scrollbar
//	function updateScroll() {
//		const contentHeight = modalContent.scrollHeight;
//		const visibleHeight = modalContent.clientHeight;
//		const scrollHeight = contentHeight - visibleHeight;
//
//		if (scrollHeight > 0) {
//			scrollbar.style.opacity = "1";
//			const thumbHeight = Math.max((visibleHeight / contentHeight) * visibleHeight, 30);
//			scrollThumb.style.height = `${thumbHeight}px`;
//		} else {
//			scrollbar.style.opacity = "0";
//		}
//	}
//
//	// Sincroniza el scrollbar con el desplazamiento del modal
//	modalContent.addEventListener("scroll", function () {
//		const scrollTop = modalContent.scrollTop;
//		const contentHeight = modalContent.scrollHeight;
//		const visibleHeight = modalContent.clientHeight;
//		const maxScroll = contentHeight - visibleHeight;
//		const scrollPercent = scrollTop / maxScroll;
//		const thumbMaxMove = visibleHeight - scrollThumb.clientHeight;
//
//		scrollThumb.style.top = `${scrollPercent * thumbMaxMove}px`;
//	});
//
//	// Llamar a la función para actualizar el scroll al abrir el modal
//	updateScroll();
//});
//

document.addEventListener("DOMContentLoaded", function () {
	const modalContent = document.getElementById("modal-content");
	const scrollbar = document.getElementById("scrollbar");
	const scrollThumb = document.getElementById("scroll-thumb");
	const scrollArrow = document.getElementById("scroll-arrow");

	// Función para actualizar el tamaño del scrollbar
	function updateScroll() {
		const contentHeight = modalContent.scrollHeight;
		const visibleHeight = modalContent.clientHeight;
		const scrollHeight = contentHeight - visibleHeight;

		if (scrollHeight > 0) {
			scrollbar.style.opacity = "1";
			const thumbHeight = Math.max((visibleHeight / contentHeight) * visibleHeight, 30);
			scrollThumb.style.height = `${thumbHeight}px`;
		} else {
			scrollbar.style.opacity = "0";
		}
	}

	// Sincroniza el scrollbar con el desplazamiento del modal
	modalContent.addEventListener("scroll", function () {
		const scrollTop = modalContent.scrollTop;
		const contentHeight = modalContent.scrollHeight;
		const visibleHeight = modalContent.clientHeight;
		const maxScroll = contentHeight - visibleHeight;
		const scrollPercent = scrollTop / maxScroll;
		const thumbMaxMove = visibleHeight - scrollThumb.clientHeight;

		scrollThumb.style.top = `${scrollPercent * thumbMaxMove}px`;

		// Mostrar / Ocultar la flecha según la posición del scroll
		if (scrollTop + visibleHeight >= contentHeight - 10) {
			scrollArrow.style.opacity = "0"; // Oculta la flecha al llegar abajo
		} else {
			scrollArrow.style.opacity = "1"; // Muestra la flecha si hay más contenido
		}
	});

	// Llamar a la función para actualizar el scroll al abrir el modal
	updateScroll();
});
