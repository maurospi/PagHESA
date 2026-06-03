const GAME_DATA = {
    // Estructura de datos para los juegos.
    // Cada tema tiene 'title', 'icon' y 'content'.
    // 'content' es un array de objetos con:
    // - id: Identificador único
    // - word: Palabra asociada
    // - media: Ruta al archivo (video .mp4, imagen .jpg/.png, gif .gif)
    // - type: 'video' | 'image' | 'gif' (gif se trata como imagen)
    // - options: Opciones para juegos de preguntas

    'saludos': {
        title: "Saludos y Cortesía",
        icon: "../../../gifs/Hablando-en-señas-transparente-bordes.gif",
        content: [
            // PRUEBA DE VIDEO: Asegúrate de que este archivo exista en la ruta indicada:
            { id: 's1', word: 'Hola', media: '../../../videos/saludos/hola.mp4', options: ['Adiós', 'Hola', 'Gracias', 'Perdón'], type: 'video' },
            { id: 's2', word: 'Con mucho gusto', media: '../../../videos/saludos/conMuchoGusto.mp4', options: ['Por favor', 'De nada', 'Gracias', 'Con mucho gusto'], type: 'video' },
            { id: 's3', word: 'Como estas', media: '../../../videos/saludos/comoEstas.mp4', options: ['Hola', 'Como estas', 'Bien', 'Mal'], type: 'video' },
            { id: 's4', word: 'Buenos dias', media: '../../../videos/saludos/buenosDias.mp4', options: ['Buenas noches', 'Buenos dias', 'Buenas tardes', 'Hola'], type: 'video' },
            { id: 's5', word: 'Buenas tardes', media: '../../../videos/saludos/buenasTardes.mp4', options: ['Buenas noches', 'Hola', 'Buenas tardes', 'Buenos días'], type: 'video' },
            { id: 's6', word: 'Buenas noches', media: '../../../videos/saludos/buenasNoches.mp4', options: ['Buenas noches', 'Buenos días', 'Buenas tardes', 'Hola'], type: 'video' }
        ]
    },
    'abecedario': {
        title: "El Abecedario",
        icon: "../../../images/mainjuegos/ABCD.png",
        content: [
            { id: 'f1', word: 'A', media: '../../../videos/abecedario/letraA.mp4', options: ['A', 'B', 'C', 'D'], type: 'video' },
            { id: 'f2', word: 'B', media: '../../../videos/abecedario/letraB.mp4', options: ['B', 'C', 'D', 'E'], type: 'video' },
            { id: 'f3', word: 'C', media: '../../../videos/abecedario/letraC.mp4', options: ['C', 'D', 'E', 'F'], type: 'video' },
            { id: 'f4', word: 'D', media: '../../../videos/abecedario/letraD.mp4', options: ['D', 'E', 'F', 'G'], type: 'video' },
            { id: 'f5', word: 'E', media: '../../../videos/abecedario/letraE.mp4', options: ['E', 'F', 'G', 'H'], type: 'video' },
            { id: 'f6', word: 'F', media: '../../../videos/abecedario/letraF.mp4', options: ['F', 'G', 'H', 'I'], type: 'video' },
            { id: 'f7', word: 'G', media: '../../../videos/abecedario/letraG.mp4', options: ['G', 'H', 'I', 'J'], type: 'video' },
            { id: 'f8', word: 'H', media: '../../../videos/abecedario/letraH.mp4', options: ['H', 'I', 'J', 'K'], type: 'video' },
            { id: 'f9', word: 'I', media: '../../../videos/abecedario/letraI.mp4', options: ['I', 'J', 'K', 'L'], type: 'video' },
            { id: 'f10', word: 'J', media: '../../../videos/abecedario/letraJ.mp4', options: ['J', 'K', 'L', 'M'], type: 'video' },
            { id: 'f11', word: 'K', media: '../../../videos/abecedario/letraK.mp4', options: ['K', 'L', 'M', 'N'], type: 'video' },
            { id: 'f12', word: 'L', media: '../../../videos/abecedario/letraL.mp4', options: ['L', 'M', 'N', 'O'], type: 'video' },
            { id: 'f13', word: 'M', media: '../../../videos/abecedario/letraM.mp4', options: ['M', 'N', 'O', 'P'], type: 'video' },
            { id: 'f14', word: 'N', media: '../../../videos/abecedario/letraN.mp4', options: ['N', 'O', 'P', 'Q'], type: 'video' },
            { id: 'f15', word: 'O', media: '../../../videos/abecedario/letraO.mp4', options: ['O', 'P', 'Q', 'R'], type: 'video' },
            { id: 'f16', word: 'P', media: '../../../videos/abecedario/letraP.mp4', options: ['P', 'Q', 'R', 'S'], type: 'video' },
            { id: 'f17', word: 'Q', media: '../../../videos/abecedario/letraQ.mp4', options: ['Q', 'R', 'S', 'T'], type: 'video' },
            { id: 'f18', word: 'R', media: '../../../videos/abecedario/letraR.mp4', options: ['R', 'S', 'T', 'U'], type: 'video' },
            { id: 'f19', word: 'S', media: '../../../videos/abecedario/letraS.mp4', options: ['S', 'T', 'U', 'V'], type: 'video' },
            { id: 'f20', word: 'T', media: '../../../videos/abecedario/letraT.mp4', options: ['T', 'U', 'V', 'W'], type: 'video' },
            { id: 'f21', word: 'U', media: '../../../videos/abecedario/letraU.mp4', options: ['U', 'V', 'W', 'X'], type: 'video' },
            { id: 'f22', word: 'V', media: '../../../videos/abecedario/letraV.mp4', options: ['V', 'W', 'X', 'Y'], type: 'video' },
            { id: 'f23', word: 'W', media: '../../../videos/abecedario/letraW.mp4', options: ['W', 'X', 'Y', 'Z'], type: 'video' },
            { id: 'f24', word: 'X', media: '../../../videos/abecedario/letraX.mp4', options: ['X', 'Y', 'Z', 'A'], type: 'video' },
            { id: 'f25', word: 'Y', media: '../../../videos/abecedario/letraY.mp4', options: ['Y', 'Z', 'A', 'B'], type: 'video' },
            { id: 'f26', word: 'Z', media: '../../../videos/abecedario/letraZ.mp4', options: ['Z', 'A', 'B', 'C'], type: 'video' }
        ]
    },
    'colores': {
        title: "Colores",
        icon: "../../../images/mainjuegos/COLORES.png",
        content: [
            { id: 'a1', word: 'Azul', media: '../../../videos/colores/colorAzul.mp4', options: ['Azul', 'Blanco', 'Cafe', 'Gris'], type: 'video' },
            { id: 'a2', word: 'Blanco', media: '../../../videos/colores/colorBlanco.mp4', options: ['Blanco', 'Negro', 'Dorado', 'Naranja'], type: 'video' },
            { id: 'a3', word: 'Cafe', media: '../../../videos/colores/colorCafe.mp4', options: ['Cafe', 'Verde', 'Rosado', 'Rojo'], type: 'video' },
            { id: 'a4', word: 'Gris', media: '../../../videos/colores/colorGris.mp4', options: ['Gris', 'Dorado', 'Naranja', 'Verde'], type: 'video' },
            { id: 'a5', word: 'Negro', media: '../../../videos/colores/colorNegro.mp4', options: ['Negro', 'Rojo', 'Azul', 'Blanco'], type: 'video' },
            { id: 'a6', word: 'Dorado', media: '../../../videos/colores/colorDorado.mp4', options: ['Dorado', 'Cafe', 'Rosado', 'Rojo'], type: 'video' },
            { id: 'a7', word: 'Naranja', media: '../../../videos/colores/colorNaranja.mp4', options: ['Naranja', 'Azul', 'Blanco', 'Cafe'], type: 'video' },
            { id: 'a8', word: 'Verde', media: '../../../videos/colores/colorVerde.mp4', options: ['Verde', 'Gris', 'Dorado', 'Naranja'], type: 'video' },
            { id: 'a9', word: 'Rosado', media: '../../../videos/colores/colorRosado.mp4', options: ['Rosado', 'Negro', 'Azul', 'Blanco'], type: 'video' },
            { id: 'a10', word: 'Rojo', media: '../../../videos/colores/colorRojo.mp4', options: ['Rojo', 'Verde', 'Cafe', 'Gris'], type: 'video' }
        ]
    },
    'dias': {
        title: "Días de la Semana",
        icon: "../../../images/mainjuegos/DDSEMANA.png",
        content: [
            { id: 'o1', word: 'Dia', media: '../../../videos/semanas/dia.mp4', options: ['Día', 'Domingo', 'Festivo', 'Jueves'], type: 'video' },
            { id: 'o2', word: 'Domingo', media: '../../../videos/semanas/domingo.mp4', options: ['Domingo', 'Lunes', 'Martes', 'Miercoles'], type: 'video' },
            { id: 'o3', word: 'Festivo', media: '../../../videos/semanas/festivo.mp4', options: ['Festivo', 'Lunes', 'Martes', 'Miercoles'], type: 'video' },
            { id: 'o4', word: 'Jueves', media: '../../../videos/semanas/jueves.mp4', options: ['Jueves', 'Lunes', 'Martes', 'Miercoles'], type: 'video' },
            { id: 'o5', word: 'Lunes', media: '../../../videos/semanas/lunes.mp4', options: ['Lunes', 'Lunes', 'Martes', 'Miercoles'], type: 'video' },
            { id: 'o6', word: 'Martes', media: '../../../videos/semanas/martes.mp4', options: ['Martes', 'Lunes', 'Martes', 'Miercoles'], type: 'video' },
            { id: 'o7', word: 'Miercoles', media: '../../../videos/semanas/miercoles.mp4', options: ['Miercoles', 'Lunes', 'Martes', 'Miercoles'], type: 'video' },
            { id: 'o8', word: 'Sabado', media: '../../../videos/semanas/sabado.mp4', options: ['Sabado', 'Lunes', 'Martes', 'Miercoles'], type: 'video' },
            { id: 'o9', word: 'Semana', media: '../../../videos/semanas/semana.mp4', options: ['Semana', 'Lunes', 'Martes', 'Miercoles'], type: 'video' },
            { id: 'o10', word: 'Semana Santa', media: '../../../videos/semanas/semanaSanta.mp4', options: ['Semana Santa', 'Lunes', 'Martes', 'Miercoles'], type: 'video' },
            { id: 'o11', word: 'Todos los días', media: '../../../videos/semanas/todosLosDias.mp4', options: ['Todos los días', 'Lunes', 'Martes', 'Miercoles'], type: 'video' },
            { id: 'o12', word: 'Viernes', media: '../../../videos/semanas/viernes.mp4', options: ['Viernes', 'Lunes', 'Martes', 'Miercoles'], type: 'video' }
        ]
    },
    'meses': {
        title: "Meses del Año",
        icon: "../../../images/mainjuegos/MESES.png",
        content: [
            { id: 'c1', word: 'Enero', media: '../../../videos/meses/enero.mp4', options: ['Enero', 'Febrero', 'Marzo', 'Abril'], type: 'video' },
            { id: 'c2', word: 'Febrero', media: '../../../videos/meses/febrero.mp4', options: ['Febrero', 'Marzo', 'Abril', 'Mayo'], type: 'video' },
            { id: 'c3', word: 'Marzo', media: '../../../videos/meses/marzo.mp4', options: ['Marzo', 'Abril', 'Mayo', 'Junio'], type: 'video' },
            { id: 'c4', word: 'Abril', media: '../../../videos/meses/abril.mp4', options: ['Abril', 'Mayo', 'Junio', 'Julio'], type: 'video' },
            { id: 'c5', word: 'Mayo', media: '../../../videos/meses/mayo.mp4', options: ['Mayo', 'Junio', 'Julio', 'Agosto'], type: 'video' },
            { id: 'c6', word: 'Junio', media: '../../../videos/meses/junio.mp4', options: ['Junio', 'Julio', 'Agosto', 'Septiembre'], type: 'video' },
            { id: 'c7', word: 'Julio', media: '../../../videos/meses/julio.mp4', options: ['Julio', 'Agosto', 'Septiembre', 'Octubre'], type: 'video' },
            { id: 'c8', word: 'Agosto', media: '../../../videos/meses/agosto.mp4', options: ['Agosto', 'Septiembre', 'Octubre', 'Noviembre'], type: 'video' },
            { id: 'c9', word: 'Septiembre', media: '../../../videos/meses/septiembre.mp4', options: ['Septiembre', 'Octubre', 'Noviembre', 'Diciembre'], type: 'video' },
            { id: 'c10', word: 'Octubre', media: '../../../videos/meses/octubre.mp4', options: ['Octubre', 'Noviembre', 'Diciembre', 'Enero'], type: 'video' },
            { id: 'c11', word: 'Noviembre', media: '../../../videos/meses/noviembre.mp4', options: ['Noviembre', 'Diciembre', 'Enero', 'Febrero'], type: 'video' },
            { id: 'c12', word: 'Diciembre', media: '../../../videos/meses/diciembre.mp4', options: ['Diciembre', 'Enero', 'Febrero', 'Marzo'], type: 'video' },
        ]
    },
    'presentacion': {
        title: "Presentación Personal",
        icon: "../../../images/mainjuegos/PPERSONAL.png",
        content: [
            { id: 'n1', word: 'Apellido', media: '../../../videos/presentacion/apellido.mp4', options: ['Apellido', 'Mi nombre', 'Mi edad', 'Mi ciudad'], type: 'video' },
            { id: 'n2', word: 'Mi direccion', media: '../../../videos/presentacion/miDireccion.mp4', options: ['Mi direccion', 'Mi ciudad', 'Mi edad', 'Mi nombre'], type: 'video' },
            { id: 'n3', word: 'Mi email', media: '../../../videos/presentacion/miEmail.mp4', options: ['Mi email', 'Mi ciudad', 'Mi edad', 'Mi nombre'], type: 'video' },
            { id: 'n4', word: 'Mi nombre', media: '../../../videos/presentacion/miNombre.mp4', options: ['Mi nombre', 'Mi ciudad', 'Mi edad', 'Mi nombre'], type: 'video' },
            { id: 'n5', word: 'Mi numero celular', media: '../../../videos/presentacion/miNumeroCelular.mp4', options: ['Mi numero celular', 'Mi ciudad', 'Mi edad', 'Mi nombre'], type: 'video' },
            { id: 'n6', word: 'Mi numero fijo', media: '../../../videos/presentacion/miNumeroFijo.mp4', options: ['Mi numero fijo', 'Mi ciudad', 'Mi edad', 'Mi nombre'], type: 'video' },
            { id: 'n7', word: 'Mi seña', media: '../../../videos/presentacion/miSeña.mp4', options: ['Mi seña', 'Mi ciudad', 'Mi edad', 'Mi nombre'], type: 'video' }
        ]
    },
    'fechas': {
        title: "Fechas y Tiempo",
        icon: "../../../images/dias.png",
        content: [
            { id: 'd1', word: 'Lunes', media: 'https://placehold.co/400x300/white/345c5c?text=Seña+Lunes', options: ['Martes', 'Lunes', 'Domingo', 'Viernes'], type: 'video' },
            { id: 'd2', word: 'Viernes', media: 'https://placehold.co/400x300/white/345c5c?text=Seña+Viernes', options: ['Jueves', 'Sábado', 'Viernes', 'Miércoles'], type: 'video' },
            { id: 'd3', word: 'Enero', media: 'https://placehold.co/400x300/white/345c5c?text=Seña+Enero', options: ['Febrero', 'Marzo', 'Enero', 'Diciembre'], type: 'video' },
            { id: 'd4', word: 'Diciembre', media: 'https://placehold.co/400x300/white/345c5c?text=Seña+Diciembre', options: ['Noviembre', 'Enero', 'Diciembre', 'Julio'], type: 'video' },
            { id: 'd5', word: 'Hoy', media: 'https://placehold.co/400x300/white/345c5c?text=Seña+Hoy', options: ['Ayer', 'Mañana', 'Hoy', 'Ahora'], type: 'video' }
        ]
    },
    'comidas': {
        title: "Comidas y Bebidas",
        icon: "../../../images/comidas.png",
        content: [
            { id: 'm1', word: 'Agua', media: 'https://placehold.co/400x300/white/345c5c?text=Seña+Agua', options: ['Leche', 'Té', 'Agua', 'Jugo'], type: 'video' },
            { id: 'm2', word: 'Pan', media: 'https://placehold.co/400x300/white/345c5c?text=Seña+Pan', options: ['Arroz', 'Pan', 'Torta', 'Carne'], type: 'video' },
            { id: 'm3', word: 'Café', media: 'https://placehold.co/400x300/white/345c5c?text=Seña+Café', options: ['Té', 'Chocolate', 'Café', 'Cerveza'], type: 'video' },
            { id: 'm4', word: 'Comer', media: 'https://placehold.co/400x300/white/345c5c?text=Seña+Comer', options: ['Beber', 'Dormir', 'Comer', 'Jugar'], type: 'video' },
            { id: 'm5', word: 'Manzana', media: 'https://placehold.co/400x300/white/345c5c?text=Seña+Manzana', options: ['Pera', 'Naranja', 'Mango', 'Manzana'], type: 'video' }
        ]
    }
};



