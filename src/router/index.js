import { createRouter, createWebHistory } from 'vue-router';
import b2cMainComp from '@/components/b2c/b2cMainComp.vue';
import b2c2MainComp from '@/components/b2c_2/b2c2MainComp.vue'
import b2bMainComp from '@/components/b2b/b2bMainComp.vue';
import b2b2MainComp from '@/components/b2b2/b2b2MainComp.vue';
import B2FMainComp from '@/components/b2f/b2fMainComp.vue';

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
  {
    path: '/b2b',
    name: 'B2B',
    component: b2bMainComp,
  },
  {
    path: '/b2b2',
    name: 'B2B 2',
    component: b2b2MainComp,
  },
  {
    path: '/b2f',
    name: 'B2F',
    component: B2FMainComp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;