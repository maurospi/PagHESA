// Memory Game Engine - Animales Theme
// Uses company colors: #a3c34c (Green), #345c5c (Teal)

const THEME_ID = 'presentacion'; // WARNING: Check this ID for each file!

class MemoriaGame {
    constructor(themeData) {
        this.data = themeData;
        this.cards = [];
        this.flippedCards = [];
        this.matchedPairs = 0;
        this.score = 0;
        this.canFlip = true;

        this.init();
    }

    init() {
        this.renderGame();
        this.initScroll();
    }

    initScroll() {
        // Initialize NiceScroll to match main site
        if (typeof $ !== 'undefined' && $.fn.niceScroll) {
            $("html").niceScroll({
                scrollspeed: 100,
                mousescrollstep: 38,
                cursorwidth: 5,
                cursorborder: 0,
                cursorcolor: '#333',
                autohidemode: true,
                zindex: 999999999,
                horizrailenabled: false,
                cursorborderradius: 0,
            });
        }
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
            video.style.width = '100%';
            video.style.height = '100%';
            video.style.objectFit = 'cover';
            video.style.borderRadius = '8px';
            if (item.word) video.setAttribute('aria-label', item.word);
            return video;
        }
        const img = document.createElement('img');
        img.src = item.media;
        img.alt = item.word;
        img.onerror = () => {
            img.src = `https://placehold.co/200x250/345c5c/white?text=${item.word}`;
        };
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        img.style.borderRadius = '8px';
        return img;
    }

    createCardPairs() {
        // Create pairs from theme data
        const pairs = [];
        this.data.content.forEach((item, index) => {
            // Each item creates two cards with the same ID
            pairs.push({
                id: index,
                media: item.media,
                word: item.word,
                type: item.type
            });
            pairs.push({
                id: index,
                media: item.media,
                word: item.word,
                type: item.type
            });
        });

        // Shuffle cards
        return this.shuffleArray(pairs);
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    renderGame() {
        const container = document.getElementById('game-area');
        if (!container) return;

        container.innerHTML = '';

        const grid = document.createElement('div');
        grid.className = 'memory-grid';

        this.cards = this.createCardPairs();

        this.cards.forEach((card, index) => {
            const cardEl = this.createCardElement(card, index);
            grid.appendChild(cardEl);
        });

        container.appendChild(grid);
        this.updateScore();
    }

    createCardElement(card, index) {
        const cardEl = document.createElement('div');
        cardEl.className = 'memory-card';
        cardEl.dataset.cardId = card.id;
        cardEl.dataset.cardIndex = index;

        const cardInner = document.createElement('div');
        cardInner.className = 'card-inner';

        // Card Back (Question Mark)
        const cardBack = document.createElement('div');
        cardBack.className = 'card-face card-back';

        // Card Front (Media)
        const cardFront = document.createElement('div');
        cardFront.className = 'card-face card-front';

        const mediaEl = this.createMediaElement(card);
        cardFront.appendChild(mediaEl);

        // Add word text below image
        const textEl = document.createElement('div');
        textEl.className = 'card-text';
        textEl.textContent = card.word;
        cardFront.appendChild(textEl);

        cardInner.appendChild(cardBack);
        cardInner.appendChild(cardFront);
        cardEl.appendChild(cardInner);

        cardEl.addEventListener('click', () => this.handleCardClick(cardEl, card));

        return cardEl;
    }

    handleCardClick(cardEl, card) {
        // Prevent clicking if:
        // - Already flipped
        // - Already matched
        // - Two cards already flipped and waiting for reset
        if (!this.canFlip ||
            cardEl.classList.contains('flipped') ||
            cardEl.classList.contains('matched')) {
            return;
        }

        // Flip card
        cardEl.classList.add('flipped');
        this.flippedCards.push({ element: cardEl, data: card });

        // Check if two cards are flipped
        if (this.flippedCards.length === 2) {
            this.canFlip = false;
            setTimeout(() => this.checkMatch(), 600);
        }
    }

    checkMatch() {
        const [card1, card2] = this.flippedCards;

        if (card1.data.id === card2.data.id) {
            // Match found!
            card1.element.classList.add('matched');
            card2.element.classList.add('matched');

            this.matchedPairs++;
            this.score += 10;
            this.updateScore();

            showGameNotification('¡Pareja encontrada! 🎉', 'success');

            this.flippedCards = [];
            this.canFlip = true;

            // Check if game is complete
            if (this.matchedPairs === this.data.content.length) {
                setTimeout(() => this.showResult(), 500);
            }
        } else {
            // No match
            card1.element.classList.add('wrong');
            card2.element.classList.add('wrong');

            setTimeout(() => {
                card1.element.classList.remove('flipped', 'wrong');
                card2.element.classList.remove('flipped', 'wrong');

                this.flippedCards = [];
                this.canFlip = true;
            }, 1000);
        }
    }

    updateScore() {
        const scoreDisplay = document.getElementById('score-display');
        if (scoreDisplay) {
            scoreDisplay.textContent = `Puntos: ${this.score}`;
        }
    }



    showResult() {
        showGameSummary(this.score, this.data.content.length, THEME_ID);
    }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Get theme data from parent scope (loaded from data.js)
    if (typeof GAME_DATA !== 'undefined' && GAME_DATA[THEME_ID]) {
        new MemoriaGame(GAME_DATA[THEME_ID]);
    } else {
        console.error('Game data not found. Make sure data.js is loaded.');
    }
});
