//路由器模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import category from '../pages/category/category.vue'
import main from '../pages/main/main.vue'
import usercenter from '../pages/usercenter/usercenter.vue'
import cart from '../pages/cart/cart.vue'
import classifiy from '../components/classifiy/classifiy.vue'
import brand from '../components/brand/brand.vue'
import search from '../components/search/search.vue'


Vue.use(VueRouter)


export default new VueRouter({
  routes:[
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/category',
      component: category,
      children:[
        {
          path: '/category',
          redirect: 'classifiy'
        },
        {
          path:'classifiy',
          component:classifiy
        },
        {
          path:'brand',
          component:brand
        },
        {
          path:'search',
          component:search
        },

      ]
    },
    {
      path: '/main',
      component: main
    },
    {
      path: '/usercenter',
      component: usercenter
    },
    {
      path: '/cart',
      component: cart
    },
  ]
})
