import { createRouter, createWebHistory } from 'vue-router';
import b2cMainComp from '@/components/b2c/b2cMainComp.vue';
import b2c2MainComp from '@/components/b2c_2/b2c2MainComp.vue'

const routes = [
  {
    path: '/',
    name: 'B2C',
    component: b2cMainComp,
  },
  {
    path: '/b2c2',
    name: 'B2C 2',
    component: b2c2MainComp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;