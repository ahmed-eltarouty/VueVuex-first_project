import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CounterComponent from '../components/vuex/VuexCounter.vue'
import EmployeesComponent from '../components/vuex/VuexEmployees.vue'
import UserListComponent from '../components/vuex/VuexUserList.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/counter',
    name: 'counter',
    component: CounterComponent
  },
  {
    path: '/employee',
    name: 'employee',
    component: EmployeesComponent
  },
  {
    path: '/user-list',
    name: 'userList',
    component: UserListComponent
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
