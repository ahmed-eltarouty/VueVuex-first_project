import { createStore } from 'vuex'
import counterModule from './modules/counter.module'
import employeeModule from './modules/employee.module'
import UserModule from './modules/User.module'



export default createStore({
  state: {
    counterState:counterModule.state,
    employeeState: employeeModule.state,
    usersState:UserModule.state
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    counterModule,
    employeeModule,
    UserModule
  },
  getters: {
    getCounterState:function(state){
      return state.counterState.counter
    },
    getEmployeeState:function(state){
      return state.employeeState
    },
    getUsers:function(state){
      return state.usersState
    }
  }
})
