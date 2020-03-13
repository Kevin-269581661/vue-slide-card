import Vue from 'vue'
import VueRouter from 'vue-router'
import SlideCard from '../views/slideCard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: SlideCard
  }
]

const router = new VueRouter({
  routes
})

export default router
