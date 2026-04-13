<template>
  <div class="relative max-w-sm rounded overflow-hidden shadow-lg bg-gray-200">
    <iframe
      class="w-full h-48 object-cover"
      src="https://www.youtube.com/embed/NyxyB-FiQ2Y"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 opacity-100 hover:opacity-100">
      <button @click="playVideo" class="bg-white text-gray-800 font-bold py-2 px-4 rounded-full">
        ▶️
      </button>
    </div>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">Titre de la Vidéo</div>
      <p class="text-gray-700 text-base">
        Une courte description de la vidéo. Cliquez sur le bouton pour regarder.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    playVideo() {
      // Vous pouvez ajouter ici une logique pour jouer la vidéo au clic
      // Par exemple, ouvrir un modal avec l'iframe ou rediriger vers la page YouTube
    },
  },
};
</script>

<style scoped>
/* Ajoutez des styles personnalisés ici si nécessaire */
</style>



