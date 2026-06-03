// script.js

const numFigures = 10; // Número de figuras que aparecerán en el fondo

const createFigure = () => {
    const figureTypes = ['circle', 'square', 'triangle'];
    const figure = document.createElement('div');
    const figureType = figureTypes[Math.floor(Math.random() * figureTypes.length)];
    const size = Math.random() * 50 + 30; // Tamaño aleatorio entre 30 y 80px

    figure.classList.add('figure', figureType);
    figure.style.width = `${size}px`;
    figure.style.height = `${size}px`;

    // Posición aleatoria
    figure.style.top = `${Math.random() * 100}vh`;
    figure.style.left = `${Math.random() * 100}vw`;

    document.querySelector('.others').appendChild(figure);
};

// Crear las figuras animadas
for (let i = 0; i < numFigures; i++) {
    createFigure();
}
