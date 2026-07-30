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
const progressText = document.getElementById("progress-text");
const image = document.getElementById("image");
const preloader = document.getElementById("preloader");
let progressInterval = null;
let hasFinished = false;

function finishLoading() {
    if (hasFinished) return;
    hasFinished = true;

    if (progressInterval) {
        clearInterval(progressInterval);
    }

    progress = 100;
    if (progressText) {
        progressText.innerHTML = `Cargando <span>100%</span>`;
    }
    if (image) {
        image.style.filter = "grayscale(0%)";
    }

    window.setTimeout(function () {
        if (preloader) {
            preloader.style.opacity = "0";
            window.setTimeout(function () {
                preloader.style.display = "none";
            }, 300);
        }
    }, 200);
}

function startLoader() {
    const startTime = Date.now();
    const duration = 2000; // Animate smoothly over 2 seconds

    progressInterval = setInterval(function() {
        const elapsed = Date.now() - startTime;
        let percentage = (elapsed / duration) * 100;
        
        if (percentage < 99) {
            progress = Math.min(99, percentage);
        }

        if (progressText) {
            progressText.innerHTML = `Cargando <span>${Math.floor(progress)}%</span>`;
        }
        if (image) {
            image.style.filter = `grayscale(${100 - progress}%)`;
        }

        if (elapsed >= duration) {
            clearInterval(progressInterval);
            finishLoading();
        }
    }, 30);
}

// Start loader as early as possible
if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", startLoader);
} else {
    startLoader();
}

// Hide preloader shortly after DOMContentLoaded, or immediately when window loads, or after 2.5s absolute maximum.
document.addEventListener("DOMContentLoaded", function() {
    window.setTimeout(finishLoading, 1500);
});

window.addEventListener("load", function() {
    finishLoading();
});

// Guarantee that after 2.5 seconds the loader is completely gone
window.setTimeout(function() {
    finishLoading();
}, 2500);
