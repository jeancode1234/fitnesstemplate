<template>
  <div name="fadezoom" draggable="false" class="w-full h-auto overflow-hidden">
    <!-- Couche sombre + contenu -->
    <div class="w-full bg-[#161616] h-full overflow-hidden">
      <div class="w-full space-y-8 p-6 md:p-10">
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          class="text-center text-lg sm:text-2xl lg:text-4xl font-bold font-poppins uppercase text-white"
        >
          Développez votre portentiel avec notre programme
        </h1>
        <div
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          class="w-full md:w-3/6 bg-red-600 h-[1px] mb-2"
        ></div>
      </div>
      <div
        class="w-full lg:w-5/6 mx-auto font-poppins space-y-4 text-gray-300 text-sm sm:text-base lg:text-lg px-4"
      >
        <p>
          <strong>Le Programme SND</strong> est un programme d’accompagnement personnalisé conçu
          pour les personnes souhaitant perdre du poids, prendre de la masse,
          adopter un régime alimentaire équilibré ou bénéficier d’un suivi
          professionnel adapté à leurs objectifs physiques. Il s’adresse à toute
          personne désireuse d’améliorer durablement sa santé, sa forme physique
          et son bien-être général. <br> Grâce à une approche globale, le Programme
          SND combine coaching sportif, suivi nutritionnel et accompagnement
          continu. Chaque participant bénéficie d’un plan personnalisé élaboré
          en fonction de son profil, de ses besoins spécifiques, de son mode de
          vie et de ses objectifs. L’objectif est de garantir des résultats
          progressifs, efficaces et surtout durables. <br> <br> Le programme met un accent
          particulier sur l’encadrement régulier et l’évaluation des progrès.
          Des ajustements sont effectués tout au long du parcours afin
          d’optimiser les performances, prévenir les erreurs courantes et
          maintenir la motivation. Ce suivi permet aux participants d’adopter de
          bonnes habitudes alimentaires et sportives sur le long terme. <br> <strong> Le Programme SND </strong>
         s’adresse aussi bien aux débutants qu’aux personnes déjà
          actives souhaitant améliorer leurs résultats. Il offre un cadre
          structuré, sécurisé et motivant, encadré par un coach sportif
          qualifié, pour atteindre ses objectifs physiques dans le respect du
          corps et de la santé.
        </p>

        <div
          class="w-full py-4 md:py-8 flex flex-col space-y-4 items-center justify-center"
        >
          <p
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos="fade-up"
            class="text-sm font-poppins"
          >
            Cliquez sur le bouton
            <span class="uppercase text-sm md:text-lg font-semibold text-white"
              >Rejoindre la formation</span
            >
          </p>
          <a
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos="fade-up"
            href="https://wa.me/+237697185754"
            class="bg-gradient-to-b to-black/60 from-[#802525] font-poppins text-white font-bold py-2 px-4 rounded-tl-2xl rounded-br-2xl"
            target="_blank"
          >
            Rejoindre la formation
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // durée d'affichage prolongée (7s)
    };
  },
  methods: {},
  mounted() {},
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
