import { createRouter, createWebHistory } from "vue-router";
import Register from "../components/Register.vue";
import Login from "../components/login.vue";
import Admin from "../components/Admin.vue";


const routes = [
  { path: "/", component: Register },
  { path: "/login", component: Login },
  { path: "/admin", component: Admin }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
