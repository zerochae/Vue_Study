import { createWebHistory, createRouter } from "vue-router";
// import Admin from "./components/Admin.vue";

const routes = [
  {
    // path: "/admin",
    // component: Admin,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
