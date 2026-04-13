<template>
    <div class="w-full py-4 md:px-4 bg-black">
      <!-- TITRE -->
      <div class="w-full space-y-4 py-4 text-center">
        <h1 class="text-2xl font-poppins font-bold text-white">TÉMOIGNAGES</h1>
        <p class="text-white font-poppins">
          Ce que pensent les membres de la Formation SND
        </p>
      </div>
  
      <!-- GALERIE -->
      <div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image"
          loading="lazy"
          class="w-full h-auto object-cover cursor-pointer hover:opacity-80 transition"
          @click="openModal(index)"
        />
      </div>
  
      <!-- MODAL -->
      <transition name="fadezoom">
        <div
          v-if="isModalOpen"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          tabindex="0"
          @keydown.esc="closeModal"
        >
          <!-- compteur -->
          <div class="absolute top-4 left-6 text-white font-bold">
            {{ currentIndex + 1 }} / {{ images.length }}
          </div>
  
          <!-- fermer -->
          <button
            class="absolute top-4 right-6 text-white text-3xl"
            @click="closeModal"
          >
            ✕
          </button>
  
          <!-- prev -->
          <button
            class="absolute left-4 text-white text-4xl"
            @click="prevImage"
          >
            ‹
          </button>
  
          <!-- IMAGE -->
          <img
            :src="currentImage"
            class="max-h-[80vh] w-11/12 md:w-3/6 object-contain shadow-2xl transition-transform duration-300 ease-in-out"
            :class="isZoomed ? 'scale-150 cursor-zoom-out' : 'scale-100 cursor-zoom-in'"
            @dblclick="toggleZoom"
            @touchstart="onTouchStart"
            @touchend="onTouchEnd"
          />
  
          <!-- next -->
          <button
            class="absolute right-4 text-white text-4xl"
            @click="nextImage"
          >
            ›
          </button>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
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
          img, img1, img2, img3, img4, img5, img6, img7,
          img8, img9, img10, img11, img12, img13, img14, img15,
        ],
        currentIndex: 0,
        isModalOpen: false,
  
        // zoom & mobile
        isZoomed: false,
        lastTap: 0,
        touchStartX: 0,
      };
    },
  
    computed: {
      currentImage() {
        return this.images[this.currentIndex];
      },
    },
  
    methods: {
      openModal(index) {
        this.currentIndex = index;
        this.isModalOpen = true;
        this.isZoomed = false;
        document.body.style.overflow = "hidden";
      },
  
      closeModal() {
        this.isModalOpen = false;
        this.isZoomed = false;
        document.body.style.overflow = "";
      },
  
      nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.isZoomed = false;
      },
  
      prevImage() {
        this.currentIndex =
          (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.isZoomed = false;
      },
  
      toggleZoom() {
        this.isZoomed = !this.isZoomed;
      },
  
      /* DOUBLE TAP + SWIPE MOBILE */
      onTouchStart(e) {
        this.touchStartX = e.changedTouches[0].screenX;
        const now = Date.now();
        if (now - this.lastTap < 300) this.toggleZoom();
        this.lastTap = now;
      },
  
      onTouchEnd(e) {
        const diff = e.changedTouches[0].screenX - this.touchStartX;
        if (!this.isZoomed) {
          if (diff > 50) this.prevImage();
          if (diff < -50) this.nextImage();
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .fadezoom-enter-active,
  .fadezoom-leave-active {
    transition: opacity 0.35s ease, transform 0.35s ease;
  }
  
  .fadezoom-enter-from,
  .fadezoom-leave-to {
    opacity: 0;
    transform: scale(0.95);
  }
  </style>
  