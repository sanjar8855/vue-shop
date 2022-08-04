import { createRouter, createWebHistory } from 'vue-router'
import ViewHome from '../views/ViewHome.vue'
import store from '../store'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: ViewHome,
    meta:{
      layout:'main',
      auth:true
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/ViewCart.vue'),
    meta:{
      layout:'main',
      auth:true
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/ViewAuth.vue'),
    meta:{
      layout:'auth',
      auth:false
    }
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: () => import('../views/ViewProduct.vue'),
    meta:{
      layout:'main',
      auth:true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass:'active',
  linkActiveClass:'active'
})

router.beforeEach((to,from,next)=>{
  const requireAuth = to.meta.auth
  if(requireAuth && store.getters['auth/isAuth']){
    next()
  }
  else if(requireAuth && !store.getters['auth/isAuth']){
    next('/auth?message=auth')
  }
  else{
    next()
  }
})


export default router
