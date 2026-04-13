<template>
  <header class="w-full bg-black text-white font-poppins fixed top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 lg:px-12">
      <!-- BARRE PRINCIPALE -->
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <img src="/images/logo.png" alt="logo" class="w-24 object-contain" />

        <!-- MENU DESKTOP -->
        <nav class="hidden lg:flex items-center space-x-8">
          <router-link to="/" class="nav-link">Programme SND</router-link>
          <router-link to="/plans-fbwa" class="nav-link"
            >Plans FBWA</router-link
          >
          <router-link to="/temoignages" class="nav-link"
            >Témoignages</router-link
          >
          <router-link to="/modules" class="nav-link">Modules</router-link>
          <router-link to="/qui-suis-je" class="nav-link"
            >Qui suis-je</router-link
          >
          <a
            href="https://www.youtube.com/@jeanhouafo3352"
            target="_blank"
            class="nav-link"
          >
            Vidéos
          </a>
        </nav>

        <!-- BURGER MOBILE -->
        <button @click="toggleMenu" class="lg:hidden">
          <svg
            class="w-8 h-8"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- MENU MOBILE -->
    <transition name="slide">
      <nav
        v-if="mobileOpen"
        class="lg:hidden bg-black border-t border-white/10"
      >
        <router-link @click="closeMenu" to="/" class="mobile-link"
          >Programme SND</router-link
        >
        <router-link @click="closeMenu" to="/plans-fbwa" class="mobile-link"
          >Plans FBWA</router-link
        >
        <router-link @click="closeMenu" to="/temoignages" class="mobile-link"
          >Témoignages</router-link
        >
        <router-link @click="closeMenu" to="/modules" class="mobile-link"
          >Modules</router-link
        >
        <router-link @click="closeMenu" to="/qui-suis-je" class="mobile-link"
          >Qui suis-je</router-link
        >
      </nav>
    </transition>
  </header>

  <!-- ESPACE HEADER -->
  <div class="h-16"></div>

  <router-view name="one" />
</template>
  
  <script>
export default {
  data() {
    return {
      mobileOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.mobileOpen = !this.mobileOpen;
    },
    closeMenu() {
      this.mobileOpen = false;
    },
  },
};
</script>
  
  <style scoped>
/* ===== DESKTOP ===== */
.nav-link {
  @apply relative uppercase text-sm font-semibold tracking-wide
           text-white transition hover:text-[#E30065];
}

.router-link-exact-active.nav-link {
  @apply text-[#E30065];
}

.router-link-exact-active.nav-link::after {
  content: "";
  @apply absolute left-0 -bottom-1 w-full h-[2px] bg-[#E30065];
}

/* ===== MOBILE ===== */
.mobile-link {
  @apply block px-6 py-4 uppercase text-sm font-semibold
           text-white border-b border-white/10 transition;
}

.router-link-exact-active.mobile-link {
  @apply text-[#E30065] bg-white/5;
}

/* ===== ANIMATION ===== */
.slide-enter-active,
.slide-leave-active {
  transition: max-height 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  overflow: hidden;
}

.slide-enter-to,
.slide-leave-from {
  max-height: 400px;
}
</style>
  