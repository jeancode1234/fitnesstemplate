import { createRouter, createWebHistory } from "vue-router";
import NavbarView from "@/views/NavbarView.vue";
import HomePageView from "@/views/HomePageView.vue";
import TypeWriteComponent from "@/components/TypeWriteComponent.vue";
import FormationFbwa from "@/views/FormationFbwa.vue";
import VignetteComponent from "@/components/VignetteComponent.vue";
import DiaporamaComponent from "@/components/DiaporamaComponent.vue";
import DiapoComponent from "@/components/DiapoComponent.vue";
import PromoComponent from "@/components/PromoComponent.vue";
import TestimonialComponent from "@/components/TestimonialComponent.vue";
import ModuleComponent from "@/components/ModuleComponent.vue";
import TestifyComponent from "@/components/TestifyComponent.vue";
import PlanFbwa from "@/views/PlanFbwa.vue";
import PlansFbwaComponent from "@/components/PlansFbwaComponent.vue";
import PlbwaComponent from "@/components/PlbwaComponent.vue";
import Footer from "@/views/FooterView.vue";
import TemoignagesView from "@/views/TemoignagesView.vue";
import ModulesView from "@/views/ModulesView.vue";
import AllmodulesComponent from "@/components/AllmodulesComponent.vue";
import AboutView from "@/views/AboutView.vue";

const routes = [
  {
    path: "/",
    component: NavbarView,
    children: [
      {
        path: "/",
        components: {
          default: NavbarView,
          one: HomePageView,
        },
      },
      {
        path: "/",
        components: {
          default: NavbarView,
          one: FormationFbwa,
        },
      },
      {
        path: "/plans-snd",
        components: {
          default: NavbarView,
          one: PlanFbwa,
        },
      },
      {
        path: "/temoignages",
        components: {
          default: NavbarView,
          one: TemoignagesView,
        },
      },
      {
        path: "/qui-suis-je",
        components: {
          default: NavbarView,
          one: AboutView,
        },
      },
      {
        path: "/modules",
        components: {
          default: NavbarView,
          one: ModulesView,
        },
      },
      {
        path: "/",
        components: {
          default: NavbarView,
          one: TypeWriteComponent,
        },
      },
    ],
  },
  {
    path: "/",
    name: "Vignette",
    component: VignetteComponent,
  },
  {
    path: "/",
    name: "DiaporamaComponent",
    component: DiaporamaComponent,
  },
  {
    path: "/",
    name: "DiaporamaComponent",
    component: DiapoComponent,
  },
  {
    path: "/",
    name: "PromoComponent",
    component: PromoComponent,
  },
  {
    path: "/",
    name: "TestimonialComponent",
    component: TestimonialComponent,
  },
  {
    path: "/",
    name: "TestifyComponent",
    component: TestifyComponent,
  },
  {
    path: "/",
    name: "ModuleComponent",
    component: ModuleComponent,
  },
  {
    path: "/",
    name: "AllmodulesComponent",
    component: AllmodulesComponent,
  },
  {
    path: "/",
    name: "PlansFbwaComponent",
    component: PlansFbwaComponent,
  },
  {
    path: "/",
    name: "PlbwaComponent",
    component: PlbwaComponent,
  },
  {
    path: "/",
    name: "Footer",
    component: Footer,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
