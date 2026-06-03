const THEME_ID = 'presentacion';

class VocabularioGame {
    constructor() {
        this.data = (typeof getShuffledThemeData !== 'undefined') ? getShuffledThemeData(THEME_ID) : GAME_DATA[THEME_ID];
        this.score = 0;
        this.currentIndex = 0;
        this.init();
    }

    init() {
        if (!this.data) return;
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

        // Media (Image or Video)
        const mediaEl = this.createMediaElement(item);
        mediaEl.classList.add('fade-in');
        container.appendChild(mediaEl);

        // Letters
        const letters = item.word.toUpperCase().split('').sort(() => Math.random() - 0.5);

        // Answer area
        const answerDiv = document.createElement('div');
        answerDiv.className = 'answer-area fade-in';
        answerDiv.id = 'vocab-answer';
        container.appendChild(answerDiv);

        // Slots area
        const slotsDiv = document.createElement('div');
        slotsDiv.className = 'slots-area';

        letters.forEach(char => {
            const slot = document.createElement('div');
            slot.className = 'letter-slot';

            const img = document.createElement('img');
            img.src = this.getLetterImage(char);
            img.alt = char;
            img.style.maxWidth = '100%';
            img.style.height = 'auto';
            img.onerror = () => { img.style.display = 'none'; slot.innerText = char; };

            slot.appendChild(img);

            slot.onclick = () => {
                // Determine source: if from slots, move to answer. If from answer, move back to slots? 
                // Simple version: only from slots to answer.
                // Or toggle.
                if (slot.parentElement === slotsDiv) {
                    answerDiv.appendChild(slot);
                } else {
                    slotsDiv.appendChild(slot);
                }
                this.checkVocabulario(item.word);
            };
            slotsDiv.appendChild(slot);
        });

        container.appendChild(slotsDiv);

        // Reset text button specific to this item
        const resetBtn = document.createElement('button');
        resetBtn.innerText = 'Resetear Palabra';
        resetBtn.className = 'btn btn-default';
        resetBtn.style.marginTop = '20px';
        resetBtn.onclick = () => this.renderGame(); // Reloads current item
        container.appendChild(resetBtn);
    }

    getLetterImage(char) {
        const upper = char.toUpperCase();
        if (upper === 'Ñ') return '../../../images/alfabeto/Ñ.JPG';
        const jpgLowerCase = ['D', 'E', 'H', 'O', 'Q', 'R', 'V', 'X', 'Y'];
        const ext = jpgLowerCase.includes(upper) ? 'jpg' : 'JPG';
        return `../../../images/alfabeto/${upper}.${ext}`;
    }

    adjustPath(path) {
        if (path.startsWith('../../')) return '../' + path;
        return path;
    }

    checkVocabulario(correctWord) {
        const currentAnswerArgs = Array.from(document.getElementById('vocab-answer').children);
        if (currentAnswerArgs.length !== correctWord.length) return;

        const currentAnswer = currentAnswerArgs
            .map(slot => slot.querySelector('img') && slot.querySelector('img').style.display !== 'none' ? slot.querySelector('img').alt : slot.innerText)
            .join('');

        if (currentAnswer === correctWord.toUpperCase()) {
            this.score += 10;
            // Animation for success
            const answerDiv = document.getElementById('vocab-answer');
            if (answerDiv) answerDiv.classList.add('correct-pulse');

            showGameNotification('¡Bien hecho! ✍️', 'success');
            setTimeout(() => {
                this.currentIndex++;
                this.renderGame();
            }, 1500);
        } else if (currentAnswer.length === correctWord.length) {
            showGameNotification('Incorrecto. Intenta de nuevo.', 'error');
        }
    }

    showResult() {
        showGameSummary(this.score, this.data.content.length, THEME_ID);
    }
}

window.onload = () => {
    new VocabularioGame();
};

