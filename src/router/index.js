import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '@/views/MainPage.vue';
import JobDetails from '@/views/JobDetails.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: 'home',
  },
  {
    path: '/home',
    name: 'home',
    component: MainPage,
  },
  {
    path: '/job/:id',
    name: 'job',
    component: JobDetails,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
