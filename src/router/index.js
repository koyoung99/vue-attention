import { createRouter, createWebHistory } from 'vue-router'
import SettingMenuView from '../views/chart/SettingMenuView.vue'
import CoffeeView from '../views/chart/CoffeeView.vue'
import ChartMainView from '../views/chart/ChartMainView.vue'

const routes = [
  {
    path: '/setting',
    name: '/setting',
    component: SettingMenuView
  },{
    path:'/chart/coffeeview',
    name:'/chart/coffeeview',
    component: CoffeeView
  },{
    path:'/chart/main',
    name:'/chart/main',
    component: ChartMainView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
