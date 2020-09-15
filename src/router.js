import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: ()=>import('@/views/home/home.vue')
  },
  {
    path: '/details',
    name: 'details',
    component: ()=>import('@/views/details/details.vue')
  }
];
const router = new VueRouter(
  {
    routes,
    mode: "history",
    linkActiveClass: "active"

  }
);

export default router;
