//let progress = 0;
//        let progressText = document.getElementById("progress-text");
//        let image = document.getElementById("image");
//        let preloader = document.getElementById("preloader");
//
//        function increaseProgress() {
//            if (progress < 100) {
//                progress += Math.random() * 2; // Aumenta lentamente en valores pequeños
//                if (progress > 100) progress = 100;
//
//                progressText.innerHTML = `Cargando <span>${Math.floor(progress)}%</span>`;
//                image.style.filter = `grayscale(${100 - progress}%)`;
//
//                setTimeout(increaseProgress, 50); // Controla la velocidad de la animación
//            }
//        }
//
//        document.addEventListener("DOMContentLoaded", function () {
//            increaseProgress(); // Comienza a incrementar el porcentaje
//        });
//
//        window.addEventListener("load", function () {
//            progress = 100;
//            progressText.innerHTML = `Cargando <span>100%</span>`;
//            image.style.filter = "grayscale(0%)"; // Imagen completamente a color
//
//            setTimeout(() => {
//                preloader.style.opacity = "0"; // Suaviza la desaparición
//                setTimeout(() => {
//                    preloader.style.display = "none";
//                }, 500);
//            }, 500); // Espera 3 segundos tras la carga completa
//        });
//
let progress = 0;
let progressText = document.getElementById("progress-text");
let image = document.getElementById("image");
let preloader = document.getElementById("preloader");

function increaseProgress() {
    if (progress < 100) {
        progress += Math.random() * 5 + 3; // Aumenta más rápido, entre 3 y 8 por ciclo
        if (progress > 100) progress = 100;

        progressText.innerHTML = `Cargando <span>${Math.floor(progress)}%</span>`;
        image.style.filter = `grayscale(${100 - progress}%)`;

        setTimeout(increaseProgress, 30); // Más rápido: ejecuta cada 30ms
    }
}

document.addEventListener("DOMContentLoaded", function () {
    increaseProgress(); // Comienza a incrementar el porcentaje
});

window.addEventListener("load", function () {
    progress = 100;
    progressText.innerHTML = `Cargando <span>100%</span>`;
    image.style.filter = "grayscale(0%)"; // Imagen completamente a color

    setTimeout(() => {
        preloader.style.opacity = "0"; // Suaviza la desaparición
        setTimeout(() => {
            preloader.style.display = "none";
        }, 500);
    }, 300); // Desaparece un poco más rápido tras la carga completa
});
