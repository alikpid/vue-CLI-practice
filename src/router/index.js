import { createRouter, createWebHistory } from 'vue-router'
import store from "@/store";
import HomeView from "@/views/HomeView";
import Login from '../components/Login.vue';
import SignUp from "@/components/SignUp";

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next('/');
};

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }
  next('/login');
};

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    // beforeEnter: ifAuthenticated,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    // beforeEnter: ifNotAuthenticated,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
