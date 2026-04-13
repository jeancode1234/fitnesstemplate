<template>
  <div class="w-full">
    <!-- HERO -->
    <div class="w-full bg-contain bg-center bg-repeat overflow-hidden">
      <div
        class="w-full py-8 lg:py-12 flex items-center justify-center bg-gradient-to-b from-black/80 to-[#0E2F51]/60"
      >
        <div class="w-full lg:w-5/6 space-y-4 px-4">
          <h1
            class="text-2xl sm:text-4xl xl:text-6xl text-white font-extrabold text-center font-poppins"
          >
            TÉMOIGNAGES
          </h1>

          <div class="w-5/6 md:w-3/6 h-[1px] bg-red-600"></div>

          <p class="text-center text-gray-400 font-poppins">
            Ce que pensent les membres du programme SND
          </p>

          <div class="w-full flex justify-center">
            <a
              href="https://wa.me/+237697185754"
              target="_blank"
              class="bg-gradient-to-b from-red-600 to-black/60 text-white font-bold py-2 px-4 rounded-tl-2xl rounded-br-2xl"
            >
              Rejoindre le programme
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- COUNTDOWN -->
    <PromoComponent />
    <!-- GALLERY -->
     <div class="w-full space-y-8 bg-black p-4 ">

         <div class="grid grid-cols-2 md:grid-cols-4 gap-2 ">
           <img
             v-for="(img, index) in images"
             :key="index"
             :src="img"
             loading="lazy"
             class="cursor-pointer hover:opacity-80 transition"
             @click="openModal(index)"
           />
         </div>
         <div class="w-full flex justify-center py-4">
      <a
        href="https://wa.me/+237697185754"
        target="_blank"
        class="bg-gradient-to-b from-red-600 to-black/60 text-white font-bold py-2 px-4 rounded-tl-2xl rounded-br-2xl"
      >
        Rejoindre le programme
      </a>
    </div>
     </div>

    <!-- MODAL -->
    <transition name="fadezoom">
      <div
        v-if="isModalOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
      >
        <!-- compteur -->
        <div class="absolute top-4 left-6 text-white font-bold">
          {{ recentIndex + 1 }} / {{ images.length }}
        </div>

        <!-- close -->
        <button
          class="absolute top-4 right-6 text-white text-3xl"
          @click="closeModal"
        >
          ✕
        </button>

        <!-- prev -->
        <button class="absolute left-4 text-white text-4xl" @click="prev">
          ‹
        </button>

        <!-- image -->
        <img
          :src="currentImage"
          class="max-h-[80vh] w-4/6 object-contain shadow-lg transition-transform duration-300"
          :class="{ 'scale-150': isZoomed }"
          @dblclick="toggleZoom"
          @touchend.prevent="handleDoubleTap"
        />

        <!-- next -->
        <button class="absolute right-4 text-white text-4xl" @click="next">
          ›
        </button>
      </div>
    </transition>
   

    <Footer />
  </div>
</template>
  
  <script>
  import PromoComponent from "@/components/PromoComponent.vue";
import Footer from "./FooterView.vue";

import img from "@/assets/dim/testi.jpg";
import img1 from "@/assets/dim/testi1.jpg";
import img2 from "@/assets/dim/testi2.jpg";
import img3 from "@/assets/dim/testi3.jpg";
import img4 from "@/assets/dim/testi4.jpg";
import img5 from "@/assets/dim/testi5.jpg";
import img6 from "@/assets/dim/testi6.jpg";
import img7 from "@/assets/dim/testi7.jpg";
import img8 from "@/assets/dim/testi8.jpg";
import img9 from "@/assets/dim/testi9.jpg";
import img10 from "@/assets/dim/testi10.jpg";
import img11 from "@/assets/dim/testi11.jpg";
import img12 from "@/assets/dim/testi12.jpg";
import img13 from "@/assets/dim/testi13.jpg";
import img14 from "@/assets/dim/testi14.jpg";
import img15 from "@/assets/dim/testi15.jpg";

export default {
  
  data() {
    return {
      images: [
        img,
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
        img14,
        img15,
      ],
      isModalOpen: false,
      recentIndex: 0,
      isZoomed: false,
      lastTap: 0,
      touchStartX: 0,
     
    };
  },

  computed: {
    currentImage() {
      return this.images[this.recentIndex];
    },
  },

  methods: {
    openModal(index) {
      this.recentIndex = index;
      this.isModalOpen = true;
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", this.handleEsc);
    },

    closeModal() {
      this.isModalOpen = false;
      this.isZoomed = false;
      document.body.style.overflow = "";
      window.removeEventListener("keydown", this.handleEsc);
    },

    next() {
      this.recentIndex = (this.recentIndex + 1) % this.images.length;
      this.isZoomed = false;
    },

    prev() {
      this.recentIndex =
        (this.recentIndex - 1 + this.images.length) % this.images.length;
      this.isZoomed = false;
    },

    handleEsc(e) {
      if (e.key === "Escape") this.closeModal();
    },

    toggleZoom() {
      this.isZoomed = !this.isZoomed;
    },

    handleDoubleTap() {
      const now = Date.now();
      if (now - this.lastTap < 300) this.toggleZoom();
      this.lastTap = now;
    },

    onTouchStart(e) {
      this.touchStartX = e.changedTouches[0].screenX;
    },

    onTouchEnd(e) {
      const diff = e.changedTouches[0].screenX - this.touchStartX;
      if (diff > 50) this.prev();
      if (diff < -50) this.next();
    },
  beforeUnmount() {
    clearInterval(this.timer);
    window.removeEventListener("keydown", this.handleEsc);
  },
},
components: { PromoComponent,Footer },

};
</script>
  
  <style scoped>
.fadezoom-enter-active,
.fadezoom-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fadezoom-enter-from,
.fadezoom-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
  