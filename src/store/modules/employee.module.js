import { EmployeeService } from "@/service/EmployeeService"

export default{
    namespaced:true,
    state:{
        employees: EmployeeService.getAllEmployees()
    },
    mutations:{
        updateSelected:function(state,payload){
            state.employees.map(emp=>{
                emp.id == payload.val ? emp.isSelected = !emp.isSelected :emp
            })
        }
    },
    actions:{
        updateselectedemp:function({commit},payload){
            return commit('updateSelected',payload)
        }
    }
}