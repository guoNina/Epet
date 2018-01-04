//路由器模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import category from '../pages/category/category.vue'
import main from '../pages/main/main.vue'
import UserCenter from '../pages/UserCenter/UserCenter.vue'
import cart from '../pages/cart/cart.vue'


Vue.use(VueRouter)


export default new VueRouter({
  routes:[
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/category',
      component: category
    },
    {
      path: '/main',
      component: main
    },
    {
      path: '/UserCenter',
      component: UserCenter
    },
    {
      path: '/cart',
      component: cart
    },
  ]
})
