<template>
  <div class="">
    <div class="space-y-8 p-8 bg-[#0d0d0e]">
      <h1
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
        class="text-center text-3xl lg:text-5xl font-bold font-poppins uppercase text-white"
      >
        Programme SND
      </h1>
      <p
        class="text-lg lg:text-2xl uppercase text-white font-semibold font-poppins text-center"
      >
        mes stratégies sont <span class="text-red-600">{{ displayedText }}</span
        ><span v-if="showCursor">|</span>
      </p>
      <div data-aos="fade-up" class="w-full md:w-3/6 bg-red-600 h-[1px]"></div>
      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        class="w-full p-2 lg:px-4 h-[40vh] sm:h-[60vh] lg:h-[86vh]"
      >
        <div class="w-full overflow-hidden h-full rounded-3xl">
          <iframe
            class="w-full h-full rounded-3xl"
            src="https://fast.wistia.net/embed/iframe/qfxwa3u9cn?autoplay=1&muted=1&loop=1&controlsVisibleOnLoad=false"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          >
          </iframe>
        </div>
      </div>
    </div>
    <div
      class="w-full py-4 lg:-8 bg-black flex flex-col space-y-4 items-center justify-center"
    >
      <p
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
        class="text-gray-400 text-sm font-poppins"
      >
        Cliquez sur le bouton
        <span class="uppercase text-sm lg:text-lg font-semibold text-white"
          >Rejoindre la formation</span
        >
      </p>
      <div class="flex justify-center mt-8">
        <a
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          href="https://wa.me/+237697185754"
          class="bg-gradient-to-b to-black/60 from-[#802525] font-poppins text-white font-bold py-2 px-4 rounded-tl-2xl rounded-br-2xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rejoindre la formation
        </a>
      </div>
    </div>
    <DiaporamaComponent />
    <PromoComponent />
    <div class="w-full bg-[#001224] py-4 lg:pt-4">
      <h1
        data-aos-easing="ease-in-out"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos="fade-up"
        class="text-xl sm:text-2xl lg:text-3xl font-bold font-poppins text-white uppercase text-center"
      >
        TÉMOIGNAGES incroyables
      </h1>
      <TestimonialComponent />
    </div>
    <Module />
    <TestifyComponent />
  </div>
</template>

<script>
import DiaporamaComponent from "@/components/DiaporamaComponent.vue";
import TestimonialComponent from "@/components/TestimonialComponent.vue";
// import DiapoComponent from '@/components/DiapoComponent.vue';
import PromoComponent from "@/components/PromoComponent.vue";
import Module from "@/components/ModuleComponent.vue";
import TestifyComponent from "@/components/TestifyComponent.vue";
export default {
  data() {
    return {
      texts: [
        "incroyables",
        "impressionantes ",
        "époustouflantes",
        "galvanisantes",
        "inimaginables",
      ],
      showCursor: true,
      displayedText: "",
      textIndex: 0,
      charIndex: 0,
      isDeleting: false,
      typeSpeed: 100,
      deleteSpeed: 50,
      pauseDelay: 1000,
    };
  },
  components: {
    DiaporamaComponent,
    PromoComponent,
    Module,
    TestifyComponent,
    TestimonialComponent
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
        this.displayedText = "";
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
    },
  },
  mounted() {
    this.typeWriterLoop();
    setInterval(() => {
      this.showCursor = !this.showCursor;
    }, 500);
  },
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
