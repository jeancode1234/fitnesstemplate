<template>
  <div class="w-full">
    <div class="w-full h-auto overflow-hidden">
      <!-- Couche sombre + contenu -->
      <div
        class="inset-0 w-full h-full py-8 bg-gradient-to-t from-[#001224] to-[#001224]/60 bg-[#001224]/60"
      >
        <div class="flex justify-end lg:px-8">
          <div class="w-full sm:w-5/6 lg:w-3/6 h-[1px] bg-white"></div>
        </div>

        <div
          class="w-full lg:w-4/6 mx-auto font-poppins flex flex-col items-center justify-center space-y-8 px-4 lg:px-0 py-6 lg:py-10"
        >
          <h2
            class="text-2xl sm:text-3xl md:text-4xl text-white font-extrabold uppercase text-center"
          >
            Offre Spéciale – Programme SND
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            class="text-gray-300 text-sm sm:text-base lg:text-lg text-center"
          >
            Pour une durée très limitée, profitez d’une offre exclusive sur notre
            programme de coaching sportif et de suivi nutritionnel personnalisé.
          </p>

          <!-- COUNTDOWN -->
          <div
            class="w-full flex flex-col justify-center items-center space-y-3 pt-4"
          >
            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              class="text-sm sm:text-xl text-white font-extrabold uppercase"
            >
              La promotion se termine dans
            </h1>

            <div
              class="flex justify-center items-center gap-4 font-bold text-white"
            >
              <div
                v-for="(value, label) in countdown"
                :key="label"
                class="text-center bg-blue-700/30 rounded-xl px-6 py-4"
              >
                <div
                  class="text-2xl sm:text-3xl bg-blue-800/30 rounded-lg px-4 py-4"
                >
                  {{ value }}
                </div>
                <div
                  class="text-xs sm:text-sm uppercase tracking-widest text-gray-200 mt-1"
                >
                  {{ label }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="w-full flex flex-col items-center space-y-4 py-6">
          <p class="text-gray-400 text-sm">
            Cliquez sur <span class="font-semibold text-white">Rejoindre la formation</span>
          </p>

          <a
            href="https://wa.me/+237697185754"
            target="_blank"
            class="bg-gradient-to-b from-[#802525] to-black/70 text-white font-bold py-3 px-6 rounded-xl hover:scale-105 transition"
          >
            Rejoindre la formation
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const PROMO_DURATION_HOURS = 8; // ⏱️ 8 heures par utilisateur
const STORAGE_KEY = "snd_user_promo_end";

export default {
  data() {
    return {
      countdown: {
        HEURES: "08",
        MINUTES: "00",
        SECONDES: "00",
      },
      promoEndTime: null,
      timer: null,
    };
  },

  methods: {
    initUserCountdown() {
      const now = Date.now();
      const savedEndTime = localStorage.getItem(STORAGE_KEY);

      if (savedEndTime && now < parseInt(savedEndTime)) {
        this.promoEndTime = parseInt(savedEndTime);
      } else {
        this.promoEndTime =
          now + PROMO_DURATION_HOURS * 60 * 60 * 1000;
        localStorage.setItem(STORAGE_KEY, this.promoEndTime);
      }
    },

    updateCountdown() {
      const now = Date.now();
      let diff = this.promoEndTime - now;

      if (diff <= 0) {
        clearInterval(this.timer);
        this.countdown = {
          HEURES: "00",
          MINUTES: "00",
          SECONDES: "00",
        };
        return;
      }

      const totalSeconds = Math.floor(diff / 1000);

      const hours = Math.floor(totalSeconds / 3600); // ⬅️ TOUT EN HEURES
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      this.countdown = {
        HEURES: hours.toString().padStart(2, "0"),
        MINUTES: minutes.toString().padStart(2, "0"),
        SECONDES: seconds.toString().padStart(2, "0"),
      };
    },
  },

  mounted() {
    this.initUserCountdown();
    this.updateCountdown();
    this.timer = setInterval(this.updateCountdown, 1000);
  },

  beforeUnmount() {
    clearInterval(this.timer);
  },
};
</script>

<style scoped>
.fadezoom-enter-active,
.fadezoom-leave-active {
  transition: opacity 1.5s ease, transform 1.5s ease;
}

.fadezoom-enter-from,
.fadezoom-leave-to {
  opacity: 0;
  transform: scale(1.05);
}
</style>
