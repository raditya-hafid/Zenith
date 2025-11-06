import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/Pages/HomePage.vue";
import ProductPage from "./components/Pages/ProductPage.vue";
import CategoryPage from "./components/Pages/CategoryPage.vue";
import AboutPage from "./components/Pages/AboutPage.vue";
import TestimonialPage from "./components/Pages/TestimonialPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/product",
      name: "Product",
      component: ProductPage,
    },
    {
      path: "/category",
      name: "Category",
      component: CategoryPage,
    },
    {
      path: "/about",
      name: "About",
      component: AboutPage,
    },
    {
      path: "/testimonial",
      name: "Testimonial",
      component: TestimonialPage,
    },
  ],
});

createApp(App).use(router).mount("#app");
