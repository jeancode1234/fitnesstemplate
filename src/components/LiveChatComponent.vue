<template>
  <div class="w-full relative h-[110vh] overflow-hidden">
    <!-- Fond dynamique avec effet -->
    <transition name="fadezoom" mode="out-in">
      <div
        :key="currentIndex"
        :style="{ backgroundImage: `url(${images[currentIndex]})` }"
        class="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out z-0"
      ></div>
    </transition>

    <!-- Couche sombre + contenu par-dessus -->
    <div class="w-full h-full bg-[#0E2F51]/90 absolute z-10 py-8">
      <div class="w-full space-y-8 p-10">
        <h1 class="text-center text-4xl font-bold font-poppins uppercase text-white">
          Développez un business rentable et puissant sur Internet
        </h1>
        <div class="w-full md:w-3/6 bg-red-600 h-[1px] mb-2"></div>
      </div>

      <div class="w-full lg:w-3/6 mx-auto font-poppins h-auto space-y-4">
        <p class="text-gray-400 text-base">
          Vous êtes en manque de clients ? En quête d’idées de produits à vendre ? Ou vous voulez tout simplement faire exploser votre activité ? Bienvenue dans la Formation FBWA, le programme complet qui a déjà transformé la trajectoire de milliers d’entrepreneurs africains.
        </p>
        <p class="text-gray-400 text-base">
          Découvrez 80 produits à fort potentiel + les stratégies pour les commander en Chine, Turquie ou Dubaï.
        </p>
        <p class="text-gray-400 text-base">
          Multipliez vos clients par 10, peu importe votre secteur d’activité, grâce à des techniques testées sur le terrain.
        </p>
        <p class="text-gray-400 text-base">
          Si ça fonctionne en Afrique, le continent le plus complexe pour le business digital, alors ça fonctionnera partout.
        </p>
        <p class="text-gray-400 text-base">
          J’ai découvert le business en ligne très tôt et à 20 ans je suis devenu millionnaire, non par chance, mais par persévérance, tests et stratégie. Aujourd’hui, fort de 14 ans d’expérience, j’ai formé plus de 17 000 membres à transformer leurs idées en résultats concrets.
        </p>
        <p class="text-gray-400 text-base">
          Cette formation, c’est bien plus que des vidéos. C’est une transformation. <br />
          Réservez votre accès maintenant
        </p>
        <p class="text-gray-400 text-base">Places limitées – Ne ratez pas cette opportunité.</p>

        <div class="w-full py-8 flex flex-col space-y-4 items-center justify-center">
          <p class="text-gray-400 text-sm font-poppins">
            Cliquez sur le bouton <span class="uppercase text-lg font-semibold text-white">Rejoindre la formation</span>
          </p>
          <div class="flex justify-center">
            <a
              href="https://wa.me/+237697185754"
              class="bg-gradient-to-b to-black/60 from-[#E30065] font-poppins text-white font-bold py-2 px-4 rounded-tl-2xl rounded-br-2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rejoindre la formation
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img from '@/assets/images/image.jpg';
import img1 from '@/assets/images/image1.jpeg';
import img2 from '@/assets/images/image2.jpeg';

export default {
  data() {
    return {
      currentIndex: 0,
      images: [img, img1, img2],
      autoPlayInterval: null,
      displayDuration: 5000,
    };
  },
  methods: {
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    startAutoPlay() {
      this.autoPlayInterval = setInterval(this.nextImage, this.displayDuration);
    },
    stopAutoPlay() {
      clearInterval(this.autoPlayInterval);
    },
  },
  mounted() {
    this.startAutoPlay();
  },
  beforeUnmount() {
    this.stopAutoPlay();
  },
};
</script>

<style scoped>
.fadezoom-enter-active,
.fadezoom-leave-active {
  transition: opacity 1.5s ease-in-out, transform 1.5s ease-in-out;
}
.fadezoom-enter-from,
.fadezoom-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
</style>
