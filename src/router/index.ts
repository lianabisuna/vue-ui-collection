import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '../views/general/LoginView.vue'),
    },
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '../views/dashboard/home/HomeView.vue'),
      meta: { layout: 'TheLayoutDashboard' },
    },
    {
      path: '/form',
      name: 'form',
      component: () => import(/* webpackChunkName: "form" */ '../views/dashboard/form/FormView.vue'),
      meta: { layout: 'TheLayoutDashboard' },
    }
  ],
});

export default router;