// Helper to get shuffled data for a theme
function getShuffledThemeData(themeId) {
    const data = GAME_DATA[themeId];
    if (!data) return null;

    // Create a shallow copy of content to shuffle
    const content = [...data.content];

    // Fisher-Yates Shuffle
    for (let i = content.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [content[i], content[j]] = [content[j], content[i]];
    }

    return { ...data, content };
}

// Global notification function for all games
function showGameNotification(message, type = 'success') {
    // Basic Oval Alert implementation
    const existing = document.querySelector('.game-notification-oval');
    if (existing) existing.remove();

    const notif = document.createElement('div');
    notif.className = `game-notification-oval ${type}`;
    notif.innerText = message;

    // Apply bulletproof centering styles directly in JS
    Object.assign(notif.style, {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '2147483647',
        padding: '20px 60px',
        borderRadius: '50px',
        color: 'white',
        fontSize: '12px',
        fontWeight: '900',
        textAlign: 'center',
        boxShadow: '0 15px 20px rgba(0, 0, 0, 0.5)',
        border: '5px solid white',
        minWidth: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: '0', // Start hidden for animation
        transition: 'opacity 0.3s ease, transform 0.3s ease'
    });

    if (type === 'success') {
        notif.style.backgroundColor = '#a3c34c';
        notif.style.backgroundImage = 'linear-gradient(135deg, #a3c34c, #8dae36)';
    } else {
        notif.style.backgroundColor = '#e74c3c';
        notif.style.backgroundImage = 'linear-gradient(135deg, #e74c3c, #c0392b)';
    }

    document.body.appendChild(notif);

    // Trigger animation
    requestAnimationFrame(() => {
        notif.style.opacity = '1';
        notif.style.transform = 'translate(-50%, -50%) scale(1.1)';
        setTimeout(() => {
            notif.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 200);
    });

    // Error shake effect on game container
    if (type === 'error') {
        const gameArea = document.querySelector('.game-container') || document.getElementById('game-area');
        if (gameArea) {
            gameArea.classList.add('shake');
            setTimeout(() => gameArea.classList.remove('shake'), 500);
        }
    }

    // Auto remove
    setTimeout(() => {
        notif.style.opacity = '0';
        notif.style.transform = 'translate(-50%, -50%) scale(0.5)';
        setTimeout(() => notif.remove(), 300);
    }, 1500);

    // Trigger Confetti if success
    if (type === 'success') {
        triggerConfetti();
    }
}

// Simple CSS/JS Confetti Engine
function triggerConfetti() {
    const colors = ['#a3c34c', '#345c5c', '#ff5733', '#f1c40f', '#3498db'];
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = '50%';
        confetti.style.top = '50%';
        confetti.style.zIndex = '2147483647';
        confetti.style.pointerEvents = 'none';
        confetti.style.borderRadius = '50%'; // Circles
        document.body.appendChild(confetti);

        // Random animation properties
        const angle = Math.random() * Math.PI * 2;
        const velocity = 5 + Math.random() * 10;
        const tx = Math.cos(angle) * 200; // Explode outward
        const ty = Math.sin(angle) * 200;
        const rot = Math.random() * 360;

        // Animate
        const animation = confetti.animate([
            { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
            { transform: `translate(${tx}px, ${ty}px) rotate(${rot}deg)`, opacity: 0 }
        ], {
            duration: 1000 + Math.random() * 500,
            easing: 'cubic-bezier(0.25, 1, 0.5, 1)' // Decelerate
        });

        animation.onfinish = () => confetti.remove();
    }
}

// Global Summary/Result Modal
function showGameSummary(score, totalQuestions, themeId) {
    const existing = document.querySelector('.result-modal');
    if (existing) existing.remove();

    // Calculate stars or grade
    const maxScore = totalQuestions * 10;
    const percentage = (maxScore > 0) ? (score / maxScore) * 100 : 0;

    let feedbackMsg = "¡Sigue Practicando";
    let feedbackIcon = "🌱";
    let motivationalText = "No te rindas, cada intento te hace mejor.";

    // Logic: Keep big icon, remove emojis from text header
    if (percentage === 100) {
        feedbackMsg = "¡Perfecto";
        feedbackIcon = "⭐⭐⭐";
        motivationalText = "¡Eres un maestro! ¿Puedes hacerlo otra vez?";
        triggerConfetti();
    } else if (percentage >= 80) {
        feedbackMsg = "¡Increíble";
        feedbackIcon = "⭐⭐";
        motivationalText = "¡Casi perfecto! Un pequeño esfuerzo más.";
        triggerConfetti();
    } else if (percentage >= 50) {
        feedbackMsg = "¡Bien hecho";
        feedbackIcon = "⭐";
        motivationalText = "Vas por buen camino. ¡Inténtalo de nuevo!";
    } else {
        feedbackMsg = "¡Buen Intento";
        feedbackIcon = "";
        motivationalText = "Tú puedes. Repite el juego para mejorar.";
    }

    // Create FIXED modal container
    const resultModal = document.createElement('div');
    resultModal.className = 'result-modal';

    // Apply fixed styles directly to ensure centering
    Object.assign(resultModal.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.85)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '2147483647', // Max z-index
        backdropFilter: 'blur(5px)',
        opacity: '0',
        transition: 'opacity 0.3s ease'
    });

    resultModal.innerHTML = `
        <div class="result-content" style="
            background: white;
            padding: 40px;
            border-radius: 20px;
            text-align: center;
            max-width: 500px;
            width: 90%;
            box-shadow: 0 20px 50px rgba(0,0,0,0.3);
            border: 4px solid #a3c34c;
            transform: scale(0.8);
            transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        ">
            <h2 style="font-size: 2.5rem; margin-bottom: 15px; color: #345c5c; font-weight: bold;">${feedbackMsg}!</h2>
            <div style="font-size: 4rem; margin: 15px 0; animation: bounce 1s infinite alternate;">${feedbackIcon}</div>
            
            <p style="font-size: 1.2rem; color: #555; margin: 15px 0;">${motivationalText}</p>
            
            <div style="background: #f0f7da; padding: 10px 20px; border-radius: 15px; margin: 20px auto; display: inline-block;">
                <p style="font-size: 1.3rem; margin: 0; color: #345c5c; font-weight: bold;">
                    Puntuación: <span style="font-size: 1.8rem; color: #a3c34c;">${score}</span> / ${maxScore}
                </p>
            </div>

            <div style="display: flex; flex-direction: column; gap: 15px; justify-content: center; align-items: center; margin-top: 25px; width: 100%;">
                <button class="btn btn-primary" onclick="location.reload()" 
                    style="padding: 15px 30px; font-size: 1.2rem; border-radius: 50px; background: #a3c34c; border: none; box-shadow: 0 4px 15px rgba(163, 195, 76, 0.4); width: 100%; max-width: 280px; color: white; font-weight: bold; cursor: pointer; transition: transform 0.2s;">
                    Jugar de Nuevo
                </button>
                
                <button class="btn btn-secondary" onclick="window.location.href='../index.html'" 
                    style="padding: 15px 30px; font-size: 1.1rem; border-radius: 50px; background: #345c5c; color: white; border: none; width: 100%; max-width: 280px; font-weight: bold; cursor: pointer; transition: transform 0.2s;">
                    Volver al Menú
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(resultModal);

    // Animate In
    requestAnimationFrame(() => {
        resultModal.style.opacity = '1';
        const content = resultModal.querySelector('.result-content');
        if (content) content.style.transform = 'scale(1)';
    });

    // Add hover effects via JS since styles are inline
    const btns = resultModal.querySelectorAll('button');
    btns.forEach(btn => {
        btn.onmouseover = () => btn.style.transform = 'scale(1.05)';
        btn.onmouseout = () => btn.style.transform = 'scale(1)';
    });
}
