<template>
  <div class="w-full">
    <div class="w-full bg-contain bg-center bg-repeat h-auto overflow-hidden">
      <!-- Couche sombre + contenu -->
      <div class="inset-0 w-full py-12 bg-gradient-to-b from-black/80 to-[#0E2F51]/50 bg-[#0E2F51]/60">
        <div class="w-full lg:w-5/6 mx-auto font-poppins h-auto space-y-6 sm:px-4">
          <!-- TITRE -->
          <h1 data-aos="zoom-in" data-aos-duration="1000"
            class="uppercase text-2xl lg:text-4xl xl:text-5xl text-white text-center font-extrabold tracking-wider">
            Plans SND
          </h1>

          <!-- MINI SOUS-TEXTE STYLE “RÉSULTAT ATTENDU” -->
          <p data-aos="fade-up" data-aos-duration="1000"
            class="text-red-600 text-center font-semibold text-lg lg:text-xl">
            Résultat attendu : Perte de poids, gain de masse, équilibre
            alimentaire et suivi personnalisé
          </p>

          <!-- DESCRIPTION PREMIUM -->
          <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"
            class="text-gray-300 md:text-lg text-center">
            Le <strong>Plan SND</strong> est conçu pour vous accompagner dans
            votre transformation physique et nutritionnelle. Que vous souhaitiez
            perdre du poids, prendre du muscle ou simplement adopter un mode de
            vie plus sain, ce plan vous offre un suivi personnalisé et des
            stratégies adaptées à votre rythme et vos objectifs.
          </p>

          <p data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000"
            class="text-gray-300 md:text-lg text-center">
            Avec le <strong>Plan SND</strong>, vous bénéficiez d’un programme
            structuré et progressif, comprenant : suivi alimentaire détaillé,
            conseils nutritionnels adaptés, exercices guidés et accompagnement
            régulier pour garantir des résultats visibles et durables.
          </p>

          <!-- COMPONENT DES PLANS -->
          <div data-aos="fade-up" data-aos-delay="600">
            <PlansFbwaComponent />
          </div>
        </div>

        <div class="w-full h-12"></div>
        <div class="w-full">
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:w-5/6 mx-auto px-4">
            <!-- 🟦 PACK 03 MOIS -->
            <!-- 🟦 ACCOMPAGNEMENT 03 MOIS -->
            <div data-aos="zoom-in" data-aos-duration="1000"
              class="relative rounded-3xl overflow-hidden bg-gradient-to-b from-blue-900/70 to-[#001224] shadow-xl hover:shadow-blue-500/40 hover:scale-[1.03] transition-all duration-300">
              <!-- Badge -->
              <div
                class="absolute top-6 right-0 bg-blue-600/40 text-white px-6 py-2 text-sm font-bold rotate-12 -translate-y-4">
                Démarrage idéal
              </div>

              <!-- Header -->
              <div class="p-6 text-white text-center space-y-3">
                <h2 class="text-2xl font-extrabold uppercase">
                  Accompagnement de 03 mois
                </h2>
                <p class="text-sm text-gray-300">
                  🔥 Résultats visibles dès le 1er mois
                </p>

                <div class="flex flex-col justify-center items-center pt-2">
                  <p class="line-through text-red-400 font-bold text-lg">
                    120 000 FCFA
                  </p>
                  <p class="text-3xl font-extrabold">70 000 FCFA</p>
                </div>
              </div>

              <!-- Avantages -->
              <div class="px-6 pb-6 text-sm text-gray-200 space-y-2 font-poppins">
                <p>💻 Suivi 100% en ligne</p>
                <p>🏋🏾‍♂️ 02 cours de sport par semaine en live avec nos coach</p>
                <p>🎥 Vidéos d’exercices pré-enregistrés les autres jours</p>
                <p>🍽️ Plan alimentaire personnalisé avec suivi hebdomadaire</p>
                <p>🩺 Suivi médical inclus</p>
                <p>💬 Assistance WhatsApp 7j/7</p>
                <p>🔥 Résultats visibles dès le 1er mois</p>
              </div>

              <!-- Paiements -->
              <div class="bg-blue-900/40 px-6 py-4 text-sm text-white space-y-3">
                <p class="font-semibold uppercase text-center">
                  Modalités de paiement
                </p>

                <p>
                  ✔ Paiement en une fois pour vous libérer :
                  <strong>70 000 FCFA</strong>
                </p>

                <div class="space-y-1">
                  <p>✔ Paiement en 02 tranches :</p>
                  <p class="pl-4">• 37 000 FCFA maintenant</p>
                  <p class="pl-4">• 37 000 FCFA dans 14 jours</p>
                  <p class="pl-4 font-semibold">Total : 74 000 FCFA</p>
                </div>

                <div class="space-y-1">
                  <p>✔ Paiement en 03 tranches :</p>
                  <p class="pl-4">• 25 500 FCFA maintenant</p>
                  <p class="pl-4">• 25 500 FCFA dans 7 jours</p>
                  <p class="pl-4">• 25 500FCFA dans 21 jours</p>
                  <p class="pl-4 font-semibold">Total : 75 000frs</p>
                </div>
              </div>

              <!-- CTA -->
              <div class="p-6 flex justify-center">
                <button @click="redirectToWhatsapp({
                  nom: 'Accompagnement 03 mois',
                  duree: '3 mois',
                  prix: '70 000 FCFA',
                  modalite: 'Paiement 1x / 2x / 3x'
                })" class="bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/40">
                  Rejoindre le programme
                </button>
              </div>

            </div>

            <!-- 🟩 PACK 06 MOIS -->
            <!-- 🟩 ACCOMPAGNEMENT 06 MOIS -->
            <div data-aos="zoom-in" data-aos-duration="1000"
              class="relative rounded-3xl overflow-hidden bg-gradient-to-b from-emerald-900/70 to-[#001224] shadow-xl hover:shadow-emerald-500/40 hover:scale-[1.03] transition-all duration-300">
              <!-- Badge -->
              <div
                class="absolute top-6 right-0 bg-emerald-600/40 text-white px-6 py-2 text-sm font-bold rotate-12 translate-x-4 -translate-y-4 uppercase">
                Pack préféré
              </div>

              <!-- Header -->
              <div class="p-6 text-white text-center space-y-3">
                <h2 class="text-2xl font-extrabold uppercase">
                  L’accompagnement de 06 mois
                </h2>

                <p class="text-sm text-emerald-300 font-semibold">
                  🔥 Le meilleur rapport durée / résultats
                </p>

                <div class="flex flex-col justify-center items-center pt-2">
                  <p class="line-through text-red-400 font-bold text-lg">
                    200 000 FCFA
                  </p>
                  <p class="text-3xl font-extrabold">110 000 FCFA</p>
                </div>
              </div>

              <!-- Avantages -->
              <div class="px-6 pb-6 text-sm text-gray-200 space-y-2 font-poppins">
                <p>✅ Tous les avantages du pack 03 mois</p>
                <p>
                  🔁 Suivi + ajustements réguliers sur une plus longue période
                </p>
                <p>🔐 Accès à des séances exclusives</p>
                <p>
                  🎁 1 atelier spécial
                  <strong>alimentation et motivation</strong> offert
                </p>
                <p>🚀 Résultats plus profond et durable</p>
                <p>📈 Meilleure stabilité physique et mentale</p>
                <p>
                  Tu as le temps de brûler
                  <strong>la graisse au niveau des bras, des cuisses et du ventre qui
                    sont des parties qui menacent généralement les
                    femmes</strong>, raffermir ton corps, stabiliser ton poids et prendre de
                  nouvelles habitudes saines
                </p>
                <p>✅ Accès à une communauté de femmes engagées</p>

                <p class="text-emerald-400 font-bold pt-2">
                  🔥 C’est le pack préféré de +60% de nos membres, car il offre
                  le meilleur rapport durée/résultats !
                </p>
              </div>

              <!-- Paiements -->
              <div class="bg-emerald-900/40 px-6 py-4 text-sm text-white space-y-3">
                <p class="font-semibold uppercase text-center">
                  Modalités de paiement
                </p>

                <p>
                  ✔ Paiement en 01 fois :
                  <strong>110 000 FCFA</strong>
                </p>

                <div class="space-y-1">
                  <p>✔ Paiement en 02 tranches :</p>
                  <p class="pl-4">• 57 000 FCFA maintenant</p>
                  <p class="pl-4">• 57 000 FCFA dans 14 jours</p>
                  <p class="pl-4 font-semibold">Total : 114 000 FCFA</p>
                </div>

                <div class="space-y-1">
                  <p>✔ Paiement en 03 tranches :</p>
                  <p class="pl-4">• 40 000 FCFA maintenant</p>
                  <p class="pl-4">• 40 000 FCFA dans 7 jours</p>
                  <p class="pl-4">• 40 000 FCFA dans 21 jours</p>
                  <p class="pl-4 font-semibold">Total : 120 000 FCFA</p>
                </div>
              </div>

              <!-- CTA -->
              <div class="p-6 flex justify-center">
                <button @click="redirectToWhatsapp({
                  nom: 'Accompagnement 06 mois',
                  duree: '6 mois',
                  prix: '110 000 FCFA',
                  modalite: 'Paiement 1x / 2x / 3x'
                })"
                  class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold uppercase px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/40">
                  Rejoindre le programme
                </button>
              </div>

            </div>

            <!-- 🟪 PACK 12 MOIS -->
            <!-- 💎 ACCOMPAGNEMENT 12 MOIS -->
            <div data-aos="zoom-in" data-aos-duration="1000"
              class="relative rounded-3xl overflow-hidden bg-gradient-to-b from-yellow-900/70 to-[#001224] shadow-2xl hover:shadow-yellow-500/40 hover:scale-[1.03] transition-all duration-300">
              <!-- Badge VIP -->
              <div
                class="absolute top-6 right-0 bg-yellow-600 text-black px-6 py-2 text-sm font-bold rotate-12 translate-x-10 uppercase">
                VIP Transformation
              </div>

              <!-- Header -->
              <div class="p-6 text-white text-center space-y-3">
                <h2 class="text-2xl font-extrabold uppercase">
                  Accompagnement de 12 mois
                </h2>

                <p class="text-sm text-yellow-400 font-semibold">
                  💎 Transformation complète & durable
                </p>

                <div class="flex justify-center items-center gap-4 pt-2">
                  <p class="text-3xl font-extrabold">500 000 FCFA</p>
                </div>
              </div>

              <!-- Avantages -->
              <div class="px-6 pb-6 text-sm text-gray-200 space-y-2 font-poppins">
                <p>✅ Tous les avantages des packs 3 et 6 mois</p>
                <p>🏆 Transformation physique complète sur 1 an</p>
                <p>🔐 Coaching motivation mensuel</p>
                <p>🧠 Suivi bien-être et développement personnel</p>
                <p>
                  🎓 Accès à un mini programme
                  <strong>nutrition autonome</strong>
                </p>
                <p>⭐ Accompagnement ultra personnalisé</p>
                <p>🎉 Cadeaux exclusifs en fin de programme</p>
                <p>
                  🎁 Vous êtes prioritaire sur tous nos événements, promos et
                  cadeaux VIP
                </p>

                <p class="text-yellow-400 font-bold pt-2">
                  💎 C’est l’Accompagnement pour celles qui veulent
                  <strong>Vraiment tourner la page</strong> sur les kilos, la
                  fatigue, la maladie et l’auto-sabotage
                </p>
              </div>

              <!-- Paiements -->
              <div class="bg-yellow-900/40 px-6 py-4 text-sm text-white space-y-3">
                <p class="font-semibold uppercase text-center">
                  Modalités de paiement
                </p>

                <p>
                  ✔ Paiement en 01 fois :
                  <strong>500 000 FCFA</strong>
                </p>

                <div class="space-y-1">
                  <p>✔ Paiement en 02 tranches :</p>
                  <p class="pl-4">• 255000 FCFA maintenant</p>
                  <p class="pl-4">• 255000 FCFA dans 14 jours</p>
                  <p class="pl-4 font-semibold">Total : 510 000 FCFA</p>
                </div>

                <div class="space-y-1">
                  <p>✔ Paiement en 03 tranches :</p>
                  <p class="pl-4">• 172000 FCFA maintenant</p>
                  <p class="pl-4">• 172000 FCFA dans 7 jours</p>
                  <p class="pl-4">• 172000 FCFA dans 21 jours</p>
                  <p class="pl-4 font-semibold">Total : 516 000 FCFA</p>
                </div>
              </div>

              <!-- CTA -->
              <div class="p-6 flex justify-center">
                <button @click="redirectToWhatsapp({
                  nom: 'Accompagnement 12 mois – VIP Transformation',
                  duree: '12 mois',
                  prix: '500 000 FCFA',
                  modalite: 'Paiement 1x / 2x / 3x'
                })"
                  class="bg-yellow-600 hover:bg-yellow-700 text-black font-bold uppercase px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/40">
                  Rejoindre le programme
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <PlbwaComponent />

    <Footer />
  </div>
</template>
<script>
import Footer from "./FooterView.vue";

export default {
  components: {
    Footer
  },
  methods: {
    redirectToWhatsapp(programme) {
      const phoneNumber = "+237697185754"; // WhatsApp entreprise

      const message = `
Bonjour 👋,
Je souhaite rejoindre le programme suivant :

📌 Programme : ${programme.nom}
⏳ Durée : ${programme.duree}
💰 Prix : ${programme.prix}
💳 Modalité : ${programme.modalite}

🏷️ Source : https://dimfitnes.com/
🕒 Date : ${new Date().toLocaleDateString()}

Merci de me guider pour la suite 😊
      `;

      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(url, "_blank");
    }
  }
};
</script>

<style scoped>
</style>
