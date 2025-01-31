import { createRouter, createWebHistory } from "vue-router";
import UserDetails from "../components/UserDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../App.vue"),
  },
  {
    path: "/users/:id",
    name: "UserDetails",
    component: UserDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL || "/"),
  routes,
});

export default router;
