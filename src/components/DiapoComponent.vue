<template>
  <div class="w-full  bg-cover bg-center  h-auto  overflow-hidden" :key="currentIndex" :style="{ backgroundImage: `url(${images[currentIndex]})` }">
   
    <!-- Couche sombre + contenu -->
    <div class=" inset-0 w-full h-full py-8 md:py-12 bg-gradient-to-b from-black/80 to-[#0E2F51]/50 bg-[#0E2F51]/60">
      <div class="w-full lg:w-3/6 mx-auto font-poppins h-auto space-y-4 lg:space-y-8 px-2 sm:px-4">
        <p data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos="fade-up" class="text-gray-300 text-sm lg:text-lg text-center">
          La Formation vous révèle en détail comment avoir automatiquement des clients en ligne grâce à la publicité Facebook peu importe votre secteur d’activité.
        </p>
        <p data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos="fade-up" class="text-gray-300 text-sm lg:text-lg  text-center">
          J’ai contribué à la croissance de plus de 17 000 professionnels et particuliers dans le monde. Ayant 7 ans d’expertise, le Marketing Facebook et la vente en ligne n’ont plus de secrets pour moi.
        </p>
        <p data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos="fade-up" class="text-gray-300 text-sm lg:text-lg  text-center">
          Mes stratégies vous permettent d’économiser votre budget publicitaire tout en ayant plus de résultats.
        </p>
        <p data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos="fade-up" class="text-gray-300 text-sm lg:text-lg  text-center">
          La Formation FBWA est déjà enregistrée sous la forme de plusieurs vidéos tutorielles et est disponible en ligne via un lien privé que vous allez recevoir par mail après l’achat.
        </p>

        <div class="w-full py-4 md:py-8 flex flex-col space-y-4 items-center justify-center">
          <p data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" class="text-gray-400 text-sm font-poppins">
            Cliquez sur le bouton <span class="uppercase text-sm md:text-lg font-semibold text-white">Rejoindre la formation</span>
          </p>
          <a data-aos-delay="200" data-aos-duration="1000" data-aos="fade-up" data-aos-easing="ease-in-out"
            href="https://wa.me/+237697185754"
            class="bg-gradient-to-b to-black/60 from-[#E30065] font-poppins text-white font-bold py-2 px-4 rounded-tl-2xl rounded-br-2xl"
            target="_blank" rel="noopener noreferrer">
            Rejoindre la formation
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import img from '@/assets/images/picture1.jpeg';
import img1 from '@/assets/images/picture2.jpeg';
import img2 from '@/assets/images/picture3.jpeg';

export default {
  data() {
    return {
      currentIndex: 0,
      images: [img, img1, img2],
      autoPlayInterval: null,
      displayDuration: 7000, // transition toutes les 7s
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
  transition: opacity 2s ease-in-out, transform 2s ease-in-out;
}

.fadezoom-enter-from,
.fadezoom-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
</style>
