import Vue from 'vue'
import VueRouter from 'vue-router'
import Bubble from '@/views/Bubble'
import LoaderNeon from '@/views/LoaderNeon'
import Loader from '@/views/Loader'
import CustomCheckbox from '@/views/CustomCheckbox'
import Button from '@/views/Button'
import CupOfTea from '@/views/CupOfTea'
import SpringLoader from '@/views/SpringLoader'
import PersentLoader from '@/views/PersentLoader'
import FotoSlider from '@/views/FotoSlider'
// import OrbShape from '@/views/OrbShape'

Vue.use(VueRouter)

const routes = [
  {
    path: '/bubble',
    name: 'Bubble',
    component: Bubble
  },
  {
    path: '/loader-neon',
    name: 'LoaderNeon',
    component: LoaderNeon
  },
  {
    path: '/loader',
    name: 'Loader',
    component: Loader
  },
  {
    path: '/custom-checkbox',
    name: 'CustomCheckbox',
    component: CustomCheckbox
  },
  {
    path: '/button',
    name: 'Button',
    component: Button
  },
  {
    path: '/cup-of-tea',
    name: 'CupOfTea',
    component: CupOfTea
  },
  {
    path: '/spring-loader',
    name: 'SpringLoader',
    component: SpringLoader
  },
  {
    path: '/persent-loader',
    name: 'PersentLoader',
    component: PersentLoader
  },
  {
    path: '/foto-slider',
    name: 'FotoSlider',
    component: FotoSlider
  }
  // {
  //   path: '/orb-shape',
  //   name: 'OrbShape',
  //   component: OrbShape
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
