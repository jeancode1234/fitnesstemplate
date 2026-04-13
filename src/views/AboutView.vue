<template>
  <div class="w-full font-poppins">
    <!-- HERO / Qui suis-je ? -->
    <section class="w-full bg-black/80 py-12 xl:py-20 space-y-12">
      <div class="max-w-5xl mx-auto text-center space-y-6">
        <h1 data-aos="zoom-in" class="uppercase text-3xl lg:text-5xl font-extrabold text-white tracking-wider">
          Qui suis-je ?
        </h1>
        <div data-aos="fade-right" class="mx-auto w-24 h-[2px] bg-red-600"></div>
        <p class="text-lg lg:text-2xl uppercase font-bold text-white">
          Je suis <span class="text-red-600">{{ displayedText }}</span><span v-if="showCursor">|</span> dans mes actions
        </p>
      </div>

      <!-- BIO -->
      <div class="max-w-4xl mx-auto space-y-6 lg:space-y-8 px-4">
        <p data-aos="fade-up" data-aos-delay="100" class="text-white text-center text-lg lg:text-xl">
          Je suis <strong class="uppercase">Coach Dimi</strong>, fondateur du programme
          <strong class="uppercase">DIMfitness</strong>. Ma mission : j'accompagne les femmes de 27 à 65 ans ayant des problèmes de santé, de ballonnements
          et de surpoids à perdre en moyenne 2 kg et 3 cm de tour de taille par semaine et à améliorer leur santé
          grâce à la méthode SND.
        </p>

        <p data-aos="fade-up" data-aos-delay="200" class="text-white text-center text-lg lg:text-xl">
          Depuis plusieurs années, j’accompagne des femmes de différents pays d’Afrique à <strong>perdre du poids
            durablement</strong>, se sentir belles dans leur corps et reprendre le contrôle de leur santé <strong>sans
            régime extrême ni salle de sport</strong>.
        </p>

        <p data-aos="fade-up" data-aos-delay="300" class="text-white text-center text-lg lg:text-xl">
          Avec mon équipe, nous avons conçu un programme <strong>100% en ligne</strong>, simple, humain et efficace, qui
          s’adapte à <strong>votre réalité, vos emplois du temps et vos habitudes</strong>.
        </p>

        <p data-aos="fade-up" data-aos-delay="400" class="text-white text-center text-lg lg:text-xl">
          Rejoindre <strong class="text-red-600 uppercase">DIMfitness</strong>, c’est intégrer <strong>une famille où
            vous serez soutenue et encouragée peu importe votre point de départ</strong>.
        </p>

        <!-- CTA -->
        <div class="flex flex-col items-center space-y-4 mt-8" data-aos="fade-up" data-aos-delay="500">
          <p class="text-gray-400 text-sm lg:text-base">
            Cliquez sur le bouton <span class="uppercase font-semibold text-white">Rejoindre la formation</span>
          </p>
          <a href="https://wa.me/+237697185754" target="_blank" rel="noopener noreferrer"
            class="bg-gradient-to-b from-red-600 to-black/60 text-white font-bold py-3 px-6 rounded-tl-2xl rounded-br-2xl hover:scale-110 hover:shadow-lg hover:shadow-red-500/50 transition-transform duration-300">
            Rejoindre la formation
          </a>
        </div>
      </div>
    </section>

    <!-- ADRESSE & MAP -->
    <section class="w-full bg-black py-12 lg:py-16 space-y-6">
      <div class="max-w-4xl mx-auto text-center space-y-4">
        <h2 data-aos="fade-up" class="text-2xl lg:text-3xl uppercase font-extrabold text-white">
          Adresse Locale
        </h2>
        <div data-aos="fade-up" class="mx-auto w-24 h-[2px] bg-red-600"></div>
        <p data-aos="fade-up" class="text-white text-center text-lg">
          Coach Dimi, Nyalla-Rails Douala, Cameroun. Derrière la station Neptune.
        </p>


      </div>

      <!-- Google Map -->
      <div class="w-full mt-8 overflow-hidden rounded-xl">
        <iframe class="w-full h-[400px] border-0"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15957.013300691116!2d9.7288192!3d4.0534016!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMzQyJzUwLjAiTiA5wrAwNTAyJzIxLjAiVw!5e0!3m2!1sfr!2s!4v1652187227168!5m2!1sfr!2s"
          allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>
    </section>
    <PromoComponent />
    <!-- Footer -->
    <FooterView />
  </div>
</template>

<script>
import FooterView from './FooterView.vue';
import PromoComponent from '@/components/PromoComponent.vue';
export default {
  components: { FooterView, PromoComponent },
  data() {
    return {
      texts: ['généreux', 'passionné', 'déterminé', 'motivé', 'audacieux'],
      displayedText: '',
      showCursor: true,
      textIndex: 0,
      charIndex: 0,
      isDeleting: false,
      typeSpeed: 100,
      deleteSpeed: 50,
      pauseDelay: 1000,
    };
  },
  methods: {
    typeWriterLoop() {
      const text = this.texts[this.textIndex];
      if (!this.isDeleting) {
        if (this.charIndex < text.length) {
          this.displayedText += text.charAt(this.charIndex);
          this.charIndex++;
          setTimeout(this.typeWriterLoop, this.typeSpeed);
        } else {
          setTimeout(() => {
            this.isDeleting = true;
            this.deleteText();
          }, this.pauseDelay);
        }
      }
    },
    deleteText() {
      if (this.isDeleting) {
        if (this.charIndex > 0) {
          this.displayedText = this.displayedText.slice(0, -1);
          this.charIndex--;
          setTimeout(this.deleteText, this.deleteSpeed);
        } else {
          this.isDeleting = false;
          this.textIndex = (this.textIndex + 1) % this.texts.length;
          setTimeout(this.typeWriterLoop, 500);
        }
      }
    },
  },
  mounted() {
    this.typeWriterLoop();
    setInterval(() => (this.showCursor = !this.showCursor), 500);
  },
};
</script>

<style scoped>
/* Glow subtil sur CTA */
a:hover {
  text-shadow: 0 0 15px rgba(255, 0, 0, 0.6);
}
</style>