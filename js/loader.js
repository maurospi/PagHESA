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
let progressTimer = null;

function increaseProgress() {
    if (!progressText || !image || !preloader) {
        return;
    }

    if (progressTimer) {
        clearInterval(progressTimer);
    }

    progressTimer = window.setInterval(function () {
        progress = Math.min(100, progress + Math.random() * 1.1 + 0.4);

        if (progressText) {
            progressText.innerHTML = `Cargando <span>${Math.floor(progress)}%</span>`;
        }
        if (image) {
            image.style.filter = `grayscale(${100 - progress}%)`;
        }

        if (progress >= 100) {
            clearInterval(progressTimer);
            progressTimer = null;
        }
    }, 90);
}

document.addEventListener("DOMContentLoaded", function () {
    increaseProgress();
});

window.addEventListener("load", function () {
    progress = 100;
    if (progressText) {
        progressText.innerHTML = `Cargando <span>100%</span>`;
    }
    if (image) {
        image.style.filter = "grayscale(0%)";
    }

    if (progressTimer) {
        clearInterval(progressTimer);
        progressTimer = null;
    }

    window.setTimeout(function () {
        if (preloader) {
            preloader.style.opacity = "0";
            window.setTimeout(function () {
                preloader.style.display = "none";
            }, 220);
        }
    }, 120);
});
