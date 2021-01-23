import VueRouter from "vue-router";

import Brands from '@/views/Brands'
import AddNew from '@/views/AddNew'

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'brands',
      component: Brands
    },
    {
      path: '/add-new',
      name: 'add-new',
      component: AddNew
    }
  ]
})

export default router