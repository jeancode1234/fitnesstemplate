<template>
    <div>
      <div class="w-full h-auto bg-gradient-to-t from-[#001224] to-[#001224]/60">
  
        <!-- SECTION MODULES -->
        <div class="max-w-7xl mx-auto px-4 py-16">
          <div class="text-center mb-12">
            <h2
              data-aos="fade-down"
              class="text-3xl lg:text-4xl font-bold text-white font-poppins"
            >
              Transformez Votre Corps avec le Programme SND
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="150"
              class="text-gray-400 mt-3 max-w-2xl mx-auto"
            >
              8 modules complets pour booster votre santé, votre forme et votre motivation.
            </p>
          </div>
  
          <!-- GRID DES CARTES -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              v-for="(module, index) in modules"
              :key="module.id"
              data-aos="fade-up"
              :data-aos-delay="150 + index*100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              class="bg-[#0b1f35] rounded-2xl p-6 shadow-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50"
            >
              <!-- ICON -->
              <div
                class="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#802525] to-black/70 text-white mb-6 text-3xl"
              >
                {{ module.icon }}
              </div>
  
              <!-- TITRE ACCROCHEUR -->
              <h3 class="text-lg font-bold text-white mb-2 font-poppins">
                {{ module.title }}
              </h3>
  
              <!-- DESCRIPTION -->
              <p class="text-sm text-gray-400 leading-relaxed mb-3">
                {{ module.description }}
              </p>
  
              <!-- MINI SOUS-TEXTE “RÉSULTAT ATTENDU” -->
              <p class="text-xs text-red-500 font-semibold">
                {{ module.result }}
              </p>
            </div>
          </div>
        </div>
  
        <!-- CTA -->
        <div class="w-full flex flex-col py-10 space-y-4 items-center justify-center">
          <p
            data-aos="fade-up"
            class="text-gray-400 text-sm font-poppins text-center"
          >
            Cliquez sur le bouton
            <span class="uppercase text-sm md:text-lg font-semibold text-white">
              Rejoindre la formation
            </span>
          </p>
  
          <a
            data-aos="fade-up"
            data-aos-delay="150"
            href="https://wa.me/+237697185754"
            class="bg-gradient-to-b to-black/60 from-[#802525] font-poppins text-white font-bold py-3 px-6 rounded-tl-2xl rounded-br-2xl hover:scale-110 hover:shadow-lg hover:shadow-red-500/60 transition-transform duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rejoindre la formation
          </a>
  
          <div class="w-full sm:px-4 lg:px-8 mt-6">
            <div class="w-5/6 lg:w-3/6 h-[2px] bg-red-600 mx-auto"></div>
          </div>
        </div>
  
      </div>
    </div>
  </template>
  
  <script setup>
  const modules = [
    {
      id: 1,
      title: 'Bilan Express & Objectifs Clairs',
      description:
        'Analyse complète de votre profil et de vos habitudes pour un plan sur mesure.',
      icon: '📋',
      result: 'Définition précise de vos objectifs et plan d’action personnalisé.'
    },
    {
      id: 2,
      title: 'Nutrition Maligne',
      description:
        'Découvrez les bases de la nutrition pour une alimentation saine et efficace.',
      icon: '🥗',
      result: 'Adoptez des habitudes alimentaires qui vous font progresser rapidement.'
    },
    {
      id: 3,
      title: 'Plan Alimentaire Sur-Mesure',
      description:
        'Menus adaptés à votre mode de vie et vos objectifs pour optimiser les résultats.',
      icon: '🍽️',
      result: 'Une alimentation structurée qui accélère la perte de poids ou la prise de masse.'
    },
    {
      id: 4,
      title: 'Entraînements Impactants',
      description:
        'Séances ciblées pour brûler les graisses, renforcer les muscles et améliorer la forme.',
      icon: '🏋️',
      result: 'Des entraînements efficaces qui maximisent vos résultats en peu de temps.'
    },
    {
      id: 5,
      title: 'Suivi & Ajustements Intelligents',
      description:
        'Contrôle régulier des progrès et ajustement du programme pour rester performant.',
      icon: '📈',
      result: 'Des résultats visibles et durables grâce à un suivi personnalisé.'
    },
    {
      id: 6,
      title: 'Motivation & Mental d’Acier',
      description:
        'Techniques pour rester discipliné et motivé tout au long de votre parcours.',
      icon: '💪',
      result: 'Restez engagé et constant pour atteindre vos objectifs sans abandonner.'
    },
    {
      id: 7,
      title: 'Hygiène de Vie & Récupération',
      description:
        'Optimisez votre sommeil, votre récupération et votre style de vie.',
      icon: '🛌',
      result: 'Un corps reposé et prêt à performer à chaque séance.'
    },
    {
      id: 8,
      title: 'Autonomie & Maintien des Résultats',
      description:
        'Apprenez à maintenir vos résultats et vos bonnes habitudes sur le long terme.',
      icon: '🏆',
      result: 'Indépendance totale et résultats durables même après le programme.'
    }
  ]
  </script>
  
  <style>
  /* Ajout optionnel pour glow sur hover */
  </style>
  