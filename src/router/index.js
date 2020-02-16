import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../page/home'
import Index from '../page/index'
import Product from '../page/product'
import Detail from  '../page/detail'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect:'index',
    children:[
      {
        path: 'index',
        name: 'index',
        component: Index,
      },
      {
        path: 'product/:id',
        name: 'product',
        component: Product,
      },
      {
        path: 'detail/:id',
        name: 'detail',
        component: Detail,
      }
    ]
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import( '../page/cart')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import( '../page/order'),
    children:[
      {
        path: 'list',
        name: 'order-list',
        component: () => import( '../page/orderList')
      },
      {
        path: 'confirm',
        name: 'order-confirm',
        component: () => import( '../page/orderConfirm')
      },
      {
        path: 'pay',
        name: 'order-pay',
        component: () => import( '../page/orderPay')
      },
      {
        path: 'alipay',
        name: 'ali-pay',
        component: () => import( '../page/alipay')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
