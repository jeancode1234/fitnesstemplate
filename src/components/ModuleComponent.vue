<template>
    <div>
      <div class="w-full h-auto bg-gradient-to-t from-[#001224] to-[#001224]/60">
        
        <!-- MODULES -->
        <div class="max-w-7xl mx-auto px-4 py-16">
          <div class="text-center mb-12">
            <h2
              data-aos="fade-up"
              class="text-3xl lg:text-4xl font-bold text-white font-poppins uppercase"
            >
              Modules du Programme SND
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="150"
              class="text-gray-400 mt-3 max-w-2xl mx-auto"
            >
              Un accompagnement structuré en nutrition, entraînement et suivi
              personnalisé pour des résultats durables.
            </p>
          </div>
  
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              v-for="module in modules"
              :key="module.id"
              data-aos="zoom-in"
              data-aos-duration="900"
              class="bg-[#0b1f35] rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div
                class="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#802525] to-black/70 text-white mb-6"
              >
                <component :is="module.icon" class="w-6 h-6" />
              </div>
  
              <h3 class="text-lg font-semibold text-white mb-3 font-poppins">
                {{ module.title }}
              </h3>
  
              <p class="text-sm text-gray-400 leading-relaxed">
                {{ module.description }}
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
            class="bg-gradient-to-b to-black/60 from-[#802525] font-poppins text-white font-bold py-3 px-6 rounded-tl-2xl rounded-br-2xl hover:scale-105 transition"
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
  import {
    ClipboardDocumentCheckIcon,
    HeartIcon,
    FireIcon,
    ChartBarIcon
  } from '@heroicons/vue/24/outline'
  
  const modules = [
    {
      id: 1,
      title: 'Bilan Personnalisé & Objectifs',
      description:
        'Analyse complète de votre profil afin de définir des objectifs clairs, réalistes et adaptés à votre corps.',
      icon: ClipboardDocumentCheckIcon
    },
    {
      id: 2,
      title: 'Nutrition & Plan Alimentaire',
      description:
        'Un plan alimentaire sur mesure pour améliorer vos habitudes et accélérer vos résultats.',
      icon: HeartIcon
    },
    {
      id: 3,
      title: 'Entraînement Adapté',
      description:
        'Des séances progressives conçues pour la perte de poids ou la prise de masse.',
      icon: FireIcon
    },
    {
      id: 4,
      title: 'Suivi & Résultats Durables',
      description:
        'Un accompagnement continu pour rester motivé et garantir des résultats visibles.',
      icon: ChartBarIcon
    }
  ]
  </script>
  