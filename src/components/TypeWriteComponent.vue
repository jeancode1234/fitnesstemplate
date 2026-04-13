<template>
    <div class="">
        <p class="text-lg sm:text-xl lg:text-3xl uppercase text-white font-semibold font-poppins text-center">{{ displayedText }}<span v-if="showCursor">|</span></p>

    </div>
</template>

<script>
export default {
    data() {
        return {
            texts: [
                'Bienvenue sur mon site',
                'Développé avec Vue.js ',
                'Partager vos experiences avec nous',
                'Profite de l’expérience utilisateur fluide et rapide 🚀',
            ],
            showCursor: true,
            displayedText: '',
            textIndex: 0,
            charIndex: 0,
            isDeleting: false,
            typeSpeed: 100,
            deleteSpeed: 50,
            pauseDelay: 1000,
        }
    },
    methods: {
        typeWriterLoop() {
            if (this.textIndex < this.texts.length) {
                const currentText = this.texts[this.textIndex];
                if (this.charIndex < currentText.length) {
                    this.displayedText += currentText.charAt(this.charIndex);
                    this.charIndex++;
                    setTimeout(() => this.typeWriterLoop(), this.typeSpeed);
                } else {
                    setTimeout(() => {
                        this.isDeleting = true;
                        this.deleteText();
                    }, this.pauseDelay);
                }
            } else {
                this.textIndex = 0;
                this.charIndex = 0;
                this.displayedText = '';
                setTimeout(() => this.typeWriterLoop(), 2000);
            }
        },
        deleteText() {
            if (this.isDeleting) {
                if (this.charIndex > 0) {
                    this.displayedText = this.displayedText.slice(0, -1);
                    this.charIndex--;
                    setTimeout(() => this.deleteText(), this.deleteSpeed);
                } else {
                    this.isDeleting = false;
                    this.textIndex++;
                    setTimeout(() => this.typeWriterLoop(), 500);
                }
            }
        }
    },
    mounted() {
        this.typeWriterLoop();
        setInterval(() => {
            this.showCursor = !this.showCursor;
        }, 500);
    }
};
</script>

<style scoped>
.animate-pulse {
    animation: blink 1s infinite;
}

@keyframes blink {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }
}
</style>
