import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: 'AppLayout',
    redirect: '/pricing',
    component: () => import("@/layouts/AppLayout"),
    props: true,
    children: [
      {
        name: 'pricing',
        path: '/pricing',
        component: () => import('@/components/Pricing.vue'),
        props: true
      },
      {
        name: 'statistics',
        path: '/statistics',
        component: () => import('@/components/Statistics.vue'),
        props: true
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
