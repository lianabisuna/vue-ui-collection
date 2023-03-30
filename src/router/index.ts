import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "login" */ '../views/general/LoginView.vue'),
    },
    {
      path: '/',
      name: 'Button',
      component: () => import(/* webpackChunkName: "button" */ '../views/dashboard/button/ButtonView.vue'),
      meta: { layout: 'TheLayoutDashboard' },
    },
    {
      path: '/dropdown',
      name: 'Dropdown',
      component: () => import(/* webpackChunkName: "button" */ '../views/dashboard/dropdown/DropdownView.vue'),
      meta: { layout: 'TheLayoutDashboard' },
    },
    {
      path: '/form',
      name: 'Form',
      component: () => import(/* webpackChunkName: "form" */ '../views/dashboard/form/FormView.vue'),
      meta: { layout: 'TheLayoutDashboard' },
    },
    {
      path: '/input',
      name: 'Input',
      component: () => import(/* webpackChunkName: "input" */ '../views/dashboard/input/InputView.vue'),
      meta: { layout: 'TheLayoutDashboard' },
    },
    {
      path: '/modal',
      name: 'Modal',
      component: () => import(/* webpackChunkName: "modal" */ '../views/dashboard/modal/ModalView.vue'),
      meta: { layout: 'TheLayoutDashboard' },
    },
    {
      path: '/pagination',
      name: 'Pagination',
      component: () => import(/* webpackChunkName: "pagination" */ '../views/dashboard/pagination/PaginationView.vue'),
      meta: { layout: 'TheLayoutDashboard' },
    },
    {
      path: '/select',
      name: 'Select',
      component: () => import(/* webpackChunkName: "select" */ '../views/dashboard/select/SelectView.vue'),
      meta: { layout: 'TheLayoutDashboard' },
    },
    {
      path: '/table',
      name: 'Table',
      component: () => import(/* webpackChunkName: "table" */ '../views/dashboard/table/TableView.vue'),
      meta: { layout: 'TheLayoutDashboard' },
    },
    {
      path: '/tooltip',
      name: 'Tooltip',
      component: () => import(/* webpackChunkName: "tooltip" */ '../views/dashboard/tooltip/TooltipView.vue'),
      meta: { layout: 'TheLayoutDashboard' },
    },
    {
      path: '/upload',
      name: 'Upload',
      component: () => import(/* webpackChunkName: "upload" */ '../views/dashboard/upload/UploadView.vue'),
      meta: { layout: 'TheLayoutDashboard' },
    },
  ],
});

export default router;
