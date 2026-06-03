const THEME_ID = 'presentacion';
const GAME_TYPE = 'reconocimiento';

class ReconocimientoGame {
    constructor() {
        this.data = (typeof getShuffledThemeData !== 'undefined') ? getShuffledThemeData(THEME_ID) : GAME_DATA[THEME_ID];
        this.score = 0;
        this.currentIndex = 0;
        this.init();
    }

    init() {
        if (!this.data) {
            console.error('No data found for theme:', THEME_ID);
            return;
        }
        this.renderGame();
    }

    createMediaElement(item) {
        const type = item.type || 'image';
        if (type === 'video') {
            const video = document.createElement('video');
            video.src = item.media;
            video.autoplay = true;
            video.muted = true;
            video.loop = true;
            video.playsInline = true;
            video.className = 'img-preview game-image';
            video.style.animation = 'fadeIn 0.5s ease';
            if (item.word) video.setAttribute('aria-label', item.word);
            return video;
        }
        const img = document.createElement('img');
        img.src = item.media;
        img.className = 'img-preview game-image';
        img.style.animation = 'fadeIn 0.5s ease';
        img.onerror = () => { img.src = `https://placehold.co/300x200/345c5c/white?text=${item.word}`; };
        return img;
    }

    renderGame() {
        const container = document.getElementById('game-area');
        container.innerHTML = '';
        document.getElementById('score-display').innerText = `Puntos: ${this.score}`;

        if (this.currentIndex >= this.data.content.length) {
            this.showResult();
            return;
        }

        const item = this.data.content[this.currentIndex];

        // Media Element
        const mediaEl = this.createMediaElement(item);
        mediaEl.classList.add('fade-in');
        container.appendChild(mediaEl);

        // Options
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'options-container fade-in';

        // Clone and sort options
        const options = [...item.options].sort(() => Math.random() - 0.5);

        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'btn btn-primary btn-option';
            btn.innerText = opt;
            btn.onclick = (e) => this.checkAnswer(opt, item.word, e.target);
            optionsDiv.appendChild(btn);
        });
        container.appendChild(optionsDiv);
    }

    adjustPath(path) {
        if (path.startsWith('../../')) {
            return '../' + path; // Add one more level up -> ../../../
        }
        return path;
    }

    checkAnswer(selected, correct, btn) {
        if (selected === correct) {
            this.score += 10;
            if (btn) {
                btn.style.backgroundColor = '#a3c34c'; // Green
                btn.style.color = 'white';
                btn.style.transform = 'scale(1.1)';
                btn.style.transition = 'all 0.3s';
            }
            showGameNotification('¡Correcto! 🎉', 'success');
        } else {
            if (btn) {
                btn.style.backgroundColor = '#e74c3c'; // Red
                btn.style.color = 'white';
                btn.classList.add('shake');
            }
            showGameNotification(`Incorrecto. Era: ${correct}`, 'error');
        }

        // Wait for animation before moving
        setTimeout(() => {
            this.currentIndex++;
            this.renderGame();
        }, 1500);
    }

    showResult() {
        showGameSummary(this.score, this.data.content.length, THEME_ID);
    }
}

// Start game on load
window.onload = () => {
    new ReconocimientoGame();
};
