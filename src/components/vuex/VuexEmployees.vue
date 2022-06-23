<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success">Employee</p>
                <p class="fst-italic">Lorem, toty ipsum dolor sit amet consectetur adipisicing elit. Alias distinctio quo earum, est autem, sapiente voluptates deserunt labore quas asperiores sunt voluptas hic? Voluptas aut assumenda illum itaque, nisi quasi.</p>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <ul class="list-group">
                    <li class="list-group-item list-group-item-success" v-for="employee of employeeState.employees" :key="employee.id">
                        <input type="checkbox" class="form-check-input" @change="updateSelected(employee.id)" :checked="employee.isSelected">
                        {{employee.name}}
                    </li>
                </ul>
            </div>
            <div class="col-md-6">
                <div v-for="employee of employeeState.employees" :key="employee.id">
                    <div class="card my-2" v-if="employee.isSelected">
                        <div class="card-body list-group-item-success">
                            <ul class="list-group">
                                <li class="list-group-item">Id: <span class="fw-bold">{{employee.id}}</span></li>
                                <li class="list-group-item">Name: <span class="fw-bold">{{employee.name}}</span></li>
                                <li class="list-group-item">Email: <span class="fw-bold">{{employee.email}}</span></li>
                                <li class="list-group-item">Phone: <span class="fw-bold">{{employee.phone}}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name:"EmployeesComponent",
    methods:{
        updateSelected:function(empId){
            this.$store.dispatch('employeeModule/updateselectedemp',{val:empId})
        }
    },
    computed:mapGetters({
        employeeState:'getEmployeeState'
    })

}
</script>

<style>

</style>