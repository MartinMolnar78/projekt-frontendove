import { createRouter, createWebHistory } from 'vue-router'
import Introduction from '../views/introduction.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'introduction',
      component: Introduction
    },
    {
      path: '/studio-a',
      name: 'studio-a',
      component: () => import('../views/studioa.vue'),
    },
    {
      path: '/gear',
      name: 'gear',
      component: () => import('../views/gear.vue'),
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: () => import('../views/pricing.vue'),
    },
    {
      path: '/pricing/:id',
      name: 'pricingDetails',
      props: true,
      component: () => import('../views/pricingdetails.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/contacts.vue'),
    },
   
  ]
})

export default router
