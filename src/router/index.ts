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
      name: 'Accordion',
      component: () => import(/* webpackChunkName: "accordion" */ '../views/dashboard/AccordionView.vue'),
      meta: { layout: 'Dashboard' },
    },
    {
      path: '/breadcrumb',
      name: 'Breadcrumb',
      component: () => import(/* webpackChunkName: "breadcrumb" */ '../views/dashboard/BreadcrumbView.vue'),
      meta: { layout: 'Dashboard' },
    },
    {
      path: '/button',
      name: 'Button',
      component: () => import(/* webpackChunkName: "button" */ '../views/dashboard/ButtonView.vue'),
      meta: { layout: 'Dashboard' },
    },
    {
      path: '/card',
      name: 'Card',
      component: () => import(/* webpackChunkName: "card" */ '../views/dashboard/CardView.vue'),
      meta: { layout: 'Dashboard' },
    },
    {
      path: '/checkbox',
      name: 'Checkbox',
      component: () => import(/* webpackChunkName: "checkbox" */ '../views/dashboard/CheckboxView.vue'),
      meta: { layout: 'Dashboard' },
    },
    {
      path: '/chip',
      name: 'Chip',
      component: () => import(/* webpackChunkName: "chip" */ '../views/dashboard/ChipView.vue'),
      meta: { layout: 'Dashboard' },
    },
    {
      path: '/datepicker',
      name: 'Datepicker',
      component: () => import(/* webpackChunkName: "datepicker" */ '../views/dashboard/DatepickerView.vue'),
      meta: { layout: 'Dashboard' },
    },
    {
      path: '/dropdown',
      name: 'Dropdown',
      component: () => import(/* webpackChunkName: "dropdown" */ '../views/dashboard/DropdownView.vue'),
      meta: { layout: 'Dashboard' },
    },
    {
      path: '/form',
      name: 'Form',
      component: () => import(/* webpackChunkName: "form" */ '../views/dashboard/FormView.vue'),
      meta: { layout: 'Dashboard' },
    },
    {
      path: '/input',
      name: 'Input',
      component: () => import(/* webpackChunkName: "input" */ '../views/dashboard/InputView.vue'),
      meta: { layout: 'Dashboard' },
    },
    {
      path: '/list-group',
      name: 'ListGroup',
      component: () => import(/* webpackChunkName: "list-group" */ '../views/dashboard/ListGroupView.vue'),
      meta: { layout: 'Dashboard' },
    },
    {
      path: '/modal',
      name: 'Modal',
      component: () => import(/* webpackChunkName: "modal" */ '../views/dashboard/ModalView.vue'),
      meta: { layout: 'Dashboard' },
    },
    {
      path: '/pagination',
      name: 'Pagination',
      component: () => import(/* webpackChunkName: "pagination" */ '../views/dashboard/PaginationView.vue'),
      meta: { layout: 'Dashboard' },
    },
    {
      path: '/progress',
      name: 'Progress',
      component: () => import(/* webpackChunkName: "progress" */ '../views/dashboard/ProgressView.vue'),
      meta: { layout: 'Dashboard' },
    },
    {
      path: '/radio',
      name: 'Radio',
      component: () => import(/* webpackChunkName: "radio" */ '../views/dashboard/RadioView.vue'),
      meta: { layout: 'Dashboard' },
    },
    {
      path: '/select',
      name: 'Select',
      component: () => import(/* webpackChunkName: "select" */ '../views/dashboard/SelectView.vue'),
      meta: { layout: 'Dashboard' },
    },
    {
      path: '/spinner',
      name: 'Spinner',
      component: () => import(/* webpackChunkName: "spinner" */ '../views/dashboard/SpinnerView.vue'),
      meta: { layout: 'Dashboard' },
    },
    {
      path: '/stepper',
      name: 'Stepper',
      component: () => import(/* webpackChunkName: "stepper" */ '../views/dashboard/StepperView.vue'),
      meta: { layout: 'Dashboard' },
    },
    {
      path: '/switch',
      name: 'Switch',
      component: () => import(/* webpackChunkName: "switch" */ '../views/dashboard/SwitchView.vue'),
      meta: { layout: 'Dashboard' },
    },
    {
      path: '/tab',
      name: 'Tab',
      component: () => import(/* webpackChunkName: "tab" */ '../views/dashboard/TabView.vue'),
      meta: { layout: 'Dashboard' },
    },
    {
      path: '/table',
      name: 'Table',
      component: () => import(/* webpackChunkName: "table" */ '../views/dashboard/TableView.vue'),
      meta: { layout: 'Dashboard' },
    },
    {
      path: '/textarea',
      name: 'Textarea',
      component: () => import(/* webpackChunkName: "textarea" */ '../views/dashboard/TextareaView.vue'),
      meta: { layout: 'Dashboard' },
    },
    {
      path: '/toast',
      name: 'Toast',
      component: () => import(/* webpackChunkName: "toast" */ '../views/dashboard/ToastView.vue'),
      meta: { layout: 'Dashboard' },
    },
    {
      path: '/tooltip',
      name: 'Tooltip',
      component: () => import(/* webpackChunkName: "tooltip" */ '../views/dashboard/TooltipView.vue'),
      meta: { layout: 'Dashboard' },
    },
  ],
});

export default router;
