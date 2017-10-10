import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Riding from '@/components/riding/riding'
import Me from '@/components/me/me'
import ToOffice from '@/components/home/homeChild/toOffice'
import ToBus from '@/components/home/homeChild/toBus'
import Map from '@/components/map/map'
import Result from '@/components/result/result'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/toOffice',
      component: Home
    },{
      path: '/home',
      component: Home,
      children:[{
      	path:'/',
      	component: ToOffice
      },{
      	path:'/toOffice',
      	component: ToOffice
      },{
      	path:'/toBus',
      	component: ToBus
      }]
    },{
      path: '/riding',
      component: Riding
    },{
      path: '/me',
      component: Me
    },{
      path: '/resultChild',
      component: Result
    },{
      path: '/mapChild',
      component: Map
    },{
      path: '*',
      component: Home
    }
  ]
})
